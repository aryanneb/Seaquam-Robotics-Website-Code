document
    .getElementsByClassName('tossMore')[0]
    .addEventListener("click", readMoreToss);


function readMoreToss() {
    if (document.getElementsByClassName('tossMore')[0].innerHTML = "Read More") {
        while (document.getElementsByClassName('toss')[0]) {
            document.getElementsByClassName('toss')[0].classList.remove("toss");
        }
        document.getElementsByClassName('tossMore')[0].innerHTML = "Read Less";
    }

    else {
        document.getElementById.classList.add('toss');
        document.getElementsByClassName('tossMore')[0].innerHTML = "Read More";
    }

}