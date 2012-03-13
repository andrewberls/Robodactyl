/*
  File: Game.js
  Description: Container for main game rendering. Loops through object
    manager arrays, moves/draws all objects, and handles collisions.
*/

function Game() {}

/*---------------------------------------
  LEVEL 1 INIT
---------------------------------------*/
Game.prototype.load_level_one = function() {

    debug("load_level_one() called");
    current_level++;
    resetManagers();
    pause_all_music();
    level1_music.play();

    // Environment
    background = new Background(1);
    background.hard_reset()

    // Characters    
    player.hard_reset();

    /* SCREEN 1
    ----0-------------340--------------780---*/
    // Enemies
    var enemy1 = new Scientist(100);
    var enemy2 = new Scientist(595);
    var enemy3 = new Scientist(635);

    // Blocks
    var block1 = new Caution_Block(340,0);
    var block2 = new Caution_Block(340,60);
    var block3 = new Caution_Block(340,120);
    var block5 = new Caution_Block(340,340);
    var block1 = new Caution_Block(340,400);

    //PowerUp
    var powerup = new PowerUp(200,200, 1);
    

    /* SCREEN 2
    ---780-------------1170---------------1560---*/
    // Enemies
    var e_2_1 = new Scientist(905);
    var e_2_2 = new Scientist(1150);
    var e_2_3 = new Scientist(1305);
    var e_2_4 = new Scientist(1430);
    var e_2_5 = new Scientist(1500);

    // Blocks
    var b_2_1 = new Caution_Block(930,120);
    var b_2_2 = new Caution_Block(1170, 190);
    var b_2_2 = new Caution_Block(1410, 120);

    // Powerups
    var p_2_1 = new PowerUp(1175, 120, 4); // Shield
    

    /* SCREEN 3
    ----1560------------1950--------------2340----*/
    // Enemies
    var e_3_1 = new Scientist(1755);
    var e_3_2 = new Scientist(1960);
    var e_3_3 = new Scientist(2145);
    var e_3_4 = new Scientist(2260);

    // Blocks
    var b_3_1 = new Caution_Block(1750, 125);
    var b_3_1 = new Caution_Block(2140, 125);

    // Powerups
    var p_3_1 = new PowerUp(1945, 100, 3); // Life
    var p_3_1 = new PowerUp(2150, 400, 1); // Rage
    

    /* SCREEN 4
    ---2340-------------2730---------------3120---*/
    var e_4_1 = new Scientist(randomFromTo(2340,2440));
    var e_4_2 = new Scientist(randomFromTo(2440,2740));
    var e_4_3 = new Scientist(randomFromTo(2740,2900));
    var e_4_4 = new Scientist(randomFromTo(2900,3120));

    // Blocks
    var b_4_1 = new Caution_Block(((2730+2340)/2),0);
    var b_4_2 = new Caution_Block(((2730+2340)/2),60);
    var b_4_3 = new Caution_Block(((2730+2340)/2),120);
    var b_4_4 = new Caution_Block(((2730+2340)/2),180);
    var b_4_5 = new Caution_Block(((3120+2730)/2),0);
    var b_4_6 = new Caution_Block(((3120+2730)/2),60);
    var b_4_7 = new Caution_Block(((3120+2730)/2),120);
    var b_4_8 = new Caution_Block(((3120+2730)/2),180);

    // Powerups
    var p_4_1 = new PowerUp(2730,10, 2); // Health
   
      
    /* SCREEN 5
    --3120----------------3510--------------3900--*/
    // Enemies
    var enemy51 = new Scientist(3220);
    var enemy52 = new Scientist(3410);
    var enemy53 = new Scientist(3610);

    // Blocks
    var block52 = new Caution_Block((((3510+3120)/2)-100),100);
    var block53 = new Caution_Block((((3510+3120)/2)-100),160);
    var block54 = new Caution_Block((((3510+3120)/2)-100),220);
    var block51 = new Caution_Block((((3510+3120)/2)-100),400);

    var block59 = new Caution_Block((3510),180);
    var block561 = new Caution_Block((3510),120);
    var block562 = new Caution_Block((3510),60);
    var block563 = new Caution_Block((3510),0);

    // Powerups
    var powerup51 = new PowerUp(3220,10,3);

} // load_level_one()


/*---------------------------------------
  LEVEL 2 INIT
---------------------------------------*/
Game.prototype.load_level_two = function() {

    debug("load_level_two() called");
    current_level++;
    resetManagers();
    level2_music.play();

    // Environment
    background = new Background(2);
    background.hard_reset

    // Characters    
   

    /* SCREEN 1
    ----0-------------340--------------780---*/
    // Enemies
    /*
    var enemy_L2_1_1 = new Hunter(100);
    var enemy_L2_1_2 = new Hunter(200);
    var enemy_L2_1_3 = new Hunter(300);
    var enemy_L2_1_4 = new Hunter(400);
    var enemy_L2_1_5 = new Hunter(500);
    var enemy_L2_1_6 = new Hunter(600);
    var enemy_L2_1_7 = new Hunter(700);
    */
    
    //Blocks
    
    var block_L2_1_2 = new Tree_Block(220,180);
    var block_L2_1_3 = new Tree_Block(220,380);
    
    var block_L2_1_6 = new Tree_Block(445,180);
    
    
    
    //Powerups
    var powerup_L2_1_1 = new PowerUp(220,120, 4);
    var powerup_L2_1_2 = new PowerUp(220,260, 1);
    
    
    /* SCREEN 2
    ---780-------------1170---------------1560---*/
    // Enemies
    /*
    var enemy_L2_2_1 = new Hunter(780);
    var enemy_L2_2_2 = new Hunter(880);
    var enemy_L2_2_3 = new Hunter(980);
    var enemy_L2_2_4 = new Hunter(1080);
    var enemy_L2_2_5 = new Hunter(1180);
    var enemy_L2_2_6 = new Hunter(1280);
    var enemy_L2_2_7 = new Hunter(1380);
    */

    // Blocks
    var block_L2_2_1 = new Tree_Block(780,405);
    var block_L2_2_2 = new Tree_Block(840,345);
    var block_L2_2_3 = new Tree_Block(900,285);
    var block_L2_2_4 = new Tree_Block(960,225);
    var block_L2_2_5 = new Tree_Block(1020,165);
    var block_L2_2_6 = new Tree_Block(1150,165);
    var block_L2_2_7 = new Tree_Block(1210,165);
    var block_L2_2_8 = new Tree_Block(1270,165);
    var block_L2_2_9 = new Tree_Block(1330,165);
    
    // Powerups
    var powerup_L2_2_1 = new PowerUp(900,405,1);
    var powerup_L2_2_2 = new PowerUp(960,405,1);
    var powerup_L2_2_3 = new PowerUp(960,405,1)
    var powerup_L2_2_4 = new PowerUp(1020,405,1)
    var powerup_L2_2_5 = new PowerUp(1080,285,2);
    var powerup_L2_2_6 = new PowerUp(1080,405,1);
    var powerup_L2_2_7 = new PowerUp(1080,15,2);
    var powerup_L2_2_8 = new PowerUp(1080,75,4);
    
    /* SCREEN 3
    ----1560------------1950--------------2340----*/
    // Enemies
    var enemy_L2_3_1 = new Hunter(1950);
    var enemy_L2_3_2 = new Hunter(1560);
    var enemy_L2_3_3 = new Hunter(2340);

    // Blocks
    var block_L2_3_1 = new Tree_Block(((1950+1560)-100)/2,120);
    var block_L2_3_2 = new Tree_Block(((1950+1560)-100)/2,180);
    var block_L2_3_3 = new Tree_Block(((1950+1560)-100)/2,240);
    var block_L2_3_4 = new Tree_Block(((1890+1560)-160)/2,180);
    var block_L2_3_5 = new Tree_Block(((2010+1560)-40)/2,180);
    
    var block_L2_3_6 = new Tree_Block(((1950+2340)-100)/2,120);
    var block_L2_3_7 = new Tree_Block(((1950+2340)-100)/2,180);
    var block_L2_3_8 = new Tree_Block(((1950+2340)-100)/2,240);
    var block_L2_3_9 = new Tree_Block(((1890+2340)-160)/2,180);
    var block_L2_3_10 = new Tree_Block(((2010+2340)-40)/2,180);
  
    // Powerups
    var powerup_L2_3_1 = new PowerUp(((1890+1560)-200)/2,120,3);
    var powerup_L2_3_2 = new PowerUp(((1890+1560)-200)/2,240,2);
    var powerup_L2_3_3 = new PowerUp(((2010+1560))/2,120,2);
    var powerup_L2_3_4 = new PowerUp(((2010+1560))/2,240,3);
    
    
    /* SCREEN 4
    ---2340-------------2730---------------3120---*/
    // Enemies
    /*
    var enemy_L2_4_1 = new Hunter(2730);
    var enemy_L2_4_2 = new Hunter(2630);
    var enemy_L2_4_3 = new Hunter(2830);
    */
    
    // Blocks
    var block_L2_4_1 = new Tree_Block(2540,0);
    var block_L2_4_2 = new Tree_Block(2540,60);
    var block_L2_4_3 = new Tree_Block(2540,120);
    var block_L2_4_4 = new Tree_Block(2540,180);
    var block_L2_4_5 = new Tree_Block(2600,0);
    var block_L2_4_6 = new Tree_Block(2600,60);
    var block_L2_4_7 = new Tree_Block(2600,120);
    var block_L2_4_8 = new Tree_Block(2600,180);
    var block_L2_4_9 = new Tree_Block(2660,0);
    var block_L2_4_10 = new Tree_Block(2660,60);
    var block_L2_4_11 = new Tree_Block(2660,120);
    var block_L2_4_12 = new Tree_Block(2660,180);
    
    var block_L2_4_13 = new Tree_Block(3000,0);
    var block_L2_4_14 = new Tree_Block(3000,60);
    var block_L2_4_15 = new Tree_Block(3000,120);
    var block_L2_4_16 = new Tree_Block(3000,180);
    var block_L2_4_17 = new Tree_Block(3060,0);
    var block_L2_4_18 = new Tree_Block(3060,60);
    var block_L2_4_19 = new Tree_Block(3060,120);
    var block_L2_4_20 = new Tree_Block(3060,180);
    var block_L2_4_21 = new Tree_Block(3120,0);
    var block_L2_4_22 = new Tree_Block(3120,60);
    var block_L2_4_23 = new Tree_Block(3120,120);
    var block_L2_4_24 = new Tree_Block(3120,180);
    
    // Powerups
    var powerup_L2_4_1 = new PowerUp(2730,180,4);
    var powerup_L2_4_2 = new PowerUp(2730,0,3);

    
    /* SCREEN 5
    --3120----------------3510--------------3900--*/
    // Enemies
    var enemy_L2_5_1 = new Hunter(2730);
    var enemy_L2_5_2 = new Hunter(3510);
    var enemy_L2_5_3 = new Hunter(3900);
    var enemy_L2_5_4 = new Hunter((3510+3120)/2);
    var enemy_L2_5_5 = new Hunter((3510+3900)/2);

    // Blocks
    //var block_L2_5_1 = new Block(3120,180);
    
    // Powerups
    var powerup_L2_5_1 = new PowerUp(3120,0,1);
    
    
} // load_level_two()

Game.prototype.draw = function() {

    // Top level game function. Handles pause menus, object rendering,
    // and collision detection.
    
    if (gamePaused) {
        // If paused, create a new Menu
        var pauseMenu = new Menu(
            "Game Paused",     // Description
            ["Resume"],        // Options
            function(option) { // Function triggered by enter key
                if (option === 0) {
                    menuActive = false;
                    gamePaused = false;
                }
        });
    }
	
  if (menuActive) {
    // Are we in menu mode?
    currentMenu.draw();
  }
  else if (Math.abs(background.x) >= background.width-C_WIDTH && player.x >= 600) {
    // Display appropriate menu if the player has reached the end of a level
    // The timeout is so that the menu doesn't pop up instantly
    // I am extremely sorry that this code exists :(

    switch (current_level) {

        case 1: // Level 1 -> 2
            setTimeout(function() {
                var endMenu = new Menu(
                    "Level One Completed!", // Description
                    ["Begin level two"],    // Options
                    function(option) { if (option === 0) { current_level++; game.load_level_two; }}                   
                );
            }, 2000);
        break;

        case 2: // Level 2 -> 3
            setTimeout(function() {
                var endMenu = new Menu(
                    "Level Two Completed!", // Description
                    ["Begin level three"],  // Options
                    function(option) { if (option === 0) { current_level++; game.load_level_three; }}                 
                );
            }, 2000);
        break;

        case 3: // Final level (Game victory menu)
            setTimeout(function() {
                var endMenu = new Menu(
                    "Victory!",         // Description
                    ["Play again? :)"], //Options
                    function(option) { if (option === 0) { var game = new Game(); game.load_level_one(); }},
                    true // Score?
                );
            }, 2000);
        break;

    }; // switch(current_level)
    
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

    if (!player.isAlive) {
        ctx.save();
        ctx.fillStyle = "rgba(196,196,196, 0.5)";
        ctx.fillRect(0,0,C_WIDTH, C_HEIGHT);
        ctx.restore();
    }
    
  }
}

var endGame = function() {
    // Display the end menu after a brief delay for death animation
    
    setTimeout(function() {
        var endMenu = new Menu(
        "Game Over!",      // Description
        ["Restart Game"],  // Options
        function(option) { // Function triggered by enter key
          if (option == 0) {
            debug("restart; render level 1");            
            menuActive = false;
            var game = new Game();
            game.load_level_one();
          }
        }, true);
    },player.respawnTime);
    
}