// drawing the home screen
class Home {
	constructor(bw, bh) {
		this.buttons = []
		
		this.buttonWidth = bw;
		this.buttonHeight = bh;
	}

	// Call this function to add a button to the buttons list
	// The buttons list contains infomation about every button (text, color, x-position, y-position, width, height)
	addButton(event, text, buttonColor, textColor, x, y, w=this.buttonWidth, h=this.buttonHeight) {	
		this.buttons.push({"text": text, "buttonColor": buttonColor, "textColor": textColor, "x": x, "y": y, "width": w, "height": h, "event": event});
	}

	// draw everything on the screen
	draw() {
		for (let i = 0; i < this.buttons.length; i++) {
			// draw button
			fill(this.buttons[i].buttonColor[0], this.buttons[i].buttonColor[1], this.buttons[i].buttonColor[2]);
			rect(this.buttons[i].x, this.buttons[i].y, this.buttons[i].width, this.buttons[i].height);
			
			// draw text
			textAlign(CENTER, CENTER)
			textSize(32)
			fill(this.buttons[i].textColor[0], this.buttons[i].textColor[1], this.buttons[i].textColor[2]);
			text(this.buttons[i].text, this.buttons[i].x+(this.buttons[i].width/2), this.buttons[i].y+(this.buttons[i].height/2))
		}
	}

	checkButtons(mX, mY) {
		let returnState = "";
		for (let i = 0; i < this.buttons.length; i++) {
			if (mX > this.buttons[i].x && mX < this.buttons[i].x+this.buttons[i].width &&
			    mY > this.buttons[i].y && mY < this.buttons[i].y+this.buttons[i].height) {
				console.log("here")
				returnState = this.buttons[i].gameState;
			}
		}
		return returnState;
	}
}
