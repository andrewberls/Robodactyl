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
		SetLocation()
		draw()
	
*/

function PowerUp() {

	this.x = 10;
	this.y = 10;
	
	this.height = 10;
	this.width = 10;
	
	this.random_powerup;  //Stores randomly generated key for Power-Up identity
	
	ChoosePowerup(); //Picks which Power-Up to use and assigns a skin
	SetLocation();	//Picks a random location for the Power-Up to spawn
	
	
	
	collectibles.push(this);
	}
	
PowerUp.prototype = new GameObject(); // Inherit from GameObject
PowerUp.prototype.constructor = PowerUp; // Correct the constructor to use this, not GameObject

PowerUp.prototype.SetLocation = function() {

	//Randomly sets location of PowerUp on the screen
	
	this.x = randomFromTo(10,100);
	this.y = randomFromTo(10,100);
	
	}
	
	
PowerUp.prototype.RageDactyl = function(player) {
	
	//Running into enemies kills them, no player damage. Lasts 10 seconds.
	
	player.sprite.src = "images/player/rage.png";
	player.RageDactyl = true;
	SetTimeout(function() {
		player.rageDactyl = false;
		player.sprite.src = "images/player/robo.png";
	}, 10000);
	}
	
PowerUp.prototype.ApplyHealth = function(player) {

	//Restores one heart of health to the player
	
	player.health += 1;
	
	}
	
PowerUp.prototype.ExtraLife = function(player) {

	//Grants one extra life to the player
	
	player.lives += 1;
	
	}

PowerUp.prototype.ShieldDactyl = function(player) {

	//Robodactyl gets awesome bubble shield
	
	player.shieldCounter = 2;
	
	}
	
PowerUp.prototype.ChoosePowerup = function() {

	//Chooses a random powerup to spawn
	
	this.random_powerup = randomFromTo(1,4);
	
	switch(this.random_powerup) {
		case 1:
			this.sprite.src = "images/rage.png"; 
			break;
		case 2:
			this.sprite.src = "images/health.png";
			break;
		case 3:
			this.sprite.src = "images/life.png"; 
			break;
		case 4:
			this.sprite.src = "images/shield.png";
			break;
		default:
			break;
		}
	}
	
PowerUp.prototype.ActivatePowerup = function() {

	//Endows Robodactyl with Powerup when collision is detected
	
	switch(this.random_powerup) {
		case 1:
			RageDactyl(player); 
			break;
		case 2:
			ApplyHealth(player);
			break;
		case 3:
			ExtraLife(player); 
			break;
		case 4:
			ShieldDactyl(player);
			break;
		default:
			break;
		}
		
	}
	
	
	
PowerUp.prototype.draw = function() {

	//draws the powerup at a random location in the game
	
	ctx.drawImage(this.sprite, this.x, this.y);
	}
		

			
		
	
	
	
	
	
	

	