/*
	File: Menu.js
	Description: Render a menu with choices
	
*/

function Menu(options, callback) {
	ctx.font = "50px Times New Roman"
	
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

Menu.prototype.renderText = function() {
	ctx.save();	
	
	this.normalizeSelection();
	
	for (var i=0; i<this.options.length; ++i) {
		var text = this.options[i];
		if (i == this.selected) {
			ctx.fillStyle = "yellow";
		} else {
			ctx.fillStyle = "white";
		}
		ctx.fillText(text, 275, C_HEIGHT/2-25);
	}
	ctx.restore();
}

Menu.prototype.execute = function(option) {
	this.callback(option);
}

Menu.prototype.draw = function() {	
	ctx.fillRect(0,0,C_WIDTH, C_HEIGHT);	
	this.renderText();
}