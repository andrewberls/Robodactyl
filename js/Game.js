/*
	File: Game.js
	Description: Initialize global variables and handle main game loops + controllers
*/


//---------- GLOBAL VARIABLES

//---------- INITIALIZE CTX VARS
// Mass variable initialization
var canvas = document.getElementById('canvas'), // Hook to the HTML element
	  ctx = canvas.getContext('2d'), // Main context variable
	  C_WIDTH = canvas.width, // Stored constant width/height references
	  C_HEIGHT = canvas.height,
    C_MIDX = canvas.width/2,
    C_MIDY = canvas.height/2,
    gamePaused = false,
	  gameLoop; // Global reference to the game loop

//---------- INITIALIZE OBJECT VARS
// Manager arrays to track objects
var environment = [], 
    enemies     = [],
    playerProjectiles = [],
    enemyProjectiles  = [];

// Environment
var background = new Background();

// Characters
var player = new Player();
var enemy = new Enemy(randomFromTo(0,C_WIDTH));

function Game() {
	this.paused = false;
}

Game.prototype.draw = function() {
	if (this.paused) {
		// Are we paused?
		var pauseMenu = new Menu(
      "Game Paused", 
      ["Resume"], function(option) {
		    if (option == 0) {
			    menuActive = false;
			    gamePaused = false;
		    }
		  });
	}
	
	if (menuActive) {
		// Are we in menu mode?
		currentMenu.draw();
	}
	
	else {
		// Gameplay mode!
		// Loop through all environments, characters, and projectiles,
		// calling their move() and draw() methods
    		
		environment.map(function(env) {
		  env.move();
		  env.draw();
		});
    
    player.move();
    player.draw();
		
		enemies.map(function(enemy) {
		  enemy.move();
		  enemy.draw();
		});
		
		playerProjectiles.map(function(proj) {
      // are we colliding with an enemy? do something
      // else 
		  proj.move();
		  proj.draw();
		});
    
    enemyProjectiles.map(function(proj) {
		  proj.move();
		  proj.draw();
		});
    
	}
}

Game.prototype.end = function() {
	// Temporary function to test menus
	// We can keep this or something like it around if you want
	// Stops the animation loop and displays text on a blank screen
	clearInterval(gameLoop);
	ctx.clearRect(0,0, C_WIDTH, C_HEIGHT);
	ctx.font = "25px Times New Roman";
	ctx.fillText("Game Exited", C_MIDX, C_MIDY);
}



function init() {
	var game = new Game();
	gameLoop = setInterval(game.draw, 20);
  
  
  var startMenu = new Menu(
    "Robodactyl Escape", // Description
    ["Start Level 1", "Exit"], // Options
    function(option) { // Callback triggered by enter
      if (option == 0) { 
        menuActive = false;
      }	else if (option == 1) {
        game.end();
      }
    });
}

window.onload = init;