window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 175);
});

responsecache = {};

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

// Navigation history menu drop down
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

// Navigation teams menu drop down
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

navSlide();
historyDropdown();
teamsDropDown();
resourcesDropDown();

function scrollDown() {
  window.scroll({
    top: (window.innerHeight / 100) * 90,
    left: 0,
    behavior: "smooth",
  });
}

const arrowDown = document.getElementsByClassName("arrow-down")[0];
arrowDown.addEventListener('click', scrollDown);

function scrollUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

const arrowUp = document.getElementsByClassName("arrow-up")[0];
arrowUp.addEventListener('click', scrollUp);

anime({
  targets: ".arrow-down",
  rotate: 45 - 360,
  easing: "spring(5, 100, 100, 35)",
  duration: 800,
});

// VexDB Integration

// Returns a list of all Seaquam Teams
async function searchSeaquam() {
  let teamsurl = "https://api.vexdb.io/v1/get_teams?organisation=Seaquam%20Secondary";
  if (responsecache[teamsurl] != undefined)
    return responsecache[teamsurl].result;
  let response = await (await fetch(teamsurl)).json();
  responsecache[teamsurl] = Object.assign(response);
  return response.result;
}

// Gets a specific team's information
async function getTeamInfo(name) {
  let teamsurl = 'https://api.vexdb.io/v1/get_teams?team=' + name;
  if (responsecache[teamsurl] != undefined)
    return responsecache[teamsurl].result[0];
  let response = await (await fetch(teamsurl)).json();
  responsecache[teamsurl] = Object.assign(response);
  return response.result[0];
}

// Returns a list of formatted awards for a given team
async function getTeamAwards(name, season) {
  let awardsurl = 'https://api.vexdb.io/v1/get_awards?team=' + name + (season != undefined ? "&season=" + encodeURIComponent(season) : "");
  let response;
  if (responsecache[awardsurl] != undefined)
    response = responsecache[awardsurl];
  else {
    response = await (await fetch(awardsurl)).json();
    responsecache[awardsurl] = Object.assign(response);
  }
  let reqlist = {};
  let arranged = {};
  let ret = [];
  for (i = 0; i < response.size; i++) {
    if (arranged[response.result[i].sku] == undefined)
      arranged[response.result[i].sku] = [];
    arranged[response.result[i].sku].push(response.result[i].name.replace("(VRC/VEXU)", ""));
    if (reqlist[response.result[i].sku] == undefined)
      reqlist[response.result[i].sku] = getEventInfo(response.result[i].sku)
  }
  for (var key in arranged) {
    let str = (await reqlist[key]).name.trim() + ": ";
    for (i = 0; i < arranged[key].length; i++)
      str += arranged[key][i].trim() + ", ";
    ret.push(str.replace(/,\s$/, "").trim());
  }
  return ret;
}

// Gets a list of events a team attended
async function getTeamEvents(name) {
  let eventsurl = "https://api.vexdb.io/v1/get_events?team=" + name;
  if (responsecache[eventsurl] != undefined)
    return responsecache[eventsurl].result;

  let response = await (await fetch(eventsurl)).json();
  responsecache[eventsurl] = Object.assign(response);
  return response.result;
}

// Gets a list of events (and any awards they earned) for a given team and season
async function getTeamEventsAwards(name, season = undefined, ignoreawardless = false, eventsonly = false) {
  let i = 0;

  // Prepare the awards fetch
  let awardsurl = 'https://api.vexdb.io/v1/get_awards?team=' + name + (season != undefined ? "&season=" + encodeURIComponent(season) : "");
  let awardsfetch = fetch(awardsurl);
  let awardsResponse = undefined;
  if (responsecache[awardsurl] != undefined) {
    awardsResponse = responsecache[awardsurl].result;
  }

  // Get team events
  let eventsurl = "https://api.vexdb.io/v1/get_events?team=" + name + (season != undefined ? "&season=" + encodeURIComponent(season) : "");
  let eventsResponse;
  if (responsecache[eventsurl] != undefined) {
    eventsResponse = responsecache[eventsurl].result;
  } else {
    eventsResponse = await (await fetch(eventsurl)).json();
    responsecache[eventsurl] = Object.assign(eventsResponse);
    eventsResponse = eventsResponse.result;
  }

  // Populate an object
  let events = {};
  let eventNames = {};
  for (i = 0; i < eventsResponse.length; i++) {
    events[eventsResponse[i].sku] = [];
    eventNames[eventsResponse[i].sku] = getEventInfo(eventsResponse[i].sku);
  }

  if (awardsResponse == undefined) {
    awardsResponse = await (await awardsfetch).json();
    responsecache[awardsurl] = Object.assign(awardsResponse);
    awardsResponse = awardsResponse.result;
  }
  for (i = 0; i < awardsResponse.length; i++) {
    if (events[awardsResponse[i].sku] == undefined) {
      events[awardsResponse[i].sku] = [];
      eventNames[awardsResponse[i].sku] = getEventInfo(awardsResponse[i].sku)
    }
    events[awardsResponse[i].sku].push(awardsResponse[i].name.replace("(VRC/VEXU)", "").trim());
  }

  // Construct return
  let ret = {};
  for (var key in events) {
    if (events[key].length == 0 && ignoreawardless) continue;
    ret[(await eventNames[key]).sku] = {};
    ret[(await eventNames[key]).sku].name = (await eventNames[key]).name.trim();
    ret[(await eventNames[key]).sku].link = "https://robotevents.com/robot-competitions/vex-robotics-competition/" + (await eventNames[key]).key + ".html";
    ret[(await eventNames[key]).sku].awards = events[key];
  }
  return ret;
}

// Gets information for a specific event sku
async function getEventInfo(sku) {
  let eventurl = "https://api.vexdb.io/v1/get_events?sku=" + sku;
  if (responsecache[eventurl] != undefined)
    return responsecache[eventurl].result[0];
  let response = await (await fetch(eventurl)).json();
  responsecache[eventurl] = Object.assign(response);
  return response.result[0];
}