
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const notesList = document.getElementById('notesList');

let notes = [];
let recognition;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        addNote(transcript);
    };

    recognition.onerror = (event) => {
        console.error('Error occurred in recognition: ', event.error);
    };
} else {
    alert('Your browser does not support speech recognition.');
}

startBtn.addEventListener('click', () => {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function addNote(note) {
    notes.push(note);
    updateNotesList();
}

function updateNotesList() {
    notesList.innerHTML = '';
    notes.forEach((note) => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
}

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const notesList = document.getElementById('notesList');

let notes = [];
let recognition;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        addNote(transcript);
    };

    recognition.onerror = (event) => {
        console.error('Error occurred in recognition: ', event.error);
    };
} else {
    alert('Your browser does not support speech recognition.');
}

startBtn.addEventListener('click', () => {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function addNote(note) {
    notes.push(note);
    updateNotesList();
}

function updateNotesList() {
    notesList.innerHTML = '';
    notes.forEach((note) => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
}
