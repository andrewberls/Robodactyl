/*
	Class File: Enemy.js	
	Inherits from: GameObject
	Attributes:
		
	
	Method Signatures:		
		move()
    fire()
		draw()
	  kill()
*/

function Enemy(x) {
	
  this.height = 3*TILE_SIZE;
	this.width = 2*TILE_SIZE;  
  
	this.x = x;
	this.y = C_HEIGHT-this.height-TILE_SIZE;	    
	
	this.dx = 0.8;
	
 this.health = 1;  
  
  this.fireRate = 2500;
  
  
  // Randomly select the sprite source
  // NEEDS DEBUGGING
  if (randomFromTo(1,50)%2 == 0) {
    this.sprite.src = "images/scientist_1.png";    
  } else {
    this.sprite.src = "images/scientist_2.png";        
  }    
  
  // This looks super funky, but all it's doing is calling
  // the fire() method every second. The craziness
  // is necessary to preserve the correct 'this' context
  // (Defaults to DOMWindow otherwise)
  // Essentially equal to setInterval(this.fire, this.fireRate)
  this.fireLoop = setInterval((function(self) {
    return function() {
      self.fire();      
    } 
  })(this), this.fireRate);
  
  enemies.push(this); // Add self to character manager array
	
}

Enemy.prototype = new GameObject(); // Inherit from GameObject
Enemy.prototype.constructor = Enemy; // Correct the constructor to use this, not GameObject

Enemy.prototype.move = function() {
  
  // Convenience midpoint methods
  this.midx = this.x + this.width/2;
  this.midy = this.y + this.height/2;
  
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
  
  /*
    This will end up being a pretty complex function as we need to calculate
    a vector between the enemy and the player, calculate the dx and dy from that
    vector, and fire the bullet in that direction. In addition, the bullet has to
    move at a consistent speed regardless of how far away the player is, so the 
    dx and dy calculations could get fairly complicated.
    Available helpers: this.midx, this.midy, player.midx, player.midy
  */
  
  // Temporary stuff
  // Only fire if the player is on the same screen as the enemy
  if (this.x >= 0 && this.x < C_WIDTH) {
    
    var deltaX = player.midx - this.midx;
    var deltaY = player.midy - this.midy;        
    //var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));    
    
    var bulletDX = deltaX/150;
    var bulletDY = deltaY/150;
    
    // Is the enemy alive?
    if (this.in(enemies)) {
      var proj = new Projectile(this.x + this.width/2, this.y, bulletDX, bulletDY); // Params: (x,y,dx,dy)
      enemyProjectiles.push(proj);
    }
  }
  
    
}

Enemy.prototype.draw = function() {
  //ctx.save();  
  //ctx.fillStyle = "#00ffcc";
  // Draw the box model around the sprite (don't delete!)
  //ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.drawImage(this.sprite, this.x, this.y);    
  //ctx.restore();
}
Enemy.prototype.kill = function() {
  enemies.remove(this);
}