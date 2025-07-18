// Navbar fade on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('fade');
  } else {
    navbar.classList.remove('fade');
  }
});

// Carousel logic
function setupCarousel(section) {
  const images = section.querySelectorAll('.carousel-image');
  const prevBtn = section.querySelector('.carousel-btn.prev');
  const nextBtn = section.querySelector('.carousel-btn.next');
  let index = 0;

  function showImage(i) {
    images.forEach((img, idx) => {
      img.classList.toggle('active', idx === i);
    });
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
  });
}

document.querySelectorAll('.carousel').forEach(carousel => {
  setupCarousel(carousel.closest('section'));
});
