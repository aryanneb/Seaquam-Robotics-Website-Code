let active = document.getElementsByClassName("changeUp")[0];
let activeBtn = document.getElementById('changeUpBtn');

document
  .getElementById('towerTakeoverBtn')
  .addEventListener("click", towerTakeoverVisibility);
document
  .getElementById('changeUpBtn')
  .addEventListener("click", changeUpVisibility);

document
  .getElementById('turningPointBtn')
  .addEventListener("click", turningPointVisibility);

document
  .getElementById('inTheZoneBtn')
  .addEventListener("click", inTheZoneVisibility);

document
  .getElementById('starstruckBtn')
  .addEventListener("click", starstruckVisibility);

document
  .getElementById('nothingButNetBtn')
  .addEventListener("click", nothingButNetVisibility);

document
  .getElementById('skyriseBtn')
  .addEventListener("click", skyriseVisibility);

document
  .getElementById('tossUpBtn')
  .addEventListener("click", tossUpVisibility);




function towerTakeoverVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("towerTakeover")[0];
  active.style.display = "flex";
  activeBtn.setAttribute("class", "button-style award");
  activeBtn = document.getElementById('towerTakeoverBtn');
  activeBtn.setAttribute("class", "button-style2 award");
}

function changeUpVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("changeUp")[0];
  active.style.display = "flex";
  activeBtn.setAttribute("class", "button-style award");
  activeBtn = document.getElementById('changeUpBtn');
  activeBtn.setAttribute("class", "button-style2 award");
}


function turningPointVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("turningPoint")[0];
  active.style.display = "flex";
  activeBtn.setAttribute("class", "button-style award");
  activeBtn = document.getElementById('turningPointBtn');
  activeBtn.setAttribute("class", "button-style2 award");
}

function inTheZoneVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("inTheZone")[0];
  active.style.display = "flex";
  activeBtn.setAttribute("class", "button-style award");
  activeBtn = document.getElementById('inTheZoneBtn');
  activeBtn.setAttribute("class", "button-style2 award");
}


function starstruckVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("starstruck")[0];
  active.style.display = "flex";
  activeBtn.setAttribute("class", "button-style award");
  activeBtn = document.getElementById('starstruckBtn');
  activeBtn.setAttribute("class", "button-style2 award");
}

function nothingButNetVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("nothingButNet")[0];
  active.style.display = "flex";
  activeBtn.setAttribute("class", "button-style award");
  activeBtn = document.getElementById('nothingButNetBtn');
  activeBtn.setAttribute("class", "button-style2 award");
}

function skyriseVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("skyrise")[0];
  active.style.display = "flex";
  activeBtn.setAttribute("class", "button-style award");
  activeBtn = document.getElementById('skyriseBtn');
  activeBtn.setAttribute("class", "button-style2 award");
}

function tossUpVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("tossUp")[0];
  active.style.display = "flex";
  activeBtn.setAttribute("class", "button-style award");
  activeBtn = document.getElementById('tossUpBtn');
  activeBtn.setAttribute("class", "button-style2 award");
}