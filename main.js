const button = document.getElementById("button");
const watch = document.getElementById("watch");
const reset = document.getElementById("reset")
let timeSeconds = 0;
let isRunning = false;
let interval = null;

button.addEventListener("click", function () {
  if (!isRunning) {
    startTimer();
    button.textContent = "Stop";
    isRunning = true;
  } else {
    stopTimer();
    button.textContent = "Start";
    isRunning = false;
  }
});

reset.addEventListener("click", resetTimer);

function timer() {
  timeSeconds++;
  updateDisplay();
}

function startTimer() {
  if (!interval) {
    interval = setInterval(timer, 1000);
  }
}

function stopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

function resetTimer() {
  stopTimer();
  timeSeconds = 0;
  updateDisplay();
  button.textContent = "Start";
  isRunning = false;
}

function updateDisplay() {
  const minutes = Math.floor(timeSeconds / 60);
  const seconds = timeSeconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  watch.innerHTML = formattedTime;
}
