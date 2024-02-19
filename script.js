document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const items = document.querySelectorAll(".flex-3col > div[class^='item']");

  slides[0].classList.add("show");
  items[0].classList.add("show");
});

function toggleBar() {
  const slides = document.querySelectorAll(".slide");
  const items = document.querySelectorAll(".flex-3col > div[class^='item']");

  let currentIndex = Array.from(slides).findIndex((slide) =>
    slide.classList.contains("show")
  );

  slides[currentIndex].classList.remove("show");
  items[currentIndex].classList.remove("show");

  currentIndex = (currentIndex + 1) % slides.length;

  slides[currentIndex].classList.add("show");
  items[currentIndex].classList.add("show");
}
