let circleDiameter = 500;
let pinDiameter = 50;
let pinpointStart = false;

let pinpointRotationAngle = 0;
let pinpointRotationSpeed = 0.06;

let pinpointScore = 0;
let rocketsInQueue = 3;

let rocketX = 450;
let rocketVelX = 5;
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
		drawRockets();
		drawPinpointExercise();

		if (rocketInMotion) {
			rocketX += rocketVelX;

			if (dist(rocketX+rocketWidth, height/2+(rocketHeight/2), 3 * (width/4), height/2) <= circleDiameter/2) {
				
				if (PI > pinpointRotationAngle + targetStartAngle && PI < pinpointRotationAngle + targetStartAngle + targetAngleSpread) {
					console.log("HIT!!");
					rocketX = 450;
				}
			}
		}
	}
}


function nextTarget() {
	targetStartAngle = Math.random() * PI;
	targetAngleSpread = (PI/4) + (Math.random() * PI / 2);
	targetAngleSpread /= (pinpointScore + 1);
}

function drawRockets() {
	fill(11, 200, 21);
	stroke(9, 179, 17);
	rect(rocketX, height/2, rocketWidth, rocketHeight);
	
	for (let i = 1; i < rocketsInQueue; i++) {
		fill(11, 200, 21, 100);
		stroke([9, 179, 17]);
		rect(450, height/2 + (2 * i * rocketHeight), rocketWidth, rocketHeight);
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

	targetStartAngle = 0;
	targetAngleSpread = PI / 4;

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