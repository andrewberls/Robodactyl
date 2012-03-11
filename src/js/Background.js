/*
    Class File: Background.js
    Inherits from: GameObject
    Description: Handles the game background (lab, jungle, etc)
    
    Method Signatures:
        Background()
        hard_reset();
        move()	
*/

function Background() {
    
    this.width = 3900; // 5 screens to start
  
    // This needs to be parameterized by leve or something
    this.sprite.src = "images/bg/lvl1/lvl1.jpg"; // lvl1_debug.png
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