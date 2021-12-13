var intervalid;
const fashion = [
  "assets/images/fashion/boat-g4425fd344_640.jpg",
  "assets/images/fashion/girl-ge1a74160b_640.jpg",
  "assets/images/fashion/hands-g9b5a4b0ee_640.jpg",
  "assets/images/fashion/people-g46c6dd758_640.jpg",
  "assets/images/fashion/woman-g3c5e2c736_640.jpg",
];
const food = [
  "assets/images/food/churros-g510052f9e_640.jpg",
  "assets/images/food/cookies-g49e90b9a9_640.jpg",
  "assets/images/food/pancakes-g1c1f35be4_640.jpg",
  "assets/images/food/pizza-g9a642d04e_640.jpg",
  "assets/images/food/tacos-g0fb473cb3_640.jpg",
];
const house = [
  "assets/images/house/beautiful-g80d1860f2_640.jpg",
  "assets/images/house/guitar-gcf339ded6_640.jpg",
  "assets/images/house/house-g62a8d2d16_640.jpg",
  "assets/images/house/indoors-g13b85e1aa_640.jpg",
  "assets/images/house/plant-ga96d8b362_640.jpg",
];
const trees = [
  "assets/images/trees/cactus-g07cc8b276_640.jpg",
  "assets/images/trees/flower-g01c200793_640.jpg",
  "assets/images/trees/home-g4f16c0c6e_640.jpg",
  "assets/images/trees/pot-gc6beba9d5_640.jpg",
  "assets/images/trees/table-ge67ca9bfc_640.jpg",
];

const folders = [food, house, fashion, trees];

setupImages();
setupOverlay();
setupCarousel();

function setupImages() {
  assignImages(0);
}

function assignImages(slideIndex) {
  let columns = document.getElementsByClassName("column");
  for (let j = 0; j < columns.length; j++) {
    let rows = columns[j].children;
    for (let i = 0; i < rows.length; i++) {
      rows[i].setAttribute(
        "src",
        folders[slideIndex][Math.floor(Math.random() * 5)]
      );
    }
  }
}

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
      assignImages((i + 1) % 4);
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
  assignImages(slideIndex);
  startCarousel(5000);
}
