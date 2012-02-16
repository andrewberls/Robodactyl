/*
	Class File: Projectile.js	
	Inherits from: GameObject
	Attributes:
		
	
	Method Signatures:
		move()
    draw()
	
*/

function Projectile(x,y,dx,dy,src) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  //this.sprite.src = src;
  this.height = 15;
  this.width = 15;
  
}

Projectile.prototype = new GameObject(); // Inherit from GameObject
Projectile.prototype.constructor = Projectile; // Correct the constructor to use this, not GameObject

Projectile.prototype.move = function() {
  
  // To do: check for collisions with player, canvas edges, etc
  
  this.x += this.dx;
  this.y += this.dy;
}

Projectile.prototype.draw = function() {  
  ctx.save();
  ctx.fillStyle = "#f00";
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.restore();
}