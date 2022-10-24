// home - main menu
// hap - holding pencil exercise
// tc - throwing and catching exercise
let gameState = "home";

let backgroundImg;

function preload() {
	backgroundImg = loadImage('assets/1280x720.png');
  }

function setup() {
	createCanvas(1280, 720);

	home = new Home();
	home.addButton("button", [255, 0, 0], 200, 200, 50, 30);
}

function draw() {
  	// background(220);
	image(backgroundImg, 0, 0); 

	if (gameState == "home") {
		home.draw();
	} 
	else if (gameState == "hap") {
		home.draw();
	} 
	else if (gameState == "tc") {
		home.draw();
	} 
}

function mouseClicked() {}


// drawing the holding a pencil exercise screen
function drawHAP() {}

// drawing the throwing and catching exercise screen
function drawTC() {}

