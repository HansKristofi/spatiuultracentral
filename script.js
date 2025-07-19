document.getElementById('menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Smooth scroll fallback for browsers that don't support CSS scroll-behavior
// (Optional: Only if you want to support older Safari versions)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Generic Carousel Logic (for both homepage and schite)
function setupCarousel(carouselSelector) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;

  const images = carousel.querySelectorAll('.carousel-image');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');

  let current = 0;

  function updateCarousel(nextIndex) {
    images[current].classList.remove('active');
    images[current].classList.add('prev');

    images[nextIndex].classList.remove('prev');
    images[nextIndex].classList.add('active');

    current = nextIndex;
  }

  prevBtn?.addEventListener('click', () => {
    const nextIndex = (current - 1 + images.length) % images.length;
    updateCarousel(nextIndex);
  });

  nextBtn?.addEventListener('click', () => {
    const nextIndex = (current + 1) % images.length;
    updateCarousel(nextIndex);
  });
}

// Initialize both carousels
setupCarousel('.carousel');
setupCarousel('.carousel-schite');

// Optional: Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});
document.getElementById('callBtn').addEventListener('click', () => {
  window.location.href = 'tel:+1234567890';
});
