---
permalink: /about/
title: "About Me"
author_profile: false
layout: single
---


<style>
.about-hero {
  position: relative;
  overflow: hidden;
  min-height: 310px;
  margin: 0 0 34px 0;
  border-radius: 8px;
  background: #102233;
  box-shadow: 0 18px 40px rgba(20, 32, 56, 0.14);
}

.about-hero img {
  width: 100%;
  min-height: 310px;
  max-height: 420px;
  object-fit: cover;
  object-position: center 42%;
  display: block;
  opacity: 0.78;
}

.about-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(12, 24, 38, 0.74), rgba(12, 24, 38, 0.35) 56%, rgba(12, 24, 38, 0.1));
}

.about-hero-content {
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 30px;
  z-index: 1;
  max-width: 720px;
  color: #fff;
}

.about-hero-kicker {
  display: inline-flex;
  margin-bottom: 12px;
  color: #91f2df;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.about-hero h1 {
  margin: 0 0 12px 0;
  color: #fff;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 2.05rem;
  font-weight: 750;
  line-height: 1.18;
  letter-spacing: 0;
}

.about-hero p {
  max-width: 660px;
  margin: 0;
  color: rgba(255,255,255,0.9);
  font-size: 1rem;
  line-height: 1.65;
}

.about-hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 18px;
}

.about-hero-tags span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 12px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  background: rgba(255,255,255,0.14);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 700;
}

.about-grid {
  display: grid;
  grid-template-columns: 360px minmax(0, 1fr);
  gap: 28px;
  align-items: start;
}

.about-main,
.about-side {
  min-width: 0;
}

.about-side {
  display: grid;
  gap: 20px;
  grid-column: 1;
  grid-row: 1;
}

.about-main {
  grid-column: 2;
  grid-row: 1;
}

.pub-header {
  scroll-margin-top: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid #d9d9d9;
}

.pub-header h2 {
  margin: 0;
  font-size: 1.65rem;
}

.scholar-pub-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: #1f57c3;
  color: #fff;
  font-size: 0.86rem;
  font-weight: 750;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(31, 87, 195, 0.18);
  white-space: nowrap;
}

.scholar-pub-pill:hover {
  color: #fff;
  background: #17439a;
}

.scholar-pub-count {
  font-variant-numeric: tabular-nums;
}

.paper-box {
  position: relative;
  display: flex;
  gap: 22px;
  align-items: center;
  background: #fbfcfe;
  border-radius: 8px;
  padding: 58px 22px 18px 22px;
  margin: 24px 0;
  box-shadow: 0 8px 20px rgba(20,32,56,0.06);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.25s ease;
}

.paper-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.12);
}

.paper-box-label {
  position: absolute;
  top: 12px;
  left: 24px;
  --journal-accent: #9a4fac;
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  width: calc(100% - 48px);
  padding: 7px 0 0 0;
  border-top: 4px solid var(--journal-accent);
  background: transparent;
  color: #080808;
  line-height: 1.05;
  white-space: nowrap;
}

.journal-name {
  display: inline;
  color: #080808;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.06rem;
  font-weight: 800;
  letter-spacing: 0;
}

.journal-year {
  display: inline;
  color: #1f57c3;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  vertical-align: baseline;
}

.journal-year::before {
  content: "/";
  margin-right: 8px;
  color: #9ca3af;
  font-weight: 700;
}

.journal-nature-chemical-engineering {
  --journal-accent: #00a88f;
}

.journal-nature-communications {
  --journal-accent: #e64b35;
}

.journal-nature-biomedical-engineering {
  --journal-accent: #9a4fac;
}

.journal-materials-today {
  --journal-accent: #2f80ed;
}

.journal-science-advances {
  --journal-accent: #f2b705;
}

.journal-biomaterials {
  --journal-accent: #7c3aed;
}

.journal-nano-letters {
  --journal-accent: #d97706;
}

.journal-journal-of-controlled-release {
  --journal-accent: #64748b;
}

.paper-box-image {
  flex: 0 0 36%;
  display: flex;
  align-items: center;
}

.paper-box-image img {
  width: 100%;
  border-radius: 10px;
  display: block;
  box-shadow: 0 6px 16px rgba(0,0,0,0.10);
}

.paper-box-text {
  flex: 1;
  max-width: none;
  font-size: 0.94rem;
  line-height: 1.5;
}

.paper-title {
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.12rem;
  font-weight: 750;
  line-height: 1.28;
  letter-spacing: 0;
  margin-bottom: 9px;
}

.paper-title a {
  color: #1f2937;
  text-decoration: none;
  transition: color 0.2s ease;
}

.paper-title a:hover {
  color: #2563eb;
}

.paper-authors {
  margin-bottom: 9px;
  color: #4b5563;
  font-size: 0.82rem;
  line-height: 1.45;
}

.paper-authors strong {
  color: #111827;
  font-weight: 750;
}

.paper-meta {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 8px 0 10px 0;
  flex-wrap: wrap;
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 11px;
  border-radius: 999px;
  background: #e9f1ff;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1f57c3;
  text-decoration: none;
  white-space: nowrap;
}

.meta-pill:hover {
  background: #dbe8ff;
}

.paper-box-text .meta-pill.news {
  height: auto;
  padding: 0;
  border-radius: 0;
  background: transparent;
  font-size: 0.82rem;
  font-weight: 600;
  color: #1f57c3;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.paper-box-text .meta-pill.news:hover {
  background: transparent;
  color: #17439a;
}

.paper-summary {
  margin: 0;
  padding: 10px 0 0 16px;
  border-top: 1px solid rgba(20, 32, 56, 0.08);
  color: #374151;
  font-size: 0.84rem;
  line-height: 1.45;
}

.paper-summary li {
  margin: 0;
  padding-left: 2px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-hero {
    min-height: 390px;
  }

  .about-hero img {
    min-height: 390px;
  }

  .about-hero-content {
    left: 20px;
    right: 20px;
    bottom: 24px;
  }

  .about-hero h1 {
    font-size: 1.52rem;
  }

  .pub-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .paper-box {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 22px;
  }

  .paper-box-image {
    width: 100%;
    flex: 0 0 auto;
  }

  .paper-box-text {
    max-width: 100%;
  }

  .paper-title {
    font-size: 1.05rem;
  }

  .paper-box-label {
    position: static;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 14px;
    white-space: normal;
  }

  .journal-name {
    font-size: 1rem;
    line-height: 1.08;
  }

  .journal-year::before {
    margin-right: 6px;
  }
}
</style>

<section class="about-hero">
  <img src="{{ '/images/jhu2.png' | relative_url }}" alt="Johns Hopkins campus">
  <div class="about-hero-content">
    <span class="about-hero-kicker">About Me</span>
    <h1>Engineering the Future of Medicine.</h1>
    <p>I work at the interface of biomaterials, gene delivery, and systems immunology to design next-generation genetic medicines and immune-engineering platforms.</p>
    <div class="about-hero-tags" aria-label="Research themes">
      <span>Biomaterials</span>
      <span>Gene Delivery</span>
      <span>Systems Immunology</span>
      <span>Spatial Multiomics</span>
    </div>
  </div>
</section>

<div class="about-grid">
<main class="about-main">

<div id="selected-publications" class="pub-header">
  <h2>Selected Publications</h2>
  <a class="scholar-pub-pill" href="https://scholar.google.com/citations?user=rp1pkakAAAAJ&hl" target="_blank">
    Google Scholar - <span class="scholar-pub-count" data-count="{{ site.data.scholar_citations.total_citations | default: 1500 }}">0</span> citations
  </a>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var counter = document.querySelector(".scholar-pub-count");
    if (!counter) return;

    var target = Number(String(counter.dataset.count || 0).replace(/\D/g, ""));
    var duration = 4000;
    var startTime = null;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !target) {
      counter.textContent = target;
      return;
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 2);
      counter.textContent = Math.min(target, Math.round(eased * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        counter.textContent = target;
      }
    }

    window.requestAnimationFrame(step);
  });
</script>

<div class="paper-box">
  <div class="paper-box-label journal-nature-chemical-engineering"><span class="journal-name">Nature Chemical Engineering</span><span class="journal-year">2026</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/crosslink.png' | relative_url }}" alt="Crosslinking LNP figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.nature.com/articles/s44286-026-00356-5" target="_blank">
        Crosslinking of lipid nanoparticles enhances the delivery efficiency and efficacy of mRNA vaccines
      </a>
    </div>
    <div class="paper-authors">
      Liu X*, <strong>Zhu Y*</strong>, Wei C, Lin J, Yu D, Kong J, Shao F, Ma J, Xu T, Lu X, Su Y, Goodier KD, Cheng L, Toh WH, Erb CJ, Li S, Wang TH, Mao HQ.
    </div>
    <div class="paper-meta">
      <a class="meta-pill news" href="https://inbt.jhu.edu/new-crosslinking-chemistry-boosts-stability-and-potency-of-mrna-lipid-nanoparticles/" target="_blank">News</a>
      {% include citation_pill.html id="crosslinking-lnp" fallback=1 %}
    </div>
    <ul class="paper-summary">
      <li>A reversible post-assembly crosslinking strategy enhances LNP-mediated mRNA delivery while preserving intracellular release, enabling improved endosomal escape, sustained in vivo expression, and robust immune and antitumor responses.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-label journal-materials-today"><span class="journal-name">Materials Today</span><span class="journal-year">2026</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/Imidazolium.jpg' | relative_url }}" alt="Imidazolium LNP figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.sciencedirect.com/science/article/pii/S1369702126001112" target="_blank">
        Imidazolium lipid-based nanoparticles enable effective mRNA delivery and cellular immune response
      </a>
    </div>
    <div class="paper-authors">
      Lin J*, <strong>Zhu Y*</strong>, Cheng L, Wei C, Kong J, Choy J, Lu X, Yu D, Ma J, Liu X, Su Y, Naganand S, Gueguen C, Huaulme Q, Urguia P, Mao HQ.
    </div>
    <div class="paper-meta">
      {% include citation_pill.html id="imidazolium-lnp" fallback=0 %}
    </div>
    <ul class="paper-summary">
      <li>Screening 1,944 formulations identified LipidBrick® LNPs that outperform the clinical benchmark ALC-0315, producing stronger antigen-specific T-cell responses while maintaining low cytotoxicity.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-label journal-nature-communications"><span class="journal-name">Nature Communications</span><span class="journal-year">2025</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/LiNx.jpg' | relative_url }}" alt="Nanofiber hydrogel composite figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.nature.com/articles/s41467-025-61299-8" target="_blank">
        An mRNA lipid nanoparticle-incorporated nanofiber-hydrogel composite for cancer immunotherapy
      </a>
    </div>
    <div class="paper-authors">
      <strong>Zhu Y*</strong>, Yao ZC*, Li S*, Ma J, Wei C, Yu D, Stelzel JL, Ni BYX, Miao Y, Van Batavia K, Lu X, Lin J, Dai Y, Kong J, Shen R, Goodier KD, Liu X, Cheng L, Vuong I, Howard GP, Livingston NK, Choy J, Schneck JP, Doloff JC, Reddy SK, Hickey JW, Mao HQ.
    </div>
    <div class="paper-meta">
      {% include citation_pill.html id="lnp-nanofiber-hydrogel" fallback=19 %}
    </div>
    <ul class="paper-summary">
      <li>An mRNA LNP-incorporated microgel matrix recruits immune cells, supports antigen expression and presentation, and elicits potent antitumor efficacy with a single administration.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-label journal-science-advances"><span class="journal-name">Science Advances</span><span class="journal-year">2025</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/sciadv.ady5579-f1.jpg' | relative_url }}" alt="Spleen-tropic LNP screening figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.science.org/doi/10.1126/sciadv.ady5579" target="_blank">
        A multistep platform identifies spleen-tropic lipid nanoparticles for in vivo T cell-targeted delivery of gene-editing proteins
      </a>
    </div>
    <div class="paper-authors">
      Lu X*, <strong>Zhu Y*</strong>, Wei C, Cheng L, Goodier KD, Kong J, Gao X, Yu D, Liu X, Long Y, Lin J, Ma J, Su Y, Mao HQ.
    </div>
    <div class="paper-meta">
      <a class="meta-pill news" href="https://inbt.jhu.edu/machine-learning-unlocks-next-generation-lipid-nanoparticles-for-safer-gene-editing/" target="_blank">News</a>
      {% include citation_pill.html id="spleen-tropic-lnps" fallback=2 %}
    </div>
    <ul class="paper-summary">
      <li>A multistep in vivo screening platform identified LNPs that preferentially target the spleen and deliver CRISPR-Cas9 ribonucleoproteins directly to T cells, enabling efficient gene editing without ex vivo manipulation.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-label journal-nature-biomedical-engineering"><span class="journal-name">Nature Biomedical Engineering</span><span class="journal-year">2024</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/FigureScreening.png' | relative_url }}" alt="Helper T cell LNP screening figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.nature.com/articles/s41551-023-01131-0" target="_blank">
        Screening for lipid nanoparticles that modulate the immune activity of helper T cells towards enhanced antitumour activity
      </a>
    </div>
    <div class="paper-authors">
      <strong>Zhu Y</strong>, Ma J, Shen R, Lin J, Li S, Lu X, Stelzel JL, Kong J, Cheng L, Vuong I, Yao ZC, Wei C, Korinetz NM, Toh WH, Choy J, Reynolds RA, Shears MJ, Cho WJ, Livingston NK, Howard GP, Hu Y, Tzeng SY, Zack DJ, Green JJ, Zheng L, Doloff JC, Schneck JP, Reddy SK, Murphy SC, Mao HQ.
    </div>
    <div class="paper-meta">
      <a class="meta-pill news" href="https://hub.jhu.edu/2023/12/14/lipid-nanoparticles-for-enhanced-anti-cancer-immunity/#new_tab" target="_blank">News</a>
      {% include citation_pill.html id="helper-t-cell-lnps" fallback=105 %}
    </div>
    <ul class="paper-summary">
      <li>An LNP screening strategy optimized helper lipid identity and component ratios to enhance dendritic cell delivery of tumour-antigen-encoding mRNA and improve immune activation toward stronger antitumour responses.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-label journal-nature-chemical-engineering"><span class="journal-name">Nature Chemical Engineering</span><span class="journal-year">2024</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/Viscosity.png' | relative_url }}" alt="Viscosity transfection figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.nature.com/articles/s44286-024-00116-3#citeas" target="_blank">
        Tuning extracellular fluid viscosity to enhance transfection efficiency
      </a>
    </div>
    <div class="paper-authors">
      Ma J*, <strong>Zhu Y*</strong>, Kong J, Yu D, Toh WH, Jain M, Ni Q, Ge Z, Lin J, Choy J, Cheng L, Konstantopoulos K, Konig M, Sun S, Mao HQ.
    </div>
    <div class="paper-meta">
      <a class="meta-pill news" href="https://engineering.jhu.edu/news/goldilocks-breakthrough-in-gene-therapy-development/" target="_blank">News</a>
      {% include citation_pill.html id="fluid-viscosity-transfection" fallback=9 %}
    </div>
    <ul class="paper-summary">
      <li>Matching cell culture viscosity to that of biological fluids substantially improves transfection efficiency across multiple gene delivery platforms and cell types.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-label journal-biomaterials"><span class="journal-name">Biomaterials</span><span class="journal-year">2024</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/Oral.png' | relative_url }}" alt="Intraduodenal delivery figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.sciencedirect.com/science/article/pii/S0142961224000930" target="_blank">
        Optimization of lipid nanoparticles for gene editing of the liver via intraduodenal delivery
      </a>
    </div>
    <div class="paper-authors">
      <strong>Zhu Y*</strong>, Cai SS*, Ma J, Cheng L, Wei C, Aggarwal A, Toh WH, Shin C, Shen R, Kong J, Mao SA, Lao YH, Leong KW, Mao HQ.
    </div>
    <div class="paper-meta">
      {% include citation_pill.html id="intraduodenal-liver-editing" fallback=15 %}
    </div>
    <ul class="paper-summary">
      <li>A multi-step screening strategy identified pDNA LNP formulations for intraduodenal delivery and non-viral gene editing in mouse liver, reducing PCSK9 and ANGPTL3 to lower LDL cholesterol.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-label journal-nature-communications"><span class="journal-name">Nature Communications</span><span class="journal-year">2022</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/Figuremultistep.png' | relative_url }}" alt="DNA LNP multistep screening figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.nature.com/articles/s41467-022-31993-y" target="_blank">
        Multi-step screening of DNA/lipid nanoparticles and co-delivery with siRNA to enhance and prolong gene expression
      </a>
    </div>
    <div class="paper-authors">
      <strong>Zhu Y</strong>, Shen R, Vuong I, Reynolds RA, Shears MJ, Yao ZC, Hu Y, Cho WJ, Kong J, Reddy SK, Murphy SC, Mao HQ.
    </div>
    <div class="paper-meta">
      <a class="meta-pill news" href="https://hub.jhu.edu/2022/08/23/gene-medicine-delivery-faster-affordable/#new_tab" target="_blank">News</a>
      {% include citation_pill.html id="dna-lnp-multistep-screening" fallback=149 %}
    </div>
    <ul class="paper-summary">
      <li>A multi-step platform identified optimized plasmid DNA LNPs for liver-targeted delivery and prolonged transgene expression, addressing a major gap in systematic pDNA LNP design.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-label journal-nano-letters"><span class="journal-name">Nano Letters</span><span class="journal-year">2021</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/FigureSize.jpeg' | relative_url }}" alt="Lentiviral vector DNA particle figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8283758/" target="_blank">
        Size-controlled and shelf-stable DNA particles for production of lentiviral vectors
      </a>
    </div>
    <div class="paper-authors">
      Hu Y*, <strong>Zhu Y*</strong>, Sutherland ND, Wilson DR, Pang M, Liu E, Staub JR, Berlinicke CA, Zack DJ, Green JJ, Reddy SK, Mao HQ.
    </div>
    <div class="paper-meta">
      <a class="meta-pill news" href="https://hub.jhu.edu/2021/07/15/projects-creates-better-viral-vectors-for-gene-therapy/" target="_blank">News</a>
      {% include citation_pill.html id="lentiviral-dna-particles" fallback=31 %}
    </div>
    <ul class="paper-summary">
      <li>Size-controlled pDNA/PEI particles improved lentiviral vector production, with an optimal particle size of 400-500 nm linked to enhanced cellular uptake and transfection efficiency.</li>
    </ul>
  </div>
</div>

<div class="paper-box">
  <div class="paper-box-label journal-journal-of-controlled-release"><span class="journal-name">Journal of Controlled Release</span><span class="journal-year">2020</span></div>
  <div class="paper-box-image">
    <img src="{{ '/images/JCR.jpg' | relative_url }}" alt="Melanoma photoimmunotherapy figure">
  </div>
  <div class="paper-box-text">
    <div class="paper-title">
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168365920301978" target="_blank">
        Albumin-biomineralized nanoparticles to synergize phototherapy and immunotherapy against melanoma
      </a>
    </div>
    <div class="paper-authors">
      <strong>Zhu Y*</strong>, Xue J, Chen W, Bai S, Zheng T, He C, Guo Z, Jiang M, Du G, Sun X.
    </div>
    <div class="paper-meta">
      {% include citation_pill.html id="albumin-biomineralized-melanoma" fallback=99 %}
    </div>
    <ul class="paper-summary">
      <li>Albumin-biomineralized nanoparticles co-delivering a photosensitizer and immunoadjuvant were engineered to couple tumor ablation with immune activation for melanoma therapy.</li>
    </ul>
  </div>
</div>


</main>
<aside class="about-side">

<style>
.about-lower {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 0;
  color: #172033;
}

.about-section {
  scroll-margin-top: 90px;
  margin: 0;
  padding: 18px;
  border: 1px solid rgba(20, 32, 56, 0.09);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(20, 32, 56, 0.055);
}

.about-training-section {
  order: 1;
}

.about-education-section {
  order: 2;
}

.about-honors-section {
  order: 3;
}

.about-talks-section {
  order: 4;
}

.about-section-heading {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 16px 0;
  padding: 0;
  border-left: 0;
  border-radius: 0;
  background: transparent;
}

.about-section h2 {
  margin: 0;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.22rem;
  font-weight: 650;
  line-height: 1.2;
}

.about-section-kicker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border: 3px solid #dbe8ff;
  border-radius: 50%;
  background: #1f57c3;
  box-shadow: 0 0 0 4px rgba(31, 87, 195, 0.08);
}

.awards-showcase {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: start;
}

.award-grid {
  display: grid;
  gap: 12px;
}

.award-card,
.appointment-card,
.education-card,
.talk-card {
  position: relative;
  padding: 12px 14px;
  border: 1px solid rgba(20, 32, 56, 0.09);
  border-left: 4px solid #1f57c3;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(20, 32, 56, 0.055);
}

.award-card {
  display: grid;
  grid-template-columns: 68px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
}

.award-date,
.appointment-date,
.education-date,
.talk-year {
  color: #1f57c3;
  font-size: 0.76rem;
  font-weight: 750;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.award-title,
.appointment-title,
.education-title {
  display: block;
  color: #111827;
  font-size: 0.9rem;
  font-weight: 750;
  line-height: 1.35;
}

.award-org,
.appointment-place,
.education-place {
  display: block;
  margin-top: 3px;
  color: #5d6675;
  font-size: 0.8rem;
  line-height: 1.4;
}

.award-link {
  display: inline-flex;
  align-items: center;
  grid-column: 2;
  justify-self: start;
  min-height: 28px;
  padding: 0 11px;
  border-radius: 999px;
  background: #eef5ff;
  color: #1f57c3;
  font-size: 0.82rem;
  font-weight: 750;
  text-decoration: none;
}

.award-link:hover {
  background: #dbe8ff;
  color: #17439a;
}

.award-media {
  display: none;
}

.award-media img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 14px 32px rgba(20, 32, 56, 0.16);
}

.appointment-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.appointment-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 78px;
  gap: 12px;
  align-items: center;
}

.appointment-card:nth-child(2) {
  border-left-color: #0f766e;
}

.appointment-logo {
  display: flex;
  justify-content: flex-end;
}

.appointment-logo img {
  max-width: 78px;
  max-height: 46px;
  object-fit: contain;
}

.education-timeline {
  display: grid;
  gap: 12px;
}

.education-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 78px;
  gap: 12px;
  align-items: center;
}

.education-card:nth-child(2) {
  border-left-color: #0f766e;
}

.education-card:nth-child(3) {
  border-left-color: #9a3412;
}

.education-logo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.education-logo img {
  max-width: 78px;
  max-height: 46px;
  object-fit: contain;
}

.talk-grid {
  display: grid;
  gap: 12px;
}

.talk-card {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 12px;
  border-left-color: #0f766e;
  font-size: 0.84rem;
  line-height: 1.45;
}

.talk-card a {
  display: block;
  color: #1f57c3;
  font-weight: 750;
  text-align: justify;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.talk-card em {
  display: block;
  margin-top: 3px;
  color: #293241;
  text-align: justify;
}

@media (max-width: 900px) {
  .about-main,
  .about-side {
    grid-column: auto;
    grid-row: auto;
  }

  .awards-showcase,
  .appointment-grid,
  .award-card,
  .appointment-card,
  .education-card,
  .talk-card {
    grid-template-columns: 1fr;
  }

  .appointment-logo,
  .education-logo {
    justify-content: flex-start;
  }

  .award-link {
    grid-column: auto;
  }
}
</style>

<div class="about-lower">

<section id="honors-awards" class="about-section about-honors-section">
  <div class="about-section-heading">
    <span class="about-section-kicker" aria-hidden="true"></span>
    <h2>Honors and Awards</h2>
  </div>

  <div class="awards-showcase">
    <div class="award-grid">
      <div class="award-card">
        <span class="award-date">2026.03</span>
        <div>
          <span class="award-title">Schmidt Science Fellow</span>
          <span class="award-org">Schmidt Science Foundation</span>
        </div>
        <a class="award-link" href="https://www.forbes.com/sites/michaeltnietzel/2026/03/25/the-2026-cohort-of-schmidt-science-fellows-is-announced/" target="_blank">News</a>
      </div>

      <div class="award-card">
        <span class="award-date">2025.12</span>
        <div>
          <span class="award-title">Forbes 30 Under 30 in Science</span>
          <span class="award-org">Forbes Media</span>
        </div>
        <a class="award-link" href="https://www.forbes.com/profile/yining-zhu/?list=30under30-science/" target="_blank">News</a>
      </div>

      <div class="award-card">
        <span class="award-date">2025.09</span>
        <div>
          <span class="award-title">Siebel Scholar Award</span>
          <span class="award-org">Siebel Foundation</span>
        </div>
        <a class="award-link" href="https://hub.jhu.edu/2025/10/13/johns-hopkins-siebel-scholars-2026/" target="_blank">News</a>
      </div>

      <div class="award-card">
        <span class="award-date">2025.04</span>
        <div>
          <span class="award-title">Student Travel Achievement Recognition Award</span>
          <span class="award-org">Society for Biomaterials</span>
        </div>
      </div>

      <div class="award-card">
        <span class="award-date">2024.05</span>
        <div>
          <span class="award-title">Meritorious Abstract Travel Award</span>
          <span class="award-org">American Society of Gene & Cell Therapy</span>
        </div>
      </div>

      <div class="award-card">
        <span class="award-date">2024.04</span>
        <div>
          <span class="award-title">The Hans J. Prochaska Research Award</span>
          <span class="award-org">Johns Hopkins University</span>
        </div>
        <a class="award-link" href="https://hopkinsyidp.org/people/yining-zhu/" target="_blank">News</a>
      </div>

      <div class="award-card">
        <span class="award-date">2023.04</span>
        <div>
          <span class="award-title">Student Travel Achievement Recognition Award</span>
          <span class="award-org">Society for Biomaterials</span>
        </div>
      </div>
    </div>

    <div class="award-media">
      <img src="/images/schmidt_science_fellows.png" alt="Schmidt Science Fellows">
      <img src="/images/Forbes Science.jpg" alt="Forbes 30 Under 30 Science">
    </div>
  </div>
</section>
<section id="professional-training" class="about-section about-training-section">
  <div class="about-section-heading">
    <span class="about-section-kicker" aria-hidden="true"></span>
    <h2>Professional Training</h2>
  </div>

  <div class="appointment-grid">
    <div class="appointment-card">
      <div>
        <span class="appointment-date">2026.02 - current</span>
        <span class="appointment-title">Postdoctoral Fellow</span>
        <span class="appointment-place">Duke University</span>
      </div>
      <div class="appointment-logo">
        <img src="/images/duke.png" alt="Duke University logo">
      </div>
    </div>

    <div class="appointment-card">
      <div>
        <span class="appointment-date">2025.10 - 2026.01</span>
        <span class="appointment-title">Postdoctoral Associate</span>
        <span class="appointment-place">Johns Hopkins University</span>
      </div>
      <div class="appointment-logo">
        <img src="/images/JHU engineering logo1.png" alt="Johns Hopkins University Engineering logo">
      </div>
    </div>
  </div>
</section>
<section id="education" class="about-section about-education-section">
  <div class="about-section-heading">
    <span class="about-section-kicker" aria-hidden="true"></span>
    <h2>Education</h2>
  </div>

  <div class="education-timeline">
    <div class="education-card">
      <div>
        <span class="education-date">2025</span>
        <span class="education-title">Ph.D., Biomedical Engineering</span>
        <span class="education-place">Johns Hopkins University</span>
      </div>
      <div class="education-logo">
        <img src="/images/JHMI.png" alt="Johns Hopkins University">
      </div>
    </div>

    <div class="education-card">
      <div>
        <span class="education-date">2021</span>
        <span class="education-title">M.S.E., Biomedical Engineering</span>
        <span class="education-place">Johns Hopkins University</span>
      </div>
      <div class="education-logo">
        <img src="/images/JHMI.png" alt="Johns Hopkins University">
      </div>
    </div>

    <div class="education-card">
      <div>
        <span class="education-date">2019</span>
        <span class="education-title">B.S., Pharmacy</span>
        <span class="education-place">Sichuan University</span>
      </div>
      <div class="education-logo">
        <img src="/images/SCU.png" alt="Sichuan University">
      </div>
    </div>
  </div>
</section>
<section id="talks" class="about-section about-talks-section">
  <div class="about-section-heading">
    <span class="about-section-kicker" aria-hidden="true"></span>
    <h2>Talks</h2>
  </div>

  <div class="talk-grid">
    <div class="talk-card">
      <span class="talk-year">2026</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition.</a> <em>Age-related Heterogeneity of Systemic Gene Expression Impairs Immune Responses to mRNA Lipid Nanoparticle Cancer Vaccines.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2025</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition.</a> <em>Enhancing Cell Transfection Efficiency via Modulation of Extracellular Fluid Viscosity.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2025</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition.</a> <em>mRNA lipid nanoparticle-incorporated nanofiber-hydrogel composite generates a local immunostimulatory niche for cancer immunotherapy.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2024</span>
      <div><a href="https://www.bmes.org/bmes2024" target="_blank">Biomedical Engineering Society Annual Meeting.</a> <em>Engineering A Biomaterials-based Lymphoid Niche for mRNA Lipid Nanoparticle Cancer Vaccines.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2024</span>
      <div><a href="https://www.asgct.org/" target="_blank">American Society of Gene & Cell Therapy Annual Meeting.</a> <em>A mRNA lipid nanoparticle incorporated nanofiber-hydrogel composite generates a local immunostimulatory niche for cancer immunotherapy.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2023</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition.</a> <em>Lipid Nanoparticle Composition Shapes Immune Response to mRNA Vaccine and Potency of Anticancer Immunity.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2022</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition.</a> <em>Multi-step Screening and Composition Optimization of Lipid Nanoparticles for Liver-targeted Plasmid DNA Delivery.</em></div>
    </div>
  </div>
</section>

</div>
</aside>
</div>
