--- 
permalink: / 
title: "Homepage" 
author_profile: true 
redirect_from: 
- /about/ - /about.html 
---


{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

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

.scholar-badge img {
  height: 24px;
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
    <img src="https://img.shields.io/badge/Google%20Scholar-1500%2B%20citations-blue?logo=google-scholar"
         alt="Google Scholar Citations">
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
        Crosslinking of lipid nanoparticles enhances mRNA delivery efficiency and vaccine efficacy
      </a>
    </div>
    <div class="paper-authors">
      Liu X*, <strong>Zhu Y*</strong>, Wei C, Lin J, Yu D, Kong J, Shao F, Ma J, Xu T, Lu X, Su Y, Goodier KD, Cheng L, Toh WH, Erb CJ, Li S, Wang TH, Mao HQ.
    </div>
    <div class="paper-meta">
      <a class="meta-pill news" href="https://inbt.jhu.edu/new-crosslinking-chemistry-boosts-stability-and-potency-of-mrna-lipid-nanoparticles/" target="_blank">News</a>
      <span class="meta-pill">1 citation</span>
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
        Imidazolium lipid-based nanoparticles enable efficient mRNA delivery and enhanced cellular immunity
      </a>
    </div>
    <div class="paper-authors">
      Lin J*, <strong>Zhu Y*</strong>, Cheng L, Wei C, Kong J, Choy J, Lu X, Yu D, Ma J, Liu X, Su Y, Naganand S, Gueguen C, Huaulme Q, Urguia P, Mao HQ.
    </div>
    <div class="paper-meta">
      <span class="meta-pill">0 citations</span>
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
      <span class="meta-pill">19 citations</span>
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
      <span class="meta-pill">2 citations</span>
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
      <span class="meta-pill">105 citations</span>
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
      <span class="meta-pill">9 citations</span>
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
      <span class="meta-pill">15 citations</span>
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
      <span class="meta-pill">149 citations</span>
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
      <span class="meta-pill">31 citations</span>
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
      <span class="meta-pill">99 citations</span>
    </div>
    <ul class="paper-summary">
      <li>Albumin-biomineralized nanoparticles co-delivering a photosensitizer and immunoadjuvant were engineered to couple tumor ablation with immune activation for melanoma therapy.</li>
    </ul>
  </div>
</div>



# Honors and Awards


<div class="awards-wrapper">

  <div class="awards-list">
    <ul>
      <li>
        <em>2026.03</em>, <strong>Schmidt Science Fellow</strong>,
        <em>Schmidt Science Foundation</em>
        <a href="https://www.forbes.com/sites/michaeltnietzel/2026/03/25/the-2026-cohort-of-schmidt-science-fellows-is-announced/" target="_blank"><strong>News</strong></a>
      </li>

      <li>
        <em>2025.12</em>, <strong>Forbes 30 Under 30 in Science</strong>,
        <em>Forbes Media</em>
        <a href="https://www.forbes.com/profile/yining-zhu/?list=30under30-science/" target="_blank"><strong>News</strong></a>
      </li>

      <li>
        <em>2025.09</em>, <strong>Siebel Scholar Award</strong>,
        <em>Siebel Foundation</em>
        <a href="https://hub.jhu.edu/2025/10/13/johns-hopkins-siebel-scholars-2026/" target="_blank"><strong>News</strong></a>
      </li>

      <li>
        <em>2025.04</em>, <strong>Student Travel Achievement Recognition (STAR) Award</strong>,
        <em>Society for Biomaterials</em>
      </li>

      <li>
        <em>2024.05</em>, <strong>Meritorious Abstract Travel Award</strong>,
        <em>American Society of Gene & Cell Therapy</em>
      </li>

      <li>
        <em>2024.04</em>, <strong>The Hans J. Prochaska Research Award</strong>,
        <em>Johns Hopkins University</em>
        <a href="https://hopkinsyidp.org/people/yining-zhu/" target="_blank"><strong>News</strong></a>
      </li>

      <li>
        <em>2023.04</em>, <strong>Student Travel Achievement Recognition (STAR) Award</strong>,
        <em>Society for Biomaterials</em>
      </li>
    </ul>
  </div>

  <div class="awards-image">

    <img src="/images/schmidt_science_fellows.png"
         alt="Schmidt Science Fellows">
    <img src="/images/Forbes Science.jpg"
         alt="Forbes 30 Under 30 Science"
         style="margin-top:26px;">
  </div>

</div>



# Professional Appointments

<div class="appt-wrap">

  <div class="appt-left">
    <ul>
      <li><em>2026.02 – current</em>, Postdoctoral Fellow, <strong>Duke University</strong></li>
      <li><em>2025.10 – 2026.01</em>, Postdoctoral Associate, <strong>Johns Hopkins University</strong></li>
    </ul>
  </div>

  <div class="appt-right">
    <img src="/images/duke.png" alt="Duke University logo">
    <img src="/images/JHU engineering logo1.png" alt="Johns Hopkins University Engineering logo">
  </div>

</div>

<style>


.awards-wrapper {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  margin-top: 20px;
}

.awards-list {
  flex: 1;
}

.awards-image {
  flex: 0 0 320px;
}

.awards-image img {
  width: 100%;
  max-width: 320px;
  border-radius: 10px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.18);
}

/* Mobile */
@media (max-width: 900px) {
  .awards-wrapper {
    flex-direction: column;
  }

  .awards-image {
    margin-top: 24px;
  }
}

  .appt-wrap{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 28px;
    margin-top: 10px;
  }

  .appt-left{
    flex: 1 1 auto;
    min-width: 0;
  }

  .appt-left ul{
    margin: 0;
    padding-left: 1.2em;
  }

  .appt-right{
    flex: 0 0 360px;           /* controls the right column width */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 18px;
  }

  .appt-right img{
    height: 56px;              /* 👈 main size control */
    width: auto;
    max-width: 170px;          /* prevents one logo dominating */
    object-fit: contain;
    display: block;
  }

  /* Mobile: stack nicely */
  @media (max-width: 900px){
    .appt-wrap{ flex-direction: column; }
    .appt-right{ flex: 0 0 auto; justify-content: flex-start; }
  }
</style>


<style>
  
.education-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: center;
  margin: 60px 0;
}

.edu-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 22px;
  font-size: 1.05rem;
}

.edu-icon {
  color: #4da3ff;
  font-size: 1.2rem;
  line-height: 1.4;
}

.education-logos {
  display: flex;
  flex-direction: row;        /* 👈 same row */
  justify-content: center;
  align-items: center;
  gap: 40px;                  /* space between JHU and SCU */
}


.education-logos img {
  max-width: 160px;
  width: 100%;
  height: auto;
  opacity: 0.85;
}


/* Mobile */
@media (max-width: 900px) {
  .education-section {
    grid-template-columns: 1fr;
  }

  .education-logos {
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }

  .education-logos img {
    max-width: 140px;
  }
}

.education-logos {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 36px;
  margin-top: 24px;
}

.education-logos img {
  object-fit: contain;
  display: block;
}

/* JHMI is wide → make it taller */
.education-logos img[alt*="Hopkins"] {
  height: 120px;
}

/* SCU is circular → must be smaller */
.education-logos img[alt*="Sichuan"] {
  height: 100px;
}

</style>

# Educations

<div class="education-section">

  <div class="education-text">

    <div class="edu-item">
      <span class="edu-icon">🎓</span>
      <div>
        <strong>Ph.D., Biomedical Engineering, 2025</strong><br>
        Johns Hopkins University
      </div>
    </div>

    <div class="edu-item">
      <span class="edu-icon">🎓</span>
      <div>
        <strong>M.S.E., Biomedical Engineering, 2021</strong><br>
        Johns Hopkins University
      </div>
    </div>

    <div class="edu-item">
      <span class="edu-icon">🎓</span>
      <div>
        <strong>B.S., Pharmacy, 2019</strong><br>
        Sichuan University
      </div>
    </div>

  </div>

  <div class="education-logos">
    <img src="/images/JHMI.png" alt="Johns Hopkins University">
    <img src="/images/SCU.png" alt="Sichuan University">
  </div>

</div>



# Talks
- *2026*, [Society of Biomaterials Annual Meeting and Exposition](https://biomaterials.org/events). *Age-related Heterogeneity of Systemic Gene Expression Impairs Immune Responses to mRNA Lipid Nanoparticle Cancer Vaccines.*
- *2025*, [Society of Biomaterials Annual Meeting and Exposition](https://biomaterials.org/events). *Enhancing Cell Transfection Efficiency via Modulation of Extracellular Fluid Viscosity.*
- *2025*, [Society of Biomaterials Annual Meeting and Exposition](https://biomaterials.org/events). *mRNA lipid nanoparticle-incorporated nanofiber-hydrogel composite generates a local immunostimulatory niche for cancer immunotherapy.*
- *2024*, [Biomedical Engineering Society Annual Meeting](https://www.bmes.org/bmes2024). *Engineering A Biomaterials-based Lymphoid Niche for mRNA Lipid Nanoparticle Cancer Vaccines.*
- *2024*, [American Society of Gene & Cell Therapy Annual Meeting](https://www.asgct.org/). *A mRNA lipid nanoparticle incorporated nanofiber-hydrogel composite generates a local immunostimulatory niche for cancer immunotherapy.*
- *2023*, [Society of Biomaterials Annual Meeting and Exposition](https://biomaterials.org/events). *Lipid Nanoparticle Composition Shapes Immune Response to mRNA Vaccine and Potency of Anticancer Immunity.*
- *2022*, [Society of Biomaterials Annual Meeting and Exposition](https://biomaterials.org/events). *Multi-step Screening and Composition Optimization of Lipid Nanoparticles for Liver-targeted Plasmid DNA Delivery.*



<hr style="margin: 70px 0 40px 0;">

<div class="footer-hero">
  <img src="/images/jhu2.png" alt="Campus closing banner">

  <div class="footer-overlay-text">
    Engineering the Future of Medicine.
  </div>
</div>
