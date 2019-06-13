'use strict';

function myClock(){
    let clock = new Date();

    let hours = (clock.getHours() < 10) ? '0' + clock.getHours() : clock.getHours();
    let minutes = (clock.getMinutes() < 10) ? '0' + clock.getMinutes() : clock.getMinutes();
    let seconds = (clock.getSeconds() < 10) ? '0' + clock.getSeconds() : clock.getSeconds();


    let showTime = document.getElementById('clock');
    showTime.innerHTML = hours +':' + minutes + ':' + seconds;
}

setInterval(myClock, 1000);


