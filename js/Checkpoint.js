/*
	Class File: Player.js		
	Attributes:
		
	
	Method Signatures:
		
	
*/

function Checkpoint(x) {
  this.x = x;
  
  // Temporary stuff
  this.width = 5;
  this.height = C_HEIGHT;
  
  checkpoints.push(this); // Add self to manager array
}

Checkpoint.prototype = new GameObject(); // Inherit from GameObject
Checkpoint.prototype.constructor = Checkpoint; // Correct the constructor to use this, not GameObject

Checkpoint.prototype.move = function() {}

Checkpoint.prototype.draw = function() {
  ctx.save();
  ctx.fillStyle = "yellow"
  ctx.fillRect(this.x, 0, this.width, this.height);  
  ctx.restore();
}