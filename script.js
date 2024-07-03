// display current day
const currentDayElement = document.querySelector('[data-testid="currentDay"]');
const dayElement = currentDayElement.querySelector('[data-testid="day"]');

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
const currentTimeElement = document.querySelector(
  '[data-testid="currentTimeUTC"]'
);

const hours = today.getHours().toString().padStart(2, "0");
const minutes = today.getMinutes().toString().padStart(2, "0");
const seconds = today.getSeconds().toString().padStart(2, "0");

const formattedDateTime = `${weekdays[day]} ${hours}:${minutes}:${seconds}`;

currentTimeElement.innerHTML = formattedDateTime;
