// Formats awards for a team. Use in conjunction with getTeamEventsAwards()
async function formatTeamAwards(teamName, eventsAwards) {
  let list = [];
  for (var key in eventsAwards) {
    list.push(
      "<u>" +
        eventsAwards[key].name +
        '</u><br><i class="indented"></i>' +
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
      async function (value) {
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

// Make the default visibility Change Up
let active = document.getElementById("changeUpAwards");
let activeBtn = document.getElementById("changeUpBtn");
awardsVisibilityChange("changeUp", "Change Up");
