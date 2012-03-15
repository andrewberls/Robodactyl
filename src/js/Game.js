/*
  File: Game.js
  Description: Container for main game rendering. Loops through object
    manager arrays, moves/draws all objects, and handles collisions.
*/

function Game() {}

/*
    I hate the way objects are instantiated and loaded here.
    Idea for future: load everything using arrays
    and object notation, since we don't really need names
    for the objects. Ex:
    Scientists.load([10, 75, 100, etc]); // x-coordinates
    Blocks.load([
        {x: 150, y: 100},
        {} etc
    ])
*/

/*---------------------------------------
  LEVEL 1 INIT
---------------------------------------*/
Game.prototype.load_level_one = function() {

    debug("load_level_one() called");
    current_level = 1;
    resetManagers();
    stop_all_music();
    level1_music.play();

    // Environment
    background = new Background(1);
    background.hard_reset()

    // Characters    
    player.hard_reset();
    player.score = 0;

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
    current_level = 2;
resetManagers();
    stop_all_music()
    level2_music.play();

    // Environment
    background = new Background(2);
    background.hard_reset

    // Characters    
   player.hard_reset();

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

    // Turret
    var t_1_1 = new Turret(455, 102);
    var block_L2_1_6 = new Tree_Block(445,190);
    var block_L2_1_6 = new Tree_Block(505,190);
    var tr_1_1 = new Tree(455, C_HEIGHT-205);

    // Coins
    var c_1_1 = new PowerUp(230,85,5);
    var c_1_2 = new PowerUp(230,135,5);
    var c_1_3 = new PowerUp(230,185,5);
    var c_1_4 = new PowerUp(230,235,5);
    
    // Enemies
    var e_1_1 = new Hunter(300);
    var e_1_2 = new Hunter(700);    
    
    
    /* SCREEN 2
    ---780-------------1170---------------1560---*/
    // Enemies
    var enemy_L2_2_1 = new Hunter(1170+100);
    var enemy_L2_2_2 = new Hunter(1170-100);
    var turret_L2_2_3 = new Turret(1170-180, 92);
    var turret_L2_2_4 = new Turret(1170+120, 92);
    
    // Blocks
    var block_L2_2_1 = new Tree_Block(1170-180,180);
    var block_L2_2_2 = new Tree_Block(1170+180,180);
    var block_L2_2_3 = new Tree_Block(1170-120,180);
    var block_L2_2_4 = new Tree_Block(1170+120,180);
    var block_L2_2_5 = new Tree_Block(1170-60,240);
    var block_L2_2_6 = new Tree_Block(1170+60,240);
    var block_L2_2_7 = new Tree_Block(1170,240);
    
    // Powerups
    var powerup_L2_2_1 = new PowerUp(1170-60,360,5);
    var powerup_L2_2_1b = new PowerUp(1170,360,5);
    var powerup_L2_2_1c = new PowerUp(1170+60,360,5);
    var powerup_L2_2_1d = new PowerUp(1170+120,360,5);
    var powerup_L2_2_2 = new PowerUp(1170,180,1);
    var powerup_L2_2_3 = new PowerUp(1170,30,2);
    
    
    /* SCREEN 3
    ----1560------------1950--------------2340----*/
    // Turret top left
    var t_3_1 = new Turret(150+1560, 32);
    var block_L2_1_6 = new Tree_Block(150+1560,120);
    var block_L2_1_6 = new Tree_Block(210+1560,120);

    // Coins
    var c_3_1 = new PowerUp(150+1560,200,5);
    var c_3_2 = new PowerUp(210+1560,200,5);
    var c_3_3 = new PowerUp(270+1560,200,5);

    // Turret bottom right
    var t_3_2 = new Turret(585+1560, 245);
    var block_L2_1_6 = new Tree_Block(585+1560,333);
    var block_L2_1_7 = new Tree_Block(645+1560,333);

    // Powerup
    var p_3_1 = new PowerUp(375+1560, 200, 2);
    var p_3_2 = new PowerUp(620+1560, 85, 4);

    // Tree bottom right
    var tr_3_1 = new Tree(725+1560, C_HEIGHT-205);

    // Enemies
    var e_3_1 = new Hunter(150+1560);
    var e_3_2 = new Hunter(350+1560);

   
    
    /* SCREEN 4
    ---2340-------------2730---------------3120---*/
    // Enemies
    var enemy_L2_4_1 = new Hunter(2500);
    var enemy_L2_4_2 = new Hunter(2850);
    
    // Blocks
    var block_L2_4_1 = new Tree_Block(2340+110,240);
    var block_L2_4_2 = new Tree_Block(2670,240);
    var block_L2_4_3 = new Tree_Block(2730,240);
    var block_L2_4_4 = new Tree_Block(2790,240);
    var block_L2_4_5 = new Tree_Block(3120-110,240);
    
    // Coins
    var c_4_1 = new PowerUp(2340+200,240,5);
    var c_4_2 = new PowerUp(2340+230,240,5);
    var c_4_3 = new PowerUp(3120-200,240,5);
    var c_4_4 = new PowerUp(3120+230,240,5);
    
    // Powerups
    var powerup_L2_4_1 = new PowerUp(2730,150,2);
    
    
    /* SCREEN 5
    --3120----------------3510--------------3900--*/
    // Tree/block    
    var tr_5_1 = new Tree(320+3120,25);
    var b_5_1 = new Tree_Block(365+3120, 205);

    var e_5_1 = new Hunter(155+3120);
    var e_5_2 = new Hunter(625+3120);

    var c_5_1 = new PowerUp(155+3120,220,5);
    var c_5_2 = new PowerUp(625+3120,220,5);
    
    
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

    switch (current_level) {

        case 1: // Level 1 -> 2
            debug("player.hard_reset")
            player.hard_reset();
            var endMenu = new Menu(
                "Level One Completed!", // Description
                ["Begin level two"],    // Options
                function(option) { if (option === 0) {                
                    current_level++;
                    var game = new Game();
                    game.load_level_two();                        
                    menuActive = false;                        
                }}                  
            );
        break;

        case 2: // Final level (Game victory menu)
            debug("player.hard_reset")
            player.hard_reset();
            var endMenu = new Menu(
                "Victory!",         // Description
                ["Play again? :)"], //Options
                function(option) { if (option === 0) {                
                    current_level = 0;
                    var game = new Game();
                    game.load_level_one();                        
                    menuActive = false;                        
                }},
                true // Score?
            );
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
                if (block instanceof Turret) return false; // Hack - turret bullets don't collide with itself
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
            current_level = 0;
            var game = new Game();
            game.load_level_one();
            menuActive = false;
          }
        }, true);
    },player.respawnTime);
    
}