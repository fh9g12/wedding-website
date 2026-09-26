// Minimal lightbox: click any element with [data-lightbox] to see the image
// full-size on the same page (no navigation), with a close button, click-
// outside, and Escape to dismiss.
document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close">&times;</button><img class="lightbox-image" alt="">';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('.lightbox-image');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('is-open');
    document.body.classList.add('lightbox-open');
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    img.src = '';
  }

  document.querySelectorAll('[data-lightbox]').forEach(function (el) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function (e) {
      e.preventDefault();
      open(el.getAttribute('data-lightbox'), el.getAttribute('data-lightbox-alt'));
    });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      close();
    }
  });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      close();
    }
  });
});
