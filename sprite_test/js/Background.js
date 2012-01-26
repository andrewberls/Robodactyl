//---------- CLASS: Background
function Background() {

	// Add to the gameObject manager
	gameObjects.push(this);

	this.x = 0;
	this.y = 0;
						
	this.width = 1200;	
			
	this.sprite = new Image();
	this.sprite.src = "images/bg.jpg";
}

Background.prototype.move = function() {
	// Scroll the background
	if (Math.abs(this.x) <= this.width-canvas.width) { // Stop when we reach the end of the image		
		this.x -= 0.3; // -0.5
	}
}

Background.prototype.draw = function() {		
	buffer_ctx.drawImage(this.sprite, this.x, this.y);	
};