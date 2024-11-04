const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X'; // 'X' for player 1 and 'O' for the computer
let gameActive = true;
const boardState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleCellClick(event) {
    const clickedCell = event.target;
    const cellIndex = clickedCell.getAttribute('data-index');

    if (boardState[cellIndex] !== '' || !gameActive) {
        return;
    }

    boardState[cellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer === 'X' ? '<i class="fas fa-times"></i>' : '<i class="far fa-circle"></i>';
    checkResult();

    if (gameActive && currentPlayer === 'X') {
        currentPlayer = 'O'; // Switch to computer
        computerMove();
    }
}

function computerMove() {
    let availableCells = boardState.map((val, index) => val === '' ? index : null).filter(val => val !== null);
    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const move = availableCells[randomIndex];

        boardState[move] = currentPlayer;
        cells[move].innerHTML = '<i class="far fa-circle"></i>';
        checkResult();
        currentPlayer = 'X';
    }
}

function checkResult() {
    let roundWon = false;
    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (boardState[a] === '' || boardState[b] === '' || boardState[c] === '') {
            continue;
        }
        if (boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        message.style.fontSize = '30px';
        message.style.color = 'orange';
        message.textContent = `Player ${currentPlayer} wins! 🎉`;
        gameActive = false;
        return;
    }

    if (!boardState.includes('')) {
        message.textContent = "It's a draw! 🤝";
        gameActive = false;
        return;
    }
}

function resetGame() {
    boardState.fill('');
    gameActive = true;
    currentPlayer = 'X';
    message.textContent = '';
    cells.forEach(cell => {
        cell.innerHTML = '';
    });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
