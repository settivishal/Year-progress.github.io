const meter = document.querySelector(".meter-bar");
const value = document.querySelector('.value');

// ---------get dates
let thisYear = new Date("Jan 01,2021 00:00:00");
console.log(thisYear);

let current = new Date().getTime();

let remaining = current - thisYear;

let days = Math.floor(remaining/(1000*60*60*24));

// ----------check for leap year
let noOfDays;
let currentYear = new Date().getFullYear();
if(((currentYear%4==0)&&(currentYear%100!=0))||(currentYear%400==0)){
    noOfDays = 366;
}
else{
    noOfDays = 365;
}

// ---------calculation percentage
let fractionDays = ((days+1)/noOfDays).toFixed(3);

meter.style.width = (fractionDays*100).toFixed(2) + "%";
value.innerHTML = (fractionDays*100).toFixed(2) + "% Finished";
