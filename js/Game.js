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
      Available object manager arrays:
      collectables
      enemies
      playerProjectiles
      enemyProjectiles
    */		
		
    background.move();
    background.draw();
    
    $.each(collectables,function(i, item){
    if (intersecting(player, item)) {
        console.log("player/block collision detected");
        item.kill();
      } else {
        item.move();
        item.draw();
      }            
    });
            
    player.move();
    player.draw();		
		
    $.each(enemies,function(i, enemy){
      if (intersecting(enemy, player)) {
        console.log("player/enemy collision detected");
        enemy.kill();
      } else {
        enemy.move();        
        enemy.draw();
      }
    });
				
    $.each(playerProjectiles, function(i, proj) {
      
      if (proj.y >= canvas.height - (TILE_SIZE + proj.height)) {
        // Is the proj hitting the ground?
        playerProjectiles = [];
      } 
      else {
        // Is the proj hitting an enemy?
        $.each(enemies,function(i, enemy){
          if (intersecting(proj, enemy)) {
            console.log("bullet/enemy collision detected");
            enemy.kill();
            playerProjectiles.remove(proj);
          }
        });
        
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

var endGame = function() {
	// Temporary function to test menus
	// We can keep this or something like it around if you want
	// Stops the animation loop and displays text on a blank screen
	window.clearInterval(gameLoop);
  console.log("interval cleared")
  /*player = null;
  var managers = [background, collectables, playerProjectiles, enemyProjectiles]
  $.each(managers, function(i, manager) {
    manager = [];
    console.log("clearing manager");
  });*/
	ctx.clearRect(0,0, C_WIDTH, C_HEIGHT);
	ctx.font = "25px Times New Roman";
	ctx.fillText("Game Exited", C_MIDX, C_MIDY);
  return;
}