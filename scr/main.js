// ! GLOBAL VARIABLES
// canvas set up 
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelector("#restart-btn");
let scoreScreen = document.querySelector("#scores");
let startScreen = document.querySelector('#start-screen');

let points = document.querySelector('#points');
let level = document.querySelector('#level');

let levelTwo = document.querySelector('#level-2');
let levelThree = document.querySelector('#level-3');

let game;


// ! FUNCTIONS

const startGame = () => {
    canvas.style.display = "flex";
    startBtn.style.display = "none";
    scoreScreen.style.display = "flex";
    startScreen.style.display = "none";

    game = new Game(Number(level.innerText));
    game.gameLoop();
}


// ! EVENT LISTENERS 
startBtn.addEventListener('click', startGame);
 document.addEventListener('keydown', (event) => {
    game.world.moveWorld(event);
}); 

levelTwo.addEventListener('click', startGame);
levelThree.addEventListener('click', startGame);