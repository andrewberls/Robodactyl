/*
  File: Start.js
  Description: Initialize the player and display the first menu
*/

// Dependent global references
var background = new Background(1);
var player = new Player();


/* MAIN INITIALIZATION
/----------------------------------*/
function init() {
    
    var game = new Game();    
    gameLoop = setInterval(game.draw, 20);

    // Display the start menu
    var startMenu = new Menu(
    "Robodactyl Escape, Level 1", // Description
    ["Press Enter To Begin"],   // Options
    function(option) {   // Function triggered by enter key
      if (option == 0) {
        menuActive = false;
        game.load_level_one();        
      }
    });

}

window.onload = init;