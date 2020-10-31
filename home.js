const more = document.getElementsByClassName("home-button")[0];

more.addEventListener("click", scrollDown);

function scrollDown() {
  window.scroll({
    top: (window.innerHeight / 100) * 90,
    left: 0,
    behavior: "smooth",
  });
}
