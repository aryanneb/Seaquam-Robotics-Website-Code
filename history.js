// Toss Up Read More

document.querySelector(".tossMore").addEventListener("click", readMoreToss);

const tossContent = document.querySelectorAll(".toss");

function readMoreToss() {
  if (document.querySelector(".tossMore").innerHTML === "Read More") {
    for (let i = 0; i < tossContent.length; i++) {
      tossContent[i].classList.remove("toss");
      tossContent[i].classList.add("ani");
    }
    document.querySelector(".tossMore").innerHTML = "Read Less";
    document.getElementsByClassName("year")[0].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else if (document.querySelector(".tossMore").innerHTML === "Read Less") {
    for (let i = 0; i < tossContent.length; i++) {
      tossContent[i].classList.add("toss");
      tossContent[i].classList.remove("ani");
    }
    document.querySelector(".tossMore").innerHTML = "Read More";
  }
}

// Skyrise Read More

document
  .querySelector(".skyriseMore")
  .addEventListener("click", readMoreSkyrise);

const skyriseContent = document.querySelectorAll(".skyrise");

function readMoreSkyrise() {
  if (document.querySelector(".skyriseMore").innerHTML === "Read More") {
    for (let i = 0; i < skyriseContent.length; i++) {
      skyriseContent[i].classList.remove("skyrise");
      skyriseContent[i].classList.add("ani");
    }
    document.querySelector(".skyriseMore").innerHTML = "Read Less";
    document.getElementsByClassName("year")[1].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else if (document.querySelector(".skyriseMore").innerHTML === "Read Less") {
    for (let i = 0; i < skyriseContent.length; i++) {
      skyriseContent[i].classList.add("skyrise");
      skyriseContent[i].classList.remove("ani");
    }
    document.querySelector(".skyriseMore").innerHTML = "Read More";
  }
}

// NBN Read More

document.querySelector(".netMore").addEventListener("click", readMoreNet);

const netContent = document.querySelectorAll(".net");

function readMoreNet() {
  if (document.querySelector(".netMore").innerHTML === "Read More") {
    for (let i = 0; i < netContent.length; i++) {
      netContent[i].classList.remove("net");
      netContent[i].classList.add("ani");
    }
    document.querySelector(".netMore").innerHTML = "Read Less";
    document.getElementsByClassName("year")[2].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else if (document.querySelector(".netMore").innerHTML === "Read Less") {
    for (let i = 0; i < netContent.length; i++) {
      netContent[i].classList.add("net");
      netContent[i].classList.remove("ani");
    }
    document.querySelector(".netMore").innerHTML = "Read More";
  }
}

// Starstruck Read More

document.querySelector(".starMore").addEventListener("click", readMoreStar);

const starContent = document.querySelectorAll(".star");

function readMoreStar() {
  if (document.querySelector(".starMore").innerHTML === "Read More") {
    for (let i = 0; i < starContent.length; i++) {
      starContent[i].classList.remove("star");
      starContent[i].classList.add("ani");
    }
    document.querySelector(".starMore").innerHTML = "Read Less";
    document.getElementsByClassName("year")[3].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else if (document.querySelector(".starMore").innerHTML === "Read Less") {
    for (let i = 0; i < starContent.length; i++) {
      starContent[i].classList.add("star");
      starContent[i].classList.remove("ani");
    }
    document.querySelector(".starMore").innerHTML = "Read More";
  }
}

// In The Zone Read More

document.querySelector(".zoneMore").addEventListener("click", readMoreZone);

const zoneContent = document.querySelectorAll(".zone");

function readMoreZone() {
  if (document.querySelector(".zoneMore").innerHTML === "Read More") {
    for (let i = 0; i < zoneContent.length; i++) {
      zoneContent[i].classList.remove("zone");
      zoneContent[i].classList.add("ani");
    }
    document.querySelector(".zoneMore").innerHTML = "Read Less";
    document.getElementsByClassName("year")[4].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else if (document.querySelector(".zoneMore").innerHTML === "Read Less") {
    for (let i = 0; i < zoneContent.length; i++) {
      zoneContent[i].classList.add("zone");
      zoneContent[i].classList.remove("ani");
    }
    document.querySelector(".zoneMore").innerHTML = "Read More";
  }
}

// Turning Point Read More

document.querySelector(".pointMore").addEventListener("click", readMorePoint);

const pointContent = document.querySelectorAll(".point");

function readMorePoint() {
  if (document.querySelector(".pointMore").innerHTML === "Read More") {
    for (let i = 0; i < pointContent.length; i++) {
      pointContent[i].classList.remove("point");
      pointContent[i].classList.add("ani");
    }
    document.querySelector(".pointMore").innerHTML = "Read Less";
    document.getElementsByClassName("year")[5].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else if (document.querySelector(".pointMore").innerHTML === "Read Less") {
    for (let i = 0; i < pointContent.length; i++) {
      pointContent[i].classList.add("point");
      pointContent[i].classList.remove("ani");
    }
    document.querySelector(".pointMore").innerHTML = "Read More";
  }
}

// Tower Takeover Read More

document.querySelector(".towerMore").addEventListener("click", readMoreTower);

const towerContent = document.querySelectorAll(".tower");

function readMoreTower() {
  if (document.querySelector(".towerMore").innerHTML === "Read More") {
    for (let i = 0; i < towerContent.length; i++) {
      towerContent[i].classList.remove("tower");
      towerContent[i].classList.add("ani");
    }
    document.querySelector(".towerMore").innerHTML = "Read Less";
    document.getElementsByClassName("year")[6].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else if (document.querySelector(".towerMore").innerHTML === "Read Less") {
    for (let i = 0; i < towerContent.length; i++) {
      towerContent[i].classList.add("tower");
      towerContent[i].classList.remove("ani");
    }
    document.querySelector(".towerMore").innerHTML = "Read More";
  }
}

// Change Up Read More

document.querySelector(".changeMore").addEventListener("click", readMoreChange);

const changeContent = document.querySelectorAll(".change");

function readMoreChange() {
  if (document.querySelector(".changeMore").innerHTML === "Read More") {
    for (let i = 0; i < changeContent.length; i++) {
      changeContent[i].classList.remove("change");
      changeContent[i].classList.add("ani");
    }
    document.querySelector(".changeMore").innerHTML = "Read Less";
    document.getElementsByClassName("year")[7].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else if (document.querySelector(".changeMore").innerHTML === "Read Less") {
    for (let i = 0; i < changeContent.length; i++) {
      changeContent[i].classList.add("change");
      changeContent[i].classList.remove("ani");
    }
    document.querySelector(".changeMore").innerHTML = "Read More";
  }
}
