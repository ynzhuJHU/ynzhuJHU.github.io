(function () {
  var trigger = document.querySelector('[data-research-profile]');
  var dialog = document.getElementById('research-profile-dialog');
  if (!trigger || !dialog || typeof dialog.showModal !== 'function') return;

  // Keep the ordinary research link working without JavaScript or dialog support.
  var frame = dialog.querySelector('iframe');
  var body = dialog.querySelector('.research-profile-body');
  var status = dialog.querySelector('.research-profile-status');
  var close = dialog.querySelector('.research-profile-close');
  var started = false;
  var loaded = false;
  var loadingTimer;
  var returnFocus;
  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.setAttribute('aria-controls', dialog.id);

  function loadError() {
    if (loaded) return;
    body.setAttribute('aria-busy', 'false');
    status.textContent = 'The profile is taking longer to load. You can use “Open full page” above.';
  }

  frame.addEventListener('load', function () {
    if (!started) return;
    try {
      var content = frame.contentDocument;
      if (!content || !content.querySelector('.research-portfolio')) {
        loadError();
        return;
      }
      content.documentElement.classList.add('research-embedded');
      // Escape inside the embedded document should close the same overlay.
      content.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && dialog.open) {
          event.preventDefault();
          dialog.close();
        }
      });
      content.querySelectorAll('a[href]').forEach(function (link) {
        if (new URL(link.href).origin !== window.location.origin) {
          link.target = '_blank';
          link.rel = 'noopener';
        }
      });
      loaded = true;
      window.clearTimeout(loadingTimer);
      body.setAttribute('aria-busy', 'false');
      status.hidden = true;
      frame.hidden = false;
    } catch (error) {
      loadError();
    }
  });
  frame.addEventListener('error', loadError);

  trigger.addEventListener('click', function (event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    returnFocus = document.activeElement;
    dialog.showModal();
    document.documentElement.classList.add('research-profile-open');
    close.focus();
    if (!started) {
      started = true;
      loadingTimer = window.setTimeout(loadError, 15000);
      frame.src = frame.dataset.src;
    }
  });

  close.addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    var bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', function () {
    document.documentElement.classList.remove('research-profile-open');
    if (returnFocus && returnFocus.isConnected) returnFocus.focus({ preventScroll: true });
  });
}());
