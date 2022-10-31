mouseEnteredStart = false;
lineStrokeWeight = 15;

// line tracing exercise screen
function lineTracingExercise() {
	drawGUI();

	if (exerciseStart) {
		drawLine(550, 200, 750, 300, primaryColor, secondaryColor);
		drawLine(750, 300, 575, 600, primaryColor, secondaryColor);
		drawLine(575, 600, 775, 450, primaryColor, secondaryColor);
		drawLine(775, 450, 815, 150, primaryColor, secondaryColor);
		drawLine(815, 150, 950, 610, primaryColor, secondaryColor);
		drawLine(950, 610, 980, 310, primaryColor, secondaryColor);
		drawLine(980, 310, 1150, 200, primaryColor, secondaryColor);
		drawLine(1150, 200, 1180, 610, primaryColor, secondaryColor);

		// start circle
		fill(12, 166, 20);
		stroke(15, 92, 5);
		ellipse(550, 200, 50, 50);

		// end circle
		fill(166, 22, 12);
		stroke(92, 10, 5);
		ellipse(1180, 610, 50, 50);

		// if mouse entered start area
		if (dist(mouseX, mouseY, 550, 200) <= 25) {
			mouseEnteredStart = true;
		}

		if (mouseEnteredStart) {
			c = get(mouseX, mouseY);
			mouseColor = color(c[0], c[1], c[2]);

			if (arrayEquals(primaryColor || mouseColor == secondaryColor) {
				console.log("inside")
			} 
			else {
				console.log("outside")
			}
		}
	}
}


function drawLine(x0, y0, x1, y1, inner, outer) {
	fill(inner);
	stroke(outer);
	strokeWeight(lineStrokeWeight);
	line(x0, y0, x1, y1);
	strokeWeight(3);
	ellipse(x0, y0, 30, 30);
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