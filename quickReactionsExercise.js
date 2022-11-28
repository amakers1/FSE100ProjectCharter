let quickReactionState = "idle";
let clickStartTime = 0;
let clickableTime = 0;
let runningTime; 

let boxStates;

// quick reactions exercise screen
function quickReactionsExercise() {
	drawGUIQuickReaction();
	drawReactionBox();

	// console.log(boxStates);
	if (millis() > clickStartTime + runningTime && quickReactionState == "running") {
		quickReactionState = "clickable";
		clickableTime = millis();
	}
}

function drawReactionBox() {
	fill(boxStates[quickReactionState][0]);
	stroke(boxStates[quickReactionState][1]);
	strokeWeight(5);
	rect(500, 50, 720, height-100, 10, 10, 10, 10);

	fill(255);
	textSize(48);
	textAlign(CENTER, CENTER);
	text(boxStates[quickReactionState][2], 860, height/2);
}

function handleInputForQuickReaction() {
	if (quickReactionState == "idle" || quickReactionState == "over") {
		quickReactionState = "running";
		clickStartTime = millis();
		runningTime = 1000 * ((Math.random() * 1) + 1);
	} 
	else if(quickReactionState == "running") {
		quickReactionState = "over";
	}
	else if(quickReactionState == "clickable") {
		quickReactionState = "results";
		boxStates[quickReactionState][2] = `${Math.round(millis() - clickableTime)} ms`;
	}
	else if (quickReactionState == "results") {
		quickReactionState = "idle";
	}
}

function drawGUIQuickReaction() {
	// background rectangle for game area
	fill(10, 10, 10, 50);
	stroke(primaryColor, 200);
	strokeWeight(4);
	rect(460, 10, 800, height-20, 10, 10, 10, 10);

	// background rectangle
	strokeWeight(4);
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(15, 131, 176, 230);
	rect(10, 10, width/3, height-20, 10, 10, 10, 10);

	// title
	rectMode(CENTER)
	stroke(primaryColor, 230);
	strokeWeight(3);
	fill(10, 10, 10, 150);
	rect(width/6 + 10, height/8 + 10, width/3 - 20, 100, 50, 0, 50, 0);
	fill(255, 255, 255)
	textAlign(CENTER, CENTER);
	textStyle(BOLDITALIC);
	textSize(48);
	text("Emergency Stop", width/6+10, height/8 + 10);


	// background rectangle
	rectMode(CORNER)
	fill(10, 10, 10, 50);
	stroke(primaryColor, 200);
	strokeWeight(2);
	rect(20, 200, width/3-20, 400, 10, 10, 10, 10);

	// How to play text
	textStyle(NORMAL);
	textSize(32);
	fill(primaryColor);
	stroke(255);
	strokeWeight(2);
	text("How to play", width/6, 230);

	// line under How to Play
	stroke(primaryColor);
	line(40, 260, width/3-20, 260);

	// instructions on how to play
	howToPlayText = "Start by clicking the blue box to the right.\n"+
					"Once you have clicked the blue box, \n"+
					"the box will turn red. \n"+
					"The goal is to click the box as fast as you \n"+
					"can once it turns green. \n"+
					"After you click, the game will display the \n"+
					"time that it took you. \n"+
					"Try to make your time as small as possible! \n" +
					"Good luck!";
	textHeightY = 300;
	textAlign(LEFT, LEFT);
	textStyle(NORMAL);
	textSize(20);
	fill(secondaryColor);
	noStroke();
	textLeading(30);
	text(howToPlayText, width/6 - 178, textHeightY);

	// draw back button
	drawBackButton(150);
	backButton.show();
}