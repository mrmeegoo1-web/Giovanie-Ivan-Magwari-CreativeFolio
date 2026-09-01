// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Lightbox
  var lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;
  var stage = lightbox.querySelector('.lightbox-stage');
  var closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(sourceEl) {
    stage.innerHTML = '';
    var kind = sourceEl.getAttribute('data-kind');
    var src = sourceEl.getAttribute('data-src');
    var alt = sourceEl.getAttribute('data-alt') || '';
    var el;
    if (kind === 'video') {
      el = document.createElement('video');
      el.src = src;
      el.controls = true;
      el.autoplay = true;
      el.loop = true;
    } else {
      el = document.createElement('img');
      el.src = src;
      el.alt = alt;
    }
    stage.appendChild(el);
    lightbox.classList.add('is-open');
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    stage.innerHTML = '';
  }

  document.querySelectorAll('.thumb').forEach(function (btn) {
    btn.addEventListener('click', function () { openLightbox(btn); });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
