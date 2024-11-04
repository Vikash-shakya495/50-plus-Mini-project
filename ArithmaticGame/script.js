let timeLeft = 5;
let score = 0;
let interval;

function startGame() {
    score = 0;
    timeLeft = 5;
    document.getElementById('score').innerText = 'Score: ' + score;
    document.getElementById('time').innerText = 'Time left: ' + timeLeft + ' seconds';
    document.getElementById('answer').value = '';
    generateProblem();
    clearInterval(interval);
    interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('time').innerText = 'Time left: ' + timeLeft + ' seconds';
        } else {
            clearInterval(interval);
            alert('Game Over! Your score is ' + score);
        }
    }, 1000);
}

function generateProblem() {
    const operators = ['+', '-', '*', '/'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    let problem;
    let solution;

    switch (randomOperator) {
        case '+':
            problem = `${num1} + ${num2}`;
            solution = num1 + num2;
            break;
        case '-':
            problem = `${num1} - ${num2}`;
            solution = num1 - num2;
            break;
        case '*':
            problem = `${num1} * ${num2}`;
            solution = num1 * num2;
            break;
        case '/':
            // Ensure a whole number solution for division
            problem = `${num1 * num2} / ${num1}`;
            solution = num2;
            break;
    }

    document.getElementById('problem').innerText = problem;
    document.getElementById('problem').dataset.solution = solution;
}

function submitAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const correctAnswer = parseFloat(document.getElementById('problem').dataset.solution);
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('score').innerText = 'Score: ' + score;
        timeLeft = 5;
        document.getElementById('answer').value = '';
        generateProblem();
    } else {
        alert('Incorrect answer! Try again.');
        document.getElementById('answer').value = '';
    }
}