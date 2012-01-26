//---------- CLASS: TileManager
function TileManager() {

	// Add to the gameObject manager
	// See game.js - this is a bad approach and needs to change
	gameObjects.push(this);
		
	this.tiles = [];
	
	// Initialize as 2d array
	for (var i=0; i<15; i++) { 
		this.tiles[i] = [];
	}		
	
	//------------------------------------------------------------------------------------	
	//  INITIALIZE WITH FILLER VALUES
	// THIS SHOULD BE HARD-INITIALIZED USING A PRE-GENERATED DATA ARAY
	
	for (var i=0; i<15; i++) {
		for (var j=0; j<20; j++) {
		
			var tile1 = new Tile(j*30, i*30, 1);
			var tile2 = new Tile(j*30, i*30, 2);
			var tileNull = new Tile(j*30, i*30, 0);
						
			// Checkerboard
			if (i === 14) { this.tiles[i].push(tile2); }
			else if (i%3==0 && j%3 == 0) { this.tiles[i].push(tile1); }
			else { this.tiles[i].push(tileNull); }
			
						
			/*
			// Single tile
			if (i === 5 && j === 10) { this.tiles[i].push(tile1); } 
			//else if (i === 14) { this.tiles[i].push(tile2); } // Floor
			else { this.tiles[i].push(tileNull); }
			*/
						
		}
	}
	//------------------------------------------------------------------------------------
	
	//if (debug_mode) { this.log(); }
}

TileManager.prototype.log = function() {
	/*
		Print the typeValues each tile in the Tile array to the console
		(formatted as 2d array init purely for presentational purposes). Ex:		
		var tiles = [
			[1,2,3,4],
			[5,6,7,8],
			[6,4,7,2]
		];
	*/
	
	log("tiles = [");
	
	var row = ""; // Var to hold contents of each row
	
	for (var i=0; i<15; i++) {
	
		row += "  [ ";
	
		for (var j=0; j<20; j++) {
		
			var type = this.tiles[i][j].typeValue;
			
			// Print a 3-digit representation of the stored int value
			/*if ( type<10 ) { row += "00" + type; }
			else if ( type<100 ) { row += "0" + type; }
			else { row += type; }*/
			
			// Print a 2-digit representation of the stored int value					
			if ( type<10) { row += "0" + type; }
			else { row += type;	}
						
			// Add a space between elements, and a comma if necessary
			if (j != 19) { row += ", "; } 
			else { row += " "; }			
		}
		
		// Put a comma after the row array if necessary
		if (i != 14) { row += "],"; }
		else {  row+= "]"; }
		
		// Dump the row and reset
		log(row);
		row = "";	
	}
	
	log("];");
}

TileManager.prototype.draw = function() {
	// Loop through each stored tile and draw to the back buffer
	
	for (var i=0; i<15; i++) {
		for (var j=0; j<20; j++) {
			if (this.tiles[i][j].typeValue) {
				this.tiles[i][j].move().draw(); // Is this any better/faster?
			}
		}
	}
}

/*TileManager.prototype.move = function() {
	// TileManager is stored in the gameObjects list, which would call
	// TileManager.move(), which in turn just loops through
	// the tiles and calls their move method.
	// For now, I've chained this in the draw method, not sure
	// if it's more semantic or efficient yet
	
	// Loop through each stored tile and move	
	for (var i=0; i<15; i++) {
		for (var j=0; j<20; j++) {			
			this.tiles[i][j].move();
		}
	}
}*/