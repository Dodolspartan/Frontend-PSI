// Navbar Fixed Scroll
let prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");
let navbarHeight = navbar.clientHeight;
let isScrollingUp = false;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    isScrollingUp = true;
  } else {
    if (isScrollingUp && currentScrollPos < navbarHeight) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = `-${navbarHeight}px`;
      isScrollingUp = false;
    }
  }
  prevScrollpos = currentScrollPos;
};
// Slider
const next = document.querySelector(".right");
const prev = document.querySelector(".left");
const slides = document.querySelectorAll(".slide");

let index = 0;
slider(index);

function slider(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

next.addEventListener("click", (e) => {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  slider(index);
});

prev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  slider(index);
});
