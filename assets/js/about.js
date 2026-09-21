(function () {
  var root = document.querySelector(".about-experience");
  if (!root) return;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelectorAll("[data-card-rail]").forEach(function (section) {
    var rail = section.querySelector('[role="region"]');
    var previous = section.querySelector("[data-rail-prev]");
    var next = section.querySelector("[data-rail-next]");
    if (!rail || !previous || !next) return;

    function updateControls() {
      previous.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
    }

    function move(direction) {
      rail.scrollBy({
        left: direction * rail.clientWidth * 0.85,
        behavior: reducedMotion.matches ? "auto" : "smooth"
      });
    }

    previous.addEventListener("click", function () { move(-1); });
    next.addEventListener("click", function () { move(1); });
    rail.addEventListener("scroll", updateControls, { passive: true });
    rail.addEventListener("keydown", function (event) {
      if (event.target !== rail || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        move(event.key === "ArrowRight" ? 1 : -1);
      }
    });
    if ("ResizeObserver" in window) new ResizeObserver(updateControls).observe(rail);
    window.addEventListener("resize", updateControls);
    section.classList.add("is-enhanced");
    updateControls();
  });

  // Reveal newly visible publication cards in a short left-to-right sequence.
  // Cards remain visible by default if animation or observation is unavailable.
  root.querySelectorAll(".about-publication-rail").forEach(function (rail) {
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
    var cards = rail.querySelectorAll(".about-publication-card");
    if (!cards.length || typeof cards[0].animate !== "function") return;
    var animations = new Map();
    var revealed = new Set();
    var observer = new IntersectionObserver(function (entries) {
      var entering = entries.filter(function (entry) {
        return entry.isIntersecting && entry.intersectionRect.width > 0 &&
          entry.intersectionRect.height > 0 && !revealed.has(entry.target);
      }).sort(function (a, b) {
        return a.boundingClientRect.left - b.boundingClientRect.left;
      });

      entering.forEach(function (entry, index) {
        var card = entry.target;
        revealed.add(card);
        observer.unobserve(card);
        if (reducedMotion.matches || card.contains(document.activeElement)) return;
        var animation = card.animate([
          { opacity: 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" }
        ], {
          duration: 1658,
          delay: Math.min(index, 3) * 255,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "backwards"
        });
        animations.set(card, animation);
        animation.onfinish = function () { animations.delete(card); };
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0 });

    cards.forEach(function (card) { observer.observe(card); });
    rail.addEventListener("focusin", function (event) {
      var card = event.target.closest(".about-publication-card");
      if (!card) return;
      revealed.add(card);
      observer.unobserve(card);
      if (animations.has(card)) {
        animations.get(card).cancel();
        animations.delete(card);
      }
    });
    function stopMotion(event) {
      if (!event.matches) return;
      observer.disconnect();
      animations.forEach(function (animation) { animation.cancel(); });
      animations.clear();
    }
    if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", stopMotion);
    else reducedMotion.addListener(stopMotion);
  });

  var journey = root.querySelector("[data-journey]");
  if (!journey) return;
  var items = journey.querySelectorAll(".about-journey-item");
  var stage = journey.querySelector(".about-journey-stage");
  var stageImage = stage.querySelector("img");
  var stageCaption = stage.querySelector("figcaption");

  function selectItem(selected) {
    items.forEach(function (item) {
      if (item !== selected) item.open = false;
    });
    stageImage.src = selected.dataset.image;
    stageImage.alt = selected.dataset.caption;
    stageCaption.textContent = selected.dataset.caption;
  }

  items.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) selectItem(item);
    });
  });
  journey.classList.add("is-enhanced");
  var initial = journey.querySelector("details[open]");
  if (initial) selectItem(initial);

  // Keep existing Education links useful after merging it into the journey.
  function revealJourneyHash() {
    var id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch (error) {
      return;
    }
    var target = document.getElementById(id);
    if (!target || !journey.contains(target) || !target.matches(".about-journey-item")) return;
    target.open = true;
    selectItem(target);
    window.requestAnimationFrame(function () {
      target.scrollIntoView({ block: "start" });
    });
  }

  window.addEventListener("hashchange", revealJourneyHash);
  revealJourneyHash();
}());
