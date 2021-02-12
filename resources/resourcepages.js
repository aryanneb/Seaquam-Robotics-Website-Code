let active = document.getElementsByClassName("welcome_1")[0];
let activeList = document.getElementById("one");
let activeUp = document.getElementById("welcomeBtn");
let activeLo = document.getElementById("welcomeSub1");

// lowermenu button & content visibility toggles

resourceVisibilityKeys = {
  welcomeSub1: ["welcome_1", "welcomeSub1", "welcomeBtn"],
  welcomeSub2: ["welcome_2", "welcomeSub2", "welcomeBtn"],
  twoSub1: ["two_1", "twoSub1", "tutorialsBtn"],
  twoSub2: ["two_2", "twoSub2", "tutorialsBtn"],
  twoSub3: ["two_3", "twoSub3", "tutorialsBtn"],
  threeSub1: ["three_1", "threeSub1", "vexcodeBtn"],
  threeSub2: ["three_2", "threeSub2", "vexcodeBtn"],
  threeSub3: ["three_3", "threeSub3", "vexcodeBtn"],
  threeSub4: ["three_4", "threeSub4", "vexcodeBtn"],
  fourSub1: ["four_1", "fourSub1", "prosBtn"],
  fourSub2: ["four_2", "fourSub2", "prosBtn"],
  fourSub3: ["four_3", "fourSub3", "prosBtn"],
  fourSub4: ["four_4", "fourSub4", "prosBtn"],
  fiveSub1: ["five_1", "fiveSub1", "designingBtn"],
  fiveSub2: ["five_2", "fiveSub2", "designingBtn"],
  fiveSub3: ["five_3", "fiveSub3", "designingBtn"],
};

for (var x in resourceVisibilityKeys)
  if (document.getElementById(x) != null)
    document.getElementById(x).addEventListener("click", setVisibilities);

function setVisibilities(eventobj) {
  if (eventobj.target.id in resourceVisibilityKeys) {
    active.style.display = "none";
    active = document.getElementsByClassName(
      resourceVisibilityKeys[eventobj.target.id][0]
    )[0];
    active.style.display = "block";
    activeLo.setAttribute("class", "button-style-menu lowerMenu");
    activeLo = document.getElementById(
      resourceVisibilityKeys[eventobj.target.id][1]
    );
    activeLo.setAttribute("class", "button-style-menu lowerMenuAct");
    activeUp.setAttribute("class", "button-style-menu upperMenu");
    activeUp = document.getElementById(
      resourceVisibilityKeys[eventobj.target.id][2]
    );
    activeUp.setAttribute("class", "button-style-menu upperMenuAct");
  }
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
