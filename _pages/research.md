---
permalink: /research/
title: "Research"
author_profile: false
layout: single
---

<link rel="stylesheet" href="{{ '/assets/css/research.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<div class="research-page research-portfolio">

<section class="research-hero">
  <img src="{{ '/images/journals.png' | relative_url }}" alt="Journal covers featuring research publications">
  <div class="research-hero-content">
    <span class="research-eyebrow">Research Portfolio</span>
    <h1>Engineering genetic medicines and spatial multiomics for immune discovery</h1>
    <p>My work spans lipid nanoparticles, hydrogel composites, gene editing, immune modulation, and spatial multiomics, connecting translational biomaterials with systems-level studies of tissue immunity.</p>
  </div>
</section>

<nav class="research-section-nav" aria-label="Research page sections">
  <a href="#research-directions">Research directions</a><a href="#publications">Publications</a><a href="#patents">Patents</a><a href="#academic-services">Academic services</a><a href="#research-moments">Conference moments</a>
</nav>

<div class="research-stats">
  <a class="research-stat" href="#lead-author-publications">
    <strong class="count-up" data-count="14">14</strong>
    <span>lead-author publications</span>
  </a>
  <a class="research-stat" href="#collaborative-publications">
    <strong class="count-up" data-count="24">24</strong>
    <span>collaborative publications</span>
  </a>
  <a class="research-stat" href="#review-articles">
    <strong class="count-up" data-count="3">3</strong>
    <span>review articles</span>
  </a>
  <a class="research-stat" href="#patents">
    <strong class="count-up" data-count="10">10</strong>
    <span>patent filings</span>
  </a>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var counters = document.querySelectorAll(".count-up");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function animateCounter(counter) {
      var target = Number(counter.dataset.count || 0);
      var duration = 2000;
      var startTime = null;

      if (reduceMotion) {
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
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.45 });

      counters.forEach(function (counter) {
        observer.observe(counter);
      });
    } else {
      counters.forEach(animateCounter);
    }
  });
</script>



<section id="research-directions" class="research-directions">
<header class="research-heading"><div><p class="research-kicker">From materials to immune discovery</p><h2>Connected research directions.</h2></div></header>
<div class="research-explorer" data-research-explorer><div class="research-explorer-options">
<details class="research-topic" open data-image="/images/FigureScreening.png" data-caption="Lipid nanoparticle screening for enhanced antitumor immunity">
  <summary><span><small>01</small>Lipid nanoparticles</span><span class="research-chevron" aria-hidden="true"></span></summary>
  <div class="research-topic-copy"><p>I design and screen lipid nanoparticles to connect formulation chemistry with gene expression, immune activation, and tissue-specific delivery.</p><a href="#study-helper-t-cell-lnps">Explore a related study <span aria-hidden="true">&#8594;</span></a></div>
  <figure class="research-topic-inline"><img src="/images/FigureScreening.png" alt="Lipid nanoparticle screening for enhanced antitumor immunity" loading="lazy" decoding="async"><figcaption>Lipid nanoparticle screening for enhanced antitumor immunity</figcaption></figure>
</details>
<details class="research-topic"  data-image="/images/LiNx.jpg" data-caption="Nanofiber-hydrogel composites for cancer immunotherapy">
  <summary><span><small>02</small>Biomaterial immune niches</span><span class="research-chevron" aria-hidden="true"></span></summary>
  <div class="research-topic-copy"><p>My work combines mRNA lipid nanoparticles with nanofiber-hydrogel composites to recruit immune cells and create a local immunostimulatory niche for cancer immunotherapy.</p><a href="#study-lnp-nanofiber-hydrogel">Explore a related study <span aria-hidden="true">&#8594;</span></a></div>
  <figure class="research-topic-inline"><img src="/images/LiNx.jpg" alt="Nanofiber-hydrogel composites for cancer immunotherapy" loading="lazy" decoding="async"><figcaption>Nanofiber-hydrogel composites for cancer immunotherapy</figcaption></figure>
</details>
<details class="research-topic"  data-image="/images/NanoSTAMP.png" data-caption="NanoSTAMP spatial profiling of pooled lipid nanoparticle delivery">
  <summary><span><small>03</small>Spatial multiomics</span><span class="research-chevron" aria-hidden="true"></span></summary>
  <div class="research-topic-copy"><p>NanoSTAMP combines barcoded LNP screening with spatial-omics readouts to connect formulation identity with cell-type-specific uptake, cargo expression, and neighboring tissue responses.</p><a href="#study-nanostamp">Explore a related study <span aria-hidden="true">&#8594;</span></a></div>
  <figure class="research-topic-inline"><img src="/images/NanoSTAMP.png" alt="NanoSTAMP spatial profiling of pooled lipid nanoparticle delivery" loading="lazy" decoding="async"><figcaption>NanoSTAMP spatial profiling of pooled lipid nanoparticle delivery</figcaption></figure>
</details>
</div><figure class="research-explorer-stage" aria-live="polite" aria-atomic="true"><img src="/images/FigureScreening.png" alt="Lipid nanoparticle screening for enhanced antitumor immunity" loading="lazy" decoding="async"><figcaption>Lipid nanoparticle screening for enhanced antitumor immunity</figcaption></figure></div></section>

<section id="publications" class="research-section publication-section" markdown="1">

<header class="research-heading"><div><p class="research-kicker">Research library</p><h2>Publications.</h2></div><a class="research-scholar-link" href="https://scholar.google.com/citations?user=rp1pkakAAAAJ&hl=en" target="_blank" rel="noopener"><strong>Google Scholar <span aria-hidden="true">&#8599;</span></strong><span>{{ site.data.scholar_citations.total_citations | default: 1500 }} citations</span></a></header>

<p class="research-library-intro">Up-to-date publication links and citation counts.</p>

<p class="research-author-key">Lead-author cards use * for equal contribution and # for corresponding author. Collaborative publications use † for equal contribution and * for corresponding author.</p>


<nav class="research-library-nav" aria-label="Publication categories"><a href="#lead-author-publications">Lead-author <span>14</span></a><a href="#collaborative-publications">Collaborative <span>24</span></a><a href="#review-articles">Reviews <span>3</span></a></nav>
<h3 id="lead-author-publications" class="research-group-title">Lead-author publications <span>14</span></h3>

<div class="lead-publication-cards">
  <div class="paper-box" id="study-nanostamp">
    <div class="paper-box-label journal-biorxiv"><span class="journal-name">bioRxiv</span><span class="journal-year">2026</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/NanoSTAMP.png' | relative_url }}" alt="NanoSTAMP spatial profiling workflow for pooled barcoded mRNA lipid nanoparticles">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.biorxiv.org/content/10.64898/2026.08.25.746710v1" target="_blank" rel="noopener">
          Spatial profiling of pooled mRNA-LNP delivery in vivo with NanoSTAMP
        </a>
      </div>
      <div class="paper-authors">
        <strong>Zhu Y*</strong>, Miao Y*, Anderson IJ, Li Y, Aghnatios B, No J, Ma J, Yu D, Wei C, Lu X, Wang J, van de Klashorst J, Mao HQ, Hickey JW#.
      </div>
      <div class="paper-meta">
        {% include citation_pill.html id="nanostamp" fallback=0 %}
        <a class="meta-pill news" href="https://doi.org/10.64898/2026.08.25.746710" target="_blank" rel="noopener">Preprint</a>
      </div>
      <ul class="paper-summary">
        <li>NanoSTAMP combines barcoded pooled LNP screening with spatial-omics readouts to connect formulation identity with cell-type-specific uptake, cargo expression, and neighboring multicellular tissue responses in vivo.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-age-adaptive-mrna-vaccines">
    <div class="paper-box-label journal-biorxiv"><span class="journal-name">bioRxiv</span><span class="journal-year">2026</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/Age.png' | relative_url }}?v=532050f2" alt="Age-adaptive mRNA lipid nanoparticle cancer vaccine study overview">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.biorxiv.org/content/10.64898/2026.04.11.717910v1.abstract" target="_blank" rel="noopener">
          Engineering age-adaptive mRNA lipid nanoparticle cancer vaccines via reprogramming systemic gene expression
        </a>
      </div>
      <div class="paper-authors">
        <strong>Zhu Y*</strong>, Wei C*, Ma J, Yu D, Wang J, Lu X, Goodier KD, Lin J, Liu X, Su Y, Jiang Z, Greco AH, Cheng L, Toh WH, Miao Y, Schneck JP, Doloff JC, Hickey JW, Mao HQ.
      </div>
      <div class="paper-meta">
        {% include citation_pill.html id="age-adaptive-mrna-vaccines" fallback=0 %}
        <a class="meta-pill news" href="https://doi.org/10.64898/2026.04.11.717910" target="_blank" rel="noopener">Preprint</a>
      </div>
      <ul class="paper-summary">
        <li>Age-related loss of systemic mRNA expression limits vaccine-induced T cell immunity, while an optimized LNP restores distal antigen expression and therapeutic antitumor efficacy in aged mice.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-tissue-specific-t-cell-immunity">
    <div class="paper-box-label journal-nature-biomedical-engineering"><span class="journal-name">Nature Biomedical Engineering</span><span class="journal-year">2026</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/NBME 20260613.png' | relative_url }}" alt="Systemic trafficking and tissue-specific T cell immunity figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.nature.com/articles/s41551-026-01706-7" target="_blank" rel="noopener">
          Lipid nanoparticle composition directs systemic trafficking and tissue-specific T cell immunity after intramuscular injection
        </a>
      </div>
      <div class="paper-authors">
        Wei C*, <strong>Zhu Y*#</strong>, Lu X, Goodier KD, Yu D, Liu X, Choy J, Téllez Calderón A, Su Y, Ma J, Lin J, Li S, Schneck JP, Murphy SC#, Mao HQ#.
      </div>
      <div class="paper-meta">
        {% include citation_pill.html id="tissue-specific-t-cell-immunity" fallback=0 %}
        <a class="meta-pill news" href="https://inbt.jhu.edu/new-research-shows-lipid-nanoparticle-design-influences-where-vaccines-travel-and-where-immune-protection-is-built/" target="_blank" rel="noopener">News</a>
      </div>
      <ul class="paper-summary">
        <li>Lipid nanoparticle composition governs their movement from muscle to distant organs, enabling organ-specific antigen expression and driving the formation of tissue-resident cytotoxic T cells.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-crosslinking-lnp">
    <div class="paper-box-label journal-nature-chemical-engineering"><span class="journal-name">Nature Chemical Engineering</span><span class="journal-year">2026</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/crosslink.png' | relative_url }}" alt="Crosslinking LNP figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.nature.com/articles/s44286-026-00356-5" target="_blank" rel="noopener">
          Crosslinking of lipid nanoparticles enhances the delivery efficiency and efficacy of mRNA vaccines
        </a>
      </div>
      <div class="paper-authors">
        Liu X*, <strong>Zhu Y*</strong>, Wei C, Lin J, Yu D, Kong J, Shao F, Ma J, Xu T, Lu X, Su Y, Goodier KD, Cheng L, Toh WH, Erb CJ, Li S, Wang TH, Mao HQ#.
      </div>
      <div class="paper-meta">
        <a class="meta-pill news" href="https://inbt.jhu.edu/new-crosslinking-chemistry-boosts-stability-and-potency-of-mrna-lipid-nanoparticles/" target="_blank" rel="noopener">News</a>
        {% include citation_pill.html id="crosslinking-lnp" fallback=1 %}
      </div>
      <ul class="paper-summary">
        <li>A reversible post-assembly crosslinking strategy enhances LNP-mediated mRNA delivery while preserving intracellular release, enabling improved endosomal escape, sustained in vivo expression, and robust immune and antitumor responses.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-beta-cell-directed-rna-delivery">
    <div class="paper-box-label journal-acs-nano"><span class="journal-name">ACS Nano</span><span class="journal-year">2026</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/beta cell.png' | relative_url }}" alt="Integrated compositional screening and ligand targeting strategy for beta cell-directed RNA delivery">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://pubs.acs.org/doi/10.1021/acsnano.6c06440" target="_blank" rel="noopener">
          Engineering Lipid Nanoparticles through Integrated Compositional and Ligand Targeting Enhances β Cell-Directed RNA Delivery
        </a>
      </div>
      <div class="paper-authors">
        Yu D*, <strong>Zhu Y*</strong>, Roca-Rivada A, Guo Z, Cheng L, Weng G, Toh WH, Martin-Vazquez E, Buemi A, Mourad NI, Kasinathan D, Ma J, Lin J, Kong J, Quiroz VM, Tzeng SY, Lu X, Su Y, Liu X, Shen Z, Goodier KD, Wei C, Greco AH, Doloff JC, Eizirik DL#, Mao HQ#.
      </div>
      <div class="paper-meta">
        {% include citation_pill.html id="beta-cell-directed-rna-delivery" fallback=0 %}
      </div>
      <ul class="paper-summary">
        <li>An integrated strategy combines high-throughput LNP compositional screening with β cell-specific surface ligands to enable selective RNA delivery to pancreatic β cells in mouse and human models.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-imidazolium-lnp">
    <div class="paper-box-label journal-materials-today"><span class="journal-name">Materials Today</span><span class="journal-year">2026</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/Imidazolium.jpg' | relative_url }}" alt="Imidazolium LNP figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.sciencedirect.com/science/article/pii/S1369702126001112" target="_blank" rel="noopener">
          Imidazolium lipid-based nanoparticles enable effective mRNA delivery and cellular immune response
        </a>
      </div>
      <div class="paper-authors">
        Lin J*, <strong>Zhu Y*</strong>, Cheng L, Wei C, Kong J, Choy J, Lu X, Yu D, Ma J, Liu X, Su Y, Naganand S, Gueguen C, Huaulme Q, Urguia P, Mao HQ#.
      </div>
      <div class="paper-meta">
        {% include citation_pill.html id="imidazolium-lnp" fallback=0 %}
      </div>
      <ul class="paper-summary">
        <li>Screening 1,944 formulations identified LipidBrick® LNPs that outperform the clinical benchmark ALC-0315, producing stronger antigen-specific T-cell responses while maintaining low cytotoxicity.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-lnp-nanofiber-hydrogel">
    <div class="paper-box-label journal-nature-communications"><span class="journal-name">Nature Communications</span><span class="journal-year">2025</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/LiNx.jpg' | relative_url }}" alt="Nanofiber hydrogel composite figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.nature.com/articles/s41467-025-61299-8" target="_blank" rel="noopener">
          An mRNA lipid nanoparticle-incorporated nanofiber-hydrogel composite for cancer immunotherapy
        </a>
      </div>
      <div class="paper-authors">
        <strong>Zhu Y*</strong>, Yao ZC*, Li S*, Ma J, Wei C, Yu D, Stelzel JL, Ni BYX, Miao Y, Van Batavia K, Lu X, Lin J, Dai Y, Kong J, Shen R, Goodier KD, Liu X, Cheng L, Vuong I, Howard GP, Livingston NK, Choy J, Schneck JP, Doloff JC, Reddy SK, Hickey JW, Mao HQ#.
      </div>
      <div class="paper-meta">
        {% include citation_pill.html id="lnp-nanofiber-hydrogel" fallback=19 %}
      </div>
      <ul class="paper-summary">
        <li>An mRNA LNP-incorporated microgel matrix recruits immune cells, supports antigen expression and presentation, and elicits potent antitumor efficacy with a single administration.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-spleen-tropic-lnps">
    <div class="paper-box-label journal-science-advances"><span class="journal-name">Science Advances</span><span class="journal-year">2025</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/sciadv.ady5579-f1.jpg' | relative_url }}" alt="Spleen-tropic LNP screening figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.science.org/doi/10.1126/sciadv.ady5579" target="_blank" rel="noopener">
          A multistep platform identifies spleen-tropic lipid nanoparticles for in vivo T cell-targeted delivery of gene-editing proteins
        </a>
      </div>
      <div class="paper-authors">
        Lu X*, <strong>Zhu Y*</strong>, Wei C, Cheng L, Goodier KD, Kong J, Gao X, Yu D, Liu X, Long Y, Lin J, Ma J, Su Y, Mao HQ#.
      </div>
      <div class="paper-meta">
        <a class="meta-pill news" href="https://inbt.jhu.edu/machine-learning-unlocks-next-generation-lipid-nanoparticles-for-safer-gene-editing/" target="_blank" rel="noopener">News</a>
        {% include citation_pill.html id="spleen-tropic-lnps" fallback=2 %}
      </div>
      <ul class="paper-summary">
        <li>A multistep in vivo screening platform identified LNPs that preferentially target the spleen and deliver CRISPR-Cas9 ribonucleoproteins directly to T cells, enabling efficient gene editing without ex vivo manipulation.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-helper-t-cell-lnps">
    <div class="paper-box-label journal-nature-biomedical-engineering"><span class="journal-name">Nature Biomedical Engineering</span><span class="journal-year">2024</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/FigureScreening.png' | relative_url }}" alt="Helper T cell LNP screening figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.nature.com/articles/s41551-023-01131-0" target="_blank" rel="noopener">
          Screening for lipid nanoparticles that modulate the immune activity of helper T cells towards enhanced antitumour activity
        </a>
      </div>
      <div class="paper-authors">
        <strong>Zhu Y</strong>, Ma J, Shen R, Lin J, Li S, Lu X, Stelzel JL, Kong J, Cheng L, Vuong I, Yao ZC, Wei C, Korinetz NM, Toh WH, Choy J, Reynolds RA, Shears MJ, Cho WJ, Livingston NK, Howard GP, Hu Y, Tzeng SY, Zack DJ, Green JJ, Zheng L, Doloff JC, Schneck JP, Reddy SK, Murphy SC#, Mao HQ#.
      </div>
      <div class="paper-meta">
        <a class="meta-pill news" href="https://hub.jhu.edu/2023/12/14/lipid-nanoparticles-for-enhanced-anti-cancer-immunity/#new_tab" target="_blank" rel="noopener">News</a>
        {% include citation_pill.html id="helper-t-cell-lnps" fallback=105 %}
      </div>
      <ul class="paper-summary">
        <li>An LNP screening strategy optimized helper lipid identity and component ratios to enhance dendritic cell delivery of tumour-antigen-encoding mRNA and improve immune activation toward stronger antitumour responses.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-intraduodenal-liver-editing">
    <div class="paper-box-label journal-biomaterials"><span class="journal-name">Biomaterials</span><span class="journal-year">2024</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/Oral.png' | relative_url }}" alt="Intraduodenal delivery figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.sciencedirect.com/science/article/pii/S0142961224000930" target="_blank" rel="noopener">
          Optimization of lipid nanoparticles for gene editing of the liver via intraduodenal delivery
        </a>
      </div>
      <div class="paper-authors">
        <strong>Zhu Y*</strong>, Cai SS*, Ma J, Cheng L, Wei C, Aggarwal A, Toh WH, Shin C, Shen R, Kong J, Mao SA, Lao YH, Leong KW#, Mao HQ#.
      </div>
      <div class="paper-meta">
        {% include citation_pill.html id="intraduodenal-liver-editing" fallback=15 %}
      </div>
      <ul class="paper-summary">
        <li>A multi-step screening strategy identified pDNA LNP formulations for intraduodenal delivery and non-viral gene editing in mouse liver, reducing PCSK9 and ANGPTL3 to lower LDL cholesterol.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-fluid-viscosity-transfection">
    <div class="paper-box-label journal-nature-chemical-engineering"><span class="journal-name">Nature Chemical Engineering</span><span class="journal-year">2024</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/Viscosity.png' | relative_url }}" alt="Viscosity transfection figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.nature.com/articles/s44286-024-00116-3#citeas" target="_blank" rel="noopener">
          Tuning extracellular fluid viscosity to enhance transfection efficiency
        </a>
      </div>
      <div class="paper-authors">
        Ma J*, <strong>Zhu Y*</strong>, Kong J, Yu D, Toh WH, Jain M, Ni Q, Ge Z, Lin J, Choy J, Cheng L, Konstantopoulos K, Konig M, Sun S#, Mao HQ#.
      </div>
      <div class="paper-meta">
        <a class="meta-pill news" href="https://engineering.jhu.edu/news/goldilocks-breakthrough-in-gene-therapy-development/" target="_blank" rel="noopener">News</a>
        {% include citation_pill.html id="fluid-viscosity-transfection" fallback=9 %}
      </div>
      <ul class="paper-summary">
        <li>Matching cell culture viscosity to that of biological fluids substantially improves transfection efficiency across multiple gene delivery platforms and cell types.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-dna-lnp-multistep-screening">
    <div class="paper-box-label journal-nature-communications"><span class="journal-name">Nature Communications</span><span class="journal-year">2022</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/Figuremultistep.png' | relative_url }}" alt="DNA LNP multistep screening figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.nature.com/articles/s41467-022-31993-y" target="_blank" rel="noopener">
          Multi-step screening of DNA/lipid nanoparticles and co-delivery with siRNA to enhance and prolong gene expression
        </a>
      </div>
      <div class="paper-authors">
        <strong>Zhu Y</strong>, Shen R, Vuong I, Reynolds RA, Shears MJ, Yao ZC, Hu Y, Cho WJ, Kong J, Reddy SK, Murphy SC#, Mao HQ#.
      </div>
      <div class="paper-meta">
        <a class="meta-pill news" href="https://hub.jhu.edu/2022/08/23/gene-medicine-delivery-faster-affordable/#new_tab" target="_blank" rel="noopener">News</a>
        {% include citation_pill.html id="dna-lnp-multistep-screening" fallback=149 %}
      </div>
      <ul class="paper-summary">
        <li>A multi-step platform identified optimized plasmid DNA LNPs for liver-targeted delivery and prolonged transgene expression, addressing a major gap in systematic pDNA LNP design.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-lentiviral-dna-particles">
    <div class="paper-box-label journal-nano-letters"><span class="journal-name">Nano Letters</span><span class="journal-year">2021</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/FigureSize.jpeg' | relative_url }}" alt="Lentiviral vector DNA particle figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8283758/" target="_blank" rel="noopener">
          Size-controlled and shelf-stable DNA particles for production of lentiviral vectors
        </a>
      </div>
      <div class="paper-authors">
        Hu Y*, <strong>Zhu Y*</strong>, Sutherland ND, Wilson DR, Pang M, Liu E, Staub JR, Berlinicke CA, Zack DJ, Green JJ, Reddy SK, Mao HQ#.
      </div>
      <div class="paper-meta">
        <a class="meta-pill news" href="https://hub.jhu.edu/2021/07/15/projects-creates-better-viral-vectors-for-gene-therapy/" target="_blank" rel="noopener">News</a>
        {% include citation_pill.html id="lentiviral-dna-particles" fallback=31 %}
      </div>
      <ul class="paper-summary">
        <li>Size-controlled pDNA/PEI particles improved lentiviral vector production, with an optimal particle size of 400-500 nm linked to enhanced cellular uptake and transfection efficiency.</li>
      </ul>
    </div>
  </div>

  <div class="paper-box" id="study-albumin-biomineralized-melanoma">
    <div class="paper-box-label journal-journal-of-controlled-release"><span class="journal-name">Journal of Controlled Release</span><span class="journal-year">2020</span></div>
    <div class="paper-box-image">
      <img loading="lazy" decoding="async" src="{{ '/images/JCR.jpg' | relative_url }}" alt="Melanoma photoimmunotherapy figure">
    </div>
    <div class="paper-box-text">
      <div class="paper-title">
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168365920301978" target="_blank" rel="noopener">
          Albumin-biomineralized nanoparticles to synergize phototherapy and immunotherapy against melanoma
        </a>
      </div>
      <div class="paper-authors">
        <strong>Zhu Y*</strong>, Xue J, Chen W, Bai S, Zheng T, He C, Guo Z, Jiang M, Du G, Sun X#.
      </div>
      <div class="paper-meta">
        {% include citation_pill.html id="albumin-biomineralized-melanoma" fallback=99 %}
      </div>
      <ul class="paper-summary">
        <li>Albumin-biomineralized nanoparticles co-delivering a photosensitizer and immunoadjuvant were engineered to couple tumor ablation with immune activation for melanoma therapy.</li>
      </ul>
    </div>
  </div>
</div>



<h3 id="collaborative-publications" class="research-group-title">Collaborative publications <span>24</span></h3>

<div class="research-reference-grid" markdown="1">

Y Su, J Choy, X Liu, **Y Zhu**, J Lin, C Wei, KD Goodier, D Yu, L Cheng, M Patel, X Lu, J Ma, J Wang, HQ Mao\*. [Stabilizing Anionic mRNA Lipid Nanoparticles by Cleavable Crosslinking of Cholesterol](https://pubs.acs.org/doi/10.1021/acsami.6c06888). ***ACS Applied Materials & Interfaces***, 2026.


M Patel, J Choy, L Cheng, E Ariail, M Jain, SR Shannon, D Antov, I Cozzone, X Huang, M Cheng, S Li, J Sun, D Yang, JP Popev, BA Biggs, CJ Erb, BC Chang, T Tian, M Mullaney, G Glenn, **Y Zhu**, et al., HQ Mao\*. [Cytokine co-presentation on targeted lipid nanoparticles enhances in vivo T cell engineering](https://www.sciencedirect.com/science/article/abs/pii/S0142961226004539). ***Biomaterials***, 2026.

S Schiffers†, BW Nelson†, M Prigge, S Krishna, L Watkins, **Y Zhu**, N Tyagi, H Beiki, S Das, A Raman, J Ma, T Andresson, HQ Mao, B Wu\*, S Oberdoerffer\*. [*N*<sup>4</sup>-Acetylcytidine enhances synthetic mRNA translation yield and fidelity](https://www.nature.com/articles/s41586-026-10729-8). ***Nature***, 2026.

J Lin†, Y Hu†\*, TH Pial, KD Goodier, D Yu, P Brailsford, M Choi-Ali, JT Feng, S Li, **Y Zhu**, et al., HQ Mao\*. [Trivalent ions kinetic-gating for producing high-concentration and shelf-stable plasmid DNA/PEI particles](https://www.nature.com/articles/s41467-026-73921-4). ***Nature Communications***, 2026.

J Choy, L Cheng, M Patel, **Y Zhu**, J Ma, SS Kang, M Jain, et al., HQ Mao\*. [Class II peptide-major histocompatibility complex lipid nanoparticles enable in vivo mRNA delivery to antigen-specific CD4+ T cells](https://pubs.acs.org/doi/10.1021/acsami.5c21115). ***ACS Applied Materials & Interfaces***, 2026.

J Choy, S Shannon, Y Zhang, SS Kang, **Y Zhu**, et al., J Schneck\*. [Nanoscale artificial antigen-presenting cells reveal metabolic interventions modulate clonal composition of CD8+ T cells](https://www.cell.com/cell-biomaterials/fulltext/S3050-5623(26)00024-3). ***Cell Biomaterials***, 2026.

B Torkzaban, **Y Zhu**, C Lopez, JM Alexander, J Ma, Y Sun, KR Maschhoff, et al., J Coller\*. [Use of poly adenosine tail mimetics to enhance mRNA expression from genes associated with haploinsufficiency disorders](https://www.sciencedirect.com/science/article/pii/S2162253125000071). ***Molecular Therapy Nucleic Acids***, 2025.

A Greco, L Cheng, KD Goodier, **Y Zhu**, J Kong, S Gong, C Erb, J Lin, X Lu, et al., HQ Mao\*. [Adipocyte-selective mRNA lipid nanoparticles for cell programming with machine learning analysis](https://www.sciencedirect.com/science/article/pii/S0168365925007898). ***Journal of Controlled Release***, 2025.

Z Guo, F Wu, C Guo, R Hu, Y Ou, **Y Zhu**, S Luo, Y Song, P He, C He, Y Xu, et al., X Sun\*. [Metalloparticle-Engineered Pickering Emulsion Displaying AAV-Vectored Vaccine for Enhancing Antigen Expression and Immunogenicity Against Pathogens](https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202412627). ***Advanced Materials***, 2025.

L Cheng, **Y Zhu**, J Ma, A Aggarwal, WH Toh, C Shin, et al., HQ Mao\*. [Machine learning elucidates design features of plasmid deoxyribonucleic acid lipid nanoparticles for cell type-preferential transfection](https://pubs.acs.org/doi/10.1021/acsnano.4c07615). ***ACS nano***, 2024.

Y Hu, B Eder, J Lin, S Li, **Y Zhu**, et al., HQ Mao\*. [Liter-scale manufacturing of shelf-stable plasmid DNA/PEI transfection particles for viral vector production](https://www.cell.com/molecular-therapy-family/methods/fulltext/S2329-0501(24)00010-X). ***Molecular Therapy Methods & Clinical Development***, 2024.

Y Hu, S Tzeng, L Cheng, J Lin, A Rueda, S Yu, S Li, Z Schneiderman, **Y Zhu**, et al., HQ Mao\*. [Supramolecular assembly of polycation/mRNA nanoparticles and in vivo monocyte programming](https://www.pnas.org/doi/10.1073/pnas.2400194121). ***Proceedings of the National Academy of Sciences of the United States of America***, 2024.

J. Kong, Z.-C. Yao, J. L. Stelzel, Y.-H. Yang, J. Chen, H. Feng, C. Schmidt, C. Zhang, K. Krishnan, L. Chen, J. Pan, K. Ding, **Y. Zhu**, X. Li, J. C. Doloff, H.-Q. Mao*, S. K. Reddy*. [Granular Nanofiber-Hydrogel Composite-Programmed Regenerative Inflammation and Adipose Tissue Formation](https://onlinelibrary.wiley.com/doi/10.1002/adhm.202403094). ***Advanced Healthcare Materials***, 2024.

W Chen, Y Song, S Bai, C He, G Zhao, **Y Zhu**, et al., X Sun\*. [Cloaking mesoporous polydopamine with bacterial membrane vesicles to amplify local and systemic antitumor immunity](https://pubs.acs.org/doi/10.1021/acsnano.3c00363). ***ACS nano***, 2023.

W Chen, **Y Zhu**, J Chen, X Jing, Y Xiong, L Zou, J Li, Q Liu, Y Li, Y Huang, et al., J He\*. [Potentiating the systemic immunity by bacteria-delivered STING activation in a tumor microenvironment](https://onlinelibrary.wiley.com/doi/full/10.1002/adfm.202307001). ***Advanced Functional Materials***, 2023.

Z Guo, **Y Zhu**, G Du, M Qin, C He, P He, Y Song, W Chen, S Bai, F Wu, et al., X Sun\*. [Rapid development of a subunit nano-vaccine against drug-resistant Pseudomonas aeruginosa with effective cross-protection](https://www.sciencedirect.com/science/article/abs/pii/S1748013222000251). ***Nano Today***, 2022.

J Xue, **Y Zhu**, S Bai, C He, G Du, Y Zhang, Y Zhong, W Chen, H Wang, et al., X Sun\*. [Nanoparticles with rough surface improve the therapeutic effect of photothermal immunotherapy against melanoma](https://www.sciencedirect.com/science/article/pii/S2211383521004585#:~:text=In%20the%20animal%20studies%2C%20the,prevented%20tumor%20metastasis%20and%20recurrence.). ***Acta Pharmaceutica Sinica B***, 2022.

ZC Yao, YH Yang, J Kong, **Y Zhu**, L Li, C Chang, C Zhang, J Yin, J Chao, et al., HQ Mao\*. [Biostimulatory micro-fragmented nanofiber-hydrogel composite improves mesenchymal stem cell delivery and soft tissue remodeling](https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202202309). ***Small***, 2022.

S Bai, H Jiang, Y Song, **Y Zhu**, M Qin, C He, G Du, X Sun\*. [Aluminum nanoparticles deliver a dual-epitope peptide for enhanced anti-tumor immunotherapy](https://www.sciencedirect.com/science/article/abs/pii/S0168365922001018?via%3Dihub). ***Journal of Controlled Release***, 2022.

S Li, Y Hu, A Li, J Lin, K Hsieh, Z Schneiderman, P Zhang, **Y Zhu**, et al., HQ Mao\*. [Payload distribution and capacity of mRNA lipid nanoparticles](https://www.nature.com/articles/s41467-022-33157-4). ***Nature Communications***, 2022.

X Zhong, G Du, X Wang, Y Ou, H Wang, **Y Zhu**, X Hao, Z Xie, Y Zhang, et al., X Sun\*. [Nanovaccines mediated subcutis-to-intestine cascade for improved protection against intestinal infections](https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202105530). ***Small***, 2022.

W Chen, Z Guo, **Y Zhu**, N Qiao, Z Zhang, X Sun\*. [Combination of bacterial‐photothermal therapy with an anti‐PD‐1 peptide depot for enhanced immunity against advanced cancer](https://onlinelibrary.wiley.com/doi/full/10.1002/adfm.201906623). ***Advanced Functional Materials***, 2020.

X Ke, L Shelton, Y Hu, **Y Zhu**, E Chow, H Tang, JL Santos, HQ Mao\*. [Surface-functionalized PEGylated nanoparticles deliver messenger RNA to pulmonary immune cells](https://pubs.acs.org/doi/10.1021/acsami.0c08268). ***ACS Applied Materials & Interfaces***, 2020.

C Li, X Chen, X Luo, H Wang, **Y Zhu**, G Du, W Chen, Z Chen, X Hao, et al., X Sun\*. [Nanoemulsions target to ectopic lymphoids in inflamed joints to restore immune tolerance in rheumatoid arthritis](https://pubs.acs.org/doi/10.1021/acs.nanolett.0c05110). ***Nano Letters***, 2020.



</div>

<h3 id="review-articles" class="research-group-title">Review articles <span>3</span></h3>

<div class="research-review-grid" markdown="1">

W Chen, **Y Zhu**, J He, X Sun\*. [Path towards mRNA delivery for cancer immunotherapy from bench to bedside](https://www.thno.org/v14p0096.htm). ***Theranostics***, 2024.

W Chen, **Y Zhu**, Z Zhang, X Sun\*. [Advances in Salmonella Typhimurium-based drug delivery system for cancer therapy](https://www.sciencedirect.com/science/article/abs/pii/S0169409X22001855). ***Advanced Drug Delivery Reviews***, 2022.

S Huang, **Y Zhu**, L Zhang, Z Zhang\*. [Recent advances in delivery systems for genetic and other novel vaccines](https://onlinelibrary.wiley.com/doi/10.1002/adma.202107946). ***Advanced Materials***, 2022.


</div>

</section>

<section id="patents" class="research-section patent-section" markdown="1">

<header class="research-heading"><div><p class="research-kicker">Translation</p><h2>Patents.</h2></div><span class="research-count-label">10 patent filings</span></header>

<div class="research-patent-grid" markdown="1">

**Y Zhu**, X Liu, H Mao. Compositions and methods of preparing RNA lipid nanoparticles with enhanced stability and transfection efficiency. US Provisional Patent Application; Filed 7/19/2025.

**Y Zhu**, C Wei, H Mao. Lipid nanoparticles with integrated glycolipid adjuvant to promote tissue-specific cellular immunity. US Provisional Patent Application; Filed 2/18/2025.

**Y Zhu**, C Wei, D Yu, H Mao. Lipid nanoparticle formulations capable of migrating to systemic organs following intramuscular administration. US Provisional Patent Application; Filed 1/28/2025.

**Y Zhu**, X Lu, H Mao. Composition screening of lipid nanoparticle for intracellular delivery of gene-editing proteins. PCT/US2025/023531; Filed 4/7/2025.

**Y Zhu**, C Wei, J Ma, H Mao, et al. A mRNA lipid nanoparticle incorporated nanofiber-hydrogel composite to generate a local immunostimulatory niche for immunotherapy. PCT/US2025/023530; Filed 4/7/2025.

**Y Zhu**, J Ma, H Mao, et al. Composition of media with defined fluid viscosity for enhancing intracellular delivery of nanoparticles and viral vectors, and methods of use. PCT/US2024/039036; Filed 7/22/2024.

**Y Zhu**, H Mao, et al. Compositions of Lipid Nanoparticles for Plasmid DNA Delivery to the Liver and Methods for Preparing the Same. PCT/US2023/016938; Filed 3/30/2023.

**Y Zhu**, Y Hu, H Mao. Methods for preparation of plasmid DNA/lipid particles with defined size for in vitro and in vivo transfection. PCT/US2023, 18/546,221; Filed 8/11/2023.

**Y Zhu**, Y Hu, H Mao. Composition of shelf-stable plasmid DNA/PEI particles with defined sizes for virus production and method for preparation of the same. PCT/US2023, 18/546,222, Filed 8/11/2023.

**Y Zhu**, Y Hu, H Mao. Methods for preparation of shelf-stable plasmid DNA/polycation particles with defined sizes for cell transfection. PCT/US2022, 18/261,944; Filed 7/18/2023.

</div>

</section>

<section id="academic-services" class="research-section" markdown="1">

<header class="research-heading"><div><p class="research-kicker">Scientific community</p><h2>Academic services.</h2></div></header>

<div class="service-panel">
  <p>Currently, I am serving as a reviewer for journals across biomaterials, gene delivery, nanomedicine, and translational therapeutics.</p>
  <div class="service-tags">
    <span>Nature Biomedical Engineering</span>
    <span>Biomaterials</span>
    <span>Journal of Controlled Release</span>
    <span>Cancer Nanotechnology</span>
    <span>iScience</span>
    <span>Pharmaceutical Research</span>
    <span>Bioengineering & Translational Medicine</span>
    <span>Journal of Drug Delivery Science and Technology</span>
    <span>Journal of Liposome Research</span>
    <span>Scientific Reports</span>
    <span>Discover Chemistry</span>
    <span>Journal of Nanobiotechnology</span>
    <span>International Journal of Pharmaceutics</span>
  </div>
</div>

</section>

<section id="research-moments" class="talk-gallery">
  <header class="research-heading"><div><p class="research-kicker">Sharing the work</p><h2>Conference talk moments.</h2></div></header>

  <div class="gallery-grid">

    <figure class="gallery-figure">
      <div class="gallery-item">
        <img loading="lazy" decoding="async" src="/images/2024 ASGCT.JPG" alt="Yining presenting at ASGCT 2024">
      </div>
      <figcaption class="gallery-caption">ASGCT 2024</figcaption>
    </figure>

    <figure class="gallery-figure">
      <div class="gallery-item">
        <img loading="lazy" decoding="async" src="/images/2022 SFB.JPG" alt="Yining presenting at SFB 2022">
      </div>
      <figcaption class="gallery-caption">Society for Biomaterials 2022</figcaption>
    </figure>

    <figure class="gallery-figure">
      <div class="gallery-item">
        <img loading="lazy" decoding="async" src="/images/2023 SFB.png" alt="Yining receiving STAR award at SFB 2023">
      </div>
      <figcaption class="gallery-caption">Society for Biomaterials 2023 (STAR)</figcaption>
    </figure>

  </div>
</section>

</div>

<script src="{{ '/assets/js/research.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
