const currentTimeElement = document.querySelector(
  '[data-testid="currentTimeUTC"]'
);
const currentDayElement = document.querySelector('[data-testid="currentDay"]');
const dayElement = currentDayElement.querySelector('[data-testid="day"]');

// Function to update and display the current date and time
function updateClock() {
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

  const hours = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");

  const formattedDateTime = `${weekdays[day]} ${hours}:${minutes}:${seconds}`;

  currentTimeElement.innerHTML = formattedDateTime;
  dayElement.innerHTML = weekdays[day];
}

updateClock();

const intervalId = setInterval(updateClock, 1000);
