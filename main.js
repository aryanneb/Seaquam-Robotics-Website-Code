window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 175);
});

// Navigation menu animation

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  let navLinks = document.querySelectorAll(".main-link");

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

const historyDropdown = () => {
  const parent = document.getElementsByClassName("nav")[0];
  const reference = document.getElementsByClassName("main-links")[2];
  const plus = document.getElementsByClassName("historyDrpDwn")[0];
  const child1 = document.getElementsByClassName("history1")[0];
  const child2 = document.getElementsByClassName("history2")[0];

  plus.addEventListener("click", () => {
    if (plus.classList.contains("dropped")) {
      parent.removeChild(child1);
      parent.removeChild(child2);
      child1.style.opacity = "0";
      child2.style.opacity = "0";
      plus.classList.toggle("dropped");
    } else {
      parent.insertBefore(child1, parent.childNodes[4]);
      parent.insertBefore(child2, parent.childNodes[5]);
      child1.style.opacity = "1";
      child2.style.opacity = "1";
      plus.classList.toggle("dropped");
    }
  });
};

historyDropdown();
