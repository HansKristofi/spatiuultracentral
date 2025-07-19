// Navbar fade on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('fade');
  } else {
    navbar.classList.remove('fade');
  }
});

// Carousel logic (manual navigation, no auto-slide)
function setupCarousel(carousel) {
  const images = carousel.querySelectorAll('.carousel-image');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  let index = 0;

  function showImage(newIndex, direction = 'next') {
    images.forEach((img, idx) => {
      img.classList.remove('active', 'prev');
      img.style.zIndex = 0;
      img.style.left = carousel.classList.contains('carousel-schite') ? '100%' : '100vw';
    });
    images[index].classList.add('prev');
    images[newIndex].classList.add('active');
    images[newIndex].style.left = '0';
    images[newIndex].style.zIndex = 1;
    images[index].style.left = direction === 'next'
      ? (carousel.classList.contains('carousel-schite') ? '-100%' : '-100vw')
      : (carousel.classList.contains('carousel-schite') ? '100%' : '100vw');
    images[index].style.zIndex = 1;
    index = newIndex;
  }

  function nextImage() {
    const newIndex = (index + 1) % images.length;
    showImage(newIndex, 'next');
  }

  function prevImage() {
    const newIndex = (index - 1 + images.length) % images.length;
    showImage(newIndex, 'prev');
  }

  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  // Initialize
  images.forEach((img, i) => {
    img.style.left = i === 0 ? '0' : (carousel.classList.contains('carousel-schite') ? '100%' : '100vw');
  });
  images[0].classList.add('active');
}

document.querySelectorAll('.carousel').forEach(setupCarousel);
