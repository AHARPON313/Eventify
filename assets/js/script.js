document.addEventListener('DOMContentLoaded', function () {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.event-gallery',
      touchNavigation: true,
      loop: true,
    });
  }
});

