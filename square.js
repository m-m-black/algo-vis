class Square {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.slider1 = new Slider(20, 80, 200, 10, 400, 50, "length");
        this.slider2 = new Slider(20, 160, 200, 10, 400, 50, "height");
        this.sliders = [this.slider1, this.slider2];
        this.label = "square";
    }

    display() {
        //rect(width/2, height/2, 50, 50);
        rectMode(CENTER);
        rect(this.x, this.y, this.slider1.val, this.slider2.val);
    }
}
