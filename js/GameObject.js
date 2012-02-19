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

GameObject.prototype.in = function(array) {
  // Return true if a given GameObject is in an array
  // Ex: powerup.in(collectables) -> returns true or false
  return ($.inArray(this, array) != -1) ? true : false;
}