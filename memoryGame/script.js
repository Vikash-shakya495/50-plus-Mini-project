const cardsArray = [
    '🍎', '🍌', '🍇', '🍓',
    '🍎', '🍌', '🍇', '🍓',
    '🍊', '🍉', '🍍', '🍒',
    '🍊', '🍉', '🍍', '🍒'
];

let gameGrid = [];
let firstCard, secondCard;
let lockBoard = false;
let matchedCards = 0;

const gameContainer = document.getElementById('game-container');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

// Shuffle cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Create the game board
function createBoard() {
    shuffle(cardsArray);
    cardsArray.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.cardValue = card;
        cardElement.addEventListener('click', flipCard);
        gameContainer.appendChild(cardElement);
    });
}

// Flip card function
function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flipped');
    this.innerText = this.dataset.cardValue;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

// Check for matches
function checkForMatch() {
    if (firstCard.dataset.cardValue === secondCard.dataset.cardValue) {
        matchedCards += 2;
        resetBoard();
        if (matchedCards === cardsArray.length) {
            message.textContent = "You win! 🎉";
            restartButton.classList.remove('hidden');
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            firstCard.innerText = '';
            secondCard.classList.remove('flipped');
            secondCard.innerText = '';
            resetBoard();
        }, 1000);
    }
}

// Reset board function
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Restart game
restartButton.addEventListener('click', () => {
    gameContainer.innerHTML = '';
    matchedCards = 0;
    message.textContent = '';
    restartButton.classList.add('hidden');
    createBoard();
});

// Initialize game
createBoard();
