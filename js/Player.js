/*
	Class File: Player.js	
	Inherits from: GameObject
	Attributes:
		
	
	Method Signatures:
		setDirection()
    attack()
    damage()
    kill()
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
	
	this.health = 5;
	this.lives = 3;
	this.shieldCounter = 0;
	this.RageDactyl = false;
	this.ShieldDactyl = false;
  
	this.sprite.src = "images/robo_test.png";
}

Player.prototype = new GameObject(); // Inherit from GameObject
Player.prototype.constructor = Player; // Correct the constructor to use this, not GameObject

Player.prototype.setDirection = function() {
	
	// Here, we're switching through the player's dir attribute (a string),
	// and setting the appropriate dx or dy attribute based on its value.	

	switch(this.dir) {
		case "LEFT":
			this.dx = -3;
			break;
		case "RIGHT":
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
    var Bomb = new Projectile(this.midx-TILE_SIZE/2, this.y + this.height, 0, 6);
    playerProjectiles.push(Bomb);
    laser1.play();
  }
}

Player.prototype.damage = function(dmg) {
  if (this.shieldCounter > 0) {
		this.shieldCounter -= 1;
  else 
		this.health -= dmg;
  
  if (this.health <= 0) {
    this.kill();
	this.lives -= 1;
  }
}

Player.prototype.kill = function() {
  debug("kill() called");
  this.health = 5;
}

Player.prototype.displayHealth = function() {
  ctx.save();
  ctx.fillStyle = "#0fc";
  var offset = 0;
  var x_start = C_WIDTH-150;
  for (var i=0; i<this.health; ++i) {
    ctx.fillRect(x_start+offset, 10, 25, 25);
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
  // Draw the box model around the sprite (don't delete!)
	//ctx.fillRect(this.x, this.y, this.width, this.height); 
  ctx.drawImage(this.sprite, this.x, this.y);  
}
