/*
	File: Keys.js
	Description: Track and handle all keyboard input from the user
*/


//---------- INITIALIZE KEY CODES
// Variables to hold on to key codes, making them easier to work with.
var KEY_LEFT = 37,
	  KEY_RIGHT = 39,
	  KEY_UP = 38,
	  KEY_DOWN = 40,
	  KEY_SPACE = 32,
	  KEY_ENTER = 13,
    KEY_ESC = 27;
	  
// An array of keys that are used for movement (as opposed to attacking, etc)
// This is explained/used in the keyup() function below.
var moveKeys = [KEY_LEFT, KEY_RIGHT, KEY_UP, KEY_DOWN];


//---------- TRACK KEYPRESSES
$(document).keydown(function(evt) {

	/*
		Every time a key is pressed, switch through its keyCode.
		If it matches one our predefined keys (ex arrow keys or spacebar),
		take the appropriate action.
	*/
	if (menuActive) {
		/* Are we in menu mode? */
		switch(evt.keyCode) {
			case KEY_UP:
				currentMenu.selected--;				
				break;
				
			case KEY_DOWN:
				currentMenu.selected++;				
				break;
				
			case KEY_ENTER:
				currentMenu.execute(currentMenu.selected);				
				break;
		};
	} else {
		/* Gameplay mode */
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
        player.attack();                      
				break;
				
			case KEY_ENTER:
				// Do whatever
				break;
        
      case KEY_ESC:
				gamePaused = true;        
				break;
				
			default:
				player.dir = "";
				break;
		};
	}
});

$(document).keyup(function(evt) {
	// If no keys are pressed, player won't move.

	/*
		We obviously don't want the player to move if they're not pressing any keys.
		But this function gets called every time ANY key is lifted, and we only want to stop
		the player from moving if they're not pressing any of the MOVEMENT keys (defined above)
		So this checks whether or not the lifted key is one of the movement keys (inArray),
		and stops the player if it is.
		See jQuery's inArray() reference for more information.
	*/
	
	if ($.inArray(evt.keyCode, moveKeys) != -1) {			
		player.dir = "";
	}
});