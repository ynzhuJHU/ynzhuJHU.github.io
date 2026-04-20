#!/usr/bin/env python3
"""Update selected publication citation counts from a Google Scholar profile.

Google Scholar does not provide an official public API, so this script keeps the
site resilient: it title-matches the public profile page and preserves existing
or fallback counts when Scholar is temporarily unavailable.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from difflib import SequenceMatcher
from html import unescape
from pathlib import Path
from typing import Any

import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_INPUT = ROOT / "_data" / "scholar_publications.json"
DEFAULT_OUTPUT = ROOT / "_data" / "scholar_citations.json"
SCHOLAR_URL = "https://scholar.google.com/citations"


@dataclass
class ScholarPublication:
    title: str
    citations: int
    year: str | None


def normalize_title(title: str) -> str:
    title = unescape(title).lower()
    title = title.replace("–", "-").replace("—", "-")
    title = re.sub(r"[^a-z0-9]+", " ", title)
    return re.sub(r"\s+", " ", title).strip()


def citation_word(count: int) -> str:
    return "citation" if count == 1 else "citations"


def fetch_profile_page(session: requests.Session, scholar_id: str, cstart: int, pagesize: int) -> str:
    response = session.get(
        SCHOLAR_URL,
        params={
            "user": scholar_id,
            "hl": "en",
            "cstart": cstart,
            "pagesize": pagesize,
        },
        timeout=30,
    )
    response.raise_for_status()
    text = response.text
    if "unusual traffic" in text.lower() or "recaptcha" in text.lower():
        raise RuntimeError("Google Scholar returned an anti-bot page")
    return text


def parse_total_citations(soup: BeautifulSoup) -> int | None:
    table = soup.select_one("#gsc_rsb_st")
    if not table:
        return None
    first_metric = table.select_one("tr:nth-of-type(1) td.gsc_rsb_std")
    if not first_metric:
        return None
    text = first_metric.get_text(strip=True).replace(",", "")
    return int(text) if text.isdigit() else None


def parse_publications(soup: BeautifulSoup) -> list[ScholarPublication]:
    publications: list[ScholarPublication] = []
    for row in soup.select("tr.gsc_a_tr"):
        title_el = row.select_one("a.gsc_a_at")
        if not title_el:
            continue
        cited_el = row.select_one(".gsc_a_ac")
        year_el = row.select_one(".gsc_a_y span")
        cited_text = cited_el.get_text(strip=True).replace(",", "") if cited_el else ""
        publications.append(
            ScholarPublication(
                title=title_el.get_text(" ", strip=True),
                citations=int(cited_text) if cited_text.isdigit() else 0,
                year=year_el.get_text(strip=True) if year_el else None,
            )
        )
    return publications


def fetch_scholar_publications(scholar_id: str, pagesize: int, max_pages: int) -> tuple[int | None, list[ScholarPublication]]:
    session = requests.Session()
    session.headers.update(
        {
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0 Safari/537.36"
            ),
            "Accept-Language": "en-US,en;q=0.9",
        }
    )

    total_citations: int | None = None
    publications: list[ScholarPublication] = []
    for page in range(max_pages):
        html = fetch_profile_page(session, scholar_id, page * pagesize, pagesize)
        soup = BeautifulSoup(html, "html.parser")
        if total_citations is None:
            total_citations = parse_total_citations(soup)
        page_publications = parse_publications(soup)
        publications.extend(page_publications)
        if len(page_publications) < pagesize:
            break
        time.sleep(2)
    return total_citations, publications


def find_match(
    target_title: str,
    scholar_publications: list[ScholarPublication],
    min_score: float,
) -> tuple[ScholarPublication | None, ScholarPublication | None, float]:
    normalized_target = normalize_title(target_title)
    best: ScholarPublication | None = None
    best_score = 0.0
    for publication in scholar_publications:
        score = SequenceMatcher(None, normalized_target, normalize_title(publication.title)).ratio()
        if score > best_score:
            best = publication
            best_score = score
    if best_score >= min_score:
        return best, best, best_score
    return None, best, best_score


def load_json(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {}
    with path.open(encoding="utf-8") as file:
        return json.load(file)


def previous_publications_by_id(existing_output: dict[str, Any]) -> dict[str, dict[str, Any]]:
    publications = existing_output.get("publications", [])
    return {publication.get("id"): publication for publication in publications if publication.get("id")}


def build_output(
    config: dict[str, Any],
    existing_output: dict[str, Any],
    scholar_total: int | None,
    scholar_publications: list[ScholarPublication],
    min_score: float,
) -> dict[str, Any]:
    previous = previous_publications_by_id(existing_output)
    output_publications: list[dict[str, Any]] = []

    for target in config["publications"]:
        matched, best_match, score = find_match(target["title"], scholar_publications, min_score)
        previous_record = previous.get(target["id"], {})
        fallback = target.get("fallback_citations", 0)

        if matched:
            record = {
                "id": target["id"],
                "title": target["title"],
                "citations": matched.citations,
                "citation_label": citation_word(matched.citations),
                "status": "matched",
                "matched_title": matched.title,
                "matched_year": matched.year,
                "match_score": round(score, 3),
            }
        else:
            preserved_count = previous_record.get("citations", fallback)
            record = {
                "id": target["id"],
                "title": target["title"],
                "citations": preserved_count,
                "citation_label": citation_word(int(preserved_count)),
                "status": "preserved" if previous_record else "fallback",
                "best_match_title": best_match.title if best_match else None,
                "best_match_year": best_match.year if best_match else None,
                "best_match_score": round(score, 3),
            }
        output_publications.append(record)

    return {
        "scholar_id": config["scholar_id"],
        "source": "google_scholar",
        "last_updated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "total_citations": scholar_total if scholar_total is not None else existing_output.get("total_citations", "1500+"),
        "publications": output_publications,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Update _data/scholar_citations.json from Google Scholar.")
    parser.add_argument("--input", type=Path, default=DEFAULT_INPUT)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--pagesize", type=int, default=100)
    parser.add_argument("--max-pages", type=int, default=3)
    parser.add_argument("--min-score", type=float, default=0.82)
    args = parser.parse_args()

    config = load_json(args.input)
    existing_output = load_json(args.output)

    try:
        total, scholar_publications = fetch_scholar_publications(
            config["scholar_id"],
            pagesize=args.pagesize,
            max_pages=args.max_pages,
        )
    except Exception as exc:
        if existing_output:
            print(f"Could not fetch Google Scholar data: {exc}", file=sys.stderr)
            print("Keeping existing citation data.", file=sys.stderr)
            return 0
        print(f"Could not fetch Google Scholar data and no existing citation data is available: {exc}", file=sys.stderr)
        return 1

    if not scholar_publications:
        if existing_output:
            print("No publications were found on the Google Scholar profile.", file=sys.stderr)
            print("Keeping existing citation data.", file=sys.stderr)
            return 0
        print("No publications were found on the Google Scholar profile and no existing citation data is available.", file=sys.stderr)
        return 1

    output = build_output(config, existing_output, total, scholar_publications, args.min_score)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8") as file:
        json.dump(output, file, ensure_ascii=False, indent=2)
        file.write("\n")

    matched = sum(1 for publication in output["publications"] if publication["status"] == "matched")
    print(f"Updated {matched}/{len(output['publications'])} selected publication citation counts.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
