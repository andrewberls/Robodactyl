/*
  Class File: PowerUp.js
  Inherits from: GameObject
  Attributes:
    Type of Power-Up
    Height/Width
    Coordinates

  Method Signatures:
    ActivatePowerup()
    ChoosePowerup()
    RageDactyl()
    ShieldDactyl()
    ApplyHealth()
    ExtraLife()
    draw()
	
*/

function PowerUp(x,y, type) {

    this.x = x;
    this.y = y;
	
    this.type = type;	  
  
    this.sprite = new Image();
  
    this.ChoosePowerup(); //Picks which Power-Up to use and assigns a skin
  
    collectables.push(this);
}
	
PowerUp.prototype = new GameObject(); // Inherit from GameObject
PowerUp.prototype.constructor = PowerUp; // Correct the constructor to use this, not GameObject
	
	
PowerUp.prototype.RageDactyl = function() {
    
    //Running into enemies kills them, no player damage. Lasts 10 seconds.
    if (!(player.shieldCounter > 0)) {
        // Can't have Rage and Shield at the same time
        player.RageDactyl = true;
        rage_activate.play();        
        if (player.dir === "LEFT") {
            player.sprite.src = "images/player/rage_left.png";
        } else {
            player.sprite.src = "images/player/rage_right.png";
        }

        setTimeout(function() {
            // Disable RageDactyl after 10 seconds
            player.RageDactyl = false;
            debug("RageDactyl disabling");
            if (player.dir === "LEFT") {
                player.sprite.src = "images/player/robo_left.png";
            } else {
                player.sprite.src = "images/player/robo_right.png";
            }
        }, 10000);

        debug("BEAST MODE ENGAGED");
    }

}
	
PowerUp.prototype.ApplyHealth = function() {
    
    //Restores one heart of health to the player
    if (player.health < player.max_health) {
        // Max of 5 health
        player.health++;
    }

    health_powerup.play();

}
	
PowerUp.prototype.ExtraLife = function() {
    
    //Grants one extra life to the player
    if (player.lives < 3) {
        // Max of 3 lives
        player.lives++;
    }
    life_powerup.play();

}

PowerUp.prototype.ShieldDactyl = function() {
    
    //Robodactyl gets awesome bubble shield
    if (!(player.RageDactyl)) {
        // Can't have Rage and Shield at the same time
        player.shieldCounter = 2;
        shield_activate.play();
        if (player.dir === "LEFT") {
            player.sprite.src = "images/player/shield_left.png";
        } else {
            player.sprite.src = "images/player/shield_right.png";
        }
    }

}
	
PowerUp.prototype.ChoosePowerup = function() {
    
  //Chooses a random powerup to spawn
  /*
    1: RageDactyl
    2: +1 Health
    3: Extra Life
    4: Shield
  */
	  
  switch(this.type) {        
      case 1:
          this.sprite.src = "images/powerup/rage.png"; 
          break;
      case 2:
          this.sprite.src = "images/powerup/health.png";
          break;
      case 3:
          this.sprite.src = "images/powerup/extralife.png"; 
          break;
      case 4:
          this.sprite.src = "images/powerup/shield.png";
          break;
      default:
          break;
  };

}
	
PowerUp.prototype.ActivatePowerup = function() {
    
    //Endows Robodactyl with Powerup when collision is detected

    player.score += 50;
  
    switch(this.type) {
        case 1:
            this.RageDactyl();
            break;
        case 2:
            this.ApplyHealth();
            break;    
        case 3:
            this.ExtraLife();
            break;
        case 4:
            this.ShieldDactyl();
            debug("Shield powerup activated");
            debug("player.shieldCounter is now: " + player.shieldCounter.toString());
            break;
        default:
          break;
    };

}

PowerUp.prototype.draw = function() {
    ctx.drawImage(this.sprite, this.x, this.y);
}