/*
  Class File: Enemy.js
  Inherits from: GameObject
  Description: An enemy that fires projectiles at the player
		
	
  Method Signatures:
    Enemy(x)
    fire()
    kill() [Overloaded]
    move()
    draw()
*/

/*---------------------------------------
  GENERIC ENEMY
---------------------------------------*/
function Enemy(x) {}

Enemy.prototype = new GameObject(); // Inherit from GameObject
Enemy.prototype.constructor = Enemy; // Correct the constructor to use this, not GameObject


Enemy.prototype.fire = function(ProjType, sound) {  
    // Calculate bullet vectors and fire at the player
    
    // Only fire if the player is on the same screen as the enemy
    if (this.x >= 0 && this.x < C_WIDTH) {

        if (this.x >= player.midx) { // Player is to the left of the enemy
            var y = -1 * Math.abs(this.midy-player.midy);
            var x = -1 * Math.abs(this.midx-player.midx);
        }

        else if (this.x <= player.midx) { // Player is to the right of the enemy
            var y = -1 * Math.abs(this.midy-player.midy);
            var x = 1 * Math.abs(this.midx-player.midx);
        }

        var rad = Math.atan2(y,x); // Angle between enemy and player
        var bulletDX = this.bulletSpeed * Math.cos(rad); // Velocity vectors
        var bulletDY = this.bulletSpeed * Math.sin(rad);
        
        if (this.in(enemies)) { // Is the enemy alive?
            var proj = new ProjType(this.x + this.width/2, this.y, bulletDX, bulletDY); // Params: (x,y,dx,dy)
            enemyProjectiles.push(proj);
            sound.play();
        }
    }

}

/*Enemy.prototype.kill = function(sound) {
    // Play a sound and delete the instance from manager array
    
    sound.play()
    enemies.remove(this);

}*/

Enemy.prototype.move = function() {
    // Scroll the enemy with the background and pace back and forth
  
    // Calculate midpoints
    this.midx = this.x + this.width/2;
    this.midy = this.y + this.height/2;

    if (this.x + this.dx < 0 || this.x + this.dx + this.width > C_WIDTH) {
        // Change direction if colliding with a canvas edge
        this.moveSpeed *= -1;
    }

    if (randomFromTo(1,40) == 1) {
        // Random number testing for pacing back and forth
        // Increase the range for less frequent switches
        this.moveSpeed *= -1;
    }

    this.x += this.moveSpeed; // Pace
    this.x += this.dx;        // Scroll

}

Enemy.prototype.draw = function() {
    // Draw sprite to the canvas    
    
    // Remove enemies from manager if offscreen for efficiency
    if (this.x+this.width < 0) {
        debug("removing offscreen enemy");
        enemies.remove(this);
    }

    //ctx.fillRect(this.x, this.y, this.width, this.height); // Box model
    ctx.drawImage(this.sprite, this.x, this.y);

}


/*---------------------------------------
  SCIENTIST
---------------------------------------*/
function Scientist(x) {

    this.height = 3 * TILE_SIZE;
    this.width = 2 * TILE_SIZE;
  
    this.x = x;
    this.y = C_HEIGHT-this.height-TILE_SIZE; // Game floor
    
    this.moveSpeed = 0.8; // For pacing back and forth

    //this.health = 1;

    this.bulletSpeed = 2.6; // Old: 2.5

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
                self.fire(ScientistProjectile, scientist_fire);
            }
        }
    })(this), randomFromTo(1500, 3000)); // Random firing interval

    enemies.push(this); // Add self to manager array

}

Scientist.prototype = new Enemy(); // Inherit from Enemy
Scientist.prototype.constructor = Scientist; // Correct the constructor to use this, not Enemy

Scientist.prototype.kill = function() {
    // Play a random death sound and delete the instance from manager array
    
    switch(randomFromTo(1,3)) {
        case 1:
            scientist_death1.play();
            break;
        case 2:
            scientist_death2.play();
            break;
        case 3:
            scientist_death3.play();
            break;
    };

    enemies.remove(this);

}


/*---------------------------------------
  HUNTER
---------------------------------------*/
function Hunter(x) {

    this.height = 2 * TILE_SIZE;
    this.width = 2 * TILE_SIZE;
  
    this.x = x;
    this.y = C_HEIGHT-this.height-TILE_SIZE; // Game floor
    
    this.moveSpeed = 0.4; // For pacing back and forth
    this.bulletSpeed = 2.6;

    // Randomly select the sprite source
    this.sprite = new Image();
    this.sprite.src = "images/enemy/hunter_1.png";
 
    // Set the firing loop
    // This looks super funky, but it's necessary 
    // to preserve the correct 'this' context - DOMWindow otherwise
    this.fireLoop = setInterval((function(self) {
        return function() {
            if (!menuActive && player.isAlive) {
                // Hack to fix glitch where enemies were firing while menu was on
                self.fire(HunterProjectile, hunter_fire);
            }
        }
    })(this), randomFromTo(1500, 3000)); // Random firing interval

    enemies.push(this); // Add self to manager array

}

Hunter.prototype = new Enemy(); // Inherit from Enemy
Hunter.prototype.constructor = Hunter; // Correct the constructor to use this, not Enemy

Hunter.prototype.kill = function() {

    hunter_death.play();
    enemies.remove(this);

}