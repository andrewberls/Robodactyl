/*
  File: Keys.js
  Description: Track and handle all keyboard input from the user
*/


//---------- INITIALIZE KEY CODES
// Variables to hold on to key codes, making them easier to work with.
var KEY_LEFT  = 37,
	KEY_RIGHT = 39,
  	KEY_UP    = 38,
  	KEY_DOWN  = 40,
  	KEY_SPACE = 32,
  	KEY_ENTER = 13,
    KEY_ESC   = 27;
	  
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
  }
  else if (player.isAlive) {
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
				
      /*
      case KEY_ENTER:
        // Do whatever
        break;
      */

      case KEY_ESC:
        gamePaused = true;     
        break;
				
      default:
        player.dir = "";
        break;
    };

    // Prevent the arrow keys from scrolling the browser window if it's too short
    // Only applies to arrow keys and space.
    if ($.inArray(evt.keyCode, moveKeys) != -1 || evt.keyCode === KEY_SPACE) {
      evt.preventDefault();
    }
    
  }
});

$(document).keyup(function(evt) {
    // If no keys are pressed, player won't move.

    // TO DO: Let's say the player is holding left, presses up, and lets go.
    // This will stop all movement even if they're still holding left.

    if ($.inArray(evt.keyCode, moveKeys) != -1) {
        player.dir = "";
    }

});