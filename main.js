window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 175);
});

// Navigation menu animation

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    let navLinks = document.querySelectorAll(".main-link");
    nav.classList.toggle("nav-toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
        link.style.opacity = "0";
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
      child1.classList.add("goldText");
      child2.classList.add("goldText");
      child1.classList.add("main-link");
      child2.classList.add("main-link");
      child1.style.animation = "navLinkAni 0.5s ease";
      child2.style.animation = "navLinkAni 0.5s ease";
      child1.style.opacity = "1";
      child2.style.opacity = "1";
      plus.classList.toggle("dropped");
    }
  });
};

historyDropdown();
