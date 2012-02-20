/*
	Class File: PowerUp.js	
	Inherits from: GameObject
	Attributes:
		Type of Power-Up
		//Height/Width
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

function PowerUp(x,y) {

	this.x = x;
	this.y = y;
	
	//this.height = 10;
	//this.width = 10;
	
	//this.random_powerup;  //Stores randomly generated key for Power-Up identity
	
	this.ChoosePowerup(); //Picks which Power-Up to use and assigns a skin
  
	collectables.push(this);
}
	
PowerUp.prototype = new GameObject(); // Inherit from GameObject
PowerUp.prototype.constructor = PowerUp; // Correct the constructor to use this, not GameObject
	
	
PowerUp.prototype.RageDactyl = function() {
	//Running into enemies kills them, no player damage. Lasts 10 seconds.
  player.RageDactyl = true;
  
	if (player.dir === "RIGHT") {
    player.sprite.src = "images/player/rage_right.png";
  } else {
    player.sprite.src = "images/player/rage_left.png";
  }
  
	setTimeout(function() {
    // Disable RageDactyl after 10 seconds
		player.RageDactyl = false;
    //if (player.dir === "RIGHT") {
    //  player.sprite.src = "images/player/robo_right.png";
    //} else {
    //  player.sprite.src = "images/player/robo_left.png";
    //}		
	}, 10000);
	
	debug("BEAST MODE ENGAGED");
}
	
PowerUp.prototype.ApplyHealth = function() {
	//Restores one heart of health to the player
  if (player.health < player.max_health) {
    // Max of 5 health
    player.health++; 
  }	
}
	
PowerUp.prototype.ExtraLife = function() {
	//Grants one extra life to the player
  if (player.lives < 3) {
    // Max of 3 lives
    player.lives++;
  }
}

PowerUp.prototype.ShieldDactyl = function() {
	//Robodactyl gets awesome bubble shield	
	player.shieldCounter = 2;
  //player.sprite.src = "";
}
	
PowerUp.prototype.ChoosePowerup = function() {
	//Chooses a random powerup to spawn
	
	this.random_powerup = randomFromTo(1,4);
	
	switch(this.random_powerup) {
    
    /*
      1: RageDactyl
      2: +1 Health
      3: Extra Life
      4: Shield
    */
    
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
		}
}
	
PowerUp.prototype.ActivatePowerup = function() {
	//Endows Robodactyl with Powerup when collision is detected
	
	switch(this.random_powerup) {
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
		}
		
	}

PowerUp.prototype.draw = function() {	
	ctx.drawImage(this.sprite, this.x, this.y);
}