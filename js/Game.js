var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gameLoop;
var x = 0;
var y = 0;

function draw() {
	ctx.clearRect(0,0, canvas.width, canvas.height); // Clear the canvas every frame
	
	player.move();
	player.draw();
}

function init() {
	gameLoop = setInterval(draw, 20);
}

window.onload = init;