/*
	File: Menu.js
	Description: Render a menu with choices
	
*/

function Menu(description, options, callback) {
  this.fontSize = "40px"; // Note this is a string - use parseInt to treat as number
	ctx.font = this.fontSize + " Times New Roman";
  this.textPadding = 20; // How much space is in between items
  ctx.textAlign = "center";
	
  this.desc = description;
	this.options = options;
	this.callback = callback;  
	this.selected = 0;
	
	menuActive = true;
	currentMenu = this;
}

Menu.prototype.normalizeSelection = function() {
	// Normalize the currently selected item so that the user
	// can continuously scroll up or down (if there are multiple options)
	
	if (this.selected >= this.options.length) {
		// Reset to beginning if scroll past end
		this.selected = 0;
	} else if (this.selected < 0) {
		// Reset to end if scroll before beginning
		this.selected = this.options.length-1;
	}
}

Menu.prototype.renderDesc = function() {
  ctx.save();	
  ctx.fillStyle = "white";
  // Slightly smaller font calculated from the base font size
  ctx.font = (parseInt(this.fontSize)/1.2) + "px Times New Roman"
  ctx.fillText(this.desc, C_MIDX, 50);
  ctx.restore();
}

Menu.prototype.renderOptions = function() {
	ctx.save();	
	
	this.normalizeSelection();
    
  var y = (C_HEIGHT - (parseInt(this.fontSize) * this.options.length))/2;
  var y_offset = 0;
  
	for (var i=0; i<this.options.length; ++i) {
    // Current selection is yellow, others are white
    var text = this.options[i];
		if (i == this.selected) {      
			ctx.fillStyle = "yellow";
		} else {
			ctx.fillStyle = "white";
		}
		ctx.fillText(text, C_MIDX, y + y_offset); // (text,x,y): this.options[i] is text
    y_offset += parseInt(this.fontSize) + this.textPadding;
	}
  
	ctx.restore();
}

Menu.prototype.execute = function(option) {
	this.callback(option);
}

Menu.prototype.draw = function() {    
	ctx.fillRect(0,0,C_WIDTH, C_HEIGHT); 
	this.renderDesc();
  this.renderOptions();
}