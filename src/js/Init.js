/*
  File: Init.js
  Description: Initialize global variables and begin the game
*/

/* MASS VARIABLE INITIALIZATION
/----------------------------------*/
var canvas     = document.getElementById('canvas'), // Hook to the HTML element
    ctx        = canvas.getContext('2d'), // Main context variable
    C_WIDTH    = canvas.width, // Stored constant width/height references
    C_HEIGHT   = canvas.height,
    C_MIDX     = canvas.width/2,
    C_MIDY     = canvas.height/2,
    TILE_SIZE  = 30,    
    gamePaused = false,
    menuActive = false,
    gameLoop;
    
var DEBUG_MODE = true; // Set to true to enable debug messages in the console
    

/* MANAGER ARRAYS
/----------------------------------*/
var collectables = [], // Powerups, etc
    blocks       = [],
    checkpoints  = [],
    enemies      = [],
    playerProjectiles = [],
    enemyProjectiles  = [];

    
/* LEVEL OBJECTS
/----------------------------------*/

/*----------------------------------*/

  // THIS NEEDS TO BE SPLIT UP BY LEVEL!

/*----------------------------------*/

// Environment
var background = new Background();

// Characters
var player = new Player();


/* SCREEN 1
----0-------------340--------------780---*/


var enemy1 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy2 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy3 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
//var enemy4 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));

// Blocks
var block = new Block(400,100);

//PowerUp
var powerup = new PowerUp(200,200, 1);


/* SCREEN 2
---780-------------1170---------------1560---*/
// Enemies

// Blocks

// Powerups


/* SCREEN 3
----1560------------1950--------------2340----*/
// Enemies

// Blocks

// Powerups


/* SCREEN 4
---2340-------------2730---------------3120---*/
// Enemies
var enemy41 = new Enemy(randomFromTo(2340,2440));
var enemy42 = new Enemy(randomFromTo(2440,2740));
var enemy43 = new Enemy(randomFromTo(2740,2900));
var enemy44 = new Enemy(randomFromTo(2900,3120));
// Blocks
var block41 = new Block(((2730+2340)/2),0);
var block42 = new Block(((2730+2340)/2),60);
var block43 = new Block(((2730+2340)/2),120);
var block44 = new Block(((2730+2340)/2),180);
var block45 = new Block(((3120+2730)/2),0);
var block46 = new Block(((3120+2730)/2),60);
var block47 = new Block(((3120+2730)/2),120);
var block48 = new Block(((3120+2730)/2),180);

// Powerups
var powerup41 = new PowerUp(2730,0, 2);

/* SCREEN 5
--3120----------------3510--------------3900--*/
// Enemies

// Blocks

// Powerups







/* MAIN INITIALIZATION
/----------------------------------*/
function init() {
    
    var game = new Game();
    gameLoop = setInterval(game.draw, 20);
    
    // Display the start menu

    var startMenu = new Menu(
    "Robodactyl Escape", // Description
    ["Start Level 1"],   // Options
    function(option) {   // Function triggered by enter key
      if (option == 0) {
        menuActive = false;
        //themeSong.play();
      }
    });
  
}

window.onload = init;