// script.js
let duration = 25 * 60;
let timeRemaining = duration;
let timerInterval;
let isRunning = false;

const timeDisplay = document.querySelector(".time-display");
const progressCircle = document.querySelector(".progress-ring__circle");
const startPauseButton = document.getElementById("startPause");
const resetButton = document.getElementById("reset");

const circumference = 2 * Math.PI * 55; // Circumference for radius 55
progressCircle.style.strokeDasharray = circumference;

// Update time display
function updateTimeDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Update progress circle
function updateProgressCircle() {
    const offset = circumference - (timeRemaining / duration) * circumference;
    progressCircle.style.strokeDashoffset = offset;
}

// Start/Pause functionality
startPauseButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timerInterval);
        startPauseButton.textContent = "Start";
    } else {
        timerInterval = setInterval(() => {
            timeRemaining--;
            updateTimeDisplay();
            updateProgressCircle();
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                timeRemaining = duration; // Reset for next cycle
            }
        }, 1000);
        startPauseButton.textContent = "Pause";
    }
    isRunning = !isRunning;
});

// Reset functionality
resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    isRunning = false;
    timeRemaining = duration;
    updateTimeDisplay();
    updateProgressCircle();
    startPauseButton.textContent = "Start";
});

// Initial display
updateTimeDisplay();
updateProgressCircle();
