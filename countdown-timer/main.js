let nowDate = new Date();
console.log(nowDate);
let newYears = "";

// check for next new year
switch ( nowDate.getFullYear() ) {
    case 2021:
        newYears = '2022-01-01';
        break;
    case 2022:
        newYears = '2023-01-01';
        break;
    case 2023:
        newYears = '2024-01-01';
        break;
    case 2024:
        newYears = '2025-01-01';
        break;
    default:
        console.log('Not Supported!');
}

// set new Year
let y = new Date(newYears);

// get with DOM
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

// run
setInterval( () => {
    let n = new Date();
    let totalSecs = (y - n) / 1000;
    let logicSeconds = Math.floor(totalSecs % 60);
    let logicMinutes = Math.floor(totalSecs / 60) % 60;
    let logicHours = Math.floor(totalSecs / 3600) % 24;
    let logicDays = Math.floor(totalSecs / 3600 / 24);
    days.innerHTML = logicDays;
    hours.innerHTML = logicHours;
    minutes.innerHTML = logicMinutes;
    seconds.innerHTML = logicSeconds;
}, 1000);