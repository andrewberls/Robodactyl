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
  //this.dy = 0.1;
  
  this.src = src;
  
  
  this.sprite = new Image();
  if (this.src === 0) {
    // Player projectile
    if (player.RageDactyl) {
      this.sprite.src = "images/player/playerprojectilerage.png";      
    } else {
      this.sprite.src = "images/player/playerprojectile.png";
    }    
    this.height = 50;
    this.width = 30;
  } else {
    // Enemy projectile
    this.sprite.src = "images/enemy/scientistprojectile.png";
    this.height = 20;
    this.width = 20;
  }
  
}

Projectile.prototype = new GameObject(); // Inherit from GameObject
Projectile.prototype.constructor = Projectile; // Correct the constructor to use this, not GameObject

Projectile.prototype.move = function() {  
  this.x += this.dx;
  this.y += this.dy;
}

Projectile.prototype.draw = function() {  
  ctx.save();
  
  if (this.src === 0) { ctx.fillStyle = "lime"; }
  else { ctx.fillStyle = "#f00"; }
  //ctx.fillRect(this.x, this.y, this.width, this.height);  
  
  ctx.drawImage(this.sprite, this.x, this.y);
  
  ctx.restore();
}
