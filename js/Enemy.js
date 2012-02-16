/*
	Class File: Enemy.js	
	Inherits from: GameObject
	Attributes:
		
	
	Method Signatures:		
		move()
    fire()
		draw()
	
*/

function Enemy(x) {
	
	this.x = x;
	this.y = C_HEIGHT-60;
	
	this.height = 30;
	this.width = 30;
  
  this.midx = this.x + this.width/2;
  this.midy = this.y + this.height/2;
	
	this.dx = 0.8;    
	
	// this.health = 0;  
  
  this.fireRate = 2500;
  
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
    
    var deltaX = player.x - this.x;
    var deltaY = player.y - this.y;
    //var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));    
    
    bulletDX = deltaX/150;
    bulletDY = deltaY/150;
        
    var proj = new Projectile(this.x, this.y, bulletDX, bulletDY); // Params: (x,y,dx,dy)
    enemyProjectiles.push(proj); // [TEMPORARY] Push to global projectile tracking array for rendering
  }
  
    
}

Enemy.prototype.draw = function() {
  ctx.save();  
  ctx.fillStyle = "#00ffcc";
  ctx.fillRect(this.x, this.y, 30, 30);
  
  //this.fire(); // TEMPORARY IMPLEMENTATION
  
  ctx.restore();
}