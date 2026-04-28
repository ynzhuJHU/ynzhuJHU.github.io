---
permalink: /
title: "Homepage"
author_profile: true
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
  max-width: 1220px;
}

.home-main .page {
  width: 100% !important;
  max-width: none;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.home-lower {
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  align-items: start;
  gap: 34px;
  margin-top: 42px;
}

.home-sidebar-slot .sidebar {
  float: none !important;
  width: 250px !important;
  padding-right: 0;
}

.home-content-tabs {
  min-width: 0;
}

.home-content-tabs .intro-grid {
  margin-top: 0;
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
  margin: 34px 0 10px 0;
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
  </div>
</div>
