var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var xVal = 0;
var yVal = 0
var form, player, game;

var Tanks, Tank1, Tank2;
var Tank1_img, Tank2_img;

function preload(){
  Tank1_img = loadImage("images/Tank 1.png");
  Tank2_img = loadImage("images/Tank 2.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
   // game.update(1);
  }
  if(gameState === 1){
    clear();
    //game.play();
  }
  if(gameState === 2){
    //game.end();
  }
}
