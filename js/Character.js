/*
	Class File: Character.js	
	Inherits from: GameObject
	Attributes:
			
	Method Signatures:
		
	
*/

function Character() {}

Character.prototype = new GameObject(); // Inherit from GameObject
Character.prototype.constructor = Character; // Correct the constructor to use this, not GameObject

