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
---780-------------1170---------------1560---*/
// Enemies
var e_2_1 = new Enemy(905);
var e_2_2 = new Enemy(1150);
var e_2_3 = new Enemy(1305);
var e_2_4 = new Enemy(1430);

// Blocks
var b_2_1 = new Block(975,0);
var b_2_2 = new Block(975,60);
var b_2_3 = new Block(1170,0);
var b_2_4 = new Block(1170,60);
var b_2_5 = new Block(1365,0);
var b_2_6 = new Block(1365,60);
var b_2_7 = new Block(1365, 275);

// Powerups
var p_2_1 = new PowerUp(1175, 215, 4); // Shield


/* SCREEN 3
----1560------------1950--------------2340----*/
// Enemies
var e_3_1 = new Enemy(1755);
var e_3_2 = new Enemy(1960);
var e_3_3 = new Enemy(2145);
var e_3_4 = new Enemy(2260);

// Blocks
var b_3_1 = new Block(1750, 125);
var b_3_1 = new Block(2140, 125);

// Powerups
var p_3_1 = new PowerUp(1945, 100, 4); // Rage


/* SCREEN 4
---2340-------------2730---------------3120---*/
// Enemies

// Blocks

// Powerups


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