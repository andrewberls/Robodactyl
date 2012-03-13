/*
  File: Init.js
  Description: Initialize global variables and begin the game
*/


/* DEPENDENT GLOBAL REFERENCES
/----------------------------------*/
// Environment
var background = new Background(1);

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
        //game.load_level_one();
        game.load_level_two();
      }
    });
}

window.onload = init;