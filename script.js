let date = new Date();

// let options = {
//   day: "numeric",
//   month: "numeric",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   weekday: "long", // short, narrow
// };


// display current day
const currentDayElement = document.querySelector(
  '[data-testid="currentDay"]'
);
const dayElement = currentDayElement.querySelector(
  '[data-testid="day"]'
);

const today = new Date();

const day = today.getDay();

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

dayElement.innerHTML = weekdays[day];

// display current time