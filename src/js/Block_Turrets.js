/*
    Class File: Block_Turret.js
    Inherits from: GameObject
    Description: A block object that the player can collide with
        Running into a block kills the player.
		
    Method Signatures:
        Block(x,y)
        move()
        draw()
*/

function Block_Turret(x,y) {
  
    this.x = x;
    this.y = y;
  
    this.width  = 2 * TILE_SIZE;
    this.height = 2 * TILE_SIZE;

    this.sprite.src = "images/block/block3.png";                      

    blocks.push(this); // Add self to manager array
    
}

Block_Turret.prototype = new Block();
Block_Turret.prototype.constructor = Block_Turret;

Block._Turret.draw = function() {
    // Draw sprite to the canvas
    
    //ctx.fillRect(this.x, this.y, this.width, this.height); // Box model
    ctx.drawImage(this.sprite, this.x, this.y);
    
}