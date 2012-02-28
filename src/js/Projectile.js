/*
	Class File: Projectile.js	
	Inherits from: GameObject
		
	Method Signatures:
	
*/

function Projectile(x,y,dx,dy,src) {
    
    this.x = x;
    this.y = y;

    this.dx = dx;
    this.dy = dy;    

    this.src = src;


    this.sprite = new Image();
    if (this.src === 0) {
        // Player projectile
        if (player.RageDactyl) {
            this.sprite.src = "images/player/playerprojectilerage.png";
            this.height = 50;
            this.width = 45;
        } else {
            this.sprite.src = "images/player/playerprojectile.png";
            this.height = 50;
            this.width = 30;
        }
    } else {
        // Enemy projectile
        this.sprite.src = "images/enemy/enemyprojectile.png";
        this.height = 25;
        this.width = 25;
    }
  
}

Projectile.prototype = new GameObject(); // Inherit from GameObject
Projectile.prototype.constructor = Projectile; // Correct the constructor to use this, not GameObject