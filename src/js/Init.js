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

    
// Environment
var background = new Background();

// Characters
var player = new Player();
  
    
/* LEVEL OBJECTS
/----------------------------------*/

// TEMPORARY INITIALIZATION FOR ITERATION 1
// THIS NEEDS TO BE SPLIT UP BY LEVEL!


/* SCREEN 1
----0-------------340--------------780---*/
// Enemies
/*
var enemy1 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy2 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
var enemy3 = new Enemy(randomFromTo(0,C_WIDTH-2*TILE_SIZE));
*/
// Blocks
var block = new Block(400,150);

//PowerUp
var powerup = new PowerUp(200,200, 1);


/* SCREEN 2
---780-------------1170---------------1560---*/
// Enemies
/*
var e_2_1 = new Enemy(905);
var e_2_2 = new Enemy(1150);
var e_2_3 = new Enemy(1305);
var e_2_4 = new Enemy(1430);
*/
// Blocks
/*
var b_2_1 = new Block(975,0);
var b_2_2 = new Block(975,60);

var b_2_3 = new Block(1170,0);
var b_2_4 = new Block(1170,60);

var b_2_5 = new Block(1365,0);
var b_2_6 = new Block(1365,60);
var b_2_7 = new Block(1170, 275);
*/

var b_2_1 = new Block(975,120);
var b_2_2 = new Block(1170, 190);
var b_2_2 = new Block(1365, 120);


// Powerups
var p_2_1 = new PowerUp(1175, 120, 4); // Shield


/* SCREEN 3
----1560------------1950--------------2340----*/
// Enemies
/*
var e_3_1 = new Enemy(1755);
var e_3_2 = new Enemy(1960);
var e_3_3 = new Enemy(2145);
var e_3_4 = new Enemy(2260);
*/

// Blocks
var b_3_1 = new Block(1750, 125);
var b_3_1 = new Block(2140, 125);

// Powerups
var p_3_1 = new PowerUp(1945, 100, 3); // Life
var p_3_1 = new PowerUp(2150, 400, 1); // Rage


/* SCREEN 4
---2340-------------2730---------------3120---*/
// Enemies
/*
var e_4_1 = new Enemy(randomFromTo(2340,2440));
var e_4_2 = new Enemy(randomFromTo(2440,2740));
var e_4_3 = new Enemy(randomFromTo(2740,2900));
var e_4_4 = new Enemy(randomFromTo(2900,3120));
*/
// Blocks
var b_4_1 = new Block(((2730+2340)/2),0);
var b_4_2 = new Block(((2730+2340)/2),60);
var b_4_3 = new Block(((2730+2340)/2),120);
var b_4_4 = new Block(((2730+2340)/2),180);
var b_4_5 = new Block(((3120+2730)/2),0);
var b_4_6 = new Block(((3120+2730)/2),60);
var b_4_7 = new Block(((3120+2730)/2),120);
var b_4_8 = new Block(((3120+2730)/2),180);

// Powerups
var p_4_1 = new PowerUp(2730,10, 2); // Health
  
  
/* SCREEN 5
--3120----------------3510--------------3900--*/
// Enemies
var enemy51 = new Enemy(3220);
var enemy52 = new Enemy(3410);
var enemy53 = new Enemy(3610);


// Blocks
var block52 = new Block((((3510+3120)/2)-100),100);
var block53 = new Block((((3510+3120)/2)-100),160);
var block54 = new Block((((3510+3120)/2)-100),220);
var block51 = new Block((((3510+3120)/2)-100),400);

var block58 = new Block((3510),270);
var block59 = new Block((3510),210);
var block561 = new Block((3510),150);
var block562 = new Block((3510),90);
var block562 = new Block((3510),30);

var block563 = new Block((((3510+3900)/2)+100),0);
var block564 = new Block((((3510+3900)/2)+100),60);
var block565 = new Block((((3510+3900)/2)+100),120);
var block567 = new Block((((3510+3900)/2)+100),330);
var block568 = new Block((((3510+3900)/2)+100),400);

// Powerups
var powerup51 = new PowerUp(3220,10,3);
  


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
        themeSong.play();
      }
    });
  
}

window.onload = init;