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
	this.dx = 0;
	this.dy = 0;
	
	// Box model
	this.width = 0;
	this.height = 0;      
	
	// Sprite
	this.sprite = new Image();
	this.sprite.src = "";  
	
}