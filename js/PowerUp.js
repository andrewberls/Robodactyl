/*
	Class File: PowerUp.js	
	Inherits from: GameObject
	Attributes:
		
		
	Method Signatures:
		RandomLocation()
		RageDactyl()
		ShieldDactyl()
		ApplyHealth()
		ExtraHealth()
		draw()
	
*/

function PowerUp() {

	this.x = 10;
	this.y = 10;
	
	this.height = 10;
	this.width = 10;
	
	}
	
PowerUp.prototype.RageDactyl = function(player) {
	
	//Running into enemies kills them, no player damage. Lasts 10 seconds.
	this.sprite.src = "images/player/rage.png";
	this.RageDactyl = true;
	SetTimeout(function() {
		this.rageDactyl = false;
		this.sprite.src = "images/player/robo.png";
	}, 10000);
	
PowerUp.prototype.ApplyHealth = function(player) {

	//Restores one heart of health to the player
	
	player.health += 1;
	
	}
	
PowerUp.prototype.ExtraHealth = function(player) {

	//Grants one extra life to the player
	
	player.lives += 1;
	
	}

PowerUp.prototype.ShieldDactyl = function(player) {

	//Robodactyl gets awesome bubble shield
	
	player.shieldCounter = 2;
	
	}
		
	
	
	
	
	
	

	