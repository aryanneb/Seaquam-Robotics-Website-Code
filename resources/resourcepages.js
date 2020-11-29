let active = document.getElementsByClassName("welcome_1")[0];
let activeList = document.getElementById("one");
let activeUp = document.getElementById("welcomeBtn");
let activeLo = document.getElementById("welcomeSub1");

// lowerMenu buttons & lower inline buttons triggers
document
  .getElementById("welcomeSub1")
  .addEventListener("click", welcome_1Visibility);

document
  .getElementById("welcomeSub2")
  .addEventListener("click", welcome_2Visibility);

document.getElementById("twoSub1").addEventListener("click", two_1Visibility);

document.getElementById("twoSub2").addEventListener("click", two_2Visibility);

document.getElementById("twoSub3").addEventListener("click", two_3Visibility);

document
  .getElementById("threeSub1")
  .addEventListener("click", three_1Visibility);

document
  .getElementById("threeSub2")
  .addEventListener("click", three_2Visibility);

document
  .getElementById("threeSub3")
  .addEventListener("click", three_3Visibility);

document
  .getElementById("threeSub4")
  .addEventListener("click", three_4Visibility);

document.getElementById("fourSub1").addEventListener("click", four_1Visibility);

document.getElementById("fourSub2").addEventListener("click", four_2Visibility);

document.getElementById("fourSub3").addEventListener("click", four_3Visibility);

document.getElementById("fourSub4").addEventListener("click", four_4Visibility);

document.getElementById("fiveSub1").addEventListener("click", five_1Visibility);

document.getElementById("fiveSub2").addEventListener("click", five_2Visibility);

document.getElementById("fiveSub3").addEventListener("click", five_3Visibility);

// lowermenu button & content visibility toggles

function welcome_1Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("welcome_1")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("welcomeSub1");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("welcomeBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function welcome_2Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("welcome_2")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("welcomeSub2");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("welcomeBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function two_1Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("two_1")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("twoSub1");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("tutorialsBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function two_2Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("two_2")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("twoSub2");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("tutorialsBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function two_3Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("two_3")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("twoSub3");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("tutorialsBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function three_1Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("three_1")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("threeSub1");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("vexcodeBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function three_2Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("three_2")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("threeSub2");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("vexcodeBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function three_3Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("three_3")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("threeSub3");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("vexcodeBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function three_4Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("three_4")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("threeSub4");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("vexcodeBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function four_1Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("four_1")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("fourSub1");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("prosBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function four_2Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("four_2")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("fourSub2");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("prosBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function four_3Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("four_3")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("fourSub3");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("prosBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function four_4Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("four_4")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("fourSub4");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("prosBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function five_1Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("five_1")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("fiveSub1");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("designingBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function five_2Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("five_2")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("fiveSub2");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("designingBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

function five_3Visibility() {
  active.style.display = "none";
  active = document.getElementsByClassName("five_3")[0];
  active.style.display = "block";
  activeLo.setAttribute("class", "button-style-menu lowerMenu");
  activeLo = document.getElementById("fiveSub3");
  activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
  activeUp.setAttribute("class", "button-style-menu upperMenu");
  activeUp = document.getElementById("designingBtn");
  activeUp.setAttribute("class", "button-style-menu upperMenuAct");
}

// mobile menu toggler
function menuToggle() {
  target = document.getElementById("leftMenu");
  target2 = document.getElementById("upperMenuButtons");
  target3 = document.getElementById("mobileButton");
  target4 = document.getElementById("contentMask");
  if (target.className == null || target.className == "") {
    target.className = "active";
    target2.className = "active";
    target3.className = "close";
    target4.className = "active";
  } else {
    target.className = "";
    target2.className = "";
    target3.className = "";
    target4.className = "";
  }
}

//scroll to top of the "content" section

function scrollToContentTop() {
  window.scrollTo({ top: window.innerHeight * 1.18, behavior: "smooth" });
  // window.scrollBy(0, window.innerHeight*1.2);
}

//triggers scrollToContentTop

[].forEach.call(document.getElementsByClassName("jump-button"), function (x) {
  x.addEventListener("click", scrollToContentTop);
});

// get elements by second class of "jump-button" and triggers corresponding visibility
// avoids onclick="xxx_xVisibility" on the "jump-buttons"
[].forEach.call(document.getElementsByClassName("w-1"), function (x) {
  x.addEventListener("click", welcome_1Visibility);
});

[].forEach.call(document.getElementsByClassName("w-2"), function (x) {
  x.addEventListener("click", welcome_2Visibility);
});

[].forEach.call(document.getElementsByClassName("two-1"), function (x) {
  x.addEventListener("click", two_1Visibility);
});

[].forEach.call(document.getElementsByClassName("two-2"), function (x) {
  x.addEventListener("click", two_2Visibility);
});

[].forEach.call(document.getElementsByClassName("two-3"), function (x) {
  x.addEventListener("click", two_3Visibility);
});

[].forEach.call(document.getElementsByClassName("three-1"), function (x) {
  x.addEventListener("click", three_1Visibility);
});

[].forEach.call(document.getElementsByClassName("three-2"), function (x) {
  x.addEventListener("click", three_2Visibility);
});

[].forEach.call(document.getElementsByClassName("three-3"), function (x) {
  x.addEventListener("click", three_3Visibility);
});

[].forEach.call(document.getElementsByClassName("three-4"), function (x) {
  x.addEventListener("click", three_4Visibility);
});

[].forEach.call(document.getElementsByClassName("four-1"), function (x) {
  x.addEventListener("click", four_1Visibility);
});

[].forEach.call(document.getElementsByClassName("four-2"), function (x) {
  x.addEventListener("click", four_2Visibility);
});

[].forEach.call(document.getElementsByClassName("four-3"), function (x) {
  x.addEventListener("click", four_3Visibility);
});

[].forEach.call(document.getElementsByClassName("four-4"), function (x) {
  x.addEventListener("click", four_4Visibility);
});

[].forEach.call(document.getElementsByClassName("five-1"), function (x) {
  x.addEventListener("click", five_1Visibility);
});

[].forEach.call(document.getElementsByClassName("five-2"), function (x) {
  x.addEventListener("click", five_2Visibility);
});

[].forEach.call(document.getElementsByClassName("five-3"), function (x) {
  x.addEventListener("click", five_3Visibility);
});
