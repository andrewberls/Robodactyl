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
    enemies      = [],
    playerProjectiles = [],
    enemyProjectiles  = [];

function resetManagers() {
    collectables      = [];
    blocks            = [];
    enemies           = [];
    playerProjectiles = [];
    enemyProjectiles  = [];
}

    
// Environment
var background = new Background();

// Characters
var player = new Player();

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
        game.load_level_one();
        //themeSong.play();
      }
    });
    
}

window.onload = init;