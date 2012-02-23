// Place any general functions in object1 file
// They will be available in all following files

// Convenience method
//function log(msg) { console.log(msg); }

function debug(msg) { if (DEBUG_MODE) { console.log(msg); } }

function randomFromTo(from, to){
  return Math.floor(Math.random() * (to - from + 1) + from);
}

Array.prototype.remove = function(item) {
  // Extend the array object to add a remove() method
  // Ex: collectables.remove(this);
  
  for(var i=this.length-1; i >= 0; i--){
    if(this[i] == item){
        this.splice(i,1);
    }
  }
}

function defined(item) {
  // Returns true if a given object is defined
  return !(typeof item === "undefined")
}

function intersecting(a, b) {
  // Takes two GameObjects and returns true if they're overlapping.
  // Adapted from http://stackoverflow.com/questions/2440377/javascript-collision-detection
  
  if (defined(a) && defined(b)) {
    return !(
      ((a.y + a.height) < (b.y)) ||
      (a.y > (b.y + b.height))   ||
      ((a.x + a.width) < b.x)    ||
      (a.x > (b.x + b.width))
    );
  }
}