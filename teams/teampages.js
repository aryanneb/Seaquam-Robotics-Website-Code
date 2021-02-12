function setModals() {
  let keys = { imgclick: "flex", txtclick: "flex", close: "none" };
  let iterations = 5;
  for (let s in keys)
    for (let i = 1; i <= iterations; i++) {
      let targetid = s + (i == 1 ? "" : String(i));
      let modalid = "modal" + (i == 1 ? "" : String(i));
      document.getElementById(targetid).onclick = () =>
        (document.getElementById(modalid).style.display = keys[s]);
    }
  window.onclick = (event) => {
    if (event.target.classList.contains("modal"))
      for (let i = 1; i <= iterations; i++)
        document.getElementById(
          "modal" + (i == 1 ? "" : String(i))
        ).style.display = "none";
  };
}
setModals();

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
  return list.length > 0
    ? list.join("")
    : "<p>We haven't won any awards yet, emphasis on the yet 😃</p>";
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
