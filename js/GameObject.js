/*
	Class File: GameObject.js	
	Inherits from: 
	Attributes:
		x
		y		
		dx
		dy
		height
		width
	
	Method Signatures:
    inspect()
	  move()
    in()
*/

function GameObject() {	

	// Position
	this.x = 0;
	this.y = 0;
	
	// Direction
  // Set dx to a default value so that all objects move
  // at the same rate
	this.dx = 0;  
	this.dy = 0;
	
	// Box model
	this.width = 0;
	this.height = 0;      
	
	// Sprite
	this.sprite = new Image();
	this.sprite.src = "";  
	
}

GameObject.prototype.inspect = function() {
  // Log the properties and values of an object for debugging
  
  var output = '';
	for (property in this) {		
		if (!(this[property] instanceof Function)) { // Don't log functions
			output += property + ': ' + this[property]+';\n';
		}
	}
	console.log(output);
}

GameObject.prototype.move = function() {
  //if () {
    this.x += this.dx;
    this.y += this.dy;
  //}
  
}

GameObject.prototype.in = function(array) {
  // Return true if a given GameObject is in an array
  // Ex: powerup.in(collectables) -> returns true or false
  return ($.inArray(this, array) != -1) ? true : false;
}