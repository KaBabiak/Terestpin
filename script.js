var intervalid;

setupOverlay();
setupCarousel();

function setupOverlay() {
  document
    .getElementById("login")
    .addEventListener("click", () => switchOverlay());
  document
    .getElementById("overlay")
    .addEventListener("click", () => switchOverlay());
  document.getElementById("accept").addEventListener("click", () => accept());
}

function switchOverlay() {
  document.getElementById("overlay").style.display =
    window.getComputedStyle(document.getElementById("overlay")).display ===
    "none"
      ? "block"
      : "none";
}

function accept() {
  document.getElementById("terms").style.display = "none";
}

function setupCarousel() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  document
    .getElementById("dot0")
    .addEventListener("click", () => setCurrentSlide(0));
  document
    .getElementById("dot1")
    .addEventListener("click", () => setCurrentSlide(1));
  document
    .getElementById("dot2")
    .addEventListener("click", () => setCurrentSlide(2));
  document
    .getElementById("dot3")
    .addEventListener("click", () => setCurrentSlide(3));
  startCarousel(5000);
}

function startCarousel(timeout) {
  intervalid = setInterval(changeSlides, timeout);
}

function changeSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    if (
      window.getComputedStyle(slides[i]).getPropertyValue("display") === "block"
    ) {
      slides[i].style.display = "none";
      slides[(i + 1) % 4].style.display = "block";
      break;
    }
  }
}

function setCurrentSlide(slideIndex) {
  clearInterval(intervalid);
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    if (
      window.getComputedStyle(slides[i]).getPropertyValue("display") === "block"
    ) {
      slides[i].style.display = "none";
      slides[slideIndex].style.display = "block";
      break;
    }
  }
  startCarousel(5000);
}
