---
permalink: /scholar/
title: "Google Scholar overview"
author_profile: false
layout: single
---
<link rel="stylesheet" href="{{ '/assets/css/scholar.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<section class="scholar-overview">
  <header class="scholar-header">
    <p class="scholar-kicker">Google Scholar overview</p>
    <h1>Yining Zhu, Ph.D.</h1>
    <p>Citation data saved from Google Scholar, updated {{ site.data.scholar_citations.last_updated | date: '%B %-d, %Y' }}.</p>
    <a class="scholar-original" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Open original Google Scholar profile <span aria-hidden="true">&#8599;</span></a>
  </header>
  <div class="scholar-metrics">
    <div><strong>{{ site.data.scholar_citations.total_citations }}</strong><span>Total profile citations</span></div>
    <div><strong>{{ site.data.scholar_citations.publications | size }}</strong><span>Tracked publications below</span></div>
  </div>
  <div class="scholar-publications">
    <h2>Selected publication citation counts</h2>
    <p>This overview uses the website’s saved data and includes tracked publications, not the complete live Google Scholar profile.</p>
    <div class="scholar-table-wrap" tabindex="0" role="region" aria-label="Publication citation counts">
      <table class="scholar-table">
        <thead><tr><th scope="col">Publication</th><th scope="col">Citations</th><th scope="col">Year</th></tr></thead>
        <tbody>
        {% assign publications = site.data.scholar_citations.publications | sort: 'citations' | reverse %}
        {% for publication in publications %}
          <tr><th scope="row">{{ publication.title | escape }}</th><td>{{ publication.citations }}</td><td>{{ publication.matched_year | default: '—' }}</td></tr>
        {% endfor %}
        </tbody>
      </table>
    </div>
    <a class="scholar-research-link" href="{{ '/research/#publications' | relative_url }}" data-page-preview="Full research profile">Explore the full research portfolio <span aria-hidden="true">+</span></a>
  </div>
</section>
