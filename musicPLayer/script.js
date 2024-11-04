// Music Player
const songs = [
    { name: 'Beymaniyan', src: './music/beymaniyan.mp3' ,imgSrc: "./images/beymaniyan.jpeg"},
    { name: 'Fanaa', src: './music/fanaa.mp3' ,imgSrc: "./images/fanaa.jpeg" },
    { name: 'Bachke bachke', src: 'music/bachkeBachke.mp3' ,imgSrc: "./images/bachkebachke.jpg" },
    { name: 'Dhol Sipahiya', src: 'music/dholsipahiya.mp3' , imgSrc: "./images/dhol_sipahiya.jpg"},
    { name: 'Pronto', src: 'music/pronto.mp3' ,imgSrc: "./images/pronto.jpg"}
];

let currentTrack = 0;
let isPlaying = false;
const audio = new Audio();
const trackTitle = document.getElementById('track-title');
const progressBar = document.getElementById('progress-bar');
const playPauseBtn = document.getElementById('playPauseBtn');
const trackInfo = document.querySelector('.track-info img');

// Initialize track poster
function loadTrack(index) {
    audio.src = songs[index].src;
    trackTitle.innerText = songs[index].name;
    trackInfo.src = songs[index].imgSrc;
    progressBar.value = 0;
    audio.play();  // Automatically play the loaded track
    playPauseBtn.innerText = '⏸️';
    isPlaying = true;
}

// Play or Pause the track
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerText = '▶️';
    } else {
        audio.play();
        playPauseBtn.innerText = '⏸️';
    }
    isPlaying = !isPlaying;
}

// Update progress bar as track plays
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Change track position when progress bar is clicked
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Previous and Next buttons functionality
document.getElementById('prevBtn').addEventListener('click', () => {
    currentTrack = currentTrack > 0 ? currentTrack - 1 : songs.length - 1;
    loadTrack(currentTrack);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentTrack = currentTrack < songs.length - 1 ? currentTrack + 1 : 0;
    loadTrack(currentTrack);
});

// Load and play selected song from the list
document.querySelectorAll('.song-list li').forEach((item) => {
    item.addEventListener('click', (event) => {
        currentTrack = event.currentTarget.getAttribute('data-index');
        loadTrack(currentTrack);
    });
});

// Start with the first song
loadTrack(currentTrack);

// Play or Pause the current track when play button is clicked
playPauseBtn.addEventListener('click', togglePlayPause);