var db;
var form,game,player;
var gameState = 0;
var playerCount = 0;
var player1,player2;
var players;
var allPlayers;

function preload()
{
   player1Image=loadImage("images/player1.jpg");
   player2Image=loadImage("images/player2.png");
}

function setup()
{
   createCanvas(1000,600);

   db = firebase.database();

   game = new Game();
   game.getState();
   game.start();
}

function draw()
{
   if(playerCount===2)
   {
      game.updateState(1);
   }
   if(gameState===1)
   {
      clear();
      game.play();
   }
}



