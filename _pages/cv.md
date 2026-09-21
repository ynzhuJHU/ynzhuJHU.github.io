---
permalink: /cv/
title: "Curriculum Vitae"
author_profile: false
layout: single
---
<link rel="stylesheet" href="{{ '/assets/css/cv.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<section class="cv-viewer" data-pdf="{{ '/assets/CV.pdf' | relative_url }}">
  <header class="cv-toolbar">
    <h1>Curriculum Vitae</h1>
    <div class="cv-zoom" aria-label="Document zoom">
      <button type="button" data-cv-out aria-label="Zoom out" disabled>−</button>
      <button type="button" data-cv-fit disabled>Fit</button>
      <button type="button" data-cv-in aria-label="Zoom in" disabled>+</button>
    </div>
    <a href="{{ '/assets/CV.pdf' | relative_url }}" target="_blank" rel="noopener">Open PDF <span aria-hidden="true">&#8599;</span></a>
  </header>
  <p class="cv-status" role="status">Loading CV…</p>
  <div class="cv-pages" aria-label="Curriculum Vitae pages"></div>
  <noscript><p><a href="{{ '/assets/CV.pdf' | relative_url }}">View the CV PDF</a></p></noscript>
</section>
<script type="module" src="{{ '/assets/js/cv.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
