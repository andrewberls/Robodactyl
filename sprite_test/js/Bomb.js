//---------- CLASS: Bomb
function Bomb(playerX, playerY) {

	// Add to the gameObject manager
	gameObjects.push(this);

	this.x = playerX + 30;
	this.y = playerY + player.height;
				
	this.dy = 6;
	
	this.width = 10;
	this.height = 5;
	
	this.isDropping = false;
	
	this.sprite = new Image();
	this.sprite.src = "images/bomb.gif";
}

Bomb.prototype.move = function() { 
	this.y += this.dy;
};

Bomb.prototype.draw = function() {
	
    /**
    
	// Has the bomb hit any bricks?
	// TO DO
	
	// Has the bomb hit the ground?
	if (this.isDropping && this.y >= canvas.height - 30) {  
		explodeSound.play();
		this.isDropping = false;
		//this.reset();
		if (debug_mode) { console.log("Calling reset from ground collision detection"); }
		return;
	}
	
	// If the bomb is in the air, fall to the ground, else leave in reset
	if (this.isDropping) {
		this.dy = 6;
		buffer_ctx.drawImage(this.sprite, this.x, this.y);
	} else {
		this.dy = 0;
        //this.reset();
	}	
	
    */
    
    //Has the bomb hit the ground?
    
}


/**
Bomb.prototype.reset = function() {
		// Reset the bomb to the player's position
		this.x = playerX + 25; // Player sprite width/2
		this.y = playerY + player.height;	
}
*/

Bomb.prototype.drop = function() {
    
    
    
	if (this.isDropping) {
		// Do nothing if player presses space while bomb already dropping
		if (debug_mode) { console.log("Bomb is already dropping."); }		
		return;
	}
	this.isDropping = true;	
	bombSound.play();
	
	// Old way of timing bomb reset
    /*
	setTimeout(function() {
		console.log("Resetting bomb and this.isDropping.");
		this.isDropping = false;				
		//bomb.reset();
	}, 2750);
    */
}