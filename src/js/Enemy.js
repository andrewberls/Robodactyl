/*
  Class File: Enemy.js
  Inherits from: GameObject
  Description: An enemy that fires projectiles at the player
		
	
  Method Signatures:
    Enemy(x)
    move()
    fire()
    kill()
    draw()
*/

function Enemy(x) {
	
    this.height = 3*TILE_SIZE;
    this.width = 2*TILE_SIZE;
  
    this.x = x;
    this.y = C_HEIGHT-this.height-TILE_SIZE;
	
    this.dx = 0.8;

    this.health = 1;

    this.bulletSpeed = 2.5;
  
    // Randomly select the sprite source
    this.sprite = new Image();
    if (randomFromTo(1,50)%2 == 0) {
        this.sprite.src = "images/enemy/scientist_1.png";   
    } else {
        this.sprite.src = "images/enemy/scientist_2.png";    
    }
 
    // Set the firing loop
    // This looks super funky, but it's necessary 
    // to preserve the correct 'this' context - DOMWindow otherwise
    this.fireLoop = setInterval((function(self) {
        return function() {
            if (!menuActive && player.isAlive) {
                // Hack to fix glitch where enemies were firing while menu was on
                self.fire();
            }
        }
    })(this), randomFromTo(1500, 2500)); // Random firing interval
  
    enemies.push(this); // Add self to character manager array
	
}

Enemy.prototype = new GameObject(); // Inherit from GameObject
Enemy.prototype.constructor = Enemy; // Correct the constructor to use this, not GameObject

Enemy.prototype.move = function() {
    // Scroll the enemy with the background and pace back and forth
  
    // Calculate midpoints
    this.midx = this.x + this.width/2;
    this.midy = this.y + this.height/2;

    if (this.x + this.dx < 0 || this.x + this.dx + this.width > C_WIDTH) {
        // Change direction if colliding with a canvas edge
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
    // Calculate bullet vectors and fire at the player
    
    // Only fire if the player is on the same screen as the enemy
    if (this.x >= 0 && this.x < C_WIDTH) {

        if (this.x >= player.midx) { //player is to the left of the enemy
            var y = -1 * Math.abs(this.midy-player.midy);
            var x = -1 * Math.abs(this.midx-player.midx);
        }

        else if (this.x <= player.midx) { //player is to the right of the enemy
            var y = -1 * Math.abs(this.midy-player.midy);
            var x = 1 * Math.abs(this.midx-player.midx);
        }

        var rad = Math.atan2(y,x);
        var bulletDX = this.bulletSpeed * Math.cos(rad);
        var bulletDY = this.bulletSpeed * Math.sin(rad);

        // Is the enemy alive?
        if (this.in(enemies)) {
            var proj = new Projectile(this.x + this.width/2, this.y, bulletDX, bulletDY, 1); // Params: (x,y,dx,dy,src)
            enemyProjectiles.push(proj);
            enemy_fire.play();
        }
    }

}

Enemy.prototype.kill = function() {
    // Play a random death sound and delete the instance from manager array
    
    switch(randomFromTo(1,3)) {
        case 1:
            enemy_death1.play();
            break;
        case 2:
            enemy_death2.play();
            break;
        case 3:
            enemy_death3.play();
            break;
    };

    enemies.remove(this);

}

Enemy.prototype.draw = function() {
    // Draw sprite to the canvas

  //ctx.fillRect(this.x, this.y, this.width, this.height); // Box model
  ctx.drawImage(this.sprite, this.x, this.y);

}