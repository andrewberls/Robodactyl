/*
	Class File: Player.js	
	Inherits from: GameObject
	Attributes:
		
	
	Method Signatures:
		setDirection()
    attack()
		move()
		draw()
	
*/

function Player() {

	// Is this the best way to initialize inherited attributes?	
	this.x = 10;
	this.y = 10;
  
  this.height = 3*TILE_SIZE; 
  this.width = 4.5*TILE_SIZE;
	
	this.dx = 0;
	this.dy = 0;
	
	this.health = 5;
  
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
  // Don't create a new bomb if there's already a bomb
  // in the playerProjectiles array
  
  if (playerProjectiles.length == 0) {
    var Bomb = new Projectile(this.midx-TILE_SIZE/2, this.y + this.height, 0, 6);
    playerProjectiles.push(Bomb);
  }
  else if (playerProjectiles.length == 1) {
    // Do nothing
    return;
  }
}

Player.prototype.move = function() {

	/*
		This gets called before the draw() function every frame.
		It serves to modify the player's position on the screen,
		thus faking the appearance of continuous movement.
		
	*/

  // Convenience midpoint methods
  this.midx = this.x + this.width/2;
  this.midy = this.y + this.height/2;
  
	this.setDirection();
	
	
	// This block should probably be put into a function eventually
	// ex checkCanvasCollisions() or something
	// ------------------------------------------
	//-- Don't move if colliding with a canvas edge
	// Top
	if (this.y + this.dy < 0) {				
		this.dy = 0;
	}
	// Left/Right
	if (this.x + this.dx < 0 || this.x + this.dx + this.width > C_WIDTH) {
		this.dx = 0;
	}
	// Bottom
	if (this.y + this.height + this.dy > C_HEIGHT - 30) { // FLOOR TILE HEIGHT CURENTLY HARDCODED (30)
		this.dy = 0;
	}
    
	if (IsColliding(player,enemy)) {
		//this.dx = 0;
  }
		
	// Finally, if no collisions detected, move the player			
	this.x += this.dx;
	this.y += this.dy;
	
};
	
Player.prototype.draw = function() {
	// Render the actual box or sprite to the screen
	//ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.drawImage(this.sprite, this.x, this.y)
}
