// home - main menu
// line - tracing a line exercise
// pinpoint - pinpoint exercise
// quick - quick reaction exercise
let gameState = "home";

let backgroundImg;

let buttonColor = [255, 0, 0];
let textColor = [10, 10, 10];
let standardButtonWidth;
let standardButtonHeight;

function preload() {
	backgroundImg = loadImage('assets/1280x720.png');
  }

function setup() {
	createCanvas(1280, 720);

	standardButtonWidth = width/3;
	standardButtonHeight = height/10;

	home = new Home(standardButtonWidth, standardButtonHeight);

	home.addButton("quick", "Quick Reaction", buttonColor, textColor, width/2 - (home.buttonWidth/2), 3 * (height/8));
	home.addButton("line", "Line Tracing", buttonColor, textColor, width/2 - (home.buttonWidth/2), 4 * (height/8));
	home.addButton("pinpoint", "Pinpoint", buttonColor, textColor, width/2 - (home.buttonWidth/2), 5 * (height/8));
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
	
}

