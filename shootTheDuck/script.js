let bird1 = document.querySelector('#bird1');
let bird2 = document.querySelector('#bird2');
let mainPanel = document.querySelector('.mainPanel');
let dogHunt = document.querySelector('.dogHunt');
let huntDuckLogo = document.querySelector('.huntDuckLogo');
let score = 0;
let cycleCount = 0;
let gameActive = false;

window.addEventListener('load', () => {
    mainPanel.style.backgroundColor = "rgba(91, 182, 235, 1)";
    huntDuckLogo.style.visibility = 'visible';
    movingDog.style.visibility = 'hidden';
});

const updateScore = () => {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.innerText = `${score}`;
};

function downBird(clicked_id) {
    if (!gameActive) return;
    document.getElementById("fireSound").play();
    document.getElementById(clicked_id).style.display = "none";

    const shotImage = document.createElement('img');
    shotImage.style.position = 'absolute';
    shotImage.style.height = '140px';
    shotImage.style.width = '120px';
    shotImage.style.transform = 'translate(60%, 40%)';

    if (clicked_id === 'bird1') {
        shotImage.src = './img/oneDuckHunt.gif';
    } else if (clicked_id === 'bird2') {
        if (score % 2 === 0) {
            shotImage.src = './img/twoDuckHunt.png';
        } else {
            shotImage.src = './img/oneDuckHunt.gif';
        }
    }

    dogHunt.appendChild(shotImage);
    dogHunt.style.left = `${Math.floor(Math.random() * 100 ) - 10}vw`;
    shotImage.style.animation = 'shoot 1s forwards';

    shotImage.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-80%)' }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => {
        shotImage.animate([
            { transform: 'translateY(-80%)' },
            { transform: 'translateY(-50%)' }
        ], {
            duration: 500,
            easing: 'ease-out'
        }).onfinish = () => {
            dogHunt.removeChild(shotImage);
        };
    };

    score++;
    updateScore();

    setTimeout(() => {
        document.getElementById(clicked_id).style.display = "block";
    }, Math.floor((Math.random() * 10) + 1) * 1000);
}



const birds = document.querySelector('.birds');

const birdMovement = () => {
    if (!gameActive) return;
    bird1.style.display = 'block';
    bird2.style.display = 'block';
    const style = document.createElement('style');
    document.head.appendChild(style);

    const keyframes1 = `
    @keyframes randomMoveBird1 {
        0% { transform: translate(${Math.floor(Math.random() * 200)}%, 50%) rotateY(0deg); }
        20% { transform: translate(${Math.floor(Math.random() * 500)}%, -300%) rotateY(180deg); }
        30% { transform: translate(${Math.floor(Math.random() * 400)}%, -180%) rotateY(0deg); }
        50% { transform: translate(${Math.floor(Math.random() * 800)}%, -100%) rotateY(0deg); }
        60% { transform: translate(${Math.floor(Math.random() * 600)}%, -390%) rotateY(180deg); }
        80% { transform: translate(${Math.floor(Math.random() * 1000)}%, -270%) rotateY(0deg); }
        100% { transform: translate(${Math.floor(Math.random() * 200)}%, -480%) rotateY(0deg); }
    }`;

    const keyframes2 = `
    @keyframes randomMoveBird2 {
        0% { transform: translate(${Math.floor(Math.random() * 320)}%, 100%) rotateY(0deg); }
        15% { transform: translate(${Math.floor(Math.random() * 240)}%, -200%) rotateY(0deg); }
        20% { transform: translate(${Math.floor(Math.random() * 550)}%, -300%) rotateY(180deg); }
        40% { transform: translate(${Math.floor(Math.random() * 700)}%, -180%) rotateY(0deg); }
        50% { transform: translate(${Math.floor(Math.random() * 400)}%, -340%) rotateY(0deg); }
        60% { transform: translate(${Math.floor(Math.random() * 800)}%, -420%) rotateY(180deg); }
        80% { transform: translate(${Math.floor(Math.random() * 500)}%, -280%) rotateY(0deg); }
        100% { transform: translate(${Math.floor(Math.random() * 300)}%, -480%) rotateY(0deg); }
    }`;

    style.innerHTML = keyframes1 + keyframes2;
    birds.style.left = `${Math.floor(Math.random() * 100) - 40}%`;
    bird1.style.animation = 'randomMoveBird1 6s linear';
    bird2.style.animation = 'randomMoveBird2 6s linear';

    setTimeout(() => {
        cycleCount++;
        bird1.style.display = 'none';
        bird2.style.display = 'none';

        if (cycleCount < 3) {
            setTimeout(() => {
                birdMovement();
            }, 2000);
        } else {
            showResult();
        }
    }, 4000);
};

function showResult() {
    gameActive = false;
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.style.display = 'block';
    const restartButton = document.getElementById('restartBtn');
    
    bird1.style.visibility = "hidden";
    bird2.style.visibility = "hidden";
    
    bird1.style.animation = '0';
    bird2.style.animation = '0';
    
    if (score >= 3) {
        resultMessage.innerText = "You Win! 🎉";
        restartButton.style.display = 'none';
        resultMessage.style.backgroundColor = 'rgba(188, 209, 223, 0.88)';
        resultMessage.style.display = 'flex';
        resultMessage.style.border = '2px solid green';
    } else {
        resultMessage.innerText = "You Lost! Try Again!";
        restartButton.style.display = 'block';
        mainPanel.style.backgroundColor = 'rgba(248, 164, 164, 1)';
        resultMessage.style.backgroundColor = 'rgba(231, 204, 206, 0.75)';
        resultMessage.style.border = '2px solid white';
        restartButton.style.top = '55%';
    }
}


const restartGame = () => {
    mainPanel.style.backgroundColor = "rgba(91, 182, 235, 1)";
    cycleCount = 0;
    score = 0;
    gameActive = true;
    updateScore();
    movingDog.style.visibility = 'visible'; 
    const restartButton = document.getElementById('restartBtn');
    restartButton.style.display = 'none';
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.style.display = 'none';

    bird1.style.visibility = "visible";
    bird2.style.visibility = "visible";
    bird1.style.display = 'none';
    bird2.style.display = 'none';
    birdMovement();
};

const startButton = document.getElementById('startButton');

let movingDog = document.querySelector('.movingDog');
let smellingDog = document.querySelector('.smellingDog');
let jumpDog = document.querySelector('.jumpDog');

startButton.addEventListener('click', function () {
    huntDuckLogo.style.visibility = 'hidden';
    gameActive = true;
    startButton.style.display = 'none';
    movingDog.style.visibility = 'visible';
    movingDog.style.animation = 'movingDog 3s linear forwards';
    smellingDog.style.animation = 'smellingDog 3.5s linear forwards';
    jumpDog.style.animation = 'jumpDog 5s linear forwards';
    setTimeout(() => {
        birdMovement();
    }, 7000);
});

const restartButton = document.getElementById('restartBtn');
restartButton.addEventListener('click', restartGame);

updateScore();
