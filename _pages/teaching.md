---
permalink: /teaching
title: "Teaching"
author_profile: false
layout: single
---

<style>
.teaching-page {
  color: #172033;
}

.teaching-hero {
  position: relative;
  overflow: hidden;
  margin: 0 0 34px 0;
  border-radius: 8px;
  background: #101827;
  box-shadow: 0 18px 42px rgba(18, 28, 45, 0.16);
}

.teaching-hero img {
  width: 100%;
  min-height: 330px;
  max-height: 500px;
  object-fit: cover;
  display: block;
  opacity: 0.76;
}

.teaching-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(16, 24, 39, 0.9), rgba(16, 24, 39, 0.42) 52%, rgba(16, 24, 39, 0.12));
}

.teaching-hero-content {
  position: absolute;
  left: 34px;
  bottom: 32px;
  z-index: 1;
  max-width: 640px;
  color: #fff;
}

.teaching-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  color: #bfdbfe;
  font-size: 0.78rem;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.teaching-hero h1 {
  margin: 0 0 12px 0;
  color: #fff;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 2.25rem;
  font-weight: 650;
  line-height: 1.12;
}

.teaching-hero p {
  max-width: 560px;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
}

.teaching-section {
  margin: 38px 0;
  padding-top: 26px;
  border-top: 1px solid #dce3ee;
}

.teaching-section h1,
.teaching-section h2 {
  margin: 0 0 18px 0;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-weight: 650;
  line-height: 1.2;
}

.teaching-section h1 {
  font-size: 1.95rem;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.course-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 22px;
  border: 1px solid rgba(20, 32, 56, 0.09);
  border-top: 4px solid #1f57c3;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(20, 32, 56, 0.075);
}

.course-card:nth-child(2) {
  border-top-color: #0f766e;
}

.course-card:nth-child(3) {
  border-top-color: #9a3412;
}

.course-code {
  display: inline-block;
  margin-bottom: 10px;
  color: #1f57c3;
  font-size: 0.78rem;
  font-weight: 750;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.course-card h2 {
  margin: 0 0 12px 0;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.2rem;
  font-weight: 650;
  line-height: 1.25;
}

.course-role {
  margin: 0 0 14px 0;
  color: #4b5563;
  font-size: 0.9rem;
  line-height: 1.4;
}

.course-role strong {
  color: #111827;
}

.course-card p {
  margin: 0;
  color: #293241;
  font-size: 0.95rem;
  line-height: 1.65;
}

.philosophy-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 20px;
  align-items: start;
  padding: 26px;
  border: 1px solid rgba(15, 118, 110, 0.16);
  border-radius: 8px;
  background: linear-gradient(135deg, #f7fbff, #ffffff);
  box-shadow: 0 12px 32px rgba(20, 32, 56, 0.08);
}

.philosophy-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: #ecfdf5;
  color: #0f766e;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 2rem;
  line-height: 1;
}

.philosophy-card p {
  margin: 0;
  color: #293241;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.15rem;
  line-height: 1.65;
}

.philosophy-card cite {
  display: block;
  margin-top: 10px;
  color: #667085;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 0.9rem;
  font-style: normal;
}

.teaching-gallery {
  margin-top: 46px;
  padding-top: 28px;
  border-top: 1px solid #dce3ee;
}

.teaching-gallery h2 {
  margin: 0 0 18px 0;
  color: #172033;
  font-family: "Source Serif 4", Georgia, serif;
  font-size: 1.65rem;
  font-weight: 650;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-card {
  min-width: 0;
}

.gallery-item {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 24px rgba(20, 32, 56, 0.14);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-caption {
  margin-top: 10px;
  color: #4b5563;
  font-size: 0.9rem;
  line-height: 1.35;
}

@media (max-width: 900px) {
  .teaching-hero-content {
    left: 20px;
    right: 20px;
    bottom: 22px;
  }

  .teaching-hero h1 {
    font-size: 1.75rem;
  }

  .course-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .philosophy-card {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="teaching-page">

<section class="teaching-hero">
  <img src="images/duke.jpg" alt="Duke University campus">
  <div class="teaching-hero-content">
    <span class="teaching-eyebrow">Teaching and Mentorship</span>
    <h1>Helping students connect engineering principles with human health</h1>
    <p>I teach and mentor at the intersection of nanomedicine, immunoengineering, tissue engineering, and translational biomaterials.</p>
  </div>
</section>

<section class="teaching-section">
  <h1>Teaching Experience</h1>

  <div class="course-grid">
    <article class="course-card">
      <span class="course-code">EN.580.109.12</span>
      <h2>Introduction to Nanomedicine</h2>
      <div class="course-role"><strong>JHU Intersession Course Instructor</strong><br>01/2023, 01/2024, 01/2025</div>
      <p>Introduced a comprehensive view of nanomedicine, including the physical and chemical basis of nanoscale biomaterials, bio-interactions governing efficacy and side effects, design strategies for biological barriers, and diverse applications.</p>
    </article>

    <article class="course-card">
      <span class="course-code">EN.580.453</span>
      <h2>Immunoengineering: Principles and Applications</h2>
      <div class="course-role"><strong>JHU Teaching Assistant</strong><br>09/2024 - 12/2024</div>
      <p>Offered explanations and practical demonstrations in class, fostering a collaborative learning environment that supported students in mastering core principles of immunoengineering.</p>
    </article>

    <article class="course-card">
      <span class="course-code">EN.580.642</span>
      <h2>Tissue Engineering</h2>
      <div class="course-role"><strong>JHU Teaching Assistant</strong><br>09/2022 - 12/2022</div>
      <p>Provided explanations and practical demonstrations during classes, helping create a collaborative learning environment for foundational tissue engineering concepts.</p>
    </article>
  </div>
</section>

<section class="teaching-section">
  <h1>Teaching Philosophy</h1>

  <div class="philosophy-card">
    <div class="philosophy-mark">"</div>
    <div>
      <p>A teacher is a person who passes down the Dao, imparts professional knowledge, and resolves doubt.</p>
      <cite>Y. Han</cite>
    </div>
  </div>
</section>

<div class="teaching-gallery">
  <h2>Mentorship and Teaching in Practice</h2>

  <div class="gallery-grid">
    <div class="gallery-card">
      <div class="gallery-item">
        <img src="/images/Yining with undergrad and master team.JPG" alt="Yining Zhu with undergraduate and master students">
      </div>
      <div class="gallery-caption">Mentoring undergraduate and master's students</div>
    </div>

    <div class="gallery-card">
      <div class="gallery-item">
        <img src="/images/Yining with lab.JPG" alt="Yining Zhu with lab members">
      </div>
      <div class="gallery-caption">Lab mentorship and collaborative research</div>
    </div>

    <div class="gallery-card">
      <div class="gallery-item">
        <img src="/images/Yining with lab.png" alt="Yining Zhu with research group at Johns Hopkins">
      </div>
      <div class="gallery-caption">Teaching and research training in the lab</div>
    </div>
  </div>
</div>

<hr style="margin: 70px 0 40px 0;">

<div class="footer-hero">
  <img src="/images/jhu2.png" alt="Campus closing banner">

  <div class="footer-overlay-text">
    Engineering the Future of Medicine.
  </div>
</div>

</div>
