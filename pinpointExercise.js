let circleDiameter = 500;
let pinDiameter = 50;
let pinpointStart = false;

let pinpointRotationAngle = 0;
let pinpointRotationSpeed = 0.08;

let pinpointScore = 0;
let pinpointTimer = 0;
let pinpointStartTime = 0;
let rocketsInQueue = 3;

let rocketX = 475;
let rocketVelX = 50;
let rocketInMotion = false;
let rocketHeight = 25;
let rocketWidth = 100;

let targetStartAngle;
let targetAngleSpread;


function pinpointExercise() {
	pinpointRotationAngle += pinpointRotationSpeed;
	if (pinpointRotationAngle > 2 * PI) {
		pinpointRotationAngle = 0;
	}

	drawGUIPinpoint();
	if (pinpointStart) {
			// update the timer
		if (pinpointStartTime > 0) {
			pinpointTimer = (millis() - pinpointStartTime) / 1000;
		}

		if (rocketInMotion) {
			rocketX += rocketVelX;

			fill(11, 200, 21);
			stroke(9, 179, 17);
			rect(rocketX, height/2, rocketWidth, rocketHeight);

			if (dist(rocketX+rocketWidth, height/2+(rocketHeight/2), 3 * (width/4), height/2) <= circleDiameter/2) {
				
				if (PI > pinpointRotationAngle + targetStartAngle && PI < pinpointRotationAngle + targetStartAngle + targetAngleSpread) {
					rocketInMotion = false;
					rocketX = 475;
					pinpointScore++;
					rocketsInQueue++;
					nextTarget();
					console.log("HIT!!!!");
				}
				else {
					rocketInMotion = false;
					rocketX = 475;
					console.log("MISS:(((((((");
				}
			}
		}
		drawRockets();
		drawPinpointExercise();
	}
}


function nextTarget() {
	targetStartAngle = Math.random() * PI;
	targetAngleSpread = (PI/4) + (Math.random() * PI / 2);
	targetAngleSpread /= (pinpointScore + 1);
}

function drawRockets() {	
	alpha = 100;
	for (let i = 0; i < rocketsInQueue; i++) {
		if (i == 0 && !rocketInMotion) {
			alpha = 255
		} else {
			alpha = 100
		}
		fill(11, 200, 21, alpha);
		stroke([9, 179, 17]);
		rect(475, height/2 + (2 * i * rocketHeight), rocketWidth, rocketHeight);
	}
}


function drawPinpointExercise() {
	translate(3 * (width/4), height/2);
	rotate(pinpointRotationAngle);

	fill(secondaryColor);
	stroke(primaryColor);
	ellipse(0, 0, circleDiameter);

	fill(224, 21, 18);
	stroke(171, 14, 12);

	// targetStartAngle = 0;
	// targetAngleSpread = PI / 4;

	arc(0, 0, circleDiameter, circleDiameter, targetStartAngle, targetStartAngle+targetAngleSpread);
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