/*
	File: Game.js
	Description: Container for main game rendering
*/

function Game() {}

Game.prototype.draw = function() {
	if (gamePaused) {
		// Are we paused?
		var pauseMenu = new Menu(
      "Game Paused", 
      ["Resume"], 
      function(option) {
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
		/*
      collectables = [],
      enemies     = [],
      playerProjectiles = [],
      enemyProjectiles  = [];
    */		
		
    background.move();
    background.draw();
    
    $.each(collectables,function(i, item){
      if (intersecting(player, item)) {
        console.log("player/block collision detected");
      }
      item.move();
      item.draw();
    });
    
    
    
    player.move();
    player.draw();		
		
    $.each(enemies,function(i, enemy){
      enemy.move();
      enemy.draw();
    });
				
    $.each(playerProjectiles, function(i, proj){
      if (proj.y >= canvas.height - (TILE_SIZE + proj.height)) {
        playerProjectiles = [];
      }
      else {
        proj.move();
        proj.draw();
      }
    });
        
    $.each(enemyProjectiles, function(i, proj){
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