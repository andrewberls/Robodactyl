// Place any general functions in object1 file
// They will be available in all following files

// Convenience method
function log(msg) { console.log(msg); }

function randomFromTo(from, to){
  return Math.floor(Math.random() * (to - from + 1) + from);
}

//tests to see if object1 and object2 are colliding
function IsColliding(object1, object2) {
        //front collision
	if ((object1.x + object1.width + object1.dx >= object2.x) && (((object1.y >= object2.y) && (object1.y <= object2.y + object2.height)) || 
		((object1.y + object1.height >= object2.y)&&(object1.y + object1.height <= object2.y + object2.height)))) {
			return true;
	}   //bottom collision
	else if ((object1.y + object1.dy <= object2.y + object2.height) && (((object1.x + object1.width >= object2.x) && (object1.x <= object2.x + object2.width)) ||
		((object1.x >= object2.x) && (object1.x <= object2.x + object2.width)))) {
			return true;
	}   //top collision
	else if ((object1.y + object1.dy + object1.height >= object2.y) && (((object1.x + object1.width >= object2.x) && (object1.x <= object2.x + object2.width)) ||
		((object1.x >= object2.x) && (object1.x <= object2.x + object2.width)))) {
			return true;
	}   //back collision
	else if ((object1.x + object1.dx <= object2.x + object2.width) && (((object1.y >= object2.y) && (object1.y <= object2.y + object2.height)) ||
		((object1.y + object1.height >= object2.y) && (object1.y <= object2.y)))){
			return true;
	}
	else 
			return false; //no collision
}


function intersecting(a, b) {
/*
Takes two GameObjects and returns true if they're overlapping.
Adapted from http://stackoverflow.com/questions/2440377/javascript-collision-detection
*/
  
  return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height))   ||
        ((a.x + a.width) < b.x)    ||
        (a.x > (b.x + b.width))
    );
}



/*
// Workarounds for setInterval 'object1' context errors

// 1.) Define variable to hold 'object1' context
var self = object1;
setInterval(function() {log(self)}, 1000)


// 2.) Funky closure shit
object1.interval = setInterval(
  (function(self) {
    return function() {
      self.retrieve_rate();
    }
  })(object1), 1000);
*/