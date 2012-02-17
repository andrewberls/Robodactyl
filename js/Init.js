/*
	File: Init.js
	Description: Initialize global variables and begin the game
*/

// Mass variable initialization
var canvas     = document.getElementById('canvas'), // Hook to the HTML element
	  ctx        = canvas.getContext('2d'), // Main context variable
	  C_WIDTH    = canvas.width, // Stored constant width/height references
	  C_HEIGHT   = canvas.height,
    C_MIDX     = canvas.width/2,
    C_MIDY     = canvas.height/2,
    TILE_SIZE  = 30,
    gamePaused = false,
	  gameLoop;
    
var menuActive = false;

// Manager arrays to track objects
var collectables = [], 
    enemies     = [],
    playerProjectiles = [],
    enemyProjectiles  = [];

// Environment
var background = new Background();


var themeSong = new Audio("audio/theme.mp3");
themeSong.play();
//var laser1 = new Audio("audio/laser1.mp3");
//var laser2 = new Audio("audio/laser2.mp3");


// Characters
var player = new Player();
//var enemy1 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE), randomFromTo(1,50));
/*var enemy1 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy2 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy3 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy4 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));*/

// EXTREMELY TEMPORARY CODE FOR TESTING INTERSECTING() FUNCTION
function TestBlock(x,y) {
  this.x = x;
  this.y = y;
  this.width = TILE_SIZE;
  this.height = TILE_SIZE;
  this.sprite.src = "images/block1.png";
  collectables.push(this);
}
TestBlock.prototype = new GameObject();
TestBlock.prototype.constructor = TestBlock;
TestBlock.prototype.move = function() { return; }
TestBlock.prototype.draw = function() {
  ctx.save();
  ctx.fillStyle = "orange";
  //ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.drawImage(this.sprite, this.x, this.y);
  ctx.restore();
}

var block = new TestBlock(300,300);




function init() {
	var game = new Game();
	gameLoop = setInterval(game.draw, 20);
  themeSong.play();
  
  var startMenu = new Menu(
    "Robodactyl Escape",        // Description
    ["Start Level 1", "Exit"],  // Options
    function(option) {          // Function triggered by enter key
      if (option == 0) { menuActive = false; }
      else if (option == 1) { endGame(); }
    });
}

window.onload = init;