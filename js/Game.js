/*
	File: Game.js
	Description: Initialize global variables and handle main game loops + controllers
*/


//---------- GLOBAL VARIABLES

//---------- INITIALIZE CTX VARS
/*
	Note:
	var x;
	var y;
	is the same as var x, y;
	That's what's going on here.
*/
var canvas = document.getElementById('canvas'), // Hook to the HTML element
	  ctx = canvas.getContext('2d'), // Main context variable
	  C_WIDTH = canvas.width, // Stored width/height references
	  C_HEIGHT = canvas.height,
	  gameLoop; // Global reference to the game loop


//---------- INITIALIZE OBJECT VARS
var player = new Player();


//---------- CONTROLLERS + LOOPS
function draw() {
	/*
		This master function gets called every 20ms by the gameLoop interval.
		Its purpose is to loop through the game objects and call their move and draw methods
		In other words, actual rendering of sprites to the screen is handled by the individual objects,
		not here.
	*/

	ctx.clearRect(0,0, C_WIDTH, C_HEIGHT); // Clear the canvas every frame
	
	
	/* 
		Can you imagine that calling each objects methods individually gets
		inefficient once we have a bunch of objects? This will change eventually
	*/
	
	player.move();
	player.draw();
}

function init() {	
	// Start the main game draw loop
	gameLoop = setInterval(draw, 20); 
}

window.onload = init; // Call the init function immediately when the page loads.