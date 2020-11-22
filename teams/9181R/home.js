let names = [
  document.getElementById("name1"),
  document.getElementById("name2"),
  document.getElementById("name3"),
  document.getElementById("name4"),
];

textChanger(0);

function textChanger(i) {
  if (names.length > i) {
    names[i].style.display = "block";
    names[i].style.animation = "namesInAni 0.5s ease";
    names[i].style.opacity = "1";
    setTimeout(function () {
      names[i].style.display = "none";
      textChanger(++i);
    }, 2000);
  } else if (names.length == i) {
    textChanger(0);
  }
}
