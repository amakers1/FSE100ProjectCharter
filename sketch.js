// home - main menu
// line - tracing a line exercise
// pinpoint - pinpoint exercise
// quick - quick reaction exercise
let gameState = "line";
let exerciseStart = false;

let activeButtons = []

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
	createCanvas(1280, 720);

	standardButtonWidth = width/3;
	standardButtonHeight = height/10;
	// secondaryColor = color(20, 167, 224);
	secondaryColor = [21, 167, 224];
	// primaryColor = color(15, 131, 176);
	primaryColor = [16, 131, 176];
	buttonColor = color(43, 43, 43);
	textColor = color(220, 220, 220);
	buttonTextSize = "28px";

	lineTracingColors = [[secondaryColor[0], secondaryColor[1], secondaryColor[2], 255], [primaryColor[0], primaryColor[1], primaryColor[2], 255], [12, 166, 20, 255], [15, 92, 5, 255]];
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
		pinpointExercise();
	} 
	else if (gameState == "quick") {
		quickReactionsExercise();
	} 
}


function changeGameStates(state) {
	gameState = state;
	for (let i = 0; i < activeButtons.length; i++) {
		activeButtons[i].hide();
	}
}

function drawBackButton(xoffset=0, yoffset=0) {
	let bButton = createButton("BACK")
	bButton.position(10+xoffset, 650+yoffset)
	bButton.size(120, 50)
	bButton.style("background-color", buttonColor)
	bButton.style("color", textColor)
	bButton.style("border-width: 3px")
	bButton.style("border: solid")
	bButton.style("border-color", color(15, 131, 176))
	bButton.style("font-size", 24)
	bButton.mousePressed(() => { changeGameStates("home") });
	activeButtons.push(bButton);
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