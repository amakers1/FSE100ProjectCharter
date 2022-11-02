let mouseEnteredStart = false;
let lineStrokeWeight = 15;
let lineCords = [];
let currIndexOfCenter = 0;

let lineTracingScore = 0;
let lineTracingTime = 0.0;
let pauseLTExercise = false;
let ltStartTime;


// line tracing exercise screen
function lineTracingExercise() {
	drawGUILineTracing();

	drawLine(550, 200, 750, 300, 0);
	drawLine(750, 300, 575, 600, 1);
	drawLine(575, 600, 775, 450, 2);
	drawLine(775, 450, 815, 150, 3);
	drawLine(815, 150, 950, 610, 4);
	drawLine(950, 610, 980, 310, 5);
	drawLine(980, 310, 1150, 200, 6);
	drawLine(1150, 200, 1180, 610, 7);


	// start circle
	fill(12, 166, 20);
	stroke(15, 92, 5);
	ellipse(550, 200, 50, 50);

	// end circle
	fill(166, 22, 12);
	stroke(92, 10, 5);
	ellipse(1180, 610, 50, 50);

	// draw "Start Here" text
	drawStartText(currIndexOfCenter);

	// console.log("pause: " + pauseLTExercise + " | start: " + exerciseStart)

	// if the mouse entered the starting area, start the game
	if (dist(mouseX, mouseY, lineCords[currIndexOfCenter][0], lineCords[currIndexOfCenter][1]) <= 30) {
		exerciseStart = true;
		pauseLTExercise = false;
	}
	// if the game has started and the mouse has left the starting area
	if (exerciseStart && !pauseLTExercise && dist(mouseX, mouseY, lineCords[currIndexOfCenter][0], lineCords[currIndexOfCenter][1]) > 30) {
		c = get(mouseX, mouseY);
		// if the current color at the mouse position is apart of the line (if the player is still in the line)
		if (arrayEqualsArrays(c, lineTracingColors)) {
			console.log("inside");

			if (dist(mouseX, mouseY, lineCords[currIndexOfCenter][2], lineCords[currIndexOfCenter][3]) < 30) {
				lineCords[currIndexOfCenter][4] = true;
				currIndexOfCenter++;
				console.log(lineCords)
			}		
		} 
		else {
			console.log("outside");
			lineCords[currIndexOfCenter][4] = false;
			currIndexOfCenter++;
			pauseLTExercise = true;
		}
	}
}

function drawStartText(index) {
	stroke(primaryColor, 230);
	strokeWeight(3);
	fill(255, 255, 255);
	textSize(24);
	text("Start Here", lineCords[index][0], lineCords[index][1] - 45);
}


function closestDistToCenter() {
	let shortestDist = 10000;
	let mX = mouseX;
	let mY = mouseY;
	for (let i = 0; i < lineCords.length; i++) {
		let d = dist(lineCords[i][2], lineCords[i][3], mX, mY);
		if (d < shortestDist) {
			shortestDist = d;
		}
	}
	return shortestDist;
}




function drawLine(x0, y0, x1, y1, index) {
	// if lineCords has been created
	if(typeof lineCords[index] !== 'undefined') {
		// if the line segment should be drawn green
		if (lineCords[index][4]) {
			fill([11, 212, 21]);
			stroke([9, 179, 17]);
		}
		// it should be drawn with the default colors
		else if (lineCords[index][4] == false) {
			fill(224, 21, 18);
			stroke(171, 14, 12);
		}
		else if (lineCords[index][4] == undefined){
			fill(primaryColor);
			stroke(secondaryColor);
		}
	}
	// if lineCords has not been created yet.
	else {
		lineCords.push([x0, y0, x1, y1, undefined]);
		fill(primaryColor);
		stroke(secondaryColor);
	}	

	strokeWeight(lineStrokeWeight);
	line(x0, y0, x1, y1);
	strokeWeight(3);
	ellipse(x0, y0, 30, 30);
}

function drawGUILineTracing() {
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
	fill(255, 255, 255);
	textAlign(CENTER, CENTER);
	textStyle(BOLDITALIC);
	textSize(56);
	text("Line Tracing", width/6+10, height/8 + 10);
	

	// score and time text
	textAlign(LEFT);
	textSize(32);
	text((lineTracingTime).toFixed(2), 1180, 30);
	text(lineTracingScore, 1180, 70);
	stroke(0);
	strokeWeight(2)
	fill(secondaryColor);
	text("Score:", 1070, 30);
	text("Time:", 1070, 70);

	// box around text
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(15, 131, 176, 230);
	rect(1060, 0, 220, 100);


	// background rectangle
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(primaryColor, 200);
	strokeWeight(2);
	rect(20, 200, width/3-20, 400);

	// drawing how to play text
	textStyle(NORMAL);
	textSize(32);
	noStroke();
	fill(primaryColor)
	text("How to play", width/6, 230);

	// line under How to Play
	stroke(primaryColor);
	line(40, 260, width/3-20, 260);
}

function startLineTracingGame() {
	exerciseStart = true;
}