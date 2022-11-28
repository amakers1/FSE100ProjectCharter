let circleDiameter = 450;
let pinDiameter = 50;
let pinpointStart = false;

let pinpointRotationAngle = 0;
let pinpointRotationSpeed = 0.06;
let pinpointRotationState = {
	0: (x) => Math.sin(x/30) - (1/6), 
	1: (x1) => Math.sin(x1/30) +(1/6), 
	2: 1};
let currentRotationState = 0;

let pinpointScore = 0;
let pinpointTimer = 0;
let pinpointStartTime = 0;
let rocketsInQueue = 3;

let rocketX = 490;
let rocketYs = [];
let rocketVelX = 20;
let rocketRotation = 2.3;
let rocketInMotion = false;
let rocketShifting = false;
let rocketHeight = 100;
let rocketWidth = 100;

let targetStartAngle;
let targetAngleSpread;

let missHitFadeLength = 1200;
let millisAtHit = -1;
let showMissHitText = false;
let missOrHit = null;


function pinpointExercise() {
	if (pinpointRotationAngle > 2 * PI) {
		pinpointRotationAngle = 0;
	}

	drawGUIPinpoint();
	drawPinpointExercise();
	if (pinpointStart) {
		pinpointRotationAngle += pinpointRotationState[currentRotationState](frameCount) * pinpointRotationSpeed;

		// update the timer
		if (pinpointStartTime > 0) {
			pinpointTimer = (millis() - pinpointStartTime) / 1000;
		}

		if (rocketInMotion) {

			if (rocketShifting) {
				for (let i = 0; i < rocketsInQueue; i++) {
					rocketYs[i] -= 5;

					if (rocketYs[i] <= height/2) {
						rocketYs[i] = height/2
						rocketShifting = false;
					}
				}
			}

			rocketX += rocketVelX;
			
			push()
			imageMode(CENTER, CENTER);
			translate(rocketX, height/2);
			rotate(2.3 + map(random(), 0, 1, -0.01, 0.01));
			image(rocketAsset, 0, 0, rocketWidth, rocketHeight);
			pop();
			

		
			if (dist(rocketX+37, height/2, 3 * (width/4), height/2) <= circleDiameter/2) {
				
				if (rocketHitTarget()) {
					missOrHit = "hit";
					showMissHitText = true;
					millisAtHit = millis();

					rocketInMotion = false;
					rocketX = 490;
					pinpointScore++;
					rocketsInQueue++;
					rocketYs.push(rocketYs.length * 50 + (height/2));
					nextTarget();
					setPinpointRotation();
					console.log("HIT!!!!");
				}
				else {
					missOrHit = "miss";
					showMissHitText = true;
					millisAtHit = millis();

					rocketInMotion = false;
					rocketX = 490;
					console.log("MISS:(((((((");
					if (rocketsInQueue == 0) {
						resetExercise();
					}
				}
				
			}
		}
	}
	drawRockets();

	if (showMissHitText) {
		drawMissHitText();
	}
}


function drawMissHitText() {
	a = map(millis()-millisAtHit, 0, missHitFadeLength, 255, 0);
	size = map(millis()-millisAtHit, 0, missHitFadeLength, 120, 80);

	console.log(a, size)
	textAlign(CENTER, CENTER);
	strokeWeight(10);
	if (missOrHit == "miss") {
		// fill(primaryColor, a);
		stroke(171, 14, 12, a);
		textSize(size);

		text("MISS", 3 * (width/4), height/2);
	}
	else {
		// fill(primaryColor, a);
		stroke(7, 143, 14, a);
		textSize(size);

		text("HIT", 3 * (width/4), height/2);
	}
	if (millisAtHit + missHitFadeLength < millis()) {
		showMissHitText = false;
		millisAtHit = -1;
	}
}

function rocketHitTarget() {
	returnVal = false;
	if (pinpointRotationAngle < 0) {
		pra = (2 * PI) + pinpointRotationAngle;
		if (pra < 3.1415 && pra + targetAngleSpread > 3.1415) {	
			returnVal = true;
		}
	}
	else {
		if (pinpointRotationAngle < 3.1415 && pinpointRotationAngle + targetAngleSpread > 3.1415) {
			returnVal = true;
		}
	}
	return returnVal;
}


function setPinpointRotation() {
	currentRotationState = int(random(0, pinpointRotationState.length));
	pinpointRotationSpeed = -0.007 * Math.log(1/(1+pinpointScore)) + 0.06;
}


function nextTarget() {
	targetAngleSpread = (0.7*Math.log(1/(pinpointScore+1))+2.3) * map(random(), 0, 1, PI/4, PI/2);
	if (targetAngleSpread < PI/11) {
		targetAngleSpread = PI/11;
	} 
	pinpointRotationAngle = map(random(), 0, 1, 0, 2 * PI);	
}

function drawRockets() {
	for (let i = 0; i < rocketYs.length; i++) {
		push()
		imageMode(CENTER);
		translate(490, rocketYs[i]);
		rotate(2.3 + map(random(), 0, 1, -0.015, 0.015));
		image(rocketAsset, 0, 0, rocketWidth, rocketHeight);
		pop();
	}
}


function drawPinpointExercise() {
	push();
	translate(3 * (width/4), height/2);
	rotate(pinpointRotationAngle);

	fill(secondaryColor);
	stroke(primaryColor);
	ellipse(0, 0, circleDiameter);
	if (pinpointStart) {
		fill(224, 21, 18);
		stroke(171, 14, 12);
		arc(0, 0, circleDiameter, circleDiameter, 0, targetAngleSpread);
	}
	pop();
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
	text("Crash Landing", width/6+10, height/8 + 10);

	// score and time text
	textAlign(LEFT);
	textSize(32);
	text(pinpointScore, 1180, 30);
	text((pinpointTimer).toFixed(2), 1180, 70);
	stroke(0);
	strokeWeight(2)
	fill(secondaryColor);
	text("Score:", 1070, 30);
	text("Time:", 1070, 70);


	// background rectangle
	rectMode(CORNER)
	fill(10, 10, 10, 100);
	stroke(primaryColor, 200);
	strokeWeight(2);
	rect(20, 200, width/3-20, 400, 10, 10, 10, 10);

	// How to play text
	textStyle(NORMAL);
	textSize(35);
	fill(primaryColor);
	stroke(255);
	strokeWeight(2);
	textAlign(CENTER);
	text("How to play", width/6+10, 230);

	// line under How to Play
	line(40, 260, width/3-20, 260);

	// instructions for how to play 
	howToPlayText = 
			"For this game you will use the SPACE BAR. \n" +
			"The game will start with a spinning red target. \n" +
			"Your goal is to land the rockets onto the red \n" +
			"targets on the planet. \n" +
			"In order to launch the rockets, press the \n" +
			"SPACE bar. \n" + 
			"The game ends when you miss 3 times. \n" +
			"Click the Start Button to begin. Good Luck!";
	textHeightY = 300;
	textAlign(LEFT, LEFT);
	textStyle(NORMAL);
	textSize(19);
	fill(secondaryColor);
	noStroke();
	textLeading(30);
	text(howToPlayText, width/6 - 178, textHeightY);

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