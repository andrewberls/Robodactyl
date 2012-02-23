/*
    Class File: Block.js
    Inherits from: GameObject
    Attributes:
		
    Method Signatures:
        move()
        draw()
*/

function Block(x,y) {
    this.x = x;
    this.y = y;
  
    this.width  = 2 * TILE_SIZE;
    this.height = 2 * TILE_SIZE;

    switch (randomFromTo(2,3)) {
        case 2:
            this.sprite.src = "images/block/block2.png";
            break;
        case 3:
            this.sprite.src = "images/block/block3.png";
            break;        
    };

    blocks.push(this); // Add self to manager array
}

Block.prototype = new GameObject();
Block.prototype.constructor = Block;

Block.prototype.move = function() {}

Block.prototype.draw = function() {
    ctx.save();
    ctx.fillStyle = "orange";
    //ctx.fillRect(this.x, this.y, this.width, this.height); // Box model
    ctx.drawImage(this.sprite, this.x, this.y);
    ctx.restore();
}