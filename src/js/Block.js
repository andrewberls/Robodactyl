/*
    Class File: Block.js
    Inherits from: GameObject
    Description: A block object that the player can collide with
        Running into a block kills the player.
		
    Method Signatures:
        Block(x,y)
*/


/*---------------------------------------
  GENERIC BLOCK
---------------------------------------*/
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


/*---------------------------------------
  TURRET BLOCK
---------------------------------------*/
function Block_Turret(x,y) {
  
    this.x = x;
    this.y = y;
  
    this.width  = 2 * TILE_SIZE;
    this.height = 2 * TILE_SIZE;

    this.sprite = new Image();
    this.sprite.src = "";                      

    blocks.push(this); // Add self to manager array
    
}