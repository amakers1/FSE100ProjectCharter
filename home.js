// drawing the home screen
function home() {

	// draw background rectangle
	rectMode(CENTER);
	noStroke();
	fill(10, 10, 10, 50);
	rect(width/2, height/2, 750, 600);

	// title
	stroke(primaryColor, 230);
	strokeWeight(3);
	fill(10, 10, 10, 100);
	rect(width/2, 2 * (height / 8), standardButtonWidth * 1.5, standardButtonHeight*2, 50, 0, 50, 0);
	fill(255, 255, 255);
	textAlign(CENTER, CENTER);
	textStyle(BOLDITALIC);
	textSize(64);
	text("Planetary Conquest", width/2, 2 * (height / 8));

	// line tracing button
	lineButton.position(width/2.4 - (standardButtonWidth/2), 4 * (height / 8))
	lineButton.size(standardButtonWidth * 1.5, standardButtonHeight)
	lineButton.style("background-color", buttonColor)
	lineButton.style("color", textColor)
	lineButton.style("border-width: 3px")
	lineButton.style("border: solid")
	lineButton.style("border-color", color(15, 131, 176))
	lineButton.style("font-size", buttonTextSize)
	lineButton.mousePressed(() => { changeGameStates("line") });
	lineButton.show();

	// pinpoint button
	pinpointButton.position(width/2.4 - (standardButtonWidth/2), 5 * (height / 8))
	pinpointButton.size(standardButtonWidth * 1.5, standardButtonHeight)
	pinpointButton.style("background-color", buttonColor)
	pinpointButton.style("color", textColor)
	pinpointButton.style("border-width: 3px")
	pinpointButton.style("border: solid")
	pinpointButton.style("border-color", color(15, 131, 176))
	pinpointButton.style("font-size", buttonTextSize)
	pinpointButton.mousePressed(() => { changeGameStates("pinpoint") });
	pinpointButton.show();

	// quick reaction button
	quickButton.position(width/2.4 - (standardButtonWidth/2), 6 * (height / 8))
	quickButton.size(standardButtonWidth * 1.5, standardButtonHeight)
	quickButton.style("background-color", buttonColor)
	quickButton.style("color", textColor)
	quickButton.style("border-width: 3px")
	quickButton.style("border: solid")
	quickButton.style("border-color", color(15, 131, 176))
	quickButton.style("font-size", buttonTextSize)
	quickButton.mousePressed(() => { changeGameStates("quick") });
	quickButton.show();
}