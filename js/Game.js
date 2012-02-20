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
      blocks
      checkpoints
      enemies
      playerProjectiles
      enemyProjectiles
    */		
		
    
    /* BACKGROUND
    /----------------------------------*/
    background.move();
    background.draw();
    
    
    /* COLLECTABLES
    /----------------------------------*/
    $.each(collectables, function(i, item){
    if (intersecting(player, item)) {
		    item.ActivatePowerup();
        debug("Player hit a collectable");
        collectables.remove(item);
      } else {
        item.move();
        item.draw();
      }            
    });
    
    
    /* BLOCKS
    /----------------------------------*/
    $.each(blocks, function(i, block) {
      
      if (intersecting(block, player)) {
        // Is the player hitting the block?               
        debug("player hit a block");
        //player.kill();
      }
      
      $.each(enemyProjectiles, function(i, proj) {
        // Is an enemy projectile hitting the block?
        if (intersecting(block, proj)) {         
          debug("Enemy projectile hit a block");
          enemyProjectiles.remove(proj);
        }        
      });
      
      $.each(playerProjectiles, function(i, proj) {
        // Is a player projectile hitting the block?
        if (intersecting(block, proj)) {
          debug("Player projectile hit a block");
          playerProjectiles.remove(proj);
        } 
      });
            
      block.move();
      block.draw();
    });
    
    
    /* CHECKPOINTS
    /----------------------------------*/
    $.each(checkpoints, function(i, checkpoint) {
      if (intersecting(checkpoint, player)) {
        debug("Player passed a checkpoint");
        debug("Player's current checkpoint was: " + player.current_checkpoint.toString());        
        player.current_checkpoint = checkpoint.x;
        debug("Player's current checkpoint is now: " + player.current_checkpoint.toString());
        checkpoints.remove(checkpoint);
      }      
      checkpoint.draw();
    });
    
    
    /* PLAYER
    /----------------------------------*/
    player.displayLives(); // HUD
    player.displayHealth(); // HUD
    player.move();
    player.draw();		
		
    
    /* ENEMIES
    /----------------------------------*/
    $.each(enemies,function(i, enemy){
      if (defined(enemy)) {
        if (intersecting(enemy, player)) {
          // Is the player touching the enemy?
			    if (player.RageDactyl) {
            // If player has RageDactyl, kill the enemy
            debug("RageDactyl hit an enemy");
            enemy.kill();
          } else {
            // Else damage the player
            debug("Player hit an enemy");
            // Todo: damage and move player back
          }
        } //else {
          enemy.move();        
          enemy.draw();
        //}
      }
    });
  
    
				
    /* PLAYER PROJECTILES
    /----------------------------------*/
    $.each(playerProjectiles, function(i, proj) {
      
      if (proj.y >= canvas.height - (TILE_SIZE + proj.height)) {
        // Is the proj hitting the ground?
        playerProjectiles = [];
      } 
      else {
        // Is the proj hitting an enemy?
        $.each(enemies,function(i, enemy){
          if (intersecting(proj, enemy)) {
            debug("Player projectile hit an enemy");
            enemy.kill();
            playerProjectiles.remove(proj);
          }
        });
        
        proj.move();
        proj.draw();
        
      }
      
    });
        
    
    /* ENEMY PROJECTILES
    /----------------------------------*/
    $.each(enemyProjectiles, function(i, proj) {
      if (defined(proj)) {
        if (intersecting(proj, player)) {
          // Is the proj hitting the player?
          debug("Enemy projectile hit the player")
          player.damage(1);
          player_hurt.play();
          enemyProjectiles.remove(proj);
        }
        proj.move();
        proj.draw();
      }
    });
    
	}
}

var endGame = function() {
  // Display the end menu
  var endMenu = new Menu(
    "Game Over!", // Description
    ["Restart Game"],   // Options
    function(option) {   // Function triggered by enter key
      if (option == 0) {
        debug("restart; render level 1");
        //menuActive = false;
        //themeSong.play();
      }
    }, true);
  return;
}