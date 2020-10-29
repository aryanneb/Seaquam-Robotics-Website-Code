window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 175);
});

// Navigation menu animation mobile

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

const historyDropdown = () => {
  const parent = document.getElementsByClassName("nav")[0];
  const plus = document.getElementsByClassName("historyDrpDwn")[0];
  const teams = document.getElementsByClassName("teamsDrpDwn")[0];
  const resc = document.getElementsByClassName("resourcesDrpDwn")[0];
  const child1 = document.getElementsByClassName("history1")[0].cloneNode(true);

  plus.addEventListener("click", () => {
    if (plus.classList.contains("dropped")) {
      parent.removeChild(child1);
      plus.classList.toggle("dropped");
    } else if (document.getElementsByClassName("goldText")[0]) {
      while (document.getElementsByClassName("goldText")[0]) {
        parent.removeChild(document.getElementsByClassName("goldText")[0]);
      }
      if (teams.classList.contains("dropped")) {
        teams.classList.toggle("dropped");
        parent.insertBefore(child1, parent.childNodes[4]);
        child1.classList.add("goldText");
        child1.classList.add("sub-link");
        child1.style.animation = "navLinkAni 0.5s ease";
        child1.style.opacity = "1";
        plus.classList.toggle("dropped");
      }

      if (resc.classList.contains("dropped")) {
        resc.classList.toggle("dropped");
        parent.insertBefore(child1, parent.childNodes[4]);
        child1.classList.add("goldText");
        child1.classList.add("sub-link");
        child1.style.animation = "navLinkAni 0.5s ease";
        child1.style.opacity = "1";
        plus.classList.toggle("dropped");
      }
    } else {
      parent.insertBefore(child1, parent.childNodes[4]);
      child1.classList.add("goldText");
      child1.classList.add("sub-link");
      child1.style.animation = "navLinkAni 0.5s ease";
      child1.style.opacity = "1";
      plus.classList.toggle("dropped");
    }
  });
};

const teamsDropDown = () => {
  const parent = document.getElementsByClassName("nav")[0];
  const plus = document.getElementsByClassName("teamsDrpDwn")[0];
  const hist = document.getElementsByClassName("historyDrpDwn")[0];
  const resc = document.getElementsByClassName("resourcesDrpDwn")[0];
  const resources = document.getElementsByClassName("resources")[0];
  const seniors = document
    .querySelector(".teams > .dropdown > li ")
    .cloneNode(true);

  const juniors = document
    .querySelector(".teams > .dropdown > li ")
    .nextElementSibling.cloneNode(true);

  plus.addEventListener("click", () => {
    if (plus.classList.contains("dropped")) {
      parent.removeChild(seniors);
      parent.removeChild(juniors);
      plus.classList.toggle("dropped");
    } else if (document.getElementsByClassName("goldText")[0]) {
      while (document.getElementsByClassName("goldText")[0]) {
        parent.removeChild(document.getElementsByClassName("goldText")[0]);
      }
      if (hist.classList.contains("dropped")) {
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
      }
      if (resc.classList.contains("dropped")) {
        resc.classList.toggle("dropped");
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

const resourcesDropDown = () => {
  const parent = document.getElementsByClassName("nav")[0];
  const teams = document.getElementsByClassName("teamsDrpDwn")[0];
  const hist = document.getElementsByClassName("historyDrpDwn")[0];
  const plus = document.getElementsByClassName("resourcesDrpDwn")[0];
  const schedule = document.getElementsByClassName("schedule")[0];
  const coding = document
    .querySelector(".resources > .dropdown > li ")
    .cloneNode(true);

  const building = document
    .querySelector(".resources > .dropdown > li ")
    .nextElementSibling.cloneNode(true);

  const design = document
    .querySelector(".resources > .dropdown > li ")
    .nextElementSibling.nextElementSibling.cloneNode(true);

  plus.addEventListener("click", () => {
    if (plus.classList.contains("dropped")) {
      parent.removeChild(coding);
      parent.removeChild(building);
      parent.removeChild(design);
      plus.classList.toggle("dropped");
    } else if (document.getElementsByClassName("goldText")[0]) {
      while (document.getElementsByClassName("goldText")[0]) {
        parent.removeChild(document.getElementsByClassName("goldText")[0]);
      }
      if (hist.classList.contains("dropped")) {
        hist.classList.toggle("dropped");
        parent.insertBefore(coding, schedule);
        parent.insertBefore(building, schedule);
        parent.insertBefore(design, schedule);
        coding.classList.add("goldText");
        building.classList.add("goldText");
        design.classList.add("goldText");
        coding.classList.add("sub-link");
        building.classList.add("sub-link");
        design.classList.add("sub-link");
        coding.style.animation = "navLinkAni 0.5s ease";
        building.style.animation = "navLinkAni 0.5s ease";
        design.style.animation = "navLinkAni 0.5s ease";
        coding.style.opacity = "1";
        building.style.opacity = "1";
        design.style.opacity = "1";
        plus.classList.toggle("dropped");
      }
      if (teams.classList.contains("dropped")) {
        teams.classList.toggle("dropped");
        parent.insertBefore(coding, schedule);
        parent.insertBefore(building, schedule);
        parent.insertBefore(design, schedule);
        coding.classList.add("goldText");
        building.classList.add("goldText");
        design.classList.add("goldText");
        coding.classList.add("sub-link");
        building.classList.add("sub-link");
        design.classList.add("sub-link");
        coding.style.animation = "navLinkAni 0.5s ease";
        building.style.animation = "navLinkAni 0.5s ease";
        design.style.animation = "navLinkAni 0.5s ease";
        coding.style.opacity = "1";
        building.style.opacity = "1";
        design.style.opacity = "1";
        plus.classList.toggle("dropped");
      }
    } else {
      parent.insertBefore(coding, schedule);
      parent.insertBefore(building, schedule);
      parent.insertBefore(design, schedule);
      coding.classList.add("goldText");
      building.classList.add("goldText");
      design.classList.add("goldText");
      coding.classList.add("sub-link");
      building.classList.add("sub-link");
      design.classList.add("sub-link");
      coding.style.animation = "navLinkAni 0.5s ease";
      building.style.animation = "navLinkAni 0.5s ease";
      design.style.animation = "navLinkAni 0.5s ease";
      coding.style.opacity = "1";
      building.style.opacity = "1";
      design.style.opacity = "1";
      plus.classList.toggle("dropped");
    }
  });
};

setTimeout(function() {
  navSlide();
  historyDropdown();
  teamsDropDown();
  resourcesDropDown();
}, 100);

// arrow click scroll animation

const arrowDown = document.getElementsByClassName("arrow-down")[0];

arrowDown.addEventListener("click", scrollDown);

function scrollDown() {
  window.scroll({
    top: (window.innerHeight / 100) * 90,
    left: 0,
    behavior: "smooth",
  });
}

const arrowUp = document.getElementsByClassName("arrow-up")[0];
arrowUp.addEventListener("click", scrollUp);

function scrollUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// animate the jumping arrow

anime({
  targets: ".arrow-down",
  rotate: 45 - 360,
  easing: "spring(5, 100, 100, 35)",
  duration: 800,
});