/*
	Class File: Projectile.js	
	Inherits from: GameObject
		
	Method Signatures:
	
*/

/*---------------------------------------
  GENERIC PROJECTILE
---------------------------------------*/
function Projectile(x,y,dx,dy) {
    
    this.x = x;
    this.y = y;

    this.dx = dx;
    this.dy = dy;

    this.sprite = new Image();  
}

Projectile.prototype = new GameObject(); // Inherit from GameObject
Projectile.prototype.constructor = Projectile; // Correct the constructor to use this, not GameObject


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

PlayerProjectile.prototype = new Projectile(); // Inherit from Projectile
PlayerProjectile.prototype.constructor = PlayerProjectile; // Correct the constructor to use this, not Projectile


/*---------------------------------------
  SCIENTIST PROJECTILE
---------------------------------------*/
function ScientistProjectile(x,y,dx,dy) {

  this.x = x;
  this.y = y;

  this.dx = dx;
  this.dy = dy;

  this.sprite.src = "images/enemy/enemyprojectile.png";
  this.height = 25;
  this.width = 25;
}

ScientistProjectile.prototype = new Projectile(); // Inherit from Projectile
ScientistProjectile.prototype.constructor = ScientistProjectile; // Correct the constructor to use this, not Projectile


/*---------------------------------------
  HUNTER PROJECTILE
---------------------------------------*/
/*
function HunterProjectile(x,y,dx,dy) {

  this.x = x;
  this.y = y;

  this.dx = dx;
  this.dy = dy;

  this.sprite.src = "images/enemy/hunterprojectile.png";
  this.height = 25;
  this.width = 25;
}

HunterProjectile.prototype = new Projectile(); // Inherit from Projectile
HunterProjectile.prototype.constructor = HunterProjectile; // Correct the constructor to use this, not Projectile
*/