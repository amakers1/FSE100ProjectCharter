// quick reactions exercise screen
function quickReactionsExercise() {
	drawGUI();
}

function drawGUI() {
	drawBackButton(10);

	// background rectangle
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
	text("Line Tracing", width/6+10, height/8 + 10);


	// background rectangle
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(primaryColor, 200);
	strokeWeight(2);
	rect(20, 200, width/3-20, 400);

	textStyle(NORMAL);
	textSize(32);
	noStroke();
	fill(primaryColor)
	text("How to play", width/6, 230);

	// line under How to Play
	stroke(primaryColor);
	line(40, 260, width/3-20, 260);

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
	sButton.mousePressed(() => { startLineTracingGame() });
	activeButtons.push(sButton);
}

function startLineTracingGame() {
	exerciseStart = true;
}