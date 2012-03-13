/*
    Class File: Background.js
    Inherits from: GameObject
    Description: Handles the game background (lab, jungle, etc)
    
    Method Signatures:
        Background(level)
        hard_reset();
        move()	
*/

function Background(level) {
    
    this.width = 3900; // 5 screens * 780px
  
    switch(level) {
        case 1:
            this.sprite.src = "images/bg/lvl1/lvl1.jpg"; // lvl1_debug.png
        break;
        case 2:
            //this.sprite.src = "images/bg/lvl2/lvl2.jpg"; // lvl1_debug.png
        break;
        case 3:
            //this.sprite.src = "images/bg/lvl3/lvl3.jpg"; // lvl1_debug.png
        break;

    };
    
}

Background.prototype = new GameObject(); // Inherit from GameObject
Background.prototype.constructor = Background; // Correct the constructor to use this, not GameObject

Background.prototype.hard_reset = function() {
    // For when the player restarts after a Game Over
    this.x = 0;
}

Background.prototype.move = function() {
    // Scroll the background and stop when we reach the end of the image
    
    if (Math.abs(this.x) <= this.width-C_WIDTH) {
        this.x += this.dx;
    }

}