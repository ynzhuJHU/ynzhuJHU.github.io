(function () {
  var dialog = document.getElementById('page-preview-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var frame = dialog.querySelector('iframe');
  var body = dialog.querySelector('.research-profile-body');
  var status = dialog.querySelector('.research-profile-status');
  var close = dialog.querySelector('.research-profile-close');
  var back = dialog.querySelector('.page-preview-back');
  var heading = dialog.querySelector('h2');
  var full = dialog.querySelector('.page-preview-full');
  var stack = [];
  var current;
  var returnFocus;
  var timer;

  function loadError() {
    body.setAttribute('aria-busy', 'false');
    status.textContent = 'This page is taking longer to load. You can use “Open full page” above.';
  }
  function showPage(url, title, remember) {
    url = new URL(url, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (remember && current) stack.push(current);
    current = { url: url.href, title: title };
    if (!dialog.open) {
      returnFocus = document.activeElement;
      dialog.showModal();
      document.documentElement.classList.add('research-profile-open');
    }
    heading.textContent = title;
    frame.title = title;
    full.href = url.href;
    back.hidden = stack.length === 0;
    close.focus();
    frame.hidden = true;
    status.hidden = false;
    status.textContent = 'Loading ' + title.toLowerCase() + '…';
    body.setAttribute('aria-busy', 'true');
    window.clearTimeout(timer);
    timer = window.setTimeout(loadError, 15000);
    frame.src = url.href;
  }
  frame.addEventListener('load', function () {
    if (!current || !dialog.open) return;
    try {
      var content = frame.contentDocument;
      if (!content || !content.querySelector('#main')) { loadError(); return; }
      content.documentElement.classList.add('page-embedded', 'research-embedded');
      content.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !content.querySelector('dialog[open]')) {
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
      window.clearTimeout(timer);
      frame.hidden = false;
      status.hidden = true;
      body.setAttribute('aria-busy', 'false');
      // Reapply deep links after removing the embedded site's menu.
      var hash = new URL(current.url).hash;
      if (hash) {
        var target = content.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) target.scrollIntoView({ block: 'start' });
      }
    } catch (error) { loadError(); }
  });
  frame.addEventListener('error', loadError);
  document.querySelectorAll('[data-page-preview]').forEach(function (trigger) {
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-controls', dialog.id);
    trigger.addEventListener('click', function (event) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      var title = trigger.dataset.pagePreview;
      if (window.parent !== window && document.documentElement.classList.contains('page-embedded')) {
        window.parent.postMessage({ type: 'site-page-preview', url: trigger.href, title: title }, window.location.origin);
      } else showPage(trigger.href, title, false);
    });
  });
  window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin || event.source !== frame.contentWindow || !dialog.open) return;
    var data = event.data;
    if (data && data.type === 'site-page-preview' && typeof data.url === 'string' && typeof data.title === 'string') {
      showPage(data.url, data.title, true);
    }
  });
  back.addEventListener('click', function () {
    if (!stack.length) return;
    var previous = stack.pop();
    showPage(previous.url, previous.title, false);
  });
  close.addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    var bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', function () {
    window.clearTimeout(timer);
    document.documentElement.classList.remove('research-profile-open');
    current = null;
    stack = [];
    frame.hidden = true;
    frame.removeAttribute('src');
    if (returnFocus && returnFocus.isConnected) returnFocus.focus({ preventScroll: true });
  });
}());
