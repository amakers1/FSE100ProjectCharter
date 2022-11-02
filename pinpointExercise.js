
function pinpointExercise() {
	drawGUIPinpoint();
}

function drawGUIPinpoint() {
	drawBackButton(10);

	xoffset = 2*width/3 - 20;

	// background rectangle
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(15, 131, 176, 230);
	rect(xoffset + 10, 10, width/3, height-20);

	// title
	rectMode(CENTER)
	stroke(primaryColor, 230);
	strokeWeight(3);
	fill(10, 10, 10, 150);
	rect(xoffset + width/6 + 10, height/8 + 10, width/3 - 20, 100, 50, 0, 50, 0);
	fill(255, 255, 255)
	textAlign(CENTER, CENTER);
	textStyle(BOLDITALIC);
	textSize(56);
	text("Line Tracing", xoffset + width/6+10, height/8 + 10);


	// background rectangle
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(primaryColor, 200);
	strokeWeight(2);
	rect(xoffset + 20, 200, width/3-20, 400);

	textStyle(NORMAL);
	textSize(32);
	noStroke();
	fill(primaryColor)
	text("How to play", xoffset + width/6, 230);

	// line under How to Play
	stroke(primaryColor);
	line(xoffset + 40, 260, width/3-20, 260);

	// draw start button
	let sButton = createButton("START")
	sButton.position(305, 650)
	sButton.size(120, 50)
	sButton.style("background-color", buttonColor)
	sButton.style("color", textColor)
	sButton.style("border-width: 3px")
	sButton.style("border: solid")
	sButton.style("border-color", color(15, 131, 176))
	sButton.style("font-size", 24)
	sButton.mousePressed(() => { startPinpointGame() });
	activeButtons.push(sButton);

	// draw reset button
	drawResetButton();
	resetButton.show();

	drawBackButton(10);
	backButton.show();
}

function startPinpointGame() {
	exerciseStart = true;
	
}
