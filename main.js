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
    let subLinks = document.querySelectorAll(".sub-link");

    subLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
        link.style.opacity = "0";
      } else {
        link.style.animation = `navLinkAni 0.4s ease forwards ${
          index / 7 + 0.75
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
  const teams = document.getElementsByClassName("teamsDrpDwn")[0];
  const child1 = document.getElementsByClassName("history1")[0].cloneNode(true);
  const child2 = document.getElementsByClassName("history2")[0].cloneNode(true);

  plus.addEventListener("click", () => {
    if (plus.classList.contains("dropped")) {
      parent.removeChild(child1);
      parent.removeChild(child2);
      plus.classList.toggle("dropped");
    } else if (teams.classList.contains("dropped")) {
      while (document.getElementsByClassName("goldText")[0]) {
        parent.removeChild(document.getElementsByClassName("goldText")[0]);
      }
      teams.classList.toggle("dropped");
      parent.insertBefore(child1, parent.childNodes[4]);
      parent.insertBefore(child2, parent.childNodes[5]);
      child1.classList.add("goldText");
      child2.classList.add("goldText");
      child1.classList.add("sub-link");
      child2.classList.add("sub-link");
      child1.style.animation = "navLinkAni 0.5s ease";
      child2.style.animation = "navLinkAni 0.5s ease";
      child1.style.opacity = "1";
      child2.style.opacity = "1";
      plus.classList.toggle("dropped");
    } else {
      parent.insertBefore(child1, parent.childNodes[4]);
      parent.insertBefore(child2, parent.childNodes[5]);
      child1.classList.add("goldText");
      child2.classList.add("goldText");
      child1.classList.add("sub-link");
      child2.classList.add("sub-link");
      child1.style.animation = "navLinkAni 0.5s ease";
      child2.style.animation = "navLinkAni 0.5s ease";
      child1.style.opacity = "1";
      child2.style.opacity = "1";
      plus.classList.toggle("dropped");
    }
  });
};

const teamsDropDown = () => {
  const parent = document.getElementsByClassName("nav")[0];
  const plus = document.getElementsByClassName("teamsDrpDwn")[0];
  const hist = document.getElementsByClassName("historyDrpDwn")[0];
  const resources = document.getElementsByClassName("resources")[0];
  const seniors = document
    .querySelector(".teams > .dropdown > li ")
    .cloneNode(true);

  const juniors = document
    .querySelector(".teams > .dropdown > li ")
    .nextElementSibling.cloneNode(true);

  const numberOfSeniors =
    (document.querySelector(".seniors>ul").childNodes.length - 1) / 2;

  const numberOfJuniors =
    (document.querySelector(".juniors>ul").childNodes.length - 1) / 2;
  plus.addEventListener("click", () => {
    if (plus.classList.contains("dropped")) {
      parent.removeChild(seniors);
      parent.removeChild(juniors);
      plus.classList.toggle("dropped");
    } else if (document.getElementsByClassName("goldText")[0]) {
      while (document.getElementsByClassName("goldText")[0]) {
        parent.removeChild(document.getElementsByClassName("goldText")[0]);
      }
      hist.classList.toggle("dropped");
      parent.insertBefore(seniors, resources);
      parent.insertBefore(juniors, resources);
      seniors.classList.add("goldText");
      juniors.classList.add("goldText");
      seniors.classList.add("sub-link");
      juniors.classList.add("sub-link");
      seniors.style.animation = "navLinkAni 0.5s ease";
      juniors.style.animation = "navLinkAni 0.5s ease";
      seniors.style.opacity = "1";
      juniors.style.opacity = "1";
      plus.classList.toggle("dropped");
    } else {
      parent.insertBefore(seniors, resources);
      parent.insertBefore(juniors, resources);
      seniors.classList.add("goldText");
      juniors.classList.add("goldText");
      seniors.classList.add("sub-link");
      juniors.classList.add("sub-link");
      seniors.style.animation = "navLinkAni 0.5s ease";
      juniors.style.animation = "navLinkAni 0.5s ease";
      seniors.style.opacity = "1";
      juniors.style.opacity = "1";
      plus.classList.toggle("dropped");
    }
  });
};

historyDropdown();
teamsDropDown();
