/*
	Class File: Projectile.js	
	Inherits from: GameObject
		
	Method Signatures:
	
*/

/*---------------------------------------
  PLAYER PROJECTILE
---------------------------------------*/
function PlayerProjectile(x,y,dx,dy) {
  
  this.x = x;
  this.y = y;

  this.dx = dx;
  this.dy = dy;

  if (player.RageDactyl) {
    this.sprite.src = "images/player/playerprojectilerage.png";
    this.height = 50;
    this.width = 45;
  } else {
    this.sprite.src = "images/player/playerprojectile.png";
    this.height = 50;
    this.width = 30;
  }
}

PlayerProjectile.prototype = new GameObject(); // Inherit from Projectile
PlayerProjectile.prototype.constructor = PlayerProjectile; // Correct the constructor to use this, not Projectile


/*---------------------------------------
  SCIENTIST PROJECTILE
---------------------------------------*/
function ScientistProjectile(x,y,dx,dy) {

  this.x = x;
  this.y = y;

  this.dx = dx;
  this.dy = dy;

  this.sprite.src = "images/enemy/scientistProjectile.png";
  this.height = 25;
  this.width = 25;
}

ScientistProjectile.prototype = new GameObject(); // Inherit from Projectile
ScientistProjectile.prototype.constructor = ScientistProjectile; // Correct the constructor to use this, not Projectile


/*---------------------------------------
  HUNTER PROJECTILE
---------------------------------------*/
function HunterProjectile(x,y,dx,dy) {

  this.x = x;
  this.y = y;

  this.dx = dx;
  this.dy = dy;

  this.sprite.src = "images/enemy/hunterProjectile.png";
  this.height = 25;
  this.width = 25;
}

HunterProjectile.prototype = new GameObject(); // Inherit from Projectile
HunterProjectile.prototype.constructor = HunterProjectile; // Correct the constructor to use this, not Projectile
