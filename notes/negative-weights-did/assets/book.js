(function () {
  'use strict';
  function revealLinkedDetail() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    let detail = target.closest('details');
    while (detail) {
      detail.open = true;
      detail = detail.parentElement.closest('details');
    }
    requestAnimationFrame(function () { target.scrollIntoView(); });
  }
  window.addEventListener('hashchange', revealLinkedDetail);
  revealLinkedDetail();
  // Links such as lab-panel.html#step=3 open the embedded lab at that step.
  function labState() {
    const match = window.location.hash.match(/^#(step=[0-7]|free)$/);
    return match ? match[1] : '';
  }
  document.querySelectorAll('iframe[data-lab-frame]').forEach(function (frame) {
    let observer, pending = false, previous = 0;
    const base = frame.getAttribute('src').split('#')[0];
    function syncState() {
      const state = labState();
      if (state && frame.getAttribute('src') !== base + '#' + state) frame.setAttribute('src', base + '#' + state);
    }
    syncState();
    window.addEventListener('hashchange', syncState);
    function fit() {
      pending = false;
      try {
        const doc = frame.contentDocument;
        if (!doc || !doc.body) return;
        const height = Math.max(800, Math.ceil(doc.body.getBoundingClientRect().height) + 2);
        if (Math.abs(height - previous) > 1) {
          previous = height;
          frame.style.height = height + 'px';
        }
      } catch (error) {
        // The adjacent full-width link remains available if a host isolates the iframe.
      }
    }
    function schedule() {
      if (!pending) {
        pending = true;
        requestAnimationFrame(fit);
      }
    }
    function bind() {
      if (observer) observer.disconnect();
      try {
        const doc = frame.contentDocument;
        if (doc && doc.body) {
          observer = new ResizeObserver(schedule);
          observer.observe(doc.body);
          doc.addEventListener('toggle', schedule, true);
          if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(schedule);
        }
      } catch (error) {}
      schedule();
    }
    frame.addEventListener('load', bind);
    window.addEventListener('resize', schedule);
    bind();
  });
})();
