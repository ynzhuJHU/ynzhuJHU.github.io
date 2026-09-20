(function () {
  var masthead = document.querySelector(".masthead");
  var navigation = document.querySelector(".site-nav-modern");
  var toggle = document.querySelector(".mobile-nav-toggle");
  var backdrop = document.querySelector(".masthead-backdrop");
  if (!masthead || !navigation || !toggle || !backdrop) return;

  var desktop = window.matchMedia("(min-width: 761px)");
  var hover = window.matchMedia("(hover: hover) and (pointer: fine)");
  var items = navigation.querySelectorAll(".masthead__menu-item--dropdown");
  var activeItem = null;
  var closeTimer;

  function cancelClose() {
    window.clearTimeout(closeTimer);
  }

  function updateBackdrop() {
    var expanded = !!activeItem || navigation.classList.contains("is-open");
    masthead.classList.toggle("is-expanded", expanded);
    backdrop.classList.toggle("is-visible", expanded);
  }

  function measurePanel() {
    masthead.style.setProperty("--masthead-height", masthead.offsetHeight + "px");
    masthead.style.setProperty("--submenu-height", activeItem ?
      activeItem.querySelector(".masthead-submenu").offsetHeight + "px" : "0px");
  }

  function closeDropdown() {
    cancelClose();
    if (activeItem) {
      activeItem.classList.remove("is-active");
      activeItem.querySelector(".masthead-dropdown-trigger").setAttribute("aria-expanded", "false");
      activeItem = null;
    }
    measurePanel();
    updateBackdrop();
  }

  function openDropdown(item) {
    if (!desktop.matches) return;
    cancelClose();
    if (activeItem && activeItem !== item) closeDropdown();
    activeItem = item;
    item.classList.add("is-active");
    item.querySelector(".masthead-dropdown-trigger").setAttribute("aria-expanded", "true");
    measurePanel();
    updateBackdrop();
  }

  function closeNavigation() {
    navigation.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    closeDropdown();
  }

  function updateSemantics() {
    items.forEach(function (item, index) {
      var trigger = item.querySelector(".masthead-dropdown-trigger");
      var submenu = item.querySelector(".masthead-submenu");
      submenu.id = "masthead-submenu-" + index;
      if (desktop.matches) {
        trigger.setAttribute("aria-controls", submenu.id);
        trigger.setAttribute("aria-expanded", "false");
      } else {
        trigger.removeAttribute("aria-controls");
        trigger.removeAttribute("aria-expanded");
      }
    });
  }

  items.forEach(function (item) {
    var trigger = item.querySelector(".masthead-dropdown-trigger");
    item.addEventListener("pointerenter", function () {
      if (hover.matches) openDropdown(item);
    });
    item.addEventListener("focusin", function (event) {
      if (hover.matches || event.target.matches(":focus-visible")) openDropdown(item);
    });
    trigger.addEventListener("keydown", function (event) {
      if (desktop.matches && (event.key === "ArrowDown" || event.key === " ")) {
        event.preventDefault();
        openDropdown(item);
        item.querySelector(".masthead-submenu a").focus();
      }
    });
    trigger.addEventListener("click", function (event) {
      // On wide touch screens, the first tap reveals the section links.
      if (desktop.matches && !hover.matches && activeItem !== item) {
        event.preventDefault();
        openDropdown(item);
      }
    });
  });

  masthead.addEventListener("pointerenter", cancelClose);
  masthead.addEventListener("pointerleave", function () {
    if (hover.matches) closeTimer = window.setTimeout(closeDropdown, 140);
  });
  navigation.querySelector(".masthead__menu-home-item").addEventListener("pointerenter", closeDropdown);
  navigation.addEventListener("focusout", function (event) {
    if (!navigation.contains(event.relatedTarget)) closeDropdown();
  });
  navigation.querySelector(".masthead__menu-home-item").addEventListener("focusin", closeDropdown);

  toggle.addEventListener("click", function () {
    var isOpen = navigation.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    updateBackdrop();
  });
  navigation.addEventListener("click", function (event) {
    if (event.target.closest(".masthead-submenu a") ||
        (!desktop.matches && event.target.closest("a"))) closeNavigation();
  });
  backdrop.addEventListener("click", closeNavigation);
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (activeItem) {
      var trigger = activeItem.querySelector(".masthead-dropdown-trigger");
      trigger.focus();
      closeDropdown();
    } else if (navigation.classList.contains("is-open")) {
      closeNavigation();
      toggle.focus();
    }
  });
  desktop.addEventListener("change", function () {
    closeNavigation();
    updateSemantics();
  });
  window.addEventListener("resize", measurePanel);
  if (document.fonts) document.fonts.ready.then(measurePanel);
  updateSemantics();
}());
