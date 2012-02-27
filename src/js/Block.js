/*
    Class File: Block.js
    Inherits from: GameObject
    Description: A block object that the player can collide with
        Running into a block kills the player.
		
    Method Signatures:
        Block(x,y)
*/

function Block(x,y) {
  
    this.x = x;
    this.y = y;
  
    this.width  = 2 * TILE_SIZE;
    this.height = 2 * TILE_SIZE;

    this.sprite.src = "images/block/block3.png";                      

    blocks.push(this); // Add self to manager array
    
}

Block.prototype = new GameObject();
Block.prototype.constructor = Block;