let game = document.querySelector('#game');
let dino = document.querySelector('#dino');
let cacti = document.querySelector('#cacti');
let road = document.querySelector('#road');
let cloud = document.querySelector('#cloud');
let number = document.querySelector('#number');
let gameOver = document.querySelector('#gameOver');

// let interval = null;
// let currentScore = 0;

function scoreUpdate() {
    currentScore++;
    number.innerHTML = currentScore;
}

// window.addEventListener,  e.code == 'Space' (instead of event object key)  &  road.firstElementChild.style in tutorial
document.addEventListener('keydown', (e)=>{
    if (e.key == ' ') {
        pressStart.style.display = 'none';
        gameOver.style.display = 'none';
        cacti.classList.add('cactiAnimation');
        road.classList.add('roadAnimation');
        cloud.classList.add('cloudAnimation');
        currentScore = 0;
        interval = setInterval(scoreUpdate, 200);
    }
})

document.addEventListener('keydown', (e)=>{
    if (e.key == 'ArrowUp') {
        if (dino.classList != 'jumping') {
            dino.classList.add('jumping');
            setTimeout(()=>{
                dino.classList.remove('jumping');
            }, 500);
        }
    }
});

let dead = setInterval(()=>{
    let dinoPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    console.log(dinoPosition);
    let cactiPosition = parseInt(window.getComputedStyle(cacti).getPropertyValue('left'));
    if (dinoPosition <= 85 & cactiPosition <= 90) {
        gameOver.style.display = 'block';
        cacti.classList.remove('cactiAnimation');
        road.classList.remove('roadAnimation');
        cloud.classList.remove('cloudAnimation');
        clearInterval(interval);
    }
}, 10);