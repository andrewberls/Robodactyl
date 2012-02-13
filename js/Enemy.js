/*
	Class File: Enemy.js	
	Inherits from: GameObject
	Attributes:
		
	
	Method Signatures:
		setDirection()
		move()
    fire()
		draw()
	
*/

function Enemy(x) {

	// Is this the best way to initialize inherited attributes?	
	this.x = x;
	this.y = C_HEIGHT-60;
	
	this.height = 30;
	this.width = 30;
  
  this.midx = this.x + this.width/2;
  this.midy = this.y + this.height/2;
	
	this.dx = 0.8;  
	//this.dy = 0;
	
	// this.health = 0;
  var fireLoop = setInterval(this.fire,2000);	
	
}

Enemy.prototype = new GameObject(); // Inherit from GameObject
Enemy.prototype.constructor = Enemy; // Correct the constructor to use this, not GameObject

Enemy.prototype.move = function() {
  // Change direction if colliding with a canvas edge
	if (this.x + this.dx < 0 || this.x + this.dx + this.width > C_WIDTH) {
		this.dx *= -1;
	}
  if (randomFromTo(1,40) == 1) {
    // Random number testing for pacing back and forth
    // Increase the range for less frequent switches
    this.dx *= -1;
  }
  this.x += this.dx;
}

Enemy.prototype.fire = function() {  
  
  ctx.save();    
  //ctx.moveTo(this.midx,this.midy);  
  //ctx.lineTo(player.midx, player.midy);  
  //ctx.stroke();
  ctx.restore();
    
}

Enemy.prototype.draw = function() {
  ctx.save();  
  ctx.fillStyle = "#00ffcc";
  ctx.fillRect(this.x, this.y, 30, 30);
  
  this.fire(); // TEMPORARY IMPLEMENTATION
  
  ctx.restore();
}