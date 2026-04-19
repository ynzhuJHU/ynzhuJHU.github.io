--- 
permalink: / 
title: "Homepage" 
author_profile: true 
redirect_from: 
- /about/ - /about.html 
---


<span class='anchor' id='about-me'></span>

<div class="hero-banner">
  <img src="/images/jhu.png" alt="Campus banner">

  <div class="hero-overlay"></div>

  <div class="hero-overlay-text">

  <div class="hero-content">
    <h1 class="hero-title">
      Designing Next-Generation genetic Medicines<br>
      through Biomaterials and Systems Immunology
    </h1>

    <div class="hero-tags">
      <span>Immunoengineering</span>
      <span>Gene Therapy</span>
      <span>Biomaterials</span>
      <span>Spatial Proteomics</span>
    </div>
  </div>

  </div>

</div>

<style>

.hero-banner {
  position: relative;
}

.hero-banner img {
  width: 100%;
  border-radius: 16px;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.33), rgba(0,0,0,0.08));
  z-index: 1;
}

.hero-overlay-text {
  position: absolute;
  top: 50%;
  right: 36px;
  transform: translateY(-50%);
  z-index: 2;
  color: white;
}

.hero-content {
  width: 620px;          /* wider so the title stays in 2 lines */
  text-align: right;
}

.hero-title {
  font-size: 24px;       /* slightly smaller */
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 14px 0;
  color: white;
}

.hero-divider {
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.7);
  margin: 0 0 16px 0;
}

.hero-tags {
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  gap: 10px;
  white-space: nowrap;
}

.hero-tags span {
  display: inline-block;
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13px;
  line-height: 1;
}

</style>


<div class="intro-grid">

  <div class="intro-card">
    <div class="image-box">
      <img src="/images/Position and training.png" alt="Position and training">
    </div>
    <div class="intro-copy">
      <span class="intro-kicker">Current Role</span>
      <h3>Duke Biomedical Engineering</h3>
      <p>
        I am a Postdoc Fellow in Biomedical Engineering at Duke University,
        working in the laboratory of
        <a href="https://sites.google.com/view/john-w-hickey/home" target="_blank">
          Dr. John W. Hickey
        </a>
        from February 2026. Prior to this, I conducted postdoctoral research at
        Johns Hopkins University with
        <a href="https://maogroup.jhu.edu/" target="_blank">
          Dr. Hai-Quan Mao
        </a>,
        following my doctoral training.
      </p>
    </div>
  </div>

  <div class="intro-card">
    <div class="image-box">
      <img src="/images/Research focues.jpeg" alt="Research focus">
    </div>
    <div class="intro-copy">
      <span class="intro-kicker">Research Focus</span>
      <h3>Gene Delivery to Systems Immunology</h3>
      <p>
        My doctoral and early postdoctoral research centered on the design and
        optimization of lipid nanoparticles (LNPs) for gene therapy and mRNA vaccine
        delivery. I am now pivoting toward spatial proteomics and systems immunology
        to study aging-associated immune responses.
      </p>
    </div>
  </div>

  <div class="intro-card">
    <div class="image-box">
      <img src="/images/Recognition.png" alt="Recognition">
    </div>
    <div class="intro-copy">
      <span class="intro-kicker">Recognition</span>
      <h3>Fellowships and Honors</h3>
      <p>
        I have been recognized as a
        <a href="https://www.schmidtsciencefellows.org/" target="_blank">
          <strong>Schmidt Science Fellow</strong>
        </a>
        (2026),
        a
        <a href="https://hub.jhu.edu/2025/10/13/johns-hopkins-siebel-scholars-2026/" target="_blank">
          <strong>Siebel Scholar</strong>
        </a>
        (2025), and named to
        <a href="https://www.forbes.com/profile/yining-zhu/" target="_blank">
          <strong>Forbes 30 Under 30 - Science, U.S.</strong>
        </a>
        (2026) for contributions to nanoparticle-enabled gene delivery and immunoengineering.
      </p>
    </div>
  </div>

</div>

<div style="width: 100%; height: 1px; background: linear-gradient(to right, transparent, #ccc, transparent); margin: 50px 0 25px 0;"></div>
<style>
.pub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid #d9d9d9;
}

.pub-header h2 {
  margin: 0;
}

.scholar-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 0 14px;
  border-radius: 999px;
  background: #1f57c3;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.2;
  text-decoration: none;
  box-shadow: 0 6px 16px rgba(31, 87, 195, 0.22);
}

.scholar-badge:hover {
  background: #17439a;
  color: #fff;
}

.paper-box {
  position: relative;
  display: flex;
  gap: 28px;
  align-items: center;
  background: #fbfcfe;
  border-radius: 18px;
  padding: 28px 24px 22px 24px;
  margin: 28px 0;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.25s ease;
}

.paper-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.12);
}

.paper-box-label {
  position: absolute;
  top: -12px;
  left: 24px;
  background: #1f57c3;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}

.paper-box-image {
  flex: 0 0 40%;
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
  max-width: 620px;
  font-size: 1.02rem;
  line-height: 1.6;
}

.paper-title {
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.2px;
  margin-bottom: 8px;
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
  margin-bottom: 10px;
  color: #222;
}

.paper-meta {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px 0 14px 0;
  flex-wrap: wrap;
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: #e9f1ff;
  font-size: 0.92rem;
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
  font-size: 0.95rem;
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
  padding-left: 1.2em;
}

.paper-summary li {
  margin: 0;
}

@media (max-width: 900px) {
  .paper-box {
    flex-direction: column;
    align-items: flex-start;
  }

  .paper-box-image {
    width: 100%;
    flex: 0 0 auto;
  }

  .paper-box-text {
    max-width: 100%;
  }

  .paper-box-label {
    position: static;
    margin-bottom: 14px;
  }
}
</style>

<div class="pub-header">
  <h2>Selected Publications</h2>

  <a href="https://scholar.google.com/citations?user=rp1pkakAAAAJ" target="_blank" class="scholar-badge">
    Google Scholar - {{ site.data.scholar_citations.total_citations | default: "1500+" }} citations
  </a>
</div>

<div class="paper-box">
  <div class="paper-box-label">Nature Chemical Engineering 2026</div>
  <div class="paper-box-image">
    <img src="images/crosslink.png" alt="Crosslinking LNP figure">
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
  <div class="paper-box-label">Materials Today 2026</div>
  <div class="paper-box-image">
    <img src="images/Imidazolium.jpg" alt="Imidazolium LNP figure">
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
  <div class="paper-box-label">Nature Communications 2025</div>
  <div class="paper-box-image">
    <img src="images/LiNx.jpg" alt="Nanofiber hydrogel composite figure">
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
  <div class="paper-box-label">Science Advances 2025</div>
  <div class="paper-box-image">
    <img src="images/sciadv.ady5579-f1.jpg" alt="Spleen-tropic LNP screening figure">
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
  <div class="paper-box-label">Nature Biomedical Engineering 2024</div>
  <div class="paper-box-image">
    <img src="images/FigureScreening.png" alt="Helper T cell LNP screening figure">
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
  <div class="paper-box-label">Nature Chemical Engineering 2024</div>
  <div class="paper-box-image">
    <img src="images/Viscosity.png" alt="Viscosity transfection figure">
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
  <div class="paper-box-label">Biomaterials 2024</div>
  <div class="paper-box-image">
    <img src="images/Oral.png" alt="Intraduodenal delivery figure">
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
  <div class="paper-box-label">Nature Communications 2022</div>
  <div class="paper-box-image">
    <img src="images/Figuremultistep.png" alt="DNA LNP multistep screening figure">
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
  <div class="paper-box-label">Nano Letters 2021</div>
  <div class="paper-box-image">
    <img src="images/FigureSize.jpeg" alt="Lentiviral vector DNA particle figure">
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
  <div class="paper-box-label">Journal of Controlled Release 2020</div>
  <div class="paper-box-image">
    <img src="images/JCR.jpg" alt="Melanoma photoimmunotherapy figure">
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



<style>
.about-lower {
  margin-top: 52px;
  color: #172033;
}

.about-section {
  margin: 42px 0;
  padding-top: 28px;
  border-top: 1px solid #dce3ee;
}

.about-section h2 {
  margin: 0 0 20px 0;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.9rem;
  font-weight: 650;
  line-height: 1.2;
}

.about-section-kicker {
  display: block;
  margin-bottom: 8px;
  color: #1f57c3;
  font-size: 0.78rem;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.awards-showcase {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 28px;
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
  padding: 18px 20px;
  border: 1px solid rgba(20, 32, 56, 0.09);
  border-left: 4px solid #1f57c3;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(20, 32, 56, 0.055);
}

.award-card {
  display: grid;
  grid-template-columns: 84px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
}

.award-date,
.appointment-date,
.education-date,
.talk-year {
  color: #1f57c3;
  font-size: 0.84rem;
  font-weight: 750;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.award-title,
.appointment-title,
.education-title {
  display: block;
  color: #111827;
  font-size: 1rem;
  font-weight: 750;
  line-height: 1.35;
}

.award-org,
.appointment-place,
.education-place {
  display: block;
  margin-top: 3px;
  color: #5d6675;
  font-size: 0.9rem;
  line-height: 1.4;
}

.award-link {
  display: inline-flex;
  align-items: center;
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
  display: grid;
  gap: 18px;
}

.award-media img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 14px 32px rgba(20, 32, 56, 0.16);
}

.appointment-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.appointment-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 110px;
  gap: 18px;
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
  max-width: 110px;
  max-height: 56px;
  object-fit: contain;
}

.education-timeline {
  display: grid;
  gap: 12px;
}

.education-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 120px;
  gap: 18px;
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
  max-width: 115px;
  max-height: 58px;
  object-fit: contain;
}

.talk-grid {
  display: grid;
  gap: 12px;
}

.talk-card {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 16px;
  border-left-color: #0f766e;
}

.talk-card a {
  color: #1f57c3;
  font-weight: 750;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.talk-card em {
  color: #293241;
}

@media (max-width: 900px) {
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
}
</style>

<div class="about-lower">

<section class="about-section">
  <span class="about-section-kicker">Recognition</span>
  <h2>Honors and Awards</h2>

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

<section class="about-section">
  <span class="about-section-kicker">Appointments</span>
  <h2>Professional Appointments</h2>

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

<section class="about-section">
  <span class="about-section-kicker">Training</span>
  <h2>Education</h2>

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

<section class="about-section">
  <span class="about-section-kicker">Presentations</span>
  <h2>Talks</h2>

  <div class="talk-grid">
    <div class="talk-card">
      <span class="talk-year">2026</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition</a>. <em>Age-related Heterogeneity of Systemic Gene Expression Impairs Immune Responses to mRNA Lipid Nanoparticle Cancer Vaccines.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2025</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition</a>. <em>Enhancing Cell Transfection Efficiency via Modulation of Extracellular Fluid Viscosity.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2025</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition</a>. <em>mRNA lipid nanoparticle-incorporated nanofiber-hydrogel composite generates a local immunostimulatory niche for cancer immunotherapy.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2024</span>
      <div><a href="https://www.bmes.org/bmes2024" target="_blank">Biomedical Engineering Society Annual Meeting</a>. <em>Engineering A Biomaterials-based Lymphoid Niche for mRNA Lipid Nanoparticle Cancer Vaccines.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2024</span>
      <div><a href="https://www.asgct.org/" target="_blank">American Society of Gene & Cell Therapy Annual Meeting</a>. <em>A mRNA lipid nanoparticle incorporated nanofiber-hydrogel composite generates a local immunostimulatory niche for cancer immunotherapy.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2023</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition</a>. <em>Lipid Nanoparticle Composition Shapes Immune Response to mRNA Vaccine and Potency of Anticancer Immunity.</em></div>
    </div>

    <div class="talk-card">
      <span class="talk-year">2022</span>
      <div><a href="https://biomaterials.org/events" target="_blank">Society of Biomaterials Annual Meeting and Exposition</a>. <em>Multi-step Screening and Composition Optimization of Lipid Nanoparticles for Liver-targeted Plasmid DNA Delivery.</em></div>
    </div>
  </div>
</section>

</div>



<hr style="margin: 70px 0 40px 0;">

<div class="footer-hero">
  <img src="/images/jhu2.png" alt="Campus closing banner">

  <div class="footer-overlay-text">
    Engineering the Future of Medicine.
  </div>
</div>
