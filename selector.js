class Selector {
    constructor(x, y, size, labels) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.height = 20;
        this.labels = labels;
        this.currentIndex = 0;
    }

    getCurrentLabel() {
        return this.labels[this.currentIndex];
    }

    withinLeft(mouseX, mouseY) {
        let within = false;
        if (mouseX >= this.x && mouseX <= this.x + this.height) {
            if (mouseY >= this.y && mouseY <= this.y + this.height) {
                within = true;
            }
        }
        return within;
    }

    withinRight(mouseX, mouseY) {
        let within = false;
        if (mouseX >= this.x + this.size - this.height && mouseX <= this.x + this.size) {
            if (mouseY >= this.y && mouseY <= this.y + this.height) {
                within = true;
            }
        }
        return within;
    }

    goLeft() {
        if (this.currentIndex === 0) {
            this.currentIndex = this.labels.length - 1;
        } else {
            this.currentIndex--;
        }
    }

    goRight() {
        if (this.currentIndex === this.labels.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
    }

    display() {
        noFill();
        stroke(255);
        strokeWeight(2);
        // Main selector rectangle
        rect(this.x, this.y, this.size, this.height);
        push();
        translate(this.x + this.size / 2, this.y + this.height / 2);
        strokeWeight(0.5);
        fill(255);
        textSize(15);
        textAlign(CENTER, CENTER);
        text(this.labels[this.currentIndex], 0, 0);
        pop();
        push();
        translate(this.x, this.y);
        // Buttons at either end of selector
        rect(0, 0, this.height, this.height);
        line((20 * 1 / 3), (20 / 2), (20 * 2 / 3), (20 * 1 / 5));
        line((20 * 1 / 3), (20 / 2), (20 * 2 / 3), (20 * 4 / 5));
        translate(this.size - this.height, 0);
        //rect(this.size - this.height, 0, this.height, this.height);
        rect(0, 0, this.height, this.height);
        line((20 * 2 / 3), (20 / 2), (20 * 1 / 3), (20 * 1 / 5));
        line((20 * 2 / 3), (20 / 2), (20 * 1 / 3), (20 * 4 / 5));
        pop();
    }
}
