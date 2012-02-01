/*
	File: Game.js
	Description: Initialize global variables and handle main game loops + controllers
*/


//---------- GLOBAL VARIABLES

//---------- INITIALIZE CTX VARS
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var gameLoop; // Global reference to the game loop


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

	ctx.clearRect(0,0, canvas.width, canvas.height); // Clear the canvas every frame
	
	player.move();
	player.draw();
}

function init() {	
	// Start the main game draw loop
	gameLoop = setInterval(draw, 20); 
}

window.onload = init; // Call the init function immediately when the page loads.