---
permalink: /news/
title: "News"
author_profile: false
layout: single
---

<style>
.news-page {
  color: #172033;
}

.news-hero {
  position: relative;
  overflow: hidden;
  margin: 0 0 34px 0;
  border-radius: 8px;
  background: #101827;
  box-shadow: 0 18px 42px rgba(18, 28, 45, 0.16);
}

.news-hero img {
  width: 100%;
  min-height: 320px;
  max-height: 480px;
  object-fit: cover;
  display: block;
  opacity: 0.72;
}

.news-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(16, 24, 39, 0.92), rgba(16, 24, 39, 0.48) 50%, rgba(16, 24, 39, 0.12));
}

.news-hero-content {
  position: absolute;
  left: 34px;
  bottom: 32px;
  z-index: 1;
  max-width: 650px;
  color: #fff;
}

.news-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  color: #bfdbfe;
  font-size: 0.78rem;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.news-hero h1 {
  margin: 0 0 12px 0;
  color: #fff;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 2.25rem;
  font-weight: 650;
  line-height: 1.12;
}

.news-hero p {
  max-width: 560px;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
}

.news-overview {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 0 0 40px 0;
}

.news-overview a {
  display: block;
  min-width: 0;
  padding: 20px;
  border: 1px solid rgba(20, 32, 56, 0.09);
  border-top: 4px solid #1f57c3;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(20, 32, 56, 0.075);
  color: #172033;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.news-overview a:nth-child(2) {
  border-top-color: #0f766e;
}

.news-overview a:nth-child(3) {
  border-top-color: #9a3412;
}

.news-overview a:hover,
.news-overview a:focus-visible {
  border-color: rgba(31, 87, 195, 0.26);
  box-shadow: 0 18px 34px rgba(20, 32, 56, 0.12);
  transform: translateY(-5px);
}

.news-overview a:focus-visible {
  outline: 3px solid rgba(31, 87, 195, 0.22);
  outline-offset: 3px;
}

.news-overview strong {
  display: block;
  margin-bottom: 8px;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 650;
}

.news-overview span {
  color: #4b5563;
  font-size: 0.92rem;
  line-height: 1.45;
}

.news-section {
  scroll-margin-top: 90px;
  margin: 38px 0;
  padding-top: 26px;
  border-top: 1px solid #dce3ee;
}

.news-section h1,
.news-section h2 {
  margin: 0 0 18px 0;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-weight: 650;
  line-height: 1.2;
}

.news-section h1 {
  font-size: 1.95rem;
}

.news-feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.news-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(20, 32, 56, 0.09);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(20, 32, 56, 0.075);
}

.news-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
}

.news-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px;
}

.news-date {
  display: inline-block;
  margin-bottom: 9px;
  color: #1f57c3;
  font-size: 0.78rem;
  font-weight: 750;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.news-card h2,
.news-list-item h2 {
  margin: 0 0 10px 0;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.18rem;
  font-weight: 650;
  line-height: 1.25;
}

.news-card p,
.news-list-item p {
  margin: 0;
  color: #293241;
  font-size: 0.94rem;
  line-height: 1.6;
}

.news-card a,
.news-list-item a {
  color: #1f57c3;
  font-weight: 750;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.news-card-link {
  margin-top: auto;
  padding-top: 16px;
}

.news-link-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
}

.news-list {
  display: grid;
  gap: 14px;
}

.news-list-item {
  display: grid;
  grid-template-columns: 118px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  padding: 18px;
  border: 1px solid rgba(20, 32, 56, 0.09);
  border-left: 4px solid #0f766e;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(20, 32, 56, 0.055);
}

.news-list-item:nth-child(even) {
  border-left-color: #9a3412;
}

.news-list-item .news-date {
  margin: 0;
}

@media (max-width: 900px) {
  .news-hero-content {
    left: 20px;
    right: 20px;
    bottom: 22px;
  }

  .news-hero h1 {
    font-size: 1.75rem;
  }

  .news-overview,
  .news-feature-grid {
    grid-template-columns: 1fr;
  }

  .news-list-item {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .news-overview a {
    transition: none;
  }

  .news-overview a:hover,
  .news-overview a:focus-visible {
    transform: none;
  }
}
</style>

<div class="news-page">

<section class="news-hero">
  <img src="{{ '/images/Duke 2.jpeg' | relative_url }}" alt="Duke University campus">
  <div class="news-hero-content">
    <span class="news-eyebrow">News and Recognition</span>
    <h1>Updates from research, awards, and media coverage</h1>
    <p>A curated record of recent honors, institutional stories, and research coverage across biomaterials, genetic medicine delivery, and immunoengineering.</p>
  </div>
</section>

<nav class="news-overview" aria-label="News sections">
  <a href="#recent-highlights">
    <strong>Recent Highlights</strong>
    <span>Major recognitions, fellowships, and career milestones.</span>
  </a>
  <a href="#media-coverage">
    <strong>Media Coverage</strong>
    <span>External and institutional stories featuring awards and honors.</span>
  </a>
  <a href="#research-news">
    <strong>Research News</strong>
    <span>News stories and publication links connected to translational research.</span>
  </a>
</nav>

<section id="recent-highlights" class="news-section">
  <h1>Recent Highlights</h1>

  <div class="news-feature-grid">
    <article class="news-card">
      <img src="/images/2026 Schmidt.JPG" alt="Schmidt Science Fellows recognition">
      <div class="news-card-body">
        <span class="news-date">2026</span>
        <h2>Selected as a Schmidt Science Fellow</h2>
        <p>Recognized by the Schmidt Science Foundation for interdisciplinary postdoctoral research spanning genetic medicine delivery, systems immunology, and spatial proteomics.</p>
        <div class="news-card-link news-link-row">
          <a href="https://www.forbes.com/sites/michaeltnietzel/2026/03/25/the-2026-cohort-of-schmidt-science-fellows-is-announced/" target="_blank" rel="noopener">Forbes</a>
          <a href="https://www.bme.jhu.edu/news-events/news/hopkins-bme-alum-receives-schmidt-science-fellowship/" target="_blank" rel="noopener">JHU BME</a>
        </div>
      </div>
    </article>

    <article class="news-card">
      <img src="/images/Forbes Science.jpg" alt="Forbes 30 Under 30 Science recognition">
      <div class="news-card-body">
        <span class="news-date">2025</span>
        <h2>Named to Forbes 30 Under 30 in Science</h2>
        <p>Featured by Forbes for work in genetic medicine delivery and immunoengineering.</p>
        <div class="news-card-link"><a href="https://www.forbes.com/profile/yining-zhu/?list=30under30-science/" target="_blank" rel="noopener">View profile</a></div>
      </div>
    </article>

    <article class="news-card">
      <img src="/images/Siebel-Scholars-1024x664.png" alt="Siebel Scholars recognition">
      <div class="news-card-body">
        <span class="news-date">2025</span>
        <h2>Named a Siebel Scholar</h2>
        <p>Recognized by the Siebel Foundation for academic achievement and leadership in engineering.</p>
        <div class="news-card-link"><a href="https://hub.jhu.edu/2025/10/13/johns-hopkins-siebel-scholars-2026/" target="_blank" rel="noopener">Read the announcement</a></div>
      </div>
    </article>
  </div>
</section>

<section id="media-coverage" class="news-section">
  <h1>Media Coverage</h1>

  <div class="news-list">
    <article class="news-list-item">
      <span class="news-date">2026</span>
      <div>
        <h2>Schmidt Science Fellow announcement</h2>
        <p>Coverage of the 2026 cohort of Schmidt Science Fellows. <a href="https://www.forbes.com/sites/michaeltnietzel/2026/03/25/the-2026-cohort-of-schmidt-science-fellows-is-announced/" target="_blank" rel="noopener">Read more</a></p>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">May 15, 2026</span>
      <div>
        <h2>Hopkins BME alum receives Schmidt Science Fellowship</h2>
        <p>Johns Hopkins Biomedical Engineering coverage of Yining Zhu's selection as a 2026 Schmidt Science Fellow. <a href="https://www.bme.jhu.edu/news-events/news/hopkins-bme-alum-receives-schmidt-science-fellowship/" target="_blank" rel="noopener">Read more</a></p>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">2025</span>
      <div>
        <h2>Forbes 30 Under 30 in Science</h2>
        <p>Forbes profile highlighting scientific contributions in genetic medicine delivery. <a href="https://www.forbes.com/profile/yining-zhu/?list=30under30-science/" target="_blank" rel="noopener">Read more</a></p>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">2025</span>
      <div>
        <h2>Johns Hopkins Siebel Scholars announcement</h2>
        <p>Johns Hopkins coverage of the 2026 Siebel Scholars. <a href="https://hub.jhu.edu/2025/10/13/johns-hopkins-siebel-scholars-2026/" target="_blank" rel="noopener">Read more</a></p>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">2024</span>
      <div>
        <h2>Hans J. Prochaska Research Award</h2>
        <p>Recognition through the Johns Hopkins Institute for NanoBioTechnology. <a href="https://hopkinsyidp.org/people/yining-zhu/" target="_blank" rel="noopener">Read more</a></p>
      </div>
    </article>
  </div>
</section>

<section id="research-news" class="news-section">
  <h1>Selected Publication News</h1>

  <div class="news-list">
    <article class="news-list-item">
      <span class="news-date">2026</span>
      <div>
        <h2>Lipid nanoparticle design shapes vaccine trafficking and tissue-specific immunity</h2>
        <p>INBT story on how lipid nanoparticle composition directs where mRNA vaccines travel and where immune protection is built.</p>
        <div class="news-link-row">
          <a href="https://inbt.jhu.edu/new-research-shows-lipid-nanoparticle-design-influences-where-vaccines-travel-and-where-immune-protection-is-built/" target="_blank" rel="noopener">News</a>
          <a href="https://www.nature.com/articles/s41551-026-01706-7" target="_blank" rel="noopener">Publication</a>
        </div>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">2026</span>
      <div>
        <h2>New crosslinking chemistry boosts mRNA lipid nanoparticles</h2>
        <p>INBT story on crosslinking chemistry for stability and potency in mRNA lipid nanoparticles.</p>
        <div class="news-link-row">
          <a href="https://inbt.jhu.edu/new-crosslinking-chemistry-boosts-stability-and-potency-of-mrna-lipid-nanoparticles/" target="_blank" rel="noopener">News</a>
          <a href="https://www.nature.com/articles/s44286-026-00356-5" target="_blank" rel="noopener">Publication</a>
        </div>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">2024</span>
      <div>
        <h2>Machine learning unlocks next-generation lipid nanoparticles</h2>
        <p>INBT coverage of machine-learning-guided design for safer gene editing delivery.</p>
        <div class="news-link-row">
          <a href="https://inbt.jhu.edu/machine-learning-unlocks-next-generation-lipid-nanoparticles-for-safer-gene-editing/" target="_blank" rel="noopener">News</a>
          <a href="https://www.science.org/doi/10.1126/sciadv.ady5579" target="_blank" rel="noopener">Publication</a>
        </div>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">2023</span>
      <div>
        <h2>Lipid nanoparticles for enhanced anti-cancer immunity</h2>
        <p>Johns Hopkins Hub story on lipid nanoparticle design for cancer immunotherapy.</p>
        <div class="news-link-row">
          <a href="https://hub.jhu.edu/2023/12/14/lipid-nanoparticles-for-enhanced-anti-cancer-immunity/#new_tab" target="_blank" rel="noopener">News</a>
          <a href="https://www.nature.com/articles/s41551-023-01131-0" target="_blank" rel="noopener">Publication</a>
        </div>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">2023</span>
      <div>
        <h2>Goldilocks breakthrough in gene therapy development</h2>
        <p>Johns Hopkins Engineering coverage of extracellular fluid viscosity and transfection efficiency.</p>
        <div class="news-link-row">
          <a href="https://engineering.jhu.edu/news/goldilocks-breakthrough-in-gene-therapy-development/" target="_blank" rel="noopener">News</a>
          <a href="https://www.nature.com/articles/s44286-024-00116-3#citeas" target="_blank" rel="noopener">Publication</a>
        </div>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">2022</span>
      <div>
        <h2>Gene medicine delivery, faster and more affordable</h2>
        <p>Johns Hopkins Hub story on platforms for gene medicine delivery.</p>
        <div class="news-link-row">
          <a href="https://hub.jhu.edu/2022/08/23/gene-medicine-delivery-faster-affordable/#new_tab" target="_blank" rel="noopener">News</a>
          <a href="https://www.nature.com/articles/s41467-022-31993-y" target="_blank" rel="noopener">Publication</a>
        </div>
      </div>
    </article>

    <article class="news-list-item">
      <span class="news-date">2021</span>
      <div>
        <h2>Projects create better viral vectors for gene therapy</h2>
        <p>Johns Hopkins coverage of work improving viral vector production for gene therapy.</p>
        <div class="news-link-row">
          <a href="https://hub.jhu.edu/2021/07/15/projects-creates-better-viral-vectors-for-gene-therapy/" target="_blank" rel="noopener">News</a>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8283758/" target="_blank" rel="noopener">Publication</a>
        </div>
      </div>
    </article>
  </div>
</section>

</div>
