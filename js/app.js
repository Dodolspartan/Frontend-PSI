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
