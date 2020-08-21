let active = document.getElementsByClassName('changeUp')[0];
let activeBtn = document.getElementsByClassName('changeUpBtn')[0];

let btn1 = document.getElementsByClassName('towerTakeoverBtn')[0];
btn1.addEventListener("click", changeVisibility);


function changeVisibility() {
 active.style.display = "none";
 active = document.getElementsByClassName('towerTakeover')[0];
 active.style.display = "flex";
}




