// drawing the home screen
function home() {

	// draw background rectangle
	rectMode(CENTER);
	noStroke();
	fill(10, 10, 10, 50);
	rect(width/2, height/2, 500, 600);

	// title
	stroke(15, 131, 176, 230);
	strokeWeight(3);
	rect(width/2, 2 * (height / 8), standardButtonWidth, standardButtonHeight*2, 50, 0, 50, 0);
	fill(15, 131, 176, 230)
	textAlign(CENTER, CENTER);
	textStyle(BOLDITALIC);
	textSize(64);
	text("App Name", width/2, 2 * (height / 8));

	// line tracing button
	let ltButton = createButton("Line Tracing")
	ltButton.position(width/2 - (standardButtonWidth/2), 4 * (height / 8))
	ltButton.size(standardButtonWidth, standardButtonHeight)
	ltButton.style("background-color", buttonColor)
	ltButton.style("color", textColor)
	ltButton.style("border-width: 3px")
	ltButton.style("border: solid")
	ltButton.style("border-color", color(15, 131, 176))
	ltButton.style("font-size", buttonTextSize)
	ltButton.mousePressed(() => { changeGameStates("line") });
	activeButtons.push(ltButton);

	// pinpoint button
	let pButton = createButton("Pinpoint")
	pButton.position(width/2 - (standardButtonWidth/2), 5 * (height / 8))
	pButton.size(standardButtonWidth, standardButtonHeight)
	pButton.style("background-color", buttonColor)
	pButton.style("color", textColor)
	pButton.style("border-width: 3px")
	pButton.style("border: solid")
	pButton.style("border-color", color(15, 131, 176))
	pButton.style("font-size", buttonTextSize)
	pButton.mousePressed(() => { changeGameStates("pinpoint") });
	activeButtons.push(pButton);

	// quick reaction button
	let qButton = createButton("Quick Reaction")
	qButton.position(width/2 - (standardButtonWidth/2), 6 * (height / 8))
	qButton.size(standardButtonWidth, standardButtonHeight)
	qButton.style("background-color", buttonColor)
	qButton.style("color", textColor)
	qButton.style("border-width: 3px")
	qButton.style("border: solid")
	qButton.style("border-color", color(15, 131, 176))
	qButton.style("font-size", buttonTextSize)
	qButton.mousePressed(() => { changeGameStates("quick") });
	activeButtons.push(qButton);
}