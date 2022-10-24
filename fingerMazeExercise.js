// finger maze exercise screen
class fingerMazeExercise {
	constructor() {
		this.buttons = []
	}

	addButton(text, color, x, y, width, height) {	
		this.buttons.push({"text": text, "color": color, "x": x, "y": y, "width": width, "height": height});
	}

	draw() {
		for (let i = 0; i < this.buttons.length; i++) {
			fill(this.buttons[i].color[0], this.buttons[i].color[1], this.buttons[i].color[2]);
			rect(this.buttons[i].x, this.buttons[i].y, this.buttons[i].width, this.buttons[i].height);
		}
	}
}