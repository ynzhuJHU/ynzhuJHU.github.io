(function () {
  var root = document.getElementById('main');
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!root || motion.matches || !('IntersectionObserver' in window)) return;

  // Reveal content blocks, not their containers, to avoid stacked animations.
  // Publication cards and the full award list keep their dedicated sequences.
  var selectors = [
    '.home-action', '.home-research-stat', '.intro-card',
    '.home-sidebar-slot .profile_box', '.timeline-feature', '.home-timeline',
    '.about-heading', '.about-publication-overview', '.about-honor-card',
    '.about-awards-trigger', '.about-journey-item', '.about-journey-stage', '.about-talk',
    '.research-heading', '.research-stat', '.research-library-intro',
    '.research-author-key', '.research-library-nav', '.research-group-title',
    '.research-reference-grid > p', '.research-review-grid > p', '.research-patent-grid > p',
    '.service-panel > p', '.service-tags', '.gallery-figure', '.gallery-card',
    '.teaching-section > h1', '.teaching-section > h2', '.course-card',
    '.philosophy-card', '.teaching-gallery > h2',
    '.news-overview > a', '.news-section > h1', '.news-section > h2',
    '.news-card', '.news-list-item',
    '.page__content > h1', '.page__content > h2', '.page__content > p',
    '.page__content > ul', '.page__content > ol', '.page__content > table',
    '[data-scroll-reveal]'
  ];
  var excluded = '.home-hero, .about-hero, .research-hero, .teaching-hero, .news-hero, ' +
    '.masthead, dialog, .cv-viewer, .about-publication-card, .full-award-list, [data-reveal-skip]';
  var candidates = Array.from(root.querySelectorAll(selectors.join(','))).filter(function (element) {
    return !element.closest(excluded) && typeof element.animate === 'function';
  });
  var targets = candidates.filter(function (element) {
    return !candidates.some(function (parent) { return parent !== element && parent.contains(element); });
  });
  var seen = new Set();
  var animations = new Map();
  var observer = new IntersectionObserver(function (entries) {
    if (motion.matches) return;
    entries.filter(function (entry) {
      return entry.isIntersecting && entry.intersectionRect.width > 0 &&
        entry.intersectionRect.height > 0 && !seen.has(entry.target);
    }).sort(function (a, b) {
      var vertical = a.boundingClientRect.top - b.boundingClientRect.top;
      return Math.abs(vertical) > 24 ? vertical : a.boundingClientRect.left - b.boundingClientRect.left;
    }).forEach(function (entry, index) {
      var element = entry.target;
      seen.add(element);
      observer.unobserve(element);
      if (element.contains(document.activeElement)) return;
      var animation = element.animate([
        { opacity: 0, transform: 'translateY(22px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 1658, delay: Math.min(index, 3) * 255,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' });
      animations.set(element, animation);
      animation.onfinish = function () { animations.delete(element); };
    });
  }, { rootMargin: '0px 0px -36px 0px', threshold: 0 });

  // There are no hidden CSS states: missing JavaScript never hides content.
  function revealImmediately(element) {
    seen.add(element);
    observer.unobserve(element);
    if (animations.has(element)) {
      animations.get(element).cancel();
      animations.delete(element);
    }
  }
  function revealHash() {
    var id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); }
    catch (error) { return; }
    var anchor = document.getElementById(id);
    if (!anchor) return;
    targets.forEach(function (element) {
      if (element.contains(anchor) || anchor.contains(element)) revealImmediately(element);
    });
  }
  targets.forEach(function (element) { observer.observe(element); });
  root.addEventListener('focusin', function (event) {
    targets.forEach(function (element) {
      if (element.contains(event.target)) revealImmediately(element);
    });
  });
  function stopAnimations() {
    observer.disconnect();
    animations.forEach(function (animation) { animation.cancel(); });
    animations.clear();
  }
  function motionChanged(event) { if (event.matches) stopAnimations(); }
  if (motion.addEventListener) motion.addEventListener('change', motionChanged);
  else motion.addListener(motionChanged);
  window.addEventListener('hashchange', revealHash);
  window.addEventListener('beforeprint', stopAnimations);
  revealHash();
}());
