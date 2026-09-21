const viewer = document.querySelector('.cv-viewer');
if (viewer) {
  const pages = viewer.querySelector('.cv-pages');
  const status = viewer.querySelector('.cv-status');
  const zoomIn = viewer.querySelector('[data-cv-in]');
  const zoomOut = viewer.querySelector('[data-cv-out]');
  const fit = viewer.querySelector('[data-cv-fit]');
  const buttons = [zoomIn, zoomOut, fit];
  let pdf;
  let zoom = 1;
  let rendering = false;
  let pending = false;
  let lastWidth = 0;

  function fallback() {
    status.textContent = 'The CV preview could not load. Select “Open PDF” to view the file.';
  }

  async function render() {
    if (!pdf || !pages.clientWidth) return;
    if (rendering) { pending = true; return; }
    rendering = true;
    buttons.forEach(button => { button.disabled = true; });
    try {
      do {
        pending = false;
        const width = Math.min(1000, pages.clientWidth) * zoom;
        lastWidth = pages.clientWidth;
        const fragment = document.createDocumentFragment();
        for (let number = 1; number <= pdf.numPages; number++) {
          const page = await pdf.getPage(number);
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: width / base.width });
          const outputScale = Math.min(window.devicePixelRatio || 1, 2);
          const figure = document.createElement('figure');
          figure.className = 'cv-page';
          figure.style.width = width + 'px';
          const canvas = document.createElement('canvas');
          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.setAttribute('aria-hidden', 'true');
          await page.render({ canvasContext: canvas.getContext('2d'), viewport,
            transform: [outputScale, 0, 0, outputScale, 0, 0] }).promise;
          const caption = document.createElement('figcaption');
          caption.textContent = 'Page ' + number + ' of ' + pdf.numPages;
          const text = document.createElement('div');
          text.className = 'cv-page-text';
          const extracted = await page.getTextContent();
          text.textContent = extracted.items.map(item => item.str + (item.hasEOL ? '\n' : ' ')).join('');
          figure.append(canvas, caption, text);
          fragment.appendChild(figure);
        }
        pages.replaceChildren(fragment);
        status.textContent = pdf.numPages + ' pages · ' + Math.round(zoom * 100) + '%';
      } while (pending);
    } catch (error) { fallback(); }
    finally {
      rendering = false;
      fit.disabled = false;
      zoomIn.disabled = zoom >= 2;
      zoomOut.disabled = zoom <= 0.75;
    }
  }
  zoomIn.addEventListener('click', () => { zoom = Math.min(2, zoom + 0.25); render(); });
  zoomOut.addEventListener('click', () => { zoom = Math.max(0.75, zoom - 0.25); render(); });
  fit.addEventListener('click', () => { zoom = 1; render(); });
  let resizeTimer;
  function resized() {
    if (pages.clientWidth === lastWidth) return;
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(render, 150);
  }
  if ('ResizeObserver' in window) new ResizeObserver(resized).observe(pages);
  window.addEventListener('resize', resized);
  try {
    const pdfjs = await import('https://cdn.jsdelivr.net/npm/pdfjs-dist@6.3.289/legacy/build/pdf.min.mjs');
    pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.3.289/legacy/build/pdf.worker.min.mjs';
    pdf = await pdfjs.getDocument({ url: viewer.dataset.pdf, isEvalSupported: false }).promise;
    render();
  } catch (error) { fallback(); }
}
