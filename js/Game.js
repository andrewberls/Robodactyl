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
      // Is the projectile colliding with the floor?
		  if(proj.y >= canvas.height - (TILE_SIZE + proj.height)) {
            playerProjectiles = [];
      }
      // To do: is the projectile colliding with an enemy?
      else {
        proj.move();
        proj.draw();
      }  
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