/*
	Class File: Projectile.js	
	Inherits from: GameObject
	Attributes:
		
	
	Method Signatures:
		move()
    draw()
	
*/

function Projectile(x,y,dx,dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;    
  
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
  ctx.fillRect(this.x, this.y, 15, 15);
  ctx.restore();
}