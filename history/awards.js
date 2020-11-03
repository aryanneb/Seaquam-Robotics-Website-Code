// Formats awards for a team. Use in conjunction with getTeamEventsAwards()
async function formatTeamAwards(teamName, eventsAwards) {
  let list = [];
  for (var key in eventsAwards) {
    list.push(
      "<u><a href=" + eventsAwards[key].link + " target=\"_blank\">" +
      eventsAwards[key].name +
      '</a></u><br><i class="indented"></i>' +
      eventsAwards[key].awards.join('<br><i class="indented"></i>')
    );
  }
  let ret =
    '<div class="team"><p><b>' +
    teamName +
    ":</b><br>" +
    (list.length > 0 ? list.join("<br>") : "Nothing to see here") +
    "</p></div>";
  return ret;
}

// Looks up and formats all teams in a given season. Use undefined for all seasons
async function teamAwardsLookupFormatted(season) {
  let i;

  let seaquamTeams = await searchSeaquam();
  let awardsFormatted = {};
  let list = [];
  for (i = 0; i < seaquamTeams.length; i++) {
    let number = seaquamTeams[i].number;
    awardsFormatted[number] = getTeamEventsAwards(number, season, true).then(
      async function(value) {
        if (Object.keys(value).length != 0)
          return await formatTeamAwards(number, value);
        else return undefined;
      }
    );
  }

  for (var key in awardsFormatted)
    if (awardsFormatted[key] != undefined)
      list.push(await awardsFormatted[key]);

  list.sort((a, b) => {
    return b.length - a.length;
  });

  return list.join("");
}

// Change the visibility of pages in the awards section
async function awardsVisibilityChange(newPage, season) {
  activeBtn.setAttribute("class", "button-style award");
  activeBtn = document.getElementById(newPage + "Btn");
  activeBtn.setAttribute("class", "button-style2 award");
  active.style.display = "none";
  active = document.getElementById(newPage + "Awards");
  active.style.display = "flex";
  if (active.classList.contains("livecontent")) {
    active.innerHTML = "<p>Updating content...</p>";
    active.innerHTML = await teamAwardsLookupFormatted(season);
    if (active.innerHTML == "") active.innerHTML = "<p>Nothing is here 😞</p>";
  }
}

// Loads the requests before the user requests to see the awards
async function startPreloadingRequests() {
  let seaquamTeams = await searchSeaquam();
  let seasonlist = ["Change Up", "Tower Takeover", "Turning Point", "In the Zone", "Starstruck", "Nothing but Net", "Skyrise", "Toss Up"];
  for (let i = 0; i < seaquamTeams.length; i++) {
    vexDBJSONRequest("https://api.vexdb.io/v1/get_awards?team=" + seaquamTeams[i].number);
    vexDBJSONRequest("https://api.vexdb.io/v1/get_events?team=" + seaquamTeams[i].number);
    for (let j = 0; j < seasonlist.length; j++) {
      vexDBJSONRequest("https://api.vexdb.io/v1/get_awards?team=" + seaquamTeams[i].number + "&" + encodeURIComponent(seasonlist[j]));
      vexDBJSONRequest("https://api.vexdb.io/v1/get_events?team=" + seaquamTeams[i].number + "&" + encodeURIComponent(seasonlist[j]));
    }
  }
}

// Make the default visibility Change Up
let active = document.getElementById("changeUpAwards");
let activeBtn = document.getElementById("changeUpBtn");
window.setTimeout(() => {
  awardsVisibilityChange("changeUp", "Change Up");
  // Preload the requests before the user requests to see the awards
  // Doesn't make a tangible difference, not going to activate it
  // startPreloadingRequests();
}, 200);