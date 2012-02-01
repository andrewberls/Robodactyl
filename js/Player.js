function Player() {
	this.x = 10;
	this.y = 10;
	
	this.height = 30;
	this.width = 30;
	
	this.dx = 1.4;
	this.dy = 1.4;
}

Player.prototype.move = function() {

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
	
	//-- Don't move if colliding with a canvas edge
	// Top
	if (this.y + this.dy < 0) {				
		this.dy = 0;
	}
	// Left/Right
	if (this.x + this.dx < 0 || this.x + this.dx + this.width > canvas.width) {
		this.dx = 0;
	}			
	// Bottom
	if (this.y + this.height + this.dy > canvas.height) {
		this.dy = 0;
	}
	
			
	// Finally, if no collisions detected, move the player			
	this.x += this.dx;
	this.y += this.dy;
};
	
Player.prototype.draw = function() {				
	ctx.fillRect(this.x, this.y, 30, 30);
}

var player = new Player();