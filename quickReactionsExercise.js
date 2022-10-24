// quick reactions exercise screen
class quickReactionsExercise {
	constructor() {
		this.buttons = []
	}

	setupButtons() {	
		button = createButton('Home');
		button.position(1150, 650);
		button.size(50,30);
		button.style("font-family", "Bodoni");
  		button.style("font-size", "16px");
		button.mousePressed(home.draw);
	}

	draw() {
		for (let i = 0; i < this.buttons.length; i++) {
			fill(this.buttons[i].color[0], this.buttons[i].color[1], this.buttons[i].color[2]);
			rect(this.buttons[i].x, this.buttons[i].y, this.buttons[i].width, this.buttons[i].height);
		}
	}
}