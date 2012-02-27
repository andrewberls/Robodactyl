/*
  File: Game.js
  Description: Container for main game rendering. Loops through object
    manager arrays, moves/draws all objects, and handles collisions.
*/

function Game() {}

Game.prototype.draw = function() {

    // Top level game function. Handles pause menus, object rendering,
    // and collision detection.
    
    if (gamePaused) {
        // If paused, create a new Menu
        var pauseMenu = new Menu(
            "Game Paused",     // Description
            ["Resume"],        // Options
            function(option) { // Function triggered by enter key
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
  else if (Math.abs(background.x) >= background.width-C_WIDTH && player.x >= 600) { // This seems super hacky. I'm sorry :(
    // Has the player reached the end?
    // If so, display a (temporary) menu with their score
    
    setTimeout(function() {
        var endMenu = new Menu("Level One Completed!", [], function() {}, true);
    }, 2000);

  }
  else {
    // Gameplay mode!
    /*
      Available object manager arrays:
      collectables
      blocks      
      enemies
      playerProjectiles
      enemyProjectiles
    */		
		
    player.score += 0.05; // Score baseline - increases with time
    
    
    /* BACKGROUND
    /----------------------------------*/
    background.move();
    background.draw();
    
    if (player.RageDactyl) {
        // Transparent red background in rage mode
        ctx.save();
        ctx.fillStyle = "rgba(200,0,0,0.4)";
        ctx.fillRect(0,0,C_WIDTH,C_HEIGHT);
        ctx.restore();
    }
    
    
    /* COLLECTABLES
    /----------------------------------*/
    $.each(collectables, function(i, item){
        if (intersecting(player, item)) {
            item.ActivatePowerup();
            debug("Player hit a collectable");
            collectables.remove(item);
        } else if (defined(item)) {
            item.move();
            item.draw();
        }
    });
    
    
    /* BLOCKS
    /----------------------------------*/
    $.each(blocks, function(i, block) {

        if (intersecting(block, player) && player.isAlive && !player.isInvincible) {
            // Is the player hitting the block?
            debug("player hit a block");
            player.kill();
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
        
        if (!(Math.abs(background.x) >= background.width-C_WIDTH)) {
            block.move();
        }
        
        block.draw();
    });
        
        
    /* PLAYER
    /----------------------------------*/
    player.displayLives(); // HUD
    player.displayHealth(); // HUD
    player.displayScore(); // HUD
    if (player.RageDactyl) player.displayRageNotice() // HUD - only if in RageDactyl mode
    player.move();
    player.draw();		
		
    
    /* ENEMIES
    /----------------------------------*/
    $.each(enemies,function(i, enemy){
        if (defined(enemy)) { // Hack for methods being called on dead enemies
            if (intersecting(enemy, player) && player.RageDactyl) {
                // Kill the enemy if player has RageDactyl and is intersecting
                debug("RageDactyl hit an enemy");
                player.score += 50;
                enemy.kill();                
            }
                
            enemy.move();
            enemy.draw();
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
                    player.score += 10;
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
            if (intersecting(proj, player) && player.isAlive) {
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
    // Display the end menu after a brief delay for death animation
    
    setTimeout(function() {
        var endMenu = new Menu(
        "Game Over!",      // Description
        //["Restart Game"],  // Options
        [],
        function(option) { // Function triggered by enter key
          if (option == 0) {
            debug("restart; render level 1");            
            //menuActive = false;   
          }
        }, true);
    },player.respawnTime);
    
}