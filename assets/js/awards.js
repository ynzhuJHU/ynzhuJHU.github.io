(function () {
  var fallback = document.querySelector('[data-full-awards]');
  var dialog = document.getElementById('awards-dialog');
  if (!fallback || !dialog || typeof dialog.showModal !== 'function') return;
  var content = dialog.querySelector('.awards-dialog-content');
  var close = dialog.querySelector('.research-profile-close');
  var trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'about-awards-trigger';
  trigger.innerHTML = fallback.querySelector('summary').innerHTML;
  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.setAttribute('aria-controls', dialog.id);
  fallback.before(trigger);
  content.appendChild(fallback.querySelector('.full-award-list'));
  fallback.hidden = true;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var rows = content.querySelectorAll('.full-award-row');
  var observer;
  var animations = new Map();
  var seen;

  function stopAnimations() {
    if (observer) observer.disconnect();
    animations.forEach(function (animation) { animation.cancel(); });
    animations.clear();
  }

  function revealAwards() {
    if (reducedMotion.matches || !('IntersectionObserver' in window) ||
        !rows.length || typeof rows[0].animate !== 'function') return;
    seen = new Set();
    observer = new IntersectionObserver(function (entries) {
      if (!dialog.open || reducedMotion.matches) return;
      entries.filter(function (entry) {
        return entry.isIntersecting && entry.intersectionRect.height > 0 && !seen.has(entry.target);
      }).sort(function (a, b) {
        return a.boundingClientRect.top - b.boundingClientRect.top;
      }).forEach(function (entry, index) {
        var row = entry.target;
        seen.add(row);
        observer.unobserve(row);
        if (row.contains(document.activeElement)) return;
        var animation = row.animate([
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 1658, delay: Math.min(index, 4) * 255,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' });
        animations.set(row, animation);
        animation.onfinish = function () { animations.delete(row); };
      });
    }, { root: content, threshold: 0 });
    rows.forEach(function (row) { observer.observe(row); });
  }

  trigger.addEventListener('click', function () {
    dialog.showModal();
    document.documentElement.classList.add('research-profile-open');
    content.scrollTop = 0;
    close.focus();
    revealAwards();
  });
  close.addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    var rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', function () {
    stopAnimations();
    document.documentElement.classList.remove('research-profile-open');
    trigger.focus({ preventScroll: true });
  });
  content.addEventListener('focusin', function (event) {
    var row = event.target.closest('.full-award-row');
    if (!row) return;
    if (seen) seen.add(row);
    if (observer) observer.unobserve(row);
    if (animations.has(row)) {
      animations.get(row).cancel();
      animations.delete(row);
    }
  });
  function motionChanged(event) { if (event.matches) stopAnimations(); }
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', motionChanged);
  else reducedMotion.addListener(motionChanged);
}());
