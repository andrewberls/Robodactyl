//---------- GLOBAL VARIABLES

//---------- INITIALIZE CTX VARS
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var gameLoop; // Global reference to the game loop


//---------- INITIALIZE OBJECT MANAGER
var gameObjects = [];


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
	
	// Where to put background and tile manager?
	// Separate calls or tileManager called by background.draw()?	
	
	// Loop through and update/draw all registered gameObjects
	for (var i=0; i<gameObjects.length; i++) {
		if (gameObjects[i].move) { gameObjects[i].move(); }
		if (gameObjects[i].draw) { gameObjects[i].draw(); }
	}
	
	// Render the buffer to the screen
	ctx.drawImage(buffer, 0, 0);
}

function init() {
	// Initialize the main draw loop
	gameLoop = setInterval(draw, 20);	
}

function endGame() {
	clearInterval(gameLoop);
	//buffer_ctx.clearRect(0, 0, buffer.width, buffer.height);
	//buffer_ctx.fillText('The End!',canvas.width/2,canvas.height/2);
	
}

window.onload = init;