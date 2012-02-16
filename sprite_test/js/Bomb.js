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

Bomb.prototype.drop = function() {
    
    this.isDropping = true;
    bombSound.play();
    
    while(this.y > canvas.height - 30) {
        this.isDropping = true;
        this.dy = 6;
        buffer_ctx.drawImage(this.sprite, this.x, this.y);
    }
	
	// Old way of timing bomb reset
    /*
	setTimeout(function() {
		console.log("Resetting bomb and this.isDropping.");
		this.isDropping = false;				
		//bomb.reset();
	}, 2750);
    
    */
    
    if (this.y == canvas.height - 30) {  
		explodeSound.play();
		if (debug_mode) { console.log("Calling reset from ground collision detection"); }
    }
    else {
		return;
	}
}

Bomb.prototype.draw = function() {

    // If the bomb is in the air, fall to the ground, else leave in reset

    
	// Has the bomb hit any bricks?
	// TO DO
	
    
	// Has the bomb hit the ground?
    
    
    
	
    
    
}


/**
Bomb.prototype.reset = function() {
		// Reset the bomb to the player's position
		this.x = playerX + 25; // Player sprite width/2
		this.y = playerY + player.height;	
}
*/