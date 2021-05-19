window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

    const alarmH = date.getHours();
    const alarmM = date.getMinutes();
    const alarmS = date.getSeconds();

    const sound = new Audio('sound.mp3');

    if(alarmH == 21 && alarmM == 25 && alarmS == 35){
        sound.play();
    }

    if(alarmH == 21 && alarmM == 25 && alarmS == 38){
        alert("ALARM!!!!"); 
    }


    for(let x = 1; x < 5; x++){
        const date = new Date;
        const hours = document.querySelectorAll('.hours');
        const minutes = document.querySelectorAll('.minutes');
        const seconds = document.querySelectorAll('.seconds');

        hours[x].style.transform = `rotate(${date.getHours()+(x*2) / 12 * 360}deg)`;
        minutes[x].style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
        seconds[x].style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
    }

}, 1000);
