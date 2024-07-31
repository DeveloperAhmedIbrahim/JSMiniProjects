"use strict"

const colors = document.querySelectorAll('.color');
const body = document.querySelector('body');

colors.forEach(function(color){
    color.addEventListener('click', function(event){
        body.style.backgroundColor = `${event.target.id}`;
    })
});