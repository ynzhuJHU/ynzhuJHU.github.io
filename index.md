---
permalink: /
title: "Homepage"
author_profile: true
home_layout: true
---

<span class='anchor' id='home'></span>

<style>
.home-hero {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #101827;
  box-shadow: 0 18px 42px rgba(18, 28, 45, 0.16);
  min-height: 360px;
  height: clamp(360px, 42vw, 560px);
}

.home-hero-movie,
.home-hero-slide {
  position: absolute;
  inset: 0;
}

.home-hero-slide {
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.03);
  animation: hero-movie 42s infinite;
  will-change: opacity, transform;
}

.home-hero-slide:nth-child(1) {
  background-image: url("/images/Duke%204.jpg");
}

.home-hero-slide:nth-child(2) {
  background-image: url("/images/Duke%205.jpg");
  animation-delay: 6s;
}

.home-hero-slide:nth-child(3) {
  background-image: url("/images/jhu.jpg");
  animation-delay: 12s;
}

.home-hero-slide:nth-child(4) {
  background-image: url("/images/jhu2.png");
  animation-delay: 18s;
}

.home-hero-slide:nth-child(5) {
  background-image: url("/images/duke.jpg");
  animation-delay: 24s;
}

.home-hero-slide:nth-child(6) {
  background-image: url("/images/Duke%202.jpeg");
  animation-delay: 30s;
}

.home-hero-slide:nth-child(7) {
  background-image: url("/images/Duke%203.jpg");
  animation-delay: 36s;
}

.home-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(16, 24, 39, 0.68), rgba(16, 24, 39, 0.22) 55%, rgba(16, 24, 39, 0.08));
}

.home-hero-content {
  position: absolute;
  right: 34px;
  top: 50%;
  z-index: 1;
  max-width: 660px;
  transform: translateY(-50%);
  color: #fff;
  text-align: right;
}

.home-main {
  display: block !important;
  width: 100%;
  max-width: 1220px !important;
}

.home-main .page {
  display: block !important;
  float: none !important;
  flex: none !important;
  width: 100% !important;
  max-width: none;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.home-main .page__inner-wrap,
.home-main .page__content {
  float: none !important;
  width: 100% !important;
}

.home-lower {
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  align-items: start;
  gap: 34px;
  margin-top: 42px;
}

.home-sidebar-slot .sidebar {
  display: block !important;
  float: none !important;
  flex: none !important;
  width: 250px !important;
  padding-right: 0;
}

.home-content-tabs {
  min-width: 0;
}

.home-content-tabs .intro-grid {
  gap: 18px;
  margin-top: 0;
}

.home-content-tabs .intro-copy {
  padding: 16px 18px 20px 18px;
}

.home-content-tabs .intro-card h3 {
  font-size: 1.05rem;
}

.home-content-tabs .intro-card p {
  font-size: 0.9rem;
  line-height: 1.55;
}

.home-hero h1 {
  margin: 0 0 14px 0;
  color: #fff;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.85rem;
  font-weight: 650;
  line-height: 1.25;
}

.home-hero-line {
  width: 100%;
  height: 1px;
  margin: 0 0 15px 0;
  background: rgba(255,255,255,0.72);
}

.home-tags {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
}

.home-tags span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #fff;
  font-size: 0.86rem;
  font-weight: 650;
}

@keyframes hero-movie {
  0% {
    opacity: 0.86;
    transform: scale(1.03);
  }

  11.5% {
    opacity: 0.86;
  }

  14.3% {
    opacity: 0;
    transform: scale(1.13);
  }

  97% {
    opacity: 0;
    transform: scale(1.13);
  }

  100% {
    opacity: 0.86;
    transform: scale(1.03);
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-hero-slide {
    animation: none;
  }

  .home-hero-slide:first-child {
    opacity: 0.86;
  }
}

.home-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 0 0 34px 0;
}

.home-action {
  padding: 18px 20px;
  border: 1px solid rgba(20, 32, 56, 0.09);
  border-left: 4px solid #1f57c3;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(20, 32, 56, 0.055);
  text-decoration: none;
}

.home-action:nth-child(2) {
  border-left-color: #0f766e;
}

.home-action:nth-child(3) {
  border-left-color: #9a3412;
}

.home-action span {
  display: block;
  margin-bottom: 7px;
  color: #1f57c3;
  font-size: 0.76rem;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-action strong {
  display: block;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.15rem;
  line-height: 1.25;
}

.home-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(20, 32, 56, 0.1);
}

.home-timeline {
  margin: 34px 0 0 0;
}

.home-timeline-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 12px;
}

.home-timeline-header h2 {
  margin: 0;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.45rem;
  font-variant-caps: normal;
  letter-spacing: 0;
  line-height: 1.2;
}

.home-timeline-header span {
  color: #697386;
  font-size: 0.78rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.timeline-feature {
  display: grid;
  grid-template-columns: minmax(260px, 0.85fr) minmax(0, 1.15fr) auto;
  gap: 22px;
  align-items: center;
  margin: 0 0 18px 0;
  padding: 18px;
  border: 1px solid rgba(20, 32, 56, 0.1);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(20, 32, 56, 0.06);
}

.home-content-tabs > .timeline-feature {
  margin: 34px 0 0 0;
}

.timeline-feature-media {
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  background: #eef2f7;
}

.timeline-feature-media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

.timeline-feature-media img.is-contained {
  object-fit: contain;
  padding: 14px;
  background: #fff;
}

.timeline-feature-copy span {
  display: block;
  margin-bottom: 6px;
  color: #697386;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.timeline-feature-copy h3 {
  margin: 0 0 8px 0;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.35rem;
  font-weight: 650;
  letter-spacing: 0;
  line-height: 1.18;
}

.timeline-feature-copy p {
  margin: 0;
  color: #424b5a;
  font-size: 0.92rem;
  line-height: 1.55;
  text-align: left;
}

.timeline-feature-controls {
  display: flex;
  gap: 8px;
}

.timeline-feature-controls button {
  width: 34px;
  height: 34px;
  border: 1px solid rgba(20, 32, 56, 0.16);
  border-radius: 999px;
  background: #fff;
  color: #172033;
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
}

.timeline-feature-controls button:hover,
.timeline-feature-controls button:focus-visible {
  border-color: rgba(31, 87, 195, 0.35);
  color: #1f57c3;
  outline: none;
}

.timeline-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  border: 1px solid rgba(20, 32, 56, 0.1);
  border-radius: 8px;
  background:
    linear-gradient(90deg, rgba(255,255,255,0.96), rgba(255,255,255,0) 38px),
    linear-gradient(270deg, rgba(255,255,255,0.96), rgba(255,255,255,0) 38px),
    #fff;
  box-shadow: 0 10px 28px rgba(20, 32, 56, 0.06);
  cursor: grab;
  scrollbar-color: #b8c0cc #f2f4f8;
  scrollbar-width: thin;
}

.timeline-scroll.is-dragging {
  cursor: grabbing;
}

.timeline-board {
  position: relative;
  width: 3250px;
  height: 340px;
  min-width: 3250px;
  --axis-y: 300px;
}

.timeline-lane {
  position: absolute;
  left: 0;
  right: 0;
  height: 82px;
  border-bottom: 1px solid rgba(20, 32, 56, 0.07);
  background: rgba(20, 32, 56, 0.025);
}

.timeline-lane:nth-child(even) {
  background: rgba(20, 32, 56, 0.045);
}

.timeline-lane.education { top: 0; }
.timeline-lane.awards { top: 82px; }
.timeline-lane.talks { top: 164px; }

.timeline-lane-label {
  position: sticky;
  left: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  width: 138px;
  height: 100%;
  padding-left: 16px;
  background: linear-gradient(90deg, rgba(255,255,255,0.96), rgba(255,255,255,0.72));
  color: #526071;
  font-size: 0.86rem;
  font-weight: 750;
}

.timeline-gridline {
  position: absolute;
  top: 0;
  bottom: 40px;
  left: var(--x);
  width: 1px;
  background: rgba(20, 32, 56, 0.1);
}

.timeline-year {
  position: absolute;
  bottom: 12px;
  left: var(--x);
  transform: translateX(-50%);
  color: #7a8494;
  font-size: 0.78rem;
  font-weight: 650;
}

.timeline-axis {
  position: absolute;
  left: 118px;
  right: 46px;
  bottom: 40px;
  height: 2px;
  background: #c8ced8;
}

.timeline-event {
  position: absolute;
  z-index: 3;
  left: var(--x);
  top: var(--y);
  width: var(--w, 176px);
  min-height: 30px;
  padding: 6px 9px;
  border: 1px solid rgba(20, 32, 56, 0.12);
  border-left: 4px solid var(--color, #1f57c3);
  border-radius: 6px;
  background: rgba(255,255,255,0.94);
  box-shadow: 0 8px 18px rgba(20, 32, 56, 0.07);
  color: #172033;
  font-size: 0.68rem;
  line-height: 1.18;
  text-decoration: none;
  transition: background 0.16s ease, box-shadow 0.16s ease, z-index 0s;
}

.timeline-event:hover,
.timeline-event:focus,
.timeline-event.is-active {
  z-index: 12;
  background: #fff;
  box-shadow: 0 14px 28px rgba(20, 32, 56, 0.16);
  outline: none;
}

.timeline-event:focus-visible {
  outline: 2px solid var(--color, #1f57c3);
  outline-offset: 3px;
}

a.timeline-event {
  cursor: pointer;
}

.timeline-event::before {
  content: "";
  position: absolute;
  left: 12px;
  top: 100%;
  width: 1px;
  height: max(8px, calc(var(--axis-y) - var(--y) - 100%));
  background: var(--color, #1f57c3);
  opacity: 0.42;
}

.timeline-event::after {
  content: "";
  position: absolute;
  left: 8px;
  top: calc(var(--axis-y) - var(--y) - 4px);
  width: 7px;
  height: 7px;
  border: 2px solid #fff;
  border-radius: 50%;
  background: var(--color, #1f57c3);
  box-shadow: 0 0 0 1px rgba(20, 32, 56, 0.14);
}

.timeline-event strong {
  display: block;
  margin-bottom: 1px;
  font-size: 0.7rem;
}

.timeline-event span {
  display: block;
  color: #657184;
}

.timeline-event em {
  display: block;
  margin-top: 2px;
  color: var(--color, #1f57c3);
  font-size: 0.62rem;
  font-style: normal;
  font-weight: 750;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.timeline-event.education { --color: #1f57c3; }
.timeline-event.award { --color: #9a3412; }
.timeline-event.training { --color: #0f766e; }
.timeline-event.talk { --color: #6d4ca4; }

@media (max-width: 900px) {
  .home-hero {
    min-height: 320px;
    height: clamp(320px, 72vw, 440px);
  }

  .home-hero-content {
    left: 20px;
    right: 20px;
    text-align: left;
  }

  .home-hero h1 {
    font-size: 1.45rem;
  }

  .home-tags {
    justify-content: flex-start;
  }

  .home-actions {
    grid-template-columns: 1fr;
  }

  .home-timeline-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  .timeline-feature {
    grid-template-columns: 1fr;
  }

  .timeline-feature-controls {
    justify-content: flex-end;
  }

  .home-lower {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .home-sidebar-slot .sidebar {
    width: 100% !important;
  }
}
</style>

<section class="home-hero">
  <div class="home-hero-movie" aria-hidden="true">
    <span class="home-hero-slide"></span>
    <span class="home-hero-slide"></span>
    <span class="home-hero-slide"></span>
    <span class="home-hero-slide"></span>
    <span class="home-hero-slide"></span>
    <span class="home-hero-slide"></span>
    <span class="home-hero-slide"></span>
  </div>
  <div class="home-hero-content">
    <h1>Designing next-generation genetic medicines through biomaterials and systems immunology</h1>
    <div class="home-hero-line"></div>
    <div class="home-tags">
      <span>Immunoengineering</span>
      <span>Gene Therapy</span>
      <span>Biomaterials</span>
      <span>Spatial Proteomics</span>
    </div>
  </div>
</section>

<div class="home-lower">
  <div class="home-sidebar-slot">
    {% include sidebar.html %}
  </div>

  <div class="home-content-tabs">
    <div class="home-actions">
      <a class="home-action" href="/about/">
        <span>Profile</span>
        <strong>Selected publications, honors, education, and talks</strong>
      </a>
      <a class="home-action" href="/research/">
        <span>Research</span>
        <strong>Publications, patents, services, and research moments</strong>
      </a>
      <a class="home-action" href="/teaching/">
        <span>Teaching</span>
        <strong>Courses, mentorship, and teaching philosophy</strong>
      </a>
    </div>

    <div class="intro-grid">
      <div class="intro-card">
        <div class="image-box">
          <img src="/images/Position and training.png" alt="Position and training">
        </div>
        <div class="intro-copy">
          <span class="intro-kicker">Current Role</span>
          <h3>Postdoctoral Fellow, Duke University</h3>
          <p>
            I am a Postdoc Fellow in Biomedical Engineering at Duke University,
            working in the laboratory of
            <a href="https://sites.google.com/view/john-w-hickey/home" target="_blank">Dr. John W. Hickey</a>
            from February 2026, following postdoctoral research at Johns Hopkins University with
            <a href="https://maogroup.jhu.edu/" target="_blank">Dr. Hai-Quan Mao</a>.
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
            My work connects lipid nanoparticles, genetic medicine delivery, cancer immunotherapy,
            spatial proteomics, and systems immunology to study immune responses across tissues.
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
            <a href="https://www.schmidtsciencefellows.org/" target="_blank"><strong>Schmidt Science Fellow</strong></a>,
            a <a href="https://hub.jhu.edu/2025/10/13/johns-hopkins-siebel-scholars-2026/" target="_blank"><strong>Siebel Scholar</strong></a>,
            and named to <a href="https://www.forbes.com/profile/yining-zhu/" target="_blank"><strong>Forbes 30 Under 30 - Science, U.S.</strong></a>.
          </p>
        </div>
      </div>
    </div>

    <div class="timeline-feature" aria-live="polite">
      <div class="timeline-feature-media">
        <img data-timeline-image src="/images/Oral.png" alt="Selected timeline milestone">
      </div>
      <div class="timeline-feature-copy">
        <span data-timeline-date>2026.05</span>
        <h3 data-timeline-title>ASGCT Annual Meeting</h3>
        <p data-timeline-description>Oral presentation at ASGCT on age-related heterogeneity of systemic gene expression in mRNA lipid nanoparticle cancer vaccines.</p>
      </div>
      <div class="timeline-feature-controls" aria-label="Timeline event navigation">
        <button type="button" data-timeline-prev aria-label="Previous timeline event">&#8249;</button>
        <button type="button" data-timeline-next aria-label="Next timeline event">&#8250;</button>
      </div>
    </div>

  </div>
</div>

<section class="home-timeline" aria-labelledby="career-timeline-title">
      <div class="home-timeline-header">
        <h2 id="career-timeline-title">Career Timeline</h2>
        <span>Scroll left for earlier milestones</span>
      </div>

      <div class="timeline-scroll" data-timeline-scroll tabindex="0" aria-label="Scrollable career timeline with education, training, awards, and talks from 2019 to 2026">
        <div class="timeline-board">
          <div class="timeline-lane education"><div class="timeline-lane-label">Education &amp; Training</div></div>
          <div class="timeline-lane awards"><div class="timeline-lane-label">Awards</div></div>
          <div class="timeline-lane talks"><div class="timeline-lane-label">Talks</div></div>

          <div class="timeline-gridline" style="--x: 7%;"></div>
          <div class="timeline-gridline" style="--x: 15%;"></div>
          <div class="timeline-gridline" style="--x: 24%;"></div>
          <div class="timeline-gridline" style="--x: 34%;"></div>
          <div class="timeline-gridline" style="--x: 45%;"></div>
          <div class="timeline-gridline" style="--x: 59%;"></div>
          <div class="timeline-gridline" style="--x: 76%;"></div>
          <div class="timeline-gridline" style="--x: 93%;"></div>

          <div class="timeline-axis"></div>
          <span class="timeline-year" style="--x: 7%;">2019</span>
          <span class="timeline-year" style="--x: 15%;">2020</span>
          <span class="timeline-year" style="--x: 24%;">2021</span>
          <span class="timeline-year" style="--x: 34%;">2022</span>
          <span class="timeline-year" style="--x: 45%;">2023</span>
          <span class="timeline-year" style="--x: 59%;">2024</span>
          <span class="timeline-year" style="--x: 76%;">2025</span>
          <span class="timeline-year" style="--x: 93%;">2026</span>

          <div class="timeline-event education" data-date="2019.06" data-image="/images/SCU.png" data-description="Completed undergraduate training in pharmacy at Sichuan University, building the foundation for later work in biomaterials and genetic medicine delivery." style="--x: 7%; --y: 10px; --w: 150px;">
            <strong>B.S., Pharmacy</strong>
            <span>Sichuan University</span>
          </div>
          <div class="timeline-event education" data-date="2021" data-image="/images/JHMI.png" data-description="Earned the M.S.E. in Biomedical Engineering at Johns Hopkins University while developing research interests at the interface of materials and medicine." style="--x: 24%; --y: 10px; --w: 172px;">
            <strong>M.S.E., Biomedical Engineering</strong>
            <span>Johns Hopkins University</span>
          </div>
          <div class="timeline-event education" data-date="2025" data-image="/images/Yining%20with%20lab.png" data-description="Completed doctoral training in Biomedical Engineering at Johns Hopkins University, centered on biomaterials, lipid nanoparticles, and immune engineering." style="--x: 76%; --y: 10px; --w: 172px;">
            <strong>Ph.D., Biomedical Engineering</strong>
            <span>Johns Hopkins University</span>
          </div>

          <div class="timeline-event training" data-date="2025.10" data-image="/images/JHU%20postdoc.JPG" data-description="Continued postdoctoral research at Johns Hopkins University before moving to Duke for the next phase of training." style="--x: 87%; --y: 38px; --w: 160px;">
            <strong>Postdoctoral Associate</strong>
            <span>Johns Hopkins University</span>
          </div>
          <div class="timeline-event training" data-date="2026.02" data-image="/images/Duke%20Postdoc.png" data-description="Started as a Postdoctoral Fellow at Duke University, advancing work spanning gene delivery, systems immunology, and spatial proteomics." style="--x: 94%; --y: 38px; --w: 156px;">
            <strong>Postdoctoral Fellow</strong>
            <span>Duke University</span>
          </div>

          <div class="timeline-event award" data-date="2019" data-image="/images/SCU.png" data-description="Recognized with the Outstanding Graduates Award in Sichuan Province, China." style="--x: 7%; --y: 84px; --w: 174px;">
            <strong>Outstanding Graduates Award</strong>
            <span>Sichuan Province, China</span>
          </div>
          <div class="timeline-event award" data-date="2023.04" data-image="/images/2023%20SFB.jpeg" data-description="Received a Student Travel Achievement Recognition Award from the Society for Biomaterials." style="--x: 48%; --y: 84px; --w: 154px;">
            <strong>SFB STAR Award</strong>
            <span>Society for Biomaterials</span>
          </div>
          <a class="timeline-event award" href="https://hopkinsyidp.org/people/yining-zhu/" target="_blank" rel="noopener" data-date="2024.04" data-image="/images/JHMI.png" data-description="Honored by Johns Hopkins University with the Hans J. Prochaska Research Award." style="--x: 61%; --y: 84px; --w: 160px;">
            <strong>Hans J. Prochaska Award</strong>
            <span>Johns Hopkins University</span>
            <em>Media</em>
          </a>
          <div class="timeline-event award" data-date="2024.05" data-image="/images/2024%20ASGCT.JPG" data-description="Received a Meritorious Abstract Travel Award from the American Society of Gene & Cell Therapy." style="--x: 66%; --y: 110px; --w: 160px;">
            <strong>ASGCT Travel Award</strong>
            <span>Gene & Cell Therapy</span>
          </div>
          <div class="timeline-event award" data-date="2025.04" data-image="/images/2023%20SFB.png" data-description="Received a Student Travel Achievement Recognition Award from the Society for Biomaterials." style="--x: 75%; --y: 84px; --w: 146px;">
            <strong>SFB STAR Award</strong>
            <span>Society for Biomaterials</span>
          </div>
          <a class="timeline-event award" href="https://hub.jhu.edu/2025/10/13/johns-hopkins-siebel-scholars-2026/" target="_blank" rel="noopener" data-date="2025.09" data-image="/images/Siebel%20scholar%20images.png" data-description="Named a Siebel Scholar in recognition of leadership and academic achievement in engineering." style="--x: 83%; --y: 110px; --w: 136px;">
            <strong>Siebel Scholar</strong>
            <span>Siebel Foundation</span>
            <em>Media</em>
          </a>
          <a class="timeline-event award" href="https://www.forbes.com/profile/yining-zhu/?list=30under30-science/" target="_blank" rel="noopener" data-date="2025.12" data-image="/images/2026%20Fobes.PNG" data-description="Named to Forbes 30 Under 30 in Science, U.S., for work in genetic medicine delivery and immunoengineering." style="--x: 88%; --y: 84px; --w: 150px;">
            <strong>Forbes 30 Under 30</strong>
            <span>Science, U.S.</span>
            <em>Media</em>
          </a>
          <a class="timeline-event award" href="https://www.forbes.com/sites/michaeltnietzel/2026/03/25/the-2026-cohort-of-schmidt-science-fellows-is-announced/" target="_blank" rel="noopener" data-date="2026.03" data-image="/images/2026%20Schmidt.JPG" data-description="Selected as a Schmidt Science Fellow to pursue interdisciplinary postdoctoral research." style="--x: 94%; --y: 110px; --w: 156px;">
            <strong>Schmidt Science Fellow</strong>
            <span>Schmidt Science Foundation</span>
            <em>Media</em>
          </a>

          <div class="timeline-event talk" data-date="2022.03" data-image="/images/2022%20SFB.JPG" data-description="Presented work on multi-step screening and composition optimization of lipid nanoparticles for liver-targeted plasmid DNA delivery." style="--x: 37%; --y: 208px; --w: 154px;">
            <strong>SFB Annual Meeting</strong>
            <span>pDNA lipid nanoparticles</span>
          </div>
          <div class="timeline-event talk" data-date="2023.03" data-image="/images/2023%20SFB.jpeg" data-description="Presented research on how lipid nanoparticle composition shapes immune responses to mRNA vaccines and anticancer immunity." style="--x: 48%; --y: 182px; --w: 162px;">
            <strong>SFB Annual Meeting</strong>
            <span>mRNA vaccine immunity</span>
          </div>
          <div class="timeline-event talk" data-date="2024.05" data-image="/images/2024%20ASGCT.JPG" data-description="Presented an mRNA lipid nanoparticle incorporated nanofiber-hydrogel composite for local immunostimulation in cancer immunotherapy." style="--x: 65%; --y: 208px; --w: 170px;">
            <strong>ASGCT Annual Meeting</strong>
            <span>Local immunostimulatory niche</span>
          </div>
          <div class="timeline-event talk" data-date="2024.10" data-image="/images/Oral.png" data-description="Presented work on engineering a biomaterials-based lymphoid niche for mRNA lipid nanoparticle cancer vaccines." style="--x: 72%; --y: 182px; --w: 162px;">
            <strong>BMES Annual Meeting</strong>
            <span>Biomaterials lymphoid niche</span>
          </div>
          <div class="timeline-event talk" data-date="2025.03" data-image="/images/2023%20SFB.png" data-description="Presented research on enhancing cell transfection efficiency through modulation of extracellular fluid viscosity." style="--x: 79%; --y: 208px; --w: 152px;">
            <strong>SFB Annual Meeting</strong>
            <span>Extracellular fluid viscosity</span>
          </div>
          <div class="timeline-event talk" data-date="2025.03" data-image="/images/2023%20SFB.png" data-description="Presented nanofiber-hydrogel cancer immunotherapy work at the Society for Biomaterials Annual Meeting." style="--x: 80%; --y: 182px; --w: 160px;">
            <strong>SFB Annual Meeting</strong>
            <span>Nanofiber-hydrogel cancer immunotherapy</span>
          </div>
          <div class="timeline-event talk" data-date="2026.03" data-image="/images/2026%20SFB.JPG" data-description="Presented age-related heterogeneity of systemic gene expression and its impact on immune responses to mRNA lipid nanoparticle cancer vaccines." style="--x: 93.8%; --y: 208px; --w: 170px;">
            <strong>SFB Annual Meeting</strong>
            <span>Age-related systemic gene expression</span>
          </div>
          <div class="timeline-event talk" data-date="2026.05" data-image="/images/Oral.png" data-description="Oral presentation at ASGCT on age-related heterogeneity of systemic gene expression in mRNA lipid nanoparticle cancer vaccines." style="--x: 94.6%; --y: 182px; --w: 176px;">
            <strong>ASGCT Annual Meeting</strong>
            <span>Age-related systemic gene expression</span>
          </div>
        </div>
      </div>
    </section>

<script>
  (function () {
    var scroller = document.querySelector('[data-timeline-scroll]');
    if (!scroller) return;

    var events = Array.prototype.slice.call(scroller.querySelectorAll('.timeline-event'));
    var previewImage = document.querySelector('[data-timeline-image]');
    var previewDate = document.querySelector('[data-timeline-date]');
    var previewTitle = document.querySelector('[data-timeline-title]');
    var previewDescription = document.querySelector('[data-timeline-description]');
    var previousButton = document.querySelector('[data-timeline-prev]');
    var nextButton = document.querySelector('[data-timeline-next]');
    var isDragging = false;
    var startX = 0;
    var startScroll = 0;
    var activeIndex = 0;

    function eventTitle(eventNode) {
      var title = eventNode.querySelector('strong');
      return title ? title.textContent : '';
    }

    function eventSubtitle(eventNode) {
      var subtitle = eventNode.querySelector('span');
      return subtitle ? subtitle.textContent : '';
    }

    function selectEvent(index, shouldFocus) {
      if (!events.length) return;
      activeIndex = (index + events.length) % events.length;

      events.forEach(function (eventNode) {
        eventNode.classList.remove('is-active');
      });

      var selected = events[activeIndex];
      selected.classList.add('is-active');

      if (previewImage) {
        previewImage.src = selected.dataset.image || '/images/jhu-banner.jpg';
        previewImage.alt = eventTitle(selected) || 'Selected timeline milestone';
        previewImage.classList.remove('is-contained');
      }

      if (previewDate) previewDate.textContent = selected.dataset.date || '';
      if (previewTitle) previewTitle.textContent = eventTitle(selected);
      if (previewDescription) {
        previewDescription.textContent = selected.dataset.description || eventSubtitle(selected);
      }

      selected.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      if (shouldFocus) selected.focus({ preventScroll: true });
    }

    function scrollToPresent() {
      scroller.scrollLeft = scroller.scrollWidth - scroller.clientWidth;
    }

    function initializeTimeline() {
      selectEvent(events.length - 1, false);
      scrollToPresent();
    }

    events.forEach(function (eventNode, index) {
      if (!eventNode.hasAttribute('href')) eventNode.setAttribute('tabindex', '0');

      eventNode.addEventListener('mouseenter', function () {
        selectEvent(index, false);
      });

      eventNode.addEventListener('focus', function () {
        selectEvent(index, false);
      });

      eventNode.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          selectEvent(activeIndex + 1, true);
        }

        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          selectEvent(activeIndex - 1, true);
        }
      });
    });

    if (previousButton) {
      previousButton.addEventListener('click', function () {
        selectEvent(activeIndex - 1, true);
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        selectEvent(activeIndex + 1, true);
      });
    }

    if (previewImage) {
      previewImage.addEventListener('load', function () {
        var ratio = previewImage.naturalWidth / previewImage.naturalHeight;
        previewImage.classList.toggle('is-contained', ratio < 1.1 || ratio > 2.4);
      });
    }

    scroller.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        selectEvent(activeIndex + 1, true);
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        selectEvent(activeIndex - 1, true);
      }
    });

    window.addEventListener('load', initializeTimeline);
    initializeTimeline();

    scroller.addEventListener('pointerdown', function (event) {
      isDragging = true;
      startX = event.clientX;
      startScroll = scroller.scrollLeft;
      scroller.classList.add('is-dragging');
      scroller.setPointerCapture(event.pointerId);
    });

    scroller.addEventListener('pointermove', function (event) {
      if (!isDragging) return;
      scroller.scrollLeft = startScroll - (event.clientX - startX);
    });

    scroller.addEventListener('pointerup', function () {
      isDragging = false;
      scroller.classList.remove('is-dragging');
    });

    scroller.addEventListener('pointercancel', function () {
      isDragging = false;
      scroller.classList.remove('is-dragging');
    });
  }());
</script>
