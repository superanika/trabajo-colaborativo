'use strict';

const head = document.querySelector('.head');
const face = document.querySelector('.face');

function blink() {
    face.innerHTML = ";)";
}

head.addEventListener('click', blink);

function reset() {
    face.innerHTML = ":)";
}

head.addEventListener('mouseout', reset);