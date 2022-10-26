// line tracing exercise screen
function lineTracingExercise() {
	drawBackButton(10);

	// background rectangle
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(15, 131, 176, 230);
	rect(10, 10, width/3, height-20);

	// title
	rectMode(CENTER)
	stroke(secondaryColor, 230);
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
	stroke(255, 255, 255, 200);
	strokeWeight(2);
	rect(20, 200, width/3-20, 400);

	textStyle(NORMAL);
	textSize(32);
	noStroke();
	fill(255, 255, 255)
	text("How to play", width/6, 230);

	stroke(255, 255, 255);
	line(40, 260, width/3-20, 260);
	
}