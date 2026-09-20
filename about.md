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


<header class="about-heading"><div><p class="about-eyebrow">Research in focus</p><h2>Selected publications <span class="about-selection-note">(First author &amp; Corresponding)</span></h2></div><a class="about-scholar-link" href="https://scholar.google.com/citations?user=rp1pkakAAAAJ&amp;hl" target="_blank" rel="noopener"><span class="about-scholar-title">Google Scholar <span aria-hidden="true">&#8599;</span></span><small>{{ site.data.scholar_citations.total_citations | default: 1500 }} citations</small></a></header>

<div class="about-publication-toolbar"><div class="about-publication-overview"><p>14 selected works <span aria-hidden="true">&middot;</span> * Equal contribution; # corresponding author.</p><a class="about-text-link about-profile-trigger" href="{{ "/research/#publications" | relative_url }}" data-research-profile>View my full research profile <span class="about-profile-plus" aria-hidden="true">+</span></a></div><div class="about-rail-controls"><button type="button" data-rail-prev aria-controls="publication-rail" aria-label="Previous publications"><span aria-hidden="true">&#8592;</span></button><button type="button" data-rail-next aria-controls="publication-rail" aria-label="Next publications"><span aria-hidden="true">&#8594;</span></button></div></div>
<div class="about-publication-rail" id="publication-rail" tabindex="0" role="region" aria-label="Selected publications, scroll horizontally">


{% include lead_publication_cards.html %}

</div>





</section>

<section id="honors-awards" class="about-band about-honors" data-card-rail>

<header class="about-heading"><div><p class="about-eyebrow">Recognition</p><h2>Honors and awards.</h2></div></header>

<div class="about-honor-rail" id="honor-rail" tabindex="0" role="region" aria-label="Featured honors, scroll horizontally">

<article class="about-honor-card"><div class="about-honor-image"><img loading="lazy" decoding="async" src="/images/2026%20Schmidt.JPG" alt="Schmidt Science Fellow"></div><div class="about-honor-copy"><p class="about-eyebrow">2026.03</p><h3>Schmidt Science Fellow</h3><p>Schmidt Futures, US</p><a class="about-text-link" href="https://www.forbes.com/sites/michaeltnietzel/2026/03/25/the-2026-cohort-of-schmidt-science-fellows-is-announced/" target="_blank" rel="noopener">Read the story &#8599;</a></div></article>

<article class="about-honor-card"><div class="about-honor-image"><img loading="lazy" decoding="async" src="/images/Forbes%20Science.jpg" alt="Forbes 30 Under 30 in Science"></div><div class="about-honor-copy"><p class="about-eyebrow">2026</p><h3>Forbes 30 Under 30 in Science</h3><p>Forbes Media</p><a class="about-text-link" href="https://www.forbes.com/profile/yining-zhu/?list=30under30-science/" target="_blank" rel="noopener">Read the story &#8599;</a></div></article>

<article class="about-honor-card"><div class="about-honor-image"><img loading="lazy" decoding="async" src="/images/Siebel-Scholars-1024x664.png" alt="Siebel Scholar Award"></div><div class="about-honor-copy"><p class="about-eyebrow">2025.09</p><h3>Siebel Scholar Award</h3><p>Siebel Foundation</p><a class="about-text-link" href="https://hub.jhu.edu/2025/10/13/johns-hopkins-siebel-scholars-2026/" target="_blank" rel="noopener">Read the story &#8599;</a></div></article>

</div>

<div class="about-rail-footer"><span>Fellowships and recognition</span><div class="about-rail-controls"><button type="button" data-rail-prev aria-controls="honor-rail" aria-label="Previous honors"><span aria-hidden="true">&#8592;</span></button><button type="button" data-rail-next aria-controls="honor-rail" aria-label="Next honors"><span aria-hidden="true">&#8594;</span></button></div></div>

<details class="about-more-honors" data-full-awards><summary>View the full award list <span aria-hidden="true">+</span></summary>
{% include full_awards.html %}
</details></section>

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
    <summary><span><small>2021–2025</small>Ph.D., Biomedical Engineering<span class="about-journey-place">Johns Hopkins University</span></span><span class="about-chevron" aria-hidden="true"></span></summary>
    <div class="about-journey-description"><p>My doctoral training focused on biomaterials, lipid nanoparticles, and immune engineering.</p></div>
    <figure class="about-journey-inline"><img loading="lazy" decoding="async" src="/images/Yining%20with%20lab.png" alt="Doctoral training at Johns Hopkins University"><figcaption>Doctoral training at Johns Hopkins University</figcaption></figure>
  </details>

<details id="education-masters" class="about-journey-item" data-image="/images/MSE%20graduation.png" data-caption="Master’s graduation at Johns Hopkins University">
    <summary><span><small>2019–2021</small>M.S.E., Biomedical Engineering<span class="about-journey-place">Johns Hopkins University</span></span><span class="about-chevron" aria-hidden="true"></span></summary>
    <div class="about-journey-description"><p>I earned my M.S.E. in Biomedical Engineering at Johns Hopkins University.</p></div>
    <figure class="about-journey-inline"><img loading="lazy" decoding="async" src="/images/MSE%20graduation.png" alt="Master’s graduation at Johns Hopkins University"><figcaption>Master’s graduation at Johns Hopkins University</figcaption></figure>
  </details>

<details id="education-bachelors" class="about-journey-item" data-image="/images/sichuan-undergraduate-graduation.jpg" data-caption="Undergraduate graduation at Sichuan University">
    <summary><span><small>2015–2019</small>B.S., Pharmacy<span class="about-journey-place">Sichuan University</span></span><span class="about-chevron" aria-hidden="true"></span></summary>
    <div class="about-journey-description"><p>I earned my B.S. in Pharmacy at Sichuan University, establishing the foundation for my later work in biomaterials and genetic medicine delivery.</p></div>
    <figure class="about-journey-inline"><img loading="lazy" decoding="async" src="/images/sichuan-undergraduate-graduation.jpg" alt="Undergraduate graduation at Sichuan University"><figcaption>Undergraduate graduation at Sichuan University</figcaption></figure>
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

<dialog class="research-profile-dialog" id="research-profile-dialog" aria-labelledby="research-profile-title">
  <div class="research-profile-shell">
    <header class="research-profile-header">
      <h2 id="research-profile-title">Full research profile</h2>
      <a href="{{ '/research/' | relative_url }}" target="_blank" rel="noopener">Open full page <span aria-hidden="true">&#8599;</span></a>
      <button type="button" class="research-profile-close" aria-label="Close research profile" autofocus><span aria-hidden="true">&#215;</span></button>
    </header>
    <div class="research-profile-body" aria-busy="true">
      <p class="research-profile-status" role="status">Loading research profile…</p>
      <iframe class="research-profile-frame" title="Yining Zhu’s full research profile" data-src="{{ '/research/' | relative_url }}" hidden></iframe>
    </div>
  </div>
</dialog>
<script src="{{ '/assets/js/research-profile.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>

<dialog class="research-profile-dialog awards-dialog" id="awards-dialog" aria-labelledby="awards-dialog-title">
  <div class="research-profile-shell">
    <header class="research-profile-header">
      <h2 id="awards-dialog-title">Awards and honors</h2>
      <button type="button" class="research-profile-close" aria-label="Close full award list" autofocus><span aria-hidden="true">&#215;</span></button>
    </header>
    <div class="awards-dialog-content" tabindex="0" role="region" aria-label="Full award list"></div>
  </div>
</dialog>
<script src="{{ '/assets/js/awards.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
