// To display current day of the week and time
function getCurrentDayTime() {
  // For current Day
let today = new Date();

let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayOfWeek = daysOfTheWeek[today.getDay()];

let currentDay = document.getElementById('current-day');
currentDay.textContent =`${dayOfWeek},`

console.log('Today is:' + daysOfTheWeek[dayOfWeek] + ".");

// For current Time
let hoursUTC = today.getHours().toString();
let minutesUTC = today.getMinutes().toString().padStart(2, '0');
let currentTimeUTC = `${hoursUTC}:${minutesUTC}`;

let currentTime = document.getElementById('current-time')
currentTime.textContent = `${currentTimeUTC}`

}

getCurrentDayTime();

setInterval(getCurrentDayTime, 1000);