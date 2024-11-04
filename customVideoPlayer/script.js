const video = document.getElementById('video');
const playPauseButton = document.getElementById('playPause');
const progressBar = document.getElementById('progressBar');
const volumeControl = document.getElementById('volumeControl');

// Play/Pause toggle
function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = "Pause";
  } else {
    video.pause();
    playPauseButton.textContent = "Play";
  }
}

// Rewind 10 seconds
function rewind() {
  video.currentTime -= 10;
}

// Fast forward 10 seconds
function fastForward() {
  video.currentTime += 10;
}

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
  progressBar.value = (video.currentTime / video.duration) * 100;
});

// Seek to new time in video when progress bar changes
function updateProgress() {
  video.currentTime = (progressBar.value / 100) * video.duration;
}

// Change volume
function changeVolume() {
  video.volume = volumeControl.value;
}

// Reset button text to "Play" when video ends
video.addEventListener('ended', () => {
  playPauseButton.textContent = "Play";
});
