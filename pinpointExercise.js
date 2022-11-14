let circleDiameter = 500;
let pinDiameter = 50;
let pinpointStart = false;

let clickedStartPin = false;

let startAngle;
let endAngle;
let mouseAngle;
let pinStartPos = [];
let pinEndPos = [];

function pinpointExercise() {
	drawGUIPinpoint();
<<<<<<< Updated upstream

	fill(secondaryColor);
	stroke(primaryColor);
	ellipse(2 * (width/3), height/2, circleDiameter);

	if (pinpointStart) {
		drawPinpointExercise();
	}
=======
	startPinpointGame();
	
>>>>>>> Stashed changes
}

function nextPins() {
	startAngle = Math.random()  * PI;
	endAngle = startAngle + (Math.random() * PI) + (PI / 2);

	pinStartPos = [(circleDiameter/2) * Math.cos(startAngle) + 2 * (width/3),
				   (circleDiameter/2) * -Math.sin(startAngle) + height/2];

	pinEndPos = [(circleDiameter/2) * Math.cos(endAngle) + 2 * (width/3),
				   (circleDiameter/2) * -Math.sin(endAngle) + height/2];
}

function drawPinpointExercise() {
	fill([11, 212, 21]);
	stroke([9, 179, 17]);
	ellipse(pinStartPos[0], pinStartPos[1], pinDiameter, pinDiameter);
	fill(224, 21, 18);
	stroke(171, 14, 12);
	ellipse(pinEndPos[0], pinEndPos[1], pinDiameter, pinDiameter);

	fill(primaryColor);
	stroke(20, 20, 20, 50);
	// arc(2 * (width/3), height/2, circleDiameter - 50, circleDiameter - 50, startAngle, endAngle, PIE);
	arc(2 * (width/3), height/2, circleDiameter - 50, circleDiameter - 50, 0, PI/2, PIE);
}


function drawGUIPinpoint() {
	drawBackButton(10);

	xoffset = 2*width/3 - 20;

	// background rectangle
	strokeWeight(2)
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(15, 131, 176, 230);
	rect(10, 10, width/3, height-20);

	// title
	rectMode(CENTER)
	stroke(primaryColor, 230);
	strokeWeight(3);
	fill(10, 10, 10, 150);
	rect(width/6 + 10, height/8 + 10, width/3 - 20, 100, 50, 0, 50, 0);
	fill(255, 255, 255)
	textAlign(CENTER, CENTER);
	textStyle(BOLDITALIC);
	textSize(56);
	text("Pinpoint", width/6+10, height/8 + 10);


	// background rectangle
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(primaryColor, 200);
	strokeWeight(2);
	rect(20, 200, width/3-20, 400, 10, 10, 10, 10);

	textStyle(NORMAL);
	textSize(32);
	noStroke();
	fill(primaryColor)
	text("How to play", width/6, 230);

	// line under How to Play
	stroke(primaryColor);
	line(40, 260, width/3-20, 260);


	if (!pinpointStart) {
		// draw start button
		drawStartButton();
		resetButton.hide();
		startButton.show();
	} else {
		// draw reset button
		drawResetButton();
		resetButton.show();	
		startButton.hide();	
	}
	
	
	// draw back button
	drawBackButton(10);
	backButton.show();
}