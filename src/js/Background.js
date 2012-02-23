/*
  Class File: Background.js
  Inherits from: GameObject
  Attributes:
    moveSpeed
	
  Method Signatures:
    move()
    draw()
	
*/

function Background() {
  
  this.moveSpeed = 0.4;
  this.width = 780;
  
  // This needs to be parameterized or something
  this.sprite.src = "images/bg/lvl1/lvl1_base.png";
}

Background.prototype = new GameObject(); // Inherit from GameObject
Background.prototype.constructor = Background; // Correct the constructor to use this, not GameObject

Background.prototype.move = function() {
  // Scroll the background
  if (Math.abs(this.x) <= this.width-C_WIDTH) { // Stop when we reach the end of the image
    this.x -= this.moveSpeed;
  }
}

Background.prototype.draw = function() {
  ctx.drawImage(this.sprite, this.x, this.y);
}