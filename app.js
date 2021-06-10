const meter = document.querySelector(".meter-bar");
const value = document.querySelector('.value');

// ---------get dates
let thisYear = new Date(new Date().getFullYear(), 0, 1).getTime();//* gets first day of the year;
let nextYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();//* gets first day next of the year;

let current = new Date().getTime();

// let days = Math.floor(remaining/(1000*60*60*24));

// ---------calculation percentage
let fractionDays = ((current-thisYear)/(nextYear-thisYear)).toFixed(3);

meter.style.width = (fractionDays*100).toFixed(2) + "%";
value.innerHTML = (fractionDays*100).toFixed(2) + "% Finished";
