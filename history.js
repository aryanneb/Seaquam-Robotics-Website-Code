document
    .getElementsByClassName('tossMore')[0]
    .addEventListener("click", readMoreToss);


function readMoreToss() {
    const changeText = document.getElementsByClassName('toss');
    if (document.getElementsByClassName('tossMore')[0].innerHTML = "Read More") {
        changeText.classList.toggle('toss');
        document.getElementsByClassName('tossMore')[0].innerHTML = "Read Less";
    }

    else {
        changeText.classList.toggle("toss");
        document.getElementsByClassName('tossMore')[0].innerHTML = "Read More";
    }

}