class Slider {
    constructor(x, y, size, min, max, defaultVal, label) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.height = 20;
        this.min = min;
        this.max = max;
        this.val = defaultVal;
        this.label = label;
        this.dragging = false;
    }

    within(mouseX, mouseY) {
        let within = false;
        if (mouseX >= this.x && mouseX <= this.size + this.x) {
            if (mouseY >= this.y && mouseY <= this.height + this.y) {
                within = true;
            }
        }
        return within;
    }

    update(val) {
        this.val = int(map(val, 0, this.size, this.min, this.max));
    }

    drag() {
        this.dragging = true;
    }

    block() {
        this.dragging = false;
    }

    isDragging() {
        return this.dragging;
    }

    display() {
        rectMode(CORNER);
        strokeWeight(0.5);
        fill(255);
        textSize(20);
        textAlign(LEFT, TOP);
        text(this.label + ": " + this.val, this.x, this.y + (this.height * 1.5));
        noFill();
        stroke(255);
        strokeWeight(2);
        rect(this.x, this.y, this.size, this.height);
        fill(255);
        let val = map(this.val, this.min, this.max, 0, this.size);
        rect(this.x, this.y, val, this.height);
    }
}
