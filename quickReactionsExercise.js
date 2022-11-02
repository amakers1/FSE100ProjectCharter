// quick reactions exercise screen
function quickReactionsExercise() {
	drawGUIQuickReaction();
}

function drawGUIQuickReaction() {
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
	text("Quick Reactions", width/6+10, height/8 + 10);


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

	// draw reset button
	drawResetButton();
	resetButton.show();

	drawBackButton(10);
	backButton.show();
}
var circles = [];

function startLineTracingGame() {
	exerciseStart = true;
	for(var i=0; i<25;i++){
		var circle={
			x:random(width),
			y: random(height),
			r: 32
		};
		circles.push(circle);
	}

	for(var i=0; i<circles.length; i++){
		fill(255, 0, 150, 100);
		noStroke();
		ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
	}
}