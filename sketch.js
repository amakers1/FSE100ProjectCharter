gameState = "home";

function setup() {
  createCanvas(1280, 720);

  home = new Home();
  home.addButton("button", [255, 0, 0], 200, 200, 50, 30);
}

function draw() {
  background(220);

  home.draw();
}

function mouseClicked() {}


// drawing the home screen
class Home {
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

// drawing the holding a pencil exercise screen
function drawHAP() {}

// drawing the throwing and catching exercise screen
function drawTC() {}

