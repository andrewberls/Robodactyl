/*
    Class File: Player.js
    Inherits from: GameObject
    Attributes:

    Method Signatures:
        reset()
        setDirection()        
        attack()
        damage()
        playDeathAnim()
        kill()
        respawn()
        displayLives()
        displayHealth()
        displayScore()
        displayRageNotice()
        move()
        draw()
*/

function Player() {
  
    this.x = 10;
    this.y = 10;

    this.height = 3*TILE_SIZE - 5; // Little hack to make for empty space at sprite bottom
    this.width = 4.5*TILE_SIZE;

    this.moveSpeed = 3.5; // Old: 3
    this.rageMoveSpeed = 4.5; // Move faster when RageDactyl enabled
    this.dx = 0;
    this.dy = 0;

    this.score = 0;

    // Health/Life Tracking
    this.isAlive = true;
    this.isInvincible = false; // Temporarily invulnerable after respawn. Currently only works for blocks (not projectiles)
    this.protectedTime= 2000; // How long the player is protected for after respawning

    this.max_health = 5;
    this.health = this.max_health;
    //this.health = 1; // For death testing

    this.max_lives = 3;
    this.lives = this.max_lives;
    //this.lives = 1; // For death testing

    this.respawnTime = 4000;

    // Powerup tracking
    this.shieldCounter = 0;
    this.RageDactyl = false;

    this.sprite = new Image();
    this.sprite.src = "images/player/robo_right.png";
    
}

Player.prototype = new GameObject(); // Inherit from GameObject
Player.prototype.constructor = Player; // Correct the constructor to use this, not GameObject

Player.prototype.reset = function() {
    
    // Stop the player and disable all powerups
    this.RageDactyl = false;
    this.shieldCounter = 0;
    this.dir = "";
    this.dx = 0;
    this.dy = 0;
    
}

Player.prototype.setDirection = function() {

    switch(this.dir) {
        // Set the player's direction speed and sprite
        // Sprite is determined by the current active powerup, if any
    
        case "LEFT":
            if (player.RageDactyl) {
                this.sprite.src = "images/player/rage_left.png";
            } else if (player.shieldCounter > 0) {
                this.sprite.src = "images/player/shield_left.png";
            } else {
                this.sprite.src = "images/player/robo_left.png";
            }
        
            this.dx = player.RageDactyl ? -1 * this.rageMoveSpeed : -1 * this.moveSpeed;
        break;
      
        case "RIGHT":
            if (player.RageDactyl) {
                this.sprite.src = "images/player/rage_right.png";
            } else if (player.shieldCounter > 0) {
                this.sprite.src = "images/player/shield_right.png";
            } else {
                this.sprite.src = "images/player/robo_right.png";
            }
            
            this.dx = player.RageDactyl ? this.rageMoveSpeed : this.moveSpeed;
        break;

        case "UP":                   
            this.dy = player.RageDactyl ? -1 * this.rageMoveSpeed : -1 * this.moveSpeed;
        break;

        case "DOWN":            
            this.dy = player.RageDactyl ? this.rageMoveSpeed : this.moveSpeed;
        break;

        default:
            this.dx = 0;
            this.dy = 0;
        break;
    };
    
}

Player.prototype.attack = function () {
    
    // Don't create a new bomb if there's already a bomb dropping
    if (playerProjectiles.length == 0) {
        var Bomb = new Projectile(this.midx-TILE_SIZE/2, this.y + this.height, 0, 6, 0);
        playerProjectiles.push(Bomb);
        if (this.RageDactyl) {
          rage_fire.play();
        } else {
          player_fire.play();
        }        
    }
    
}

Player.prototype.damage = function(dmg) {
    
    if (this.shieldCounter > 0) {
        this.shieldCounter--;
        shield_hit.play();
        debug("shield active/decrementing. now: " + this.shieldCounter.toString());
        if (this.shieldCounter === 0) {
            // Shield is done
            shield_deactivate.play();
            if (this.dir === "LEFT") {
                this.sprite.src = "images/player/robo_left.png";
            } else {
                this.sprite.src = "images/player/robo_right.png";
            }
        }
    } else {
        this.score -= 5*dmg;
        this.health -= dmg;
    }

    if (this.health <= 0) {
        this.kill();
    }
    
}

Player.prototype.playDeathAnim = function() {
        
    this.isAlive = false;
    //this.sprite.src = "";
    player_death.play();
    /*
    for (var i=1; i<5; ++i) {
        setTimeout((function(self) { return function() {
            self.sprite.src = "images/player/robo_right.png";         
        }})(this), (i*250));
        
        setTimeout((function(self) { return function() {            
            self.sprite.src = "images/player/nil.jpg";        
        }})(this), (i*250)+125);
    }
    */    
    
}

Player.prototype.kill = function() {
    
    debug("Player killed");

    this.score -= 75;
    this.reset();
    enemyProjectiles = []; // Clear enemy bullets
    
    if (this.lives > 1) {
        this.lives--;
        this.playDeathAnim();
        this.respawn();
    } else {
        // 0 lives; Game Over
        this.playDeathAnim();
        debug("Game over");        
        endGame();
    }
    
}

Player.prototype.respawn = function() {
    
    setTimeout((function(self) {
        return function() {
            debug("Respawning. Now has " + self.lives.toString()  + " lives.");
            self.isAlive = true;
            self.sprite.src = "images/player/robo_right.png";
            self.x = 10;
            self.y = 10;
            self.health = self.max_health;
            self.isInvincible = true;
            debug("player is invincible: " + self.isInvincible.toString());
            player_respawn.play();

            setTimeout((function(player) {
                return function() {
                    // Disable temporary respawn invincibility
                    // Nested closures, weeehooo.
                    player.isInvincible = false;
                    debug("player is invincible: " + self.isInvincible.toString());
                }
            })(self), self.protectedTime);

        } 
    })(this), this.respawnTime);

}

Player.prototype.displayLives = function() {
    
    ctx.save();

    var life_sprite = new Image();
    life_sprite.src = "images/hud/lives2.png";
    var offset = 0;
    var x_start = C_WIDTH-150;

    for (var i=0; i<this.max_lives; ++i) {
        ctx.globalAlpha = 0.5; // Faded head
        if (i<this.lives) {
            ctx.globalAlpha = 1; // Full head
        }
        ctx.drawImage(life_sprite, x_start+offset, 10);

        offset += 50;
    }

    ctx.restore();
    
}

Player.prototype.displayHealth = function() {
    
    ctx.save();

    var health_sprite = new Image();
    health_sprite.src = "images/hud/heart.png";
    var offset = 0;
    var x_start = C_WIDTH-150;

    for (var i=0; i<this.max_health; ++i) {
        ctx.globalAlpha = 0.5; // Faded heart
        if (i<this.health) {
            ctx.globalAlpha = 1; // Full heart
        }
        ctx.drawImage(health_sprite, x_start+offset, 50);
        offset += 30;
    }

    ctx.restore();
    
}

Player.prototype.displayScore = function() {
    
    ctx.save();
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Score: " + Math.floor(this.score), C_WIDTH-60, C_HEIGHT-10);
    ctx.restore();
    
}

Player.prototype.displayRageNotice = function() {
        
    ctx.save();
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    var text = "Rage Mode enabled! Run over your enemies!";
    ctx.fillText(text, C_MIDX, C_HEIGHT-10);
    ctx.restore();
    
}

Player.prototype.move = function() {
    
    // Calculate midpoints
    this.midx = this.x + this.width/2;
    this.midy = this.y + this.height/2;

    this.setDirection();

    // Don't move if colliding with a canvas edge
    // Top
    if (this.y + this.dy < 0) {
        this.dy = 0;
    }
    // Left/Right
    if (this.x + this.dx < 0 || this.x + this.dx + this.width > C_WIDTH) {
        this.dx = 0;
    }
    // Bottom
    if (this.y + this.height + this.dy > C_HEIGHT - TILE_SIZE) {
        this.dy = 0;
    }

    this.x += this.dx;
    this.y += this.dy;
    
};
	
Player.prototype.draw = function() {
    
    //ctx.fillRect(this.x, this.y, this.width, this.height); // Box model
    if (!this.sprite || this.sprite.src === "") {
        debug("nasty sprite errors");
    } else {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
    
}
