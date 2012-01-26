//---------- GLOBAL VARIABLES

//---------- INITIALIZE CTX VARS
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var gameLoop; // Global reference to the game loop


//------------------------------------------------------------------------------------
//---------- INITIALIZE OBJECT MANAGER
// This approach needs reworking
// For example, TileManager is set up to add self to gameObjects, but that a bad approach
// Separate into two levels: background/tiles + gameobjects (in that order)
var gameObjects = [];
//------------------------------------------------------------------------------------


//---------- SOUND VARIABLES
var bombSound = new Audio("audio/bomb.wav");
var explodeSound = new Audio("audio/explode.wav");


//---------- BUFFER RENDERING
// An in-memory back buffer used for double rendering
buffer = document.createElement('canvas');
buffer.width = canvas.width;
buffer.height = canvas.height;
buffer_ctx = buffer.getContext('2d');

						
//---------- INITIALIZE OBJECT VARS
// Object constructors automatically add selves to gameObjects[]
var background = new Background();
var tileManager = new TileManager();
var player = new Player();
var bomb = new Bomb();		


//---------- CONTROLLERS + LOOPS
function draw() {
	// First clear both the buffer and the screen
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	buffer_ctx.clearRect(0, 0, buffer.width, buffer.height);		
	
	// Loop through and update/draw all registered gameObjects
	for (var i=0; i<gameObjects.length; i++) {
		// This seems like a fairly blunt and logic-independent approach...
		if (gameObjects[i].move) { gameObjects[i].move(); } // Move if object has a move() method
		if (gameObjects[i].draw) { gameObjects[i].draw(); } // Draw if object has a draw method()
	}
	
	// After the buffer has been loaded, draw it to the screen
	ctx.drawImage(buffer, 0, 0);
}

function init() {
	// Set the main draw loop
	gameLoop = setInterval(draw, 20);	
}

function endGame() {
	clearInterval(gameLoop);
	//buffer_ctx.clearRect(0, 0, buffer.width, buffer.height);
	//buffer_ctx.fillText('The End!',canvas.width/2,canvas.height/2);
	
}

window.onload = init;