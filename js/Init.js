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
var environment = [], 
    enemies     = [],
    playerProjectiles = [],
    enemyProjectiles  = [];

// Environment
var background = new Background();

// Characters
var player = new Player();
//var enemy1 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE), randomFromTo(1,50));
var enemy1 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy2 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy3 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy4 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));


function init() {
	var game = new Game();
	gameLoop = setInterval(game.draw, 20);
  
  /*
  var startMenu = new Menu(
    "Robodactyl Escape",        // Description
    ["Start Level 1", "Exit"],  // Options
    function(option) {          // Function triggered by enter key
      if (option == 0) { menuActive = false; }
      else if (option == 1) { game.end(); }
    });*/
}

window.onload = init;