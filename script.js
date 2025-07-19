document.addEventListener("DOMContentLoaded", () => {
  // Toggle nav menu on mobile
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Carousel logic for all carousels on page
  document.querySelectorAll(".carousel").forEach(carousel => {
    const images = carousel.querySelectorAll(".carousel-image");
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }

    prevBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    // Optional: Auto-slide every 5 seconds
    // setInterval(() => {
    //   currentIndex = (currentIndex + 1) % images.length;
    //   showImage(currentIndex);
    // }, 5000);
  });

  // Call button alert
  const callBtn = document.getElementById("callBtn");
  callBtn?.addEventListener("click", () => {
    alert("Apelare număr de telefon: +40 742  159 796");
  });
});
