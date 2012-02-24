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
----------------------------------*/
// Enemies
//var enemy1 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
//var enemy2 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
//var enemy3 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
//var enemy4 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));

// Blocks
//var block = new Block(400,100);

//PowerUp
//var powerup = new PowerUp(200,200, 1);


/* SCREEN 2
----------------------------------*/
// Enemies

// Blocks

// Powerups


/* SCREEN 3
----------------------------------*/
// Enemies
var e_3_1 = new Enemy(195);
var e_3_2 = new Enemy(400);
var e_3_3 = new Enemy(585);
var e_3_4 = new Enemy(700);

// Blocks


// Powerups



/* SCREEN 4
----------------------------------*/
// Enemies

// Blocks

// Powerups


/* SCREEN 5
----------------------------------*/
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