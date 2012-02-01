//---------- INITIALIZE KEY CODES
var KEY_LEFT = 37,
	  KEY_RIGHT = 39,
	  KEY_UP = 38,
	  KEY_DOWN = 40,
	  KEY_SPACE = 32,
	  KEY_ENTER = 13;
	  
var moveKeys = [KEY_LEFT, KEY_RIGHT, KEY_UP, KEY_DOWN];


//---------- TRACK KEYPRESSES
$(document).keydown(function(evt) {
			
	switch(evt.keyCode) {
		case KEY_LEFT:
			player.dir = "LEFT";
			break;
			
		case KEY_RIGHT:
			player.dir = "RIGHT";
			break;
			
		case KEY_UP:
			player.dir = "UP";
			break;
			
		case KEY_DOWN:
			player.dir = "DOWN";
			break;
			
		case KEY_SPACE:
			if (debug_mode) { log("Space pressed. Calling bomb.drop()"); }					
			bomb.drop();
			break;
			
		case KEY_ENTER: // Trigger a debug logger
			//player.dumpAttributes();
			break;
			
		default:
			player.dir = "";
			break;
	};
});

$(document).keyup(function(evt) {
	// If no keys are pressed, player won't move								
	if ($.inArray(evt.keyCode, moveKeys) != -1) {			
		player.dir = "";
	}
});