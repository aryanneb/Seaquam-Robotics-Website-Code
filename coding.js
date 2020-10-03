let active = document.getElementsByClassName("topPage")[0];
let activeList = document.getElementById('one');
let activeUp = document.getElementById('welcomeBtn');
let activeLo = document.getElementById('topPageBtn');


// upperMenu buttons
document
  .getElementById('welcomeBtn')
  .addEventListener("click" , welcomeMenuVisibility);
document
  .getElementById('tutorialsBtn')
  .addEventListener("click", tutorialsMenuVisibility);

document
  .getElementById('vexcodeBtn')
  .addEventListener("click", vexcodeMenuVisibility);

document
  .getElementById('prosBtn')
  .addEventListener("click", prosMenuVisibility);

document
  .getElementById('designingBtn')
  .addEventListener("click", designingMenuVisibility);

// lowerMenu buttons & lower inline buttons triggers
document
  .getElementById('topPageBtn')
  .addEventListener("click", topPageVisibility);

document
  .getElementById('whatsNewBtn')
  .addEventListener("click", whatsNewVisibility);

document
  .getElementById('gettingStartedBtn')
  .addEventListener("click", gettingStartedVisibility);

document
  .getElementById('settingUpYourIDE-Btn')
  .addEventListener("click", settingUpVisibility);

document
  .getElementById('basicsOfCodingBtn')
  .addEventListener("click", basicsVisibility);

document
  .getElementById('howToCodeVexcodeBtn')
  .addEventListener("click", howToVexcodeVisibility);

document
  .getElementById('tempVexcodeBtn')
  .addEventListener("click", tempVexcodeVisibility);

document
  .getElementById('controlsVexcodeBtn')
  .addEventListener("click", controlsVexcodeVisibility);

document
  .getElementById('troubleshootsVexcodeBtn')
  .addEventListener("click", troubleshootsVexcodeVisibility);

document
  .getElementById('howToCodeProsBtn')
  .addEventListener("click", howToProsVisibility);

document
  .getElementById('tempProsBtn')
  .addEventListener("click", tempProsVisibility);

document
  .getElementById('controlsProsBtn')
  .addEventListener("click", controlsProsVisibility);

document
  .getElementById('troubleshootsProsBtn')
  .addEventListener("click", troubleshootsProsVisibility);

document
  .getElementById('designProcessBtn')
  .addEventListener("click", designProcessVisibility);

document
  .getElementById('wayOfCodingBtn')
  .addEventListener("click", wayOfCodingVisibility);

document
  .getElementById('documentationBtn')
  .addEventListener("click", documentationVisibility);

// upperMenu & lowerMenuButtons visibility toggles

function welcomeMenuVisibility() {
  activeList.style.display = "none";
  activeList = document.getElementById('one');
  activeList.style.display = "block";
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById('welcomeBtn');
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function tutorialsMenuVisibility() {
  activeList.style.display = "none";
  activeList = document.getElementById('two');
  activeList.style.display = "block";
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById('tutorialsBtn');
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}


function vexcodeMenuVisibility() {
  activeList.style.display = "none";
  activeList = document.getElementById('three');
  activeList.style.display = "block";
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById('vexcodeBtn');
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function prosMenuVisibility() {
  activeList.style.display = "none";
  activeList = document.getElementById('four');
  activeList.style.display = "block";
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById('prosBtn');
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}


function designingMenuVisibility() {
  activeList.style.display = "none";
  activeList = document.getElementById('five');
  activeList.style.display = "block";
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById('designingBtn');
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}



// lowermenu button & content visibility toggles


function topPageVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("topPage")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('topPageBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function whatsNewVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("whatsNew")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('whatsNewBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function gettingStartedVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("gettingStarted")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('gettingStartedBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function settingUpVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("settingUp")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('settingUpYourIDE-Btn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function basicsVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("basics")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('basicsOfCodingBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function howToVexcodeVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("howToVexcode")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('howToCodeVexcodeBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function tempVexcodeVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("tempVexCode")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('tempVexcodeBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function controlsVexcodeVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("controlsVexcode")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('controlsVexcodeBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function troubleshootsVexcodeVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("troubleshootsVexcode")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('troubleshootsVexcodeBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function howToProsVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("howToPros")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('howToCodeProsBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function tempProsVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("tempPros")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('tempProsBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function controlsProsVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("controlsPros")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('controlsProsBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function troubleshootsProsVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("troubleshootsPros")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('troubleshootsProsBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function designProcessVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("designProcess")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('designProcessBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function wayOfCodingVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("wayOfCoding")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('wayOfCodingBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}

function documentationVisibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("documentation")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById('documentationBtn');
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
}
