let modal = document.getElementById("modal");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");
let modal5 = document.getElementById("modal5");

let img = document.getElementById("imgclick");
let img2 = document.getElementById("imgclick2");
let img3 = document.getElementById("imgclick3");
let img4 = document.getElementById("imgclick4");
let img5 = document.getElementById("imgclick5");

let txt = document.getElementById("txtclick");
let txt2 = document.getElementById("txtclick2");
let txt3 = document.getElementById("txtclick3");
let txt4 = document.getElementById("txtclick4");
let txt5 = document.getElementById("txtclick5");

let close = document.getElementById("close");
let close2 = document.getElementById("close2");
let close3 = document.getElementById("close3");
let close4 = document.getElementById("close4");
let close5 = document.getElementById("close5");

img.onclick = function () {
  modal.style.display = "flex";
};

txt.onclick = function () {
  modal.style.display = "flex";
};

img2.onclick = function () {
  modal2.style.display = "flex";
};

txt2.onclick = function () {
  modal2.style.display = "flex";
};

img3.onclick = function () {
  modal3.style.display = "flex";
};

txt3.onclick = function () {
  modal3.style.display = "flex";
};

img4.onclick = function () {
  modal4.style.display = "flex";
};

txt4.onclick = function () {
  modal4.style.display = "flex";
};

img5.onclick = function () {
  modal5.style.display = "flex";
};

txt5.onclick = function () {
  modal5.style.display = "flex";
};

close.onclick = function () {
  modal.style.display = "none";
};

close2.onclick = function () {
  modal2.style.display = "none";
};

close3.onclick = function () {
  modal3.style.display = "none";
};

close4.onclick = function () {
  modal4.style.display = "none";
};

close5.onclick = function () {
  modal5.style.display = "none";
};

window.onclick = function (event) {
  if (
    event.target == modal ||
    event.target == modal2 ||
    event.target == modal3 ||
    event.target == modal4 ||
    event.target == modal5
  ) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
  }
};

// Formats awards for a team. Use in conjunction with getTeamEventsAwards()
async function formatTeamAwards(number) {
  let list = [];
  let eventsAwards = await getTeamEventsAwards(number, undefined, true);
  let limit = 0;
  for (var key in eventsAwards) {
    if (limit > 9) break;
    list.push(
      "<p><a href=" +
        eventsAwards[key].link +
        ' target="_blank"><u>' +
        eventsAwards[key].name +
        "</u></a>: <i>" +
        eventsAwards[key].awards.join(", ") +
        "</i></p>"
    );
    limit++;
  }
  return list.length > 0 ? list.join("") : "<p>Nothing to see here</p>";
}

// Add team awards to the first instance of the class 'team-awards-content'
setTimeout(async function () {
  document.getElementsByClassName(
    "team-awards-content"
  )[0].innerHTML = await formatTeamAwards(
    window.location.pathname.substring(
      window.location.pathname.indexOf("/", 2) + 1,
      window.location.pathname.lastIndexOf("/")
    )
  ); // Attempts to get the team name from the path
}, 200);
