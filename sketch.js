// home - main menu
// hap - holding pencil exercise
// tc - throwing and catching exercise
let gameState = "home";

let backgroundImg;

let buttonColor = [255, 0, 0]
let textColor = [10, 10, 10]
let standardButtonWidth = width/4;
let standardButtonHeight = height/10;

function preload() {
	backgroundImg = loadImage('assets/1280x720.png');
  }

function setup() {
	createCanvas(1280, 720);

	home = new Home(standardButtonWidth, standardButtonHeight);
	home.addButton("Line Tracing", buttonColor, textColor, width/2 - (home.buttonWidth/2), 4 * (height/8));
	home.addButton("Pinpoint", buttonColor, textColor, width/2 - (home.buttonWidth/2), 5 * (height/8));
	home.addButton("Quick Reaction", buttonColor, textColor, width/2 - (home.buttonWidth/2), 6 * (height/8));
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

function mouseClicked() {
	if (gameState == "home") {
		home.checkButtons(mouseX, mouseY)
	} 
	else if (gameState == "hap") {
		home.draw();
	} 
	else if (gameState == "tc") {
		home.draw();
	} 
}


// drawing the holding a pencil exercise screen
function drawHAP() {}

// drawing the throwing and catching exercise screen
function drawTC() {}

