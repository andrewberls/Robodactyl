/*
	Class File: Player.js	
	Inherits from: GameObject
	Attributes:
		
	
	Method Signatures:
		setDirection()
    attack()
    damage()
    kill()
    respawn()
    displayLives()
    displayHealth()
		move()
		draw()
	
*/

function Player() {
	
	this.x = 10;
	this.y = 10;
  
  this.height = 3*TILE_SIZE - 5; // Little hack to make for empty space at sprite bottom 
  this.width = 4.5*TILE_SIZE;
	
	this.dx = 0;
	this.dy = 0;
	
  this.score = 0;
  
  // Health/Checkpoint Tracking
  this.max_health = 5;
	this.health = this.max_health;
  this.max_lives = 3;
	this.lives = this.max_lives;
  this.current_checkpoint = 10;
  
  // Powerup tracking
	this.shieldCounter = 0;
	this.RageDactyl = false;
	  
  this.sprite.src = "images/player/robo_right.png";
}

Player.prototype = new GameObject(); // Inherit from GameObject
Player.prototype.constructor = Player; // Correct the constructor to use this, not GameObject

Player.prototype.setDirection = function() {
	
	// Here, we're switching through the player's dir attribute (a string),
	// and setting the appropriate dx or dy attribute based on its value.	

	switch(this.dir) {
		case "LEFT":
      if (player.RageDactyl) {
        this.sprite.src = "images/player/rage.png";
      } else {
        this.sprite.src = "images/player/robo_left.png";
      }      
			this.dx = -3;
			break;
		case "RIGHT":
      if (player.RageDactyl) {
        this.sprite.src = "images/player/rage.png";
      } else {
        this.sprite.src = "images/player/robo_right.png";
      }    
			this.dx = 3;
			break;
		case "UP":
			this.dy = -3;
			break;
		case "DOWN":
			this.dy = 3;
			break;
		default:
			this.dx = 0;
			this.dy = 0;
			break;
	};	
}

Player.prototype.attack = function () {
  // Don't create a new bomb if there's already a bomb dropping  
  if (playerProjectiles.length == 0) {
    var Bomb = new Projectile(this.midx-TILE_SIZE/2, this.y + this.height, 0, 6, 0);
    playerProjectiles.push(Bomb);
    laser1.play();
  }
}

Player.prototype.damage = function(dmg) {
  if (this.shieldCounter > 0) {
		this.shieldCounter--;
    debug("shield active/decrementing. now: " + this.shieldCounter.toString());
  } else {
		this.health -= dmg;
  }
  
  if (this.health <= 0) {
    this.kill();
  }
  
}

Player.prototype.kill = function() {
  debug("Player killed");
  if (this.lives > 1) {
    this.lives--;
    this.respawn();
  } else {
    // 0 lives; Game Over
    debug("Game over");
    endGame();
  }
}

Player.prototype.respawn = function() {
  debug("Player died; respawning");
  debug("Player now has " + this.lives.toString()  + " lives.");
  // Todo: spawn player at last checkpoint
  this.x = this.current_checkpoint;
  this.y = 10;
  // Todo: rewind the level/randomly regenerate environment. FFFFUUUUUUUUUUUU
  this.health = 5;
}

Player.prototype.displayLives = function() {
  ctx.save();
  
  var life_sprite = new Image();
  life_sprite.src = "images/hud/lives2.png";  
  var offset = 0;
  var x_start = C_WIDTH-150;
  
  for (var i=0; i<this.max_lives; ++i) {
    ctx.globalAlpha = 0.5; // Faded head
    if (i<this.lives) {
      ctx.globalAlpha = 1; // Full head
    }    
    ctx.drawImage(life_sprite, x_start+offset, 10);
    
    offset += 50;
  }
  
  ctx.restore();
}

Player.prototype.displayHealth = function() {
  ctx.save();
  
  var health_sprite = new Image();
  health_sprite.src = "images/hud/heart.png";  
  var offset = 0;
  var x_start = C_WIDTH-150;
  
  for (var i=0; i<this.max_health; ++i) {
    ctx.globalAlpha = 0.5; // Faded heart
    if (i<this.health) {
      ctx.globalAlpha = 1; // Full heart
    }
    ctx.drawImage(health_sprite, x_start+offset, 50);    
    offset += 30;
  }
  
  ctx.restore();
}

Player.prototype.move = function() {

  // Convenience midpoint methods
  this.midx = this.x + this.width/2;
  this.midy = this.y + this.height/2;
  
	this.setDirection();
	
	// Don't move if colliding with a canvas edge
	// Top
	if (this.y + this.dy < 0) {				
		this.dy = 0;
	}
	// Left/Right
	if (this.x + this.dx < 0 || this.x + this.dx + this.width > C_WIDTH) {
		this.dx = 0;
	}
	// Bottom
	if (this.y + this.height + this.dy > C_HEIGHT - TILE_SIZE) {
		this.dy = 0;
	}
			
	this.x += this.dx;
	this.y += this.dy;
	
};
	
Player.prototype.draw = function() {	
	//if (this.shieldCounter > 0) {
	//	this.sprite.src = "images/player/shield.png";
	//}	
  
	//ctx.fillRect(this.x, this.y, this.width, this.height); // Draw box around the sprite
  ctx.drawImage(this.sprite, this.x, this.y);  
}
