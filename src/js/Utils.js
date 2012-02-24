// Place any general purpose functions here
// They will be available in all following files

function debug(msg) {
    // Log a message to the console only if var DEBUG_MODE
    // set in Init.js is true
    // Ex usage: debug("this is a message")
    
    if (DEBUG_MODE === true) {
        console.log(msg);
    }
}

function randomFromTo(from, to){
    // Generate a random integer within range, including bounds
    return Math.floor(Math.random() * (to - from + 1) + from);
}

Array.prototype.remove = function(item) {
    
  // Extend the array object to add a remove() method
  // Ex usage: collectables.remove(this);

    for(var i=this.length-1; i >= 0; i--){
        if(this[i] == item){
            this.splice(i,1);
        }
    }
    
}

function defined(item) {
    // Returns true if a given object is defined
    // Ex usage: if ( defined(item)  ) {...}
    return !(typeof item === "undefined");
}

function intersecting(a, b) {
    
    // Takes two GameObjects and returns true if they're overlapping.
    // Adapted from http://stackoverflow.com/questions/2440377/javascript-collision-detection
    // Ex usage: if ( intersecting(enemy, player) ) {...}

    if (defined(a) && defined(b)) {
        return !(
            ((a.y + a.height) < (b.y)) ||
            (a.y > (b.y + b.height))   ||
            ((a.x + a.width) < b.x)    ||
            (a.x > (b.x + b.width))
        );
    }
    
}