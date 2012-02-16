//---------- CLASS: Player
function Player() {

	// Add to the gameObject manager
	gameObjects.push(this);

	//this.x = 30;
	//this.y = 130;
	
	this.x = 35; this.y = 35; // Temp for collision testing
	
	this.dir = ""; // LEFT, UP, RIGHT, DOWN
	
	this.dx = 0;
	this.dy = 0;
	
	this.width = 60;
	this.height = 30;		
	
	this.sprite = new Image();
	this.sprite.src = "images/plane.gif";
	//this.sprite.src = "images/plane_debug.gif";
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
	
	// Don't move if colliding with a block	
	if (this.tileCollision()) {
		// take collision action
		// log("You have exploded");		
	}
	
	
	// Finally, if no collisions detected, move the player			
	this.x += this.dx;
	this.y += this.dy;
};

Player.prototype.draw = function() {		
	buffer_ctx.drawImage(this.sprite, this.x, this.y);
};

Player.prototype.tileCollision = function() {
	// Boolean - whether or not the player sprite is colliding with a tile space
		
	var tiles = tileManager.tiles; // Convenience alias
	
	var collisionX = false;
	var collisionY = false;
	
	var moveX = 0;
	var moveY = 0;
	
	// Loop through all tiles and compare their space to the player space
	// To do: this should only loop through tiles in a certain area around the player for efficiency
	for (var i=0; i<15; i++) {
		for (var j=0; j<20; j++) {
		
			move_x = this.x + this.dx;
			move_y = this.y + this.dy;
		
			var tile = tiles[i][j];
								
			/*if (tile.typeValue) {	
				// Colliding from x-direction
				// If touching from left or right
				if ( ((move_x + this.width >= tile.x) && (move_x <= tile.x+tile.width)) ) {			
					// If also touching from top or bottom
					if ( (move_y + this.height >= tile.y) && (move_y <= tile.y+tile.height) ) {
						// Handle collision event
						//this.dx = 0; this.dy = 0;
						log("collision detected");						
					}
				}
			}*/
		}
	}
	
	// return (collisionX || collisionY) ? true : false;	
}

Player.prototype.attack = function () {
    //calls instance of bomb at player location
    
    for(x = 0; x < 10; x++) {
        var playerBomb = new Bomb(this.x, this.y);
    }
    
    if (!playerBomb.isDropping) { 
        playerBomb.drop();
    }
    else if(playerBomb.isDropping = true) {
        //do nothing if player presses space while bomb is dropping
        if(debug_mode) {
        console.log("Bomb is dropping, please wait");
        }
        return;
    }
}


Player.prototype.dumpAttributes = function() {
	// Debug function that can be switched on
	// Dumps list of player properties (ex x, dir, dy, etc) and their values
	
	var output = '';
	for (property in this) {		
		if (!(this[property] instanceof Function)) {
			output += property + ': ' + this[property]+';\n';
		}
	}
	log(output);	
	
}