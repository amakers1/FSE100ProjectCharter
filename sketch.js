// home - main menu
// line - tracing a line exercise
// pinpoint - pinpoint exercise
// quick - quick reaction exercise
let gameState = "home";
let exerciseStart = false;

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
}

function draw() {
  	// background(220);
	image(backgroundImg, 0, 0); 

	if (gameState == "home") {
		home();
	} 
	else if (gameState == "line") {
		lineTracingExercise();
	} 
	else if (gameState == "pinpoint") {
		pinpointExercise.draw();
	} 
	else if (gameState == "quick") {
		quickReactionsExercise();
	} 
}

function mouseClicked() {
	
}

