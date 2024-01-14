'use strict'
function createSlider () {
    const parent = document.getElementById('main');
    const slider = createElement('div', parent, '', {id: 'slider'});

    createElement('button', slider, 'Previous Slide', {type: 'button', id: 'btn_prev'}, {click: showPreviousSlide}); //button left
    const slideContainer = createElement('div', slider, '', {id: 'slider_container'}) // container
    createElement('img', slideContainer, '', {id: 'img-main', src: `img/`+ sliderImages[currentCount]});
    createElement('button', slider, 'Next Slide', {type: 'button', id: 'btn_next'}, {click: showNextSlide});// button right

    initAutoChange();
}
function initAutoChange () {
    interval = setInterval(showNextSlide, 3000);
}
function stopAutoChange () {
    clearInterval(interval);
}
function changeSlide() {
    const targetImage = document.getElementById('img-main');
    targetImage.src = `img/`+ sliderImages[currentCount];
}
function showNextSlide() {
    stopAutoChange();
    currentCount = (currentCount + 1) % sliderImages.length;
    changeSlide();
    initAutoChange();
}
function showPreviousSlide() {
    stopAutoChange();
    currentCount = (currentCount - 1 + sliderImages.length) % sliderImages.length;
    changeSlide();
    initAutoChange();
}