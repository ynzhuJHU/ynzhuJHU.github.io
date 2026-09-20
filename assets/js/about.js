(function () {
  var root = document.querySelector(".about-experience");
  if (!root) return;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  root.querySelectorAll("[data-card-rail]").forEach(function (section) {
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
}());
