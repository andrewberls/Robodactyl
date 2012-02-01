/*
	Class File: Player.js	
	Inherits from: 
	Attributes:
		x
		y
		height
		width
		dx
		dy
	
	Method Signatures:
		move()
		draw()
	
*/

function Player() {

	/*
		Eventually most or all of these attributes should be put in a generic
		gameObject class that this inherits from.
	*/
	
	this.x = 10;
	this.y = 10;
	
	this.height = 30;
	this.width = 30;
	
	this.dx = 0;
	this.dy = 0;
}

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
	if (this.y + this.height + this.dy > C_HEIGHT) {
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

