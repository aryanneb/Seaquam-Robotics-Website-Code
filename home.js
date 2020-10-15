const more = document.getElementsByClassName("home-button")[0];

more.addEventListener('click', scrollDown);

function scrollDown() {
    window.scroll({
        top: window.innerHeight / 100 * 90,
        left: 0,
        behavior: 'smooth'
    });
}


// Navigation menu animation Desktop
anime({
    targets: '.logo-box',
    translateX: [-250, 0],
    easing: 'spring(1, 80, 85, 2)',
    duration: 800
})

anime({
    targets: '.main-link',
    translateX: [250, 0],
    easing: 'spring(1, 80, 85, 2)',
    duration: 500,
    delay: anime.stagger(100)
})

anime({
    targets: '.burger',
    translateX: [250, 0],
    easing: 'spring(1, 80, 85, 2)',
    duration: 800,
})
anime({
    targets: '.home-content',
    translateX: [-100, 0],
    easing: 'spring(1, 80, 85, 2)',
    duration: 10000,
})
