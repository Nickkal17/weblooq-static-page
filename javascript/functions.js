/*// Get the navbar
let navbar = document.querySelector(".navigation-bar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
  if (window.pageYOffset - 15 >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("navigation-bar-sticky");
    navbar.classList.remove("navigation-bar");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("navigation-bar-sticky");
    navbar.classList.add("navigation-bar");
  }
}

window.onscroll = function () {
  stickyMenu();
};*/

function slider() {
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider > a > img");
  const prevButton = document.querySelector("#prev-button");
  const nextButton = document.querySelector("#next-button");

  let imageIndex = 1;
  const size = images[0].clientWidth;
  slider.style.transform = "translateX(" + -size * imageIndex + "px)";

  nextButton.addEventListener("click", () => {
    if (imageIndex >= images.length - 1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    imageIndex++;
    slider.style.transform = "translateX(" + -size * imageIndex + "px)";
  });

  prevButton.addEventListener("click", () => {
    if (imageIndex <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    imageIndex--;
    slider.style.transform = "translateX(" + -size * imageIndex + "px)";
  });

  slider.addEventListener("transitionend", () => {
    if (images[imageIndex].id === "first-clone") {
      slider.style.transition = "none";
      imageIndex = images.length - 2;
      slider.style.transform = "translateX(" + -size * imageIndex + "px)";
    }

    if (images[imageIndex].id === "last-clone") {
      slider.style.transition = "none";
      imageIndex = images.length - imageIndex;
      slider.style.transform = "translateX(" + -size * imageIndex + "px)";
    }
  });
}

function responsiveNav() {
  const burger = document.querySelector(".hamburger-nav");
  const navLinks = document.querySelector(".links-container");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("responsive-nav-active");
  });
}

slider();
responsiveNav();
