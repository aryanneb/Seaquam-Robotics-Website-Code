window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 175);
});

// Navigation menu animation

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".main-link");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkAni 0.4s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();
