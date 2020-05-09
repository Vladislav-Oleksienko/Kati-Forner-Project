'use strict'

anime({
    targets: '.load-name',
    keyframes: [
      {translateX: 90},
      {delay: 100},
      {translateY: -50},
    ],
    duration: 1700,
    easing: 'easeInOutSine',
});

anime({
    targets: '.load-surname',
    keyframes: [
      {translateX: -90},
      {delay: 100},
      {translateY: -50},
    ],
    duration: 1900,
    easing: 'easeInOutSine',
});


anime({
    targets: '#test',
    keyframes: [
      {translateX: 90},
      {delay: 100},
      {translateY: 50},
    ],
    duration: 1800,
    easing: 'easeInOutSine',
});

anime({
    targets: '#testing',
    keyframes: [
      {translateX: -90},
      {delay: 100},
      {translateY: 50},
    ],
    duration: 2000,
    easing: 'easeInOutSine',
});

window.addEventListener("load", function () {
    const loader = document.querySelector(".load-page");
    loader.className += " hidden";
});

window.addEventListener("load", function () {
    const loader = document.querySelector(".backg-test");
    loader.className += " back-hidden";
});

anime({
    targets: '.logo',
    delay: 4600,
    duration: 900,
    translateX: -250,
    easing: 'easeInOutSine'
});

anime({
    targets: '#title-anime',
    delay: 4600,
    duration: 900,
    translateY: -150,
    easing: 'easeInOutSine'
});


let menu = document.querySelector('.hamburger-circle');

menu.addEventListener('mouseenter', () => {
    anime({
        targets: '.hamburger-letter',
        duration: 150,
        translateY: -3,
        easing: 'easeInOutSine'
    });
    anime({
        targets: '.hamburger-letter-down',
        duration: 150,
        translateY: 3,
        easing: 'easeInOutSine'
    });
})

menu.addEventListener('mouseleave', () => {
    anime({
        targets: '.hamburger-letter',
        duration: 200,
        translateY: 0,
        easing: 'easeInOutSine'
    });
    anime({
        targets: '.hamburger-letter-down',
        duration: 200,
        translateY: 0,
        easing: 'easeInOutSine'
    });
})



let swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 400,
      disableOnInteraction: false,
    }
});


