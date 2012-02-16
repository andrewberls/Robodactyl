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
var environment = [];
var characters = []
var projectiles = [];

// Environment
var background = new Background();

// Characters
var player = new Player();
var enemy = new Enemy(randomFromTo(0,C_WIDTH));


//---------- MENU STATES AND INITIALIZATION
var menuActive = false;

var menu1 = new Menu("Robodactyl Escape", ["Start Level 1", "Exit"], function(option) {
  if (option == 0) { 
    menuActive = false;
  }	else if (option == 1) {
    endGame();
  }
});


//---------- CONTROLLERS + LOOPS
function draw() {
	/*
		This master function gets called every 20ms by the gameLoop interval.
		Its purpose is to loop through the game objects and call their move and draw methods
		In other words, actual rendering of sprites to the screen is handled by the individual objects,
		not here.
	*/

	ctx.clearRect(0,0, C_WIDTH, C_HEIGHT); // Clear the canvas every frame
		
	/*
		This stuff works, but it's very temporary. Ideally, we want to be able to 
		abstract it to the highest level.		
		Idea: the end of each level has a callback that creates the next menu
	*/
  
  if (gamePaused) {
    // Are we paused?
    var menu1 = new Menu("Game Paused", ["Resume"], function(option) {
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
    
    characters.map(function(character) {
      character.move();
      character.draw();
    });
    
    projectiles.map(function(proj) {
      proj.move();
      proj.draw();
    });
    
	}
	
}

function endGame() {
  // Temporary function to test menus
  // We can keep this or something like it around if you want
  // Stops the animation loop and displays text on a blank screen
  clearInterval(gameLoop);
  ctx.clearRect(0,0, C_WIDTH, C_HEIGHT);
  ctx.font = "25px Times New Roman";
  ctx.fillText("Game Exited", C_MIDX, C_MIDY);
}

function init() {	
	// Start the main game draw loop
	gameLoop = setInterval(draw, 20); 
}

window.onload = init; // Call the init function immediately when the page loads.