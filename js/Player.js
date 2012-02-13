/*
	Class File: Player.js	
	Inherits from: GameObject
	Attributes:
		
	
	Method Signatures:
		setDirection()
		move()
		draw()
	
*/

function Player() {

	// Is this the best way to initialize inherited attributes?	
	this.x = 10;
	this.y = 10;    
	
	this.height = 30;
	this.width = 30;
  
  // Convenience attributes for enemy targeting
  this.midx = this.x + this.width/2;
  this.midy = this.y + this.height/2;
	
	this.dx = 0;
	this.dy = 0;
	
	// this.health = 0;
	
	
}

Player.prototype = new GameObject(); // Inherit from GameObject
Player.prototype.constructor = Player; // Correct the constructor to use this, not GameObject

Player.prototype.setDirection = function() {

	/*
		Here, we're switching through the player's dir attribute (a string),
		and setting the appropriate dx or dy attribute based on its value.
	*/

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

Player.prototype.move = function() {

	/*
		This gets called before the draw() function every frame.
		It serves to modify the player's position on the screen,
		thus faking the appearance of continuous movement.
		
	*/

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
	
				
	// Finally, if no collisions detected, move the player			
	this.x += this.dx;
	this.y += this.dy;
	
};
	
Player.prototype.draw = function() {
	// Render the actual box or sprite to the screen
	ctx.fillRect(this.x, this.y, 30, 30);
}

