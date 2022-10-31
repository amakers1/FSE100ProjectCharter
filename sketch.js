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

function preload() {
	backgroundImg = loadImage('assets/1280x720.png');
  }

function setup() {
	createCanvas(1280, 720);

	standardButtonWidth = width/3;
	standardButtonHeight = height/10;
	secondaryColor = color(20, 167, 224);
	primaryColor = color(15, 131, 176);
	buttonColor = color(43, 43, 43);
	textColor = color(220, 220, 220);
	buttonTextSize = "28px";
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

function drawStartButton(xoffset=0, yoffset=0) {
	
}