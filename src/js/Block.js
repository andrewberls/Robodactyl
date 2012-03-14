/*
    Class File: Block.js
    Inherits from: GameObject
    Description: A block object that the player can collide with
        Running into a block kills the player.
		
    Method Signatures:
        Block(x,y)
*/


/*---------------------------------------
  (L1) CAUTION BLOCK
---------------------------------------*/
function Caution_Block(x,y) {
  
    this.x = x;
    this.y = y;
  
    this.width  = 2 * TILE_SIZE;
    this.height = 2 * TILE_SIZE;

    this.sprite.src = "images/block/block3.png";                      

    blocks.push(this); // Add self to manager array
    
}

Caution_Block.prototype = new GameObject();
Caution_Block.prototype.constructor = Caution_Block;


/*---------------------------------------
  (L2) TREE BLOCK
---------------------------------------*/
function Tree_Block(x,y) {
    // Leafy green block

    this.x = x;
    this.y = y;
  
    this.width  = 2 * TILE_SIZE;
    this.height = 2 * TILE_SIZE;

    this.sprite.src = "images/block/block4.png";                      

    blocks.push(this); // Add self to manager array
}

Tree_Block.prototype = new GameObject();
Tree_Block.prototype.constructor = Tree_Block;


/*---------------------------------------
  (L2) TREE
---------------------------------------*/
function Tree(x,y) {
    // Actual tree (huge block)

    this.x = x;
    this.y = y;
  
    this.width  = 5 * TILE_SIZE;
    this.height = 6 * TILE_SIZE;

    this.sprite.src = "images/block/block5.png";                      

    blocks.push(this); // Add self to manager array
}

Tree.prototype = new GameObject();
Tree.prototype.constructor = Tree;