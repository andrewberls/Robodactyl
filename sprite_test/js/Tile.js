//---------- CLASS: Tile
function Tile(x, y, typeValue) {

	this.x = x;
	this.y = y;
	
	// Tiles are defined using 30px square grid boxes
	this.width = 30;
	this.height = 30;
	
	this.left = this.x;
	this.right = this.x + this.width;
	this.top = this.y;
	this.bottom = this.y + this.height;
	
	this.typeValue = typeValue; // An int to represent tile type
	this.sprite = new Image();
	
	// Calculate the sprite source based on the typeValue
	// ALL THESE TYPEVALS/SPRITES ARE ARBITRARY AND SHOULD BE STANDARDIZED+CHANGED
	
	switch(this.typeValue) {
	case 0:
		this.sprite.src = "";
		break;
	case 1:
		this.sprite.src = "images/metal1.gif";
		break;
	case 2:
		this.sprite.src = "images/metal2.gif";
		break;
	
	// Other tile types here
	
	default:
		// Backup if not caught by case 0
		this.sprite.src = "";
		break;
	};
}

Tile.prototype.draw = function() {
	// if (typevalue) logic is now handled in TileManager
	
	// Draw edge lines for x/y space testing
	//buffer_ctx.save();		
	//buffer_ctx.fillStyle = "#fb000d"; buffer_ctx.fillRect(this.x, 0, 1, canvas.height); // left
	//buffer_ctx.fillStyle = "#0fc"; buffer_ctx.fillRect(this.x+this.width, 0, 1, canvas.height); // right		
	//buffer_ctx.fillStyle = "orange"; buffer_ctx.fillRect(0, this.y, canvas.width, 1); // top		
	//buffer_ctx.fillStyle = "yellow"; buffer_ctx.fillRect(0, this.y+this.height, canvas.width, 1); // bottom			
	//buffer_ctx.restore();
					
	buffer_ctx.drawImage(this.sprite, this.x, this.y);	
}

Tile.prototype.move = function() {
	// unless (endgame logic?) ...
	
	this.x -= 0.4; // Slightly faster than background for nice parallax effect
	
	return this; // for chaining, ex tile.move().draw();
}