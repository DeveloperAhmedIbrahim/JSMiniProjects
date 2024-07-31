"use strict"

const clock = document.querySelector('#clock');

setInterval(function(){
    let datetime = new Date();
    datetime = datetime.toLocaleString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    })
    clock.innerHTML = datetime;
}, 1000);
