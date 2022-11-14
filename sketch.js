// home - main menu
// line - tracing a line exercise
// pinpoint - pinpoint exercise
// quick - quick reaction exercise
let gameState = "pinpoint";
let exerciseStart = false;

let backButton;
let lineButton;
let pinpointButton;
let quickButton;
let resetButton;
let startButton;

let backgroundImg;

let buttonColor;
let secondaryColor;
let primaryColor;
let textColor;
let standardButtonWidth;
let standardButtonHeight;
let buttonTextSize;

let lineTracingColors;

function preload() {
	backgroundImg = loadImage('assets/1280x720.png');
  }

function setup() {
	frameRate(30);
	createCanvas(1280, 720);

	standardButtonWidth = width/3;
	standardButtonHeight = height/10;
	secondaryColor = [21, 167, 224];
	primaryColor = [16, 131, 176];
	buttonColor = color(43, 43, 43);
	textColor = color(220, 220, 220);
	buttonTextSize = "28px";

	backButton = createButton("BACK").hide();
	resetButton = createButton("RESET").hide();
	startButton = createButton("START").hide();
	quickButton = createButton("Quick Reaction").hide();
	pinpointButton = createButton("Pinpoint").hide();
	lineButton = createButton("Line Tracing").hide();

	// initialize variables for line tracing exercise
	lineTracingColors = [[secondaryColor[0], secondaryColor[1], secondaryColor[2], 255], [primaryColor[0], primaryColor[1], primaryColor[2], 255], [12, 166, 20, 255], [15, 92, 5, 255]];

	// initialize variables for quick reaction exercise
	boxStates = {"idle": [primaryColor, secondaryColor, "CLICK TO START"],
					"running": [[224, 21, 18], [171, 14, 12], "WAIT UNTIL GREEN"],
					"over": [[224, 21, 18], [171, 14, 12], "TOO SOON\nclick to try again"],
					"clickable": [[11, 212, 21], [9, 179, 17], "CLICK NOW!"],
					"results": [[11, 212, 21], [9, 179, 17], ""]};

}

function draw() {

	image(backgroundImg, 0, 0); 

	if (gameState == "home") {
		home();
	} 
	else if (gameState == "line") {
		lineTracingExercise();
	} 
	else if (gameState == "pinpoint") {
		pinpointExercise();
	} 
	else if (gameState == "quick") {
		quickReactionsExercise();
	} 
}

function mousePressed() {
	if (gameState === "quick") {
		handleInputForQuickReaction();
	}
}


// function mouseDragged() {
// 	if (clickedStartPin) {
// 		mouseAngle = -Math.atan2(mouseY - (height/2), mouseX - (2*(width/3)));
// 		console.log(mouseAngle, startAngle, endAngle);
// 	}
// }

function keyPressed() {
	if (key == ' ') {
		if (gameState === "quick") {
			handleInputForQuickReaction();
		}
		else if (gameState === "pinpoint" && pinpointStart) {
			if (!rocketInMotion) {
				rocketInMotion = true;
				rocketsInQueue -= 1;
			}
		}
	}
}

function changeGameStates(state) {
	if (gameState === "home" && state === "quick") {
		setTimeout(() => { quickReactionState = "idle" }, 1);
	}

	resetExercise(gameState);
	gameState = state;
	backButton.hide();
	lineButton.hide();
	quickButton.hide();
	pinpointButton.hide();
	resetButton.hide();
	startButton.hide();

}

function resetExercise() {
	if (gameState == "line") {
		exerciseStart = false;
		pauseLTExercise = false;
		lineTracingTime = 0;
		ltStartTime = 0;
		lineTracingScore = 0;
		lineCords = []
		currIndexOfCenter = 0;
		startHereTextColor = [255, 255, 255];
	}
	else if (gameState === "quick") {
		// reset the quick reaction game
		quickReactionState = "idle";
		
		console.log("inside reset " + quickReactionState);
	}
}


function drawStartButton(xoffset=0, yoffset=0) {
	startButton.position(305+xoffset, 650+yoffset)
	startButton.size(120, 50)
	startButton.style("background-color", buttonColor)
	startButton.style("color", textColor)
	startButton.style("border-width: 3px")
	startButton.style("border: solid")
	startButton.style("border-color", color(15, 131, 176))
	startButton.style("font-size", 24)
	startButton.mousePressed(() => { 
		pinpointStart = true; 
		pinpointStartTime = millis(); 
		nextTarget(); });
}

function drawResetButton(xoffset=0, yoffset=0) {
	resetButton.position(305+xoffset, 650+yoffset)
	resetButton.size(120, 50)
	resetButton.style("background-color", buttonColor)
	resetButton.style("color", textColor)
	resetButton.style("border-width: 3px")
	resetButton.style("border: solid")
	resetButton.style("border-color", color(15, 131, 176))
	resetButton.style("font-size", 24)
	resetButton.mousePressed(() => { resetExercise() });
}

function drawBackButton(xoffset=0, yoffset=0) {
	backButton.position(10+xoffset, 650+yoffset);
	backButton.size(120, 50);
	backButton.style("background-color", buttonColor);
	backButton.style("color", textColor);
	backButton.style("border-width: 3px");
	backButton.style("border: solid");
	backButton.style("border-color", color(15, 131, 176));
	backButton.style("font-size", 24);
	backButton.mousePressed(() => { changeGameStates("home") });
}

function arraysEqual(array1, array2) {
	if (array1.length != array2.length) {
		return false;
	}
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] != array2[i]) {
			return false;
		}
	}
	return true;
}

function arrayEqualsArrays(array1, largerArray) {
	for (let i = 0; i < largerArray.length; i++) {
		if (arraysEqual(array1, largerArray[i])) {
			return true;
		}
	}
	return false;
}