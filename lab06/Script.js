window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.hours');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    const minutes = document.querySelector('.minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);
