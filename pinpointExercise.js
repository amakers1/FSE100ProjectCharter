
function pinpointExercise() {
	drawGUIPinpoint();
}

function drawGUIPinpoint() {
	drawBackButton(10);

	// background rectangle
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(15, 131, 176, 230);
	strokeWeight(2);
	rect( + 10, 10, width/3, height-20, 10, 10, 10, 10);

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
	text("Line Tracing", width/6+10, height/8 + 10);


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

	// draw reset button
	drawResetButton();
	resetButton.show();

	drawBackButton(10);
	backButton.show();
}

function startLineTracingGame() {
	exerciseStart = true;
}
