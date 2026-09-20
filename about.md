---
permalink: /about/
title: "About Me"
author_profile: false
layout: single
---


<link rel="stylesheet" href="{{ '/assets/css/about.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<div class="about-experience">


<section class="about-hero">
  <img src="{{ '/images/jhu2.png' | relative_url }}" alt="Johns Hopkins campus">
  <div class="about-hero-content">
    <span class="about-hero-kicker">Yining Zhu, Ph.D.</span>
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


<nav class="about-section-nav" aria-label="About page sections">
  <a href="#selected-publications">Publications</a>
  <a href="#honors-awards">Honors &amp; awards</a>
  <a href="#professional-training">Training &amp; education</a>
  <a href="#talks">Talks</a>
</nav>
<section id="selected-publications" class="about-band about-publications" data-card-rail>


<header class="about-heading"><div><p class="about-eyebrow">Research in focus</p><h2>Selected publications.</h2></div><a class="about-scholar-link" href="https://scholar.google.com/citations?user=rp1pkakAAAAJ&amp;hl" target="_blank" rel="noopener"><span class="about-scholar-title">Google Scholar <span aria-hidden="true">&#8599;</span></span><small>{{ site.data.scholar_citations.total_citations | default: 1500 }} citations</small></a></header>

<p class="about-section-intro">Browse selected studies, findings, and full author lists.</p>
<div class="about-publication-rail" id="publication-rail" tabindex="0" role="region" aria-label="Selected publications, scroll horizontally">


<article class="about-publication-card">
  <div class="about-journal-band journal-biorxiv"><span class="journal-name">bioRxiv</span><span class="journal-year">2026</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/NanoSTAMP.png' | relative_url }}" alt="NanoSTAMP spatial profiling workflow for pooled barcoded mRNA lipid nanoparticles"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.biorxiv.org/content/10.64898/2026.08.25.746710v1" target="_blank" rel="noopener">
        Spatial profiling of pooled mRNA-LNP delivery in vivo with NanoSTAMP
      </a></h3>
    <div class="about-publication-meta">{% include citation_pill.html id="nanostamp" fallback=0 %}
      <a class="meta-pill news" href="https://doi.org/10.64898/2026.08.25.746710" target="_blank" rel="noopener">Preprint</a></div>
    <div class="about-study-details">
      <ul><li>NanoSTAMP combines barcoded pooled LNP screening with spatial-omics readouts to connect formulation identity with cell-type-specific uptake, cargo expression, and neighboring multicellular tissue responses in vivo.</li></ul><p class="about-authors"><strong>Authors</strong><br><strong>Zhu Y*</strong>, Miao Y*, Anderson IJ, Li Y, Aghnatios B, No J, Ma J, Yu D, Wei C, Lu X, Wang J, van de Klashorst J, Mao HQ, Hickey JW#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-biorxiv"><span class="journal-name">bioRxiv</span><span class="journal-year">2026</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/Age.png' | relative_url }}?v=532050f2" alt="Age-adaptive mRNA lipid nanoparticle cancer vaccine study overview"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.biorxiv.org/content/10.64898/2026.04.11.717910v1.abstract" target="_blank" rel="noopener">
        Engineering age-adaptive mRNA lipid nanoparticle cancer vaccines via reprogramming systemic gene expression
      </a></h3>
    <div class="about-publication-meta">{% include citation_pill.html id="age-adaptive-mrna-vaccines" fallback=0 %}
      <a class="meta-pill news" href="https://doi.org/10.64898/2026.04.11.717910" target="_blank" rel="noopener">Preprint</a></div>
    <div class="about-study-details">
      <ul><li>Age-related loss of systemic mRNA expression limits vaccine-induced T cell immunity, while an optimized LNP restores distal antigen expression and therapeutic antitumor efficacy in aged mice.</li></ul><p class="about-authors"><strong>Authors</strong><br><strong>Zhu Y*</strong>, Wei C*, Ma J, Yu D, Wang J, Lu X, Goodier KD, Lin J, Liu X, Su Y, Jiang Z, Greco AH, Cheng L, Toh WH, Miao Y, Schneck JP, Doloff JC, Hickey JW, Mao HQ.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-nature-biomedical-engineering"><span class="journal-name">Nature Biomedical Engineering</span><span class="journal-year">2026</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/NBME 20260613.png' | relative_url }}" alt="Systemic trafficking and tissue-specific T cell immunity figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.nature.com/articles/s41551-026-01706-7" target="_blank" rel="noopener">
        Lipid nanoparticle composition directs systemic trafficking and tissue-specific T cell immunity after intramuscular injection
      </a></h3>
    <div class="about-publication-meta">{% include citation_pill.html id="tissue-specific-t-cell-immunity" fallback=0 %}
      <a class="meta-pill news" href="https://inbt.jhu.edu/new-research-shows-lipid-nanoparticle-design-influences-where-vaccines-travel-and-where-immune-protection-is-built/" target="_blank" rel="noopener">News</a></div>
    <div class="about-study-details">
      <ul><li>Lipid nanoparticle composition governs their movement from muscle to distant organs, enabling organ-specific antigen expression and driving the formation of tissue-resident cytotoxic T cells.</li></ul><p class="about-authors"><strong>Authors</strong><br>Wei C*, <strong>Zhu Y*#</strong>, Lu X, Goodier KD, Yu D, Liu X, Choy J, Téllez Calderón A, Su Y, Ma J, Lin J, Li S, Schneck JP, Murphy SC#, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-nature-chemical-engineering"><span class="journal-name">Nature Chemical Engineering</span><span class="journal-year">2026</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/crosslink.png' | relative_url }}" alt="Crosslinking LNP figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.nature.com/articles/s44286-026-00356-5" target="_blank" rel="noopener">
        Crosslinking of lipid nanoparticles enhances the delivery efficiency and efficacy of mRNA vaccines
      </a></h3>
    <div class="about-publication-meta"><a class="meta-pill news" href="https://inbt.jhu.edu/new-crosslinking-chemistry-boosts-stability-and-potency-of-mrna-lipid-nanoparticles/" target="_blank" rel="noopener">News</a>
      {% include citation_pill.html id="crosslinking-lnp" fallback=1 %}</div>
    <div class="about-study-details">
      <ul><li>A reversible post-assembly crosslinking strategy enhances LNP-mediated mRNA delivery while preserving intracellular release, enabling improved endosomal escape, sustained in vivo expression, and robust immune and antitumor responses.</li></ul><p class="about-authors"><strong>Authors</strong><br>Liu X*, <strong>Zhu Y*</strong>, Wei C, Lin J, Yu D, Kong J, Shao F, Ma J, Xu T, Lu X, Su Y, Goodier KD, Cheng L, Toh WH, Erb CJ, Li S, Wang TH, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-acs-nano"><span class="journal-name">ACS Nano</span><span class="journal-year">2026</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/beta cell.png' | relative_url }}" alt="Integrated compositional screening and ligand targeting strategy for beta cell-directed RNA delivery"></div>
  <div class="about-publication-copy">

    <h3><a href="https://pubs.acs.org/doi/10.1021/acsnano.6c06440" target="_blank" rel="noopener">
        Engineering Lipid Nanoparticles through Integrated Compositional and Ligand Targeting Enhances β Cell-Directed RNA Delivery
      </a></h3>
    <div class="about-publication-meta">{% include citation_pill.html id="beta-cell-directed-rna-delivery" fallback=0 %}</div>
    <div class="about-study-details">
      <ul><li>An integrated strategy combines high-throughput LNP compositional screening with β cell-specific surface ligands to enable selective RNA delivery to pancreatic β cells in mouse and human models.</li></ul><p class="about-authors"><strong>Authors</strong><br>Yu D*, <strong>Zhu Y*</strong>, Roca-Rivada A, Guo Z, Cheng L, Weng G, Toh WH, Martin-Vazquez E, Buemi A, Mourad NI, Kasinathan D, Ma J, Lin J, Kong J, Quiroz VM, Tzeng SY, Lu X, Su Y, Liu X, Shen Z, Goodier KD, Wei C, Greco AH, Doloff JC, Eizirik DL#, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-materials-today"><span class="journal-name">Materials Today</span><span class="journal-year">2026</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/Imidazolium.jpg' | relative_url }}" alt="Imidazolium LNP figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.sciencedirect.com/science/article/pii/S1369702126001112" target="_blank" rel="noopener">
        Imidazolium lipid-based nanoparticles enable effective mRNA delivery and cellular immune response
      </a></h3>
    <div class="about-publication-meta">{% include citation_pill.html id="imidazolium-lnp" fallback=0 %}</div>
    <div class="about-study-details">
      <ul><li>Screening 1,944 formulations identified LipidBrick® LNPs that outperform the clinical benchmark ALC-0315, producing stronger antigen-specific T-cell responses while maintaining low cytotoxicity.</li></ul><p class="about-authors"><strong>Authors</strong><br>Lin J*, <strong>Zhu Y*</strong>, Cheng L, Wei C, Kong J, Choy J, Lu X, Yu D, Ma J, Liu X, Su Y, Naganand S, Gueguen C, Huaulme Q, Urguia P, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-nature-communications"><span class="journal-name">Nature Communications</span><span class="journal-year">2025</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/LiNx.jpg' | relative_url }}" alt="Nanofiber hydrogel composite figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.nature.com/articles/s41467-025-61299-8" target="_blank" rel="noopener">
        An mRNA lipid nanoparticle-incorporated nanofiber-hydrogel composite for cancer immunotherapy
      </a></h3>
    <div class="about-publication-meta">{% include citation_pill.html id="lnp-nanofiber-hydrogel" fallback=19 %}</div>
    <div class="about-study-details">
      <ul><li>An mRNA LNP-incorporated microgel matrix recruits immune cells, supports antigen expression and presentation, and elicits potent antitumor efficacy with a single administration.</li></ul><p class="about-authors"><strong>Authors</strong><br><strong>Zhu Y*</strong>, Yao ZC*, Li S*, Ma J, Wei C, Yu D, Stelzel JL, Ni BYX, Miao Y, Van Batavia K, Lu X, Lin J, Dai Y, Kong J, Shen R, Goodier KD, Liu X, Cheng L, Vuong I, Howard GP, Livingston NK, Choy J, Schneck JP, Doloff JC, Reddy SK, Hickey JW, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-science-advances"><span class="journal-name">Science Advances</span><span class="journal-year">2025</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/sciadv.ady5579-f1.jpg' | relative_url }}" alt="Spleen-tropic LNP screening figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.science.org/doi/10.1126/sciadv.ady5579" target="_blank" rel="noopener">
        A multistep platform identifies spleen-tropic lipid nanoparticles for in vivo T cell-targeted delivery of gene-editing proteins
      </a></h3>
    <div class="about-publication-meta"><a class="meta-pill news" href="https://inbt.jhu.edu/machine-learning-unlocks-next-generation-lipid-nanoparticles-for-safer-gene-editing/" target="_blank" rel="noopener">News</a>
      {% include citation_pill.html id="spleen-tropic-lnps" fallback=2 %}</div>
    <div class="about-study-details">
      <ul><li>A multistep in vivo screening platform identified LNPs that preferentially target the spleen and deliver CRISPR-Cas9 ribonucleoproteins directly to T cells, enabling efficient gene editing without ex vivo manipulation.</li></ul><p class="about-authors"><strong>Authors</strong><br>Lu X*, <strong>Zhu Y*</strong>, Wei C, Cheng L, Goodier KD, Kong J, Gao X, Yu D, Liu X, Long Y, Lin J, Ma J, Su Y, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-nature-biomedical-engineering"><span class="journal-name">Nature Biomedical Engineering</span><span class="journal-year">2024</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/FigureScreening.png' | relative_url }}" alt="Helper T cell LNP screening figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.nature.com/articles/s41551-023-01131-0" target="_blank" rel="noopener">
        Screening for lipid nanoparticles that modulate the immune activity of helper T cells towards enhanced antitumour activity
      </a></h3>
    <div class="about-publication-meta"><a class="meta-pill news" href="https://hub.jhu.edu/2023/12/14/lipid-nanoparticles-for-enhanced-anti-cancer-immunity/#new_tab" target="_blank" rel="noopener">News</a>
      {% include citation_pill.html id="helper-t-cell-lnps" fallback=105 %}</div>
    <div class="about-study-details">
      <ul><li>An LNP screening strategy optimized helper lipid identity and component ratios to enhance dendritic cell delivery of tumour-antigen-encoding mRNA and improve immune activation toward stronger antitumour responses.</li></ul><p class="about-authors"><strong>Authors</strong><br><strong>Zhu Y</strong>, Ma J, Shen R, Lin J, Li S, Lu X, Stelzel JL, Kong J, Cheng L, Vuong I, Yao ZC, Wei C, Korinetz NM, Toh WH, Choy J, Reynolds RA, Shears MJ, Cho WJ, Livingston NK, Howard GP, Hu Y, Tzeng SY, Zack DJ, Green JJ, Zheng L, Doloff JC, Schneck JP, Reddy SK, Murphy SC#, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-nature-chemical-engineering"><span class="journal-name">Nature Chemical Engineering</span><span class="journal-year">2024</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/Viscosity.png' | relative_url }}" alt="Viscosity transfection figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.nature.com/articles/s44286-024-00116-3#citeas" target="_blank" rel="noopener">
        Tuning extracellular fluid viscosity to enhance transfection efficiency
      </a></h3>
    <div class="about-publication-meta"><a class="meta-pill news" href="https://engineering.jhu.edu/news/goldilocks-breakthrough-in-gene-therapy-development/" target="_blank" rel="noopener">News</a>
      {% include citation_pill.html id="fluid-viscosity-transfection" fallback=9 %}</div>
    <div class="about-study-details">
      <ul><li>Matching cell culture viscosity to that of biological fluids substantially improves transfection efficiency across multiple gene delivery platforms and cell types.</li></ul><p class="about-authors"><strong>Authors</strong><br>Ma J*, <strong>Zhu Y*</strong>, Kong J, Yu D, Toh WH, Jain M, Ni Q, Ge Z, Lin J, Choy J, Cheng L, Konstantopoulos K, Konig M, Sun S#, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-biomaterials"><span class="journal-name">Biomaterials</span><span class="journal-year">2024</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/Oral.png' | relative_url }}" alt="Intraduodenal delivery figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.sciencedirect.com/science/article/pii/S0142961224000930" target="_blank" rel="noopener">
        Optimization of lipid nanoparticles for gene editing of the liver via intraduodenal delivery
      </a></h3>
    <div class="about-publication-meta">{% include citation_pill.html id="intraduodenal-liver-editing" fallback=15 %}</div>
    <div class="about-study-details">
      <ul><li>A multi-step screening strategy identified pDNA LNP formulations for intraduodenal delivery and non-viral gene editing in mouse liver, reducing PCSK9 and ANGPTL3 to lower LDL cholesterol.</li></ul><p class="about-authors"><strong>Authors</strong><br><strong>Zhu Y*</strong>, Cai SS*, Ma J, Cheng L, Wei C, Aggarwal A, Toh WH, Shin C, Shen R, Kong J, Mao SA, Lao YH, Leong KW#, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-nature-communications"><span class="journal-name">Nature Communications</span><span class="journal-year">2022</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/Figuremultistep.png' | relative_url }}" alt="DNA LNP multistep screening figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.nature.com/articles/s41467-022-31993-y" target="_blank" rel="noopener">
        Multi-step screening of DNA/lipid nanoparticles and co-delivery with siRNA to enhance and prolong gene expression
      </a></h3>
    <div class="about-publication-meta"><a class="meta-pill news" href="https://hub.jhu.edu/2022/08/23/gene-medicine-delivery-faster-affordable/#new_tab" target="_blank" rel="noopener">News</a>
      {% include citation_pill.html id="dna-lnp-multistep-screening" fallback=149 %}</div>
    <div class="about-study-details">
      <ul><li>A multi-step platform identified optimized plasmid DNA LNPs for liver-targeted delivery and prolonged transgene expression, addressing a major gap in systematic pDNA LNP design.</li></ul><p class="about-authors"><strong>Authors</strong><br><strong>Zhu Y</strong>, Shen R, Vuong I, Reynolds RA, Shears MJ, Yao ZC, Hu Y, Cho WJ, Kong J, Reddy SK, Murphy SC#, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-nano-letters"><span class="journal-name">Nano Letters</span><span class="journal-year">2021</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/FigureSize.jpeg' | relative_url }}" alt="Lentiviral vector DNA particle figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8283758/" target="_blank" rel="noopener">
        Size-controlled and shelf-stable DNA particles for production of lentiviral vectors
      </a></h3>
    <div class="about-publication-meta"><a class="meta-pill news" href="https://hub.jhu.edu/2021/07/15/projects-creates-better-viral-vectors-for-gene-therapy/" target="_blank" rel="noopener">News</a>
      {% include citation_pill.html id="lentiviral-dna-particles" fallback=31 %}</div>
    <div class="about-study-details">
      <ul><li>Size-controlled pDNA/PEI particles improved lentiviral vector production, with an optimal particle size of 400-500 nm linked to enhanced cellular uptake and transfection efficiency.</li></ul><p class="about-authors"><strong>Authors</strong><br>Hu Y*, <strong>Zhu Y*</strong>, Sutherland ND, Wilson DR, Pang M, Liu E, Staub JR, Berlinicke CA, Zack DJ, Green JJ, Reddy SK, Mao HQ#.</p>
    </div>
  </div>
</article>

<article class="about-publication-card">
  <div class="about-journal-band journal-journal-of-controlled-release"><span class="journal-name">Journal of Controlled Release</span><span class="journal-year">2020</span></div>
  <div class="about-publication-image"><img loading="lazy" decoding="async" src="{{ '/images/JCR.jpg' | relative_url }}" alt="Melanoma photoimmunotherapy figure"></div>
  <div class="about-publication-copy">

    <h3><a href="https://www.sciencedirect.com/science/article/abs/pii/S0168365920301978" target="_blank" rel="noopener">
        Albumin-biomineralized nanoparticles to synergize phototherapy and immunotherapy against melanoma
      </a></h3>
    <div class="about-publication-meta">{% include citation_pill.html id="albumin-biomineralized-melanoma" fallback=99 %}</div>
    <div class="about-study-details">
      <ul><li>Albumin-biomineralized nanoparticles co-delivering a photosensitizer and immunoadjuvant were engineered to couple tumor ablation with immune activation for melanoma therapy.</li></ul><p class="about-authors"><strong>Authors</strong><br><strong>Zhu Y*</strong>, Xue J, Chen W, Bai S, Zheng T, He C, Guo Z, Jiang M, Du G, Sun X#.</p>
    </div>
  </div>
</article>

</div>

<div class="about-rail-footer"><p>14 selected works <span aria-hidden="true">&middot;</span> * Equal contribution; # corresponding author.</p><div class="about-rail-controls"><button type="button" data-rail-prev aria-controls="publication-rail" aria-label="Previous publications"><span aria-hidden="true">&#8592;</span></button><button type="button" data-rail-next aria-controls="publication-rail" aria-label="Next publications"><span aria-hidden="true">&#8594;</span></button></div></div>

<a class="about-text-link" href="/research/#publications">View the full research portfolio <span aria-hidden="true">&#8594;</span></a>

</section>

<section id="honors-awards" class="about-band about-honors" data-card-rail>

<header class="about-heading"><div><p class="about-eyebrow">Recognition</p><h2>Honors and awards.</h2></div></header>

<div class="about-honor-rail" id="honor-rail" tabindex="0" role="region" aria-label="Featured honors, scroll horizontally">

<article class="about-honor-card"><div class="about-honor-image"><img loading="lazy" decoding="async" src="/images/2026%20Schmidt.JPG" alt="Schmidt Science Fellow"></div><div class="about-honor-copy"><p class="about-eyebrow">2026.03</p><h3>Schmidt Science Fellow</h3><p>Schmidt Science Foundation</p><a class="about-text-link" href="https://www.forbes.com/sites/michaeltnietzel/2026/03/25/the-2026-cohort-of-schmidt-science-fellows-is-announced/" target="_blank" rel="noopener">Read the story &#8599;</a></div></article>

<article class="about-honor-card"><div class="about-honor-image"><img loading="lazy" decoding="async" src="/images/Forbes%20Science.jpg" alt="Forbes 30 Under 30 in Science"></div><div class="about-honor-copy"><p class="about-eyebrow">2025.12</p><h3>Forbes 30 Under 30 in Science</h3><p>Forbes Media</p><a class="about-text-link" href="https://www.forbes.com/profile/yining-zhu/?list=30under30-science/" target="_blank" rel="noopener">Read the story &#8599;</a></div></article>

<article class="about-honor-card"><div class="about-honor-image"><img loading="lazy" decoding="async" src="/images/Siebel-Scholars-1024x664.png" alt="Siebel Scholar Award"></div><div class="about-honor-copy"><p class="about-eyebrow">2025.09</p><h3>Siebel Scholar Award</h3><p>Siebel Foundation</p><a class="about-text-link" href="https://hub.jhu.edu/2025/10/13/johns-hopkins-siebel-scholars-2026/" target="_blank" rel="noopener">Read the story &#8599;</a></div></article>

</div>

<div class="about-rail-footer"><span>Fellowships and recognition</span><div class="about-rail-controls"><button type="button" data-rail-prev aria-controls="honor-rail" aria-label="Previous honors"><span aria-hidden="true">&#8592;</span></button><button type="button" data-rail-next aria-controls="honor-rail" aria-label="Next honors"><span aria-hidden="true">&#8594;</span></button></div></div>

<details class="about-more-honors"><summary>More honors and awards<span aria-hidden="true">+</span></summary><div class="about-award-list">

<article class="about-award-row"><span>2025.04</span><div><h3>Student Travel Achievement Recognition Award</h3><p>Society for Biomaterials</p></div></article>

<article class="about-award-row"><span>2024.05</span><div><h3>Meritorious Abstract Travel Award</h3><p>American Society of Gene & Cell Therapy</p></div></article>

<article class="about-award-row"><span>2024.04</span><div><h3>The Hans J. Prochaska Research Award</h3><p>Johns Hopkins University</p></div><a class="about-text-link" href="https://hopkinsyidp.org/people/yining-zhu/" target="_blank" rel="noopener">Read the story &#8599;</a></article>

<article class="about-award-row"><span>2023.04</span><div><h3>Student Travel Achievement Recognition Award</h3><p>Society for Biomaterials</p></div></article>

</div></details></section>

<section id="professional-training" class="about-band about-training">

<header class="about-heading"><div><p class="about-eyebrow">Professional training &amp; education</p><h2>A journey across disciplines.</h2></div></header>

<div class="about-journey" data-journey><div class="about-journey-options">

<details class="about-journey-item" open data-image="/images/Duke%20Postdoc.png" data-caption="Postdoctoral research at Duke University">
    <summary><span><small>2026.02 – current</small>Postdoctoral Fellow<span class="about-journey-place">Duke University</span></span><span class="about-chevron" aria-hidden="true"></span></summary>
    <div class="about-journey-description"><p>I am a Postdoctoral Fellow in Biomedical Engineering in the laboratory of Dr. John W. Hickey, advancing work at the intersection of gene delivery, systems immunology, and spatial proteomics.</p></div>
    <figure class="about-journey-inline"><img loading="lazy" decoding="async" src="/images/Duke%20Postdoc.png" alt="Postdoctoral research at Duke University"><figcaption>Postdoctoral research at Duke University</figcaption></figure>
  </details>

<details class="about-journey-item"  data-image="/images/JHU%20postdoc.JPG" data-caption="Postdoctoral research at Johns Hopkins University">
    <summary><span><small>2025.10 – 2026.01</small>Postdoctoral Associate<span class="about-journey-place">Johns Hopkins University</span></span><span class="about-chevron" aria-hidden="true"></span></summary>
    <div class="about-journey-description"><p>Following my doctoral training, I continued postdoctoral research at Johns Hopkins University with Dr. Hai-Quan Mao, building on my work in biomaterials, lipid nanoparticles, and immune engineering.</p></div>
    <figure class="about-journey-inline"><img loading="lazy" decoding="async" src="/images/JHU%20postdoc.JPG" alt="Postdoctoral research at Johns Hopkins University"><figcaption>Postdoctoral research at Johns Hopkins University</figcaption></figure>
  </details>

<details id="education" class="about-journey-item" data-image="/images/Yining%20with%20lab.png" data-caption="Doctoral training at Johns Hopkins University">
    <summary><span><small>2025</small>Ph.D., Biomedical Engineering<span class="about-journey-place">Johns Hopkins University</span></span><span class="about-chevron" aria-hidden="true"></span></summary>
    <div class="about-journey-description"><p>My doctoral training focused on biomaterials, lipid nanoparticles, and immune engineering.</p></div>
    <figure class="about-journey-inline"><img loading="lazy" decoding="async" src="/images/Yining%20with%20lab.png" alt="Doctoral training at Johns Hopkins University"><figcaption>Doctoral training at Johns Hopkins University</figcaption></figure>
  </details>

<details id="education-masters" class="about-journey-item" data-image="/images/MSE%20graduation.png" data-caption="Master’s graduation at Johns Hopkins University">
    <summary><span><small>2021</small>M.S.E., Biomedical Engineering<span class="about-journey-place">Johns Hopkins University</span></span><span class="about-chevron" aria-hidden="true"></span></summary>
    <div class="about-journey-description"><p>I earned my M.S.E. in Biomedical Engineering at Johns Hopkins University.</p></div>
    <figure class="about-journey-inline"><img loading="lazy" decoding="async" src="/images/MSE%20graduation.png" alt="Master’s graduation at Johns Hopkins University"><figcaption>Master’s graduation at Johns Hopkins University</figcaption></figure>
  </details>

<details id="education-bachelors" class="about-journey-item" data-image="/images/SCU.png" data-caption="Sichuan University">
    <summary><span><small>2019</small>B.S., Pharmacy<span class="about-journey-place">Sichuan University</span></span><span class="about-chevron" aria-hidden="true"></span></summary>
    <div class="about-journey-description"><p>I earned my B.S. in Pharmacy at Sichuan University, establishing the foundation for my later work in biomaterials and genetic medicine delivery.</p></div>
    <figure class="about-journey-inline"><img loading="lazy" decoding="async" src="/images/SCU.png" alt="Sichuan University"><figcaption>Sichuan University</figcaption></figure>
  </details>

</div><figure class="about-journey-stage" aria-live="polite" aria-atomic="true"><img loading="lazy" decoding="async" src="/images/Duke%20Postdoc.png" alt="Postdoctoral research at Duke University"><figcaption>Postdoctoral research at Duke University</figcaption></figure></div></section>



<section id="talks" class="about-band about-talks">

<header class="about-heading"><div><p class="about-eyebrow">Conversations in science</p><h2>Talks and presentations.</h2></div></header>

<div class="about-talk-list">

<details class="about-talk"><summary><span class="about-talk-date">2026.05</span><span>American Society of Gene &amp; Cell Therapy Annual Meeting.</span><span class="about-chevron" aria-hidden="true"></span></summary><div class="about-talk-description"><p>Age-related Heterogeneity of Systemic Gene Expression Impairs Immune Responses to mRNA Lipid Nanoparticle Cancer Vaccines.</p><p class="about-talk-format">Oral Presentation.</p><p><a href="https://www.asgct.org/" target="_blank" rel="noopener">American Society of Gene &amp; Cell Therapy Annual Meeting.</a></p></div></details>

<details class="about-talk"><summary><span class="about-talk-date">2026.03</span><span>Society of Biomaterials Annual Meeting and Exposition.</span><span class="about-chevron" aria-hidden="true"></span></summary><div class="about-talk-description"><p>Age-related Heterogeneity of Systemic Gene Expression Impairs Immune Responses to mRNA Lipid Nanoparticle Cancer Vaccines.</p><p><a href="https://biomaterials.org/events" target="_blank" rel="noopener">Society of Biomaterials Annual Meeting and Exposition.</a></p></div></details>

<details class="about-talk"><summary><span class="about-talk-date">2025.03</span><span>Society of Biomaterials Annual Meeting and Exposition.</span><span class="about-chevron" aria-hidden="true"></span></summary><div class="about-talk-description"><p>Enhancing Cell Transfection Efficiency via Modulation of Extracellular Fluid Viscosity.</p><p><a href="https://biomaterials.org/events" target="_blank" rel="noopener">Society of Biomaterials Annual Meeting and Exposition.</a></p></div></details>

<details class="about-talk"><summary><span class="about-talk-date">2025.03</span><span>Society of Biomaterials Annual Meeting and Exposition.</span><span class="about-chevron" aria-hidden="true"></span></summary><div class="about-talk-description"><p>mRNA lipid nanoparticle-incorporated nanofiber-hydrogel composite generates a local immunostimulatory niche for cancer immunotherapy.</p><p><a href="https://biomaterials.org/events" target="_blank" rel="noopener">Society of Biomaterials Annual Meeting and Exposition.</a></p></div></details>

<details class="about-talk"><summary><span class="about-talk-date">2024.10</span><span>Biomedical Engineering Society Annual Meeting.</span><span class="about-chevron" aria-hidden="true"></span></summary><div class="about-talk-description"><p>Engineering A Biomaterials-based Lymphoid Niche for mRNA Lipid Nanoparticle Cancer Vaccines.</p><p><a href="https://www.bmes.org/bmes2024" target="_blank" rel="noopener">Biomedical Engineering Society Annual Meeting.</a></p></div></details>

<details class="about-talk"><summary><span class="about-talk-date">2024.05</span><span>American Society of Gene & Cell Therapy Annual Meeting.</span><span class="about-chevron" aria-hidden="true"></span></summary><div class="about-talk-description"><p>A mRNA lipid nanoparticle incorporated nanofiber-hydrogel composite generates a local immunostimulatory niche for cancer immunotherapy.</p><p><a href="https://www.asgct.org/" target="_blank" rel="noopener">American Society of Gene & Cell Therapy Annual Meeting.</a></p></div></details>

<details class="about-talk"><summary><span class="about-talk-date">2023.03</span><span>Society of Biomaterials Annual Meeting and Exposition.</span><span class="about-chevron" aria-hidden="true"></span></summary><div class="about-talk-description"><p>Lipid Nanoparticle Composition Shapes Immune Response to mRNA Vaccine and Potency of Anticancer Immunity.</p><p><a href="https://biomaterials.org/events" target="_blank" rel="noopener">Society of Biomaterials Annual Meeting and Exposition.</a></p></div></details>

<details class="about-talk"><summary><span class="about-talk-date">2022.03</span><span>Society of Biomaterials Annual Meeting and Exposition.</span><span class="about-chevron" aria-hidden="true"></span></summary><div class="about-talk-description"><p>Multi-step Screening and Composition Optimization of Lipid Nanoparticles for Liver-targeted Plasmid DNA Delivery.</p><p><a href="https://biomaterials.org/events" target="_blank" rel="noopener">Society of Biomaterials Annual Meeting and Exposition.</a></p></div></details>

</div></section></div>

<script src="{{ '/assets/js/about.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
