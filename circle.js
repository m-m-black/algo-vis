class Circle {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.slider1 = new Slider(20, 80, 200, 10, 400, 50, "size");
        this.sliders = [this.slider1];
        this.label = "circle";
    }

    display() {
        ellipse(width/2, height/2, this.slider1.val, this.slider1.val);
    }
}
