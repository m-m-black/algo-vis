class Triangle {
    constructor() {
        this.x1 = -10;
        this.y1 = 10;
        this.x2 = 10;
        this.y2= 10;
        this.x3 = 0;
        this.y3 = -10;
        this.slider1 = new Slider(20, 80, 200, 10, 400, 50, "coord 1");
        this.slider2 = new Slider(20, 160, 200, 10, 400, 50, "coord 2");
        this.slider3 = new Slider(20, 240, 200, 10, 400, 50, "coord 3");
        this.sliders = [this.slider1, this.slider2, this.slider3];
        this.label = "triangle";
    }

    display() {
        let x = width/2;
        let y = height/2;
        triangle(
            x+this.x1+this.slider1.val, 
            y+this.y1-this.slider1.val, 
            x+this.x2+this.slider2.val, 
            y+this.y2-this.slider2.val, 
            x+this.x3+this.slider3.val, 
            y+this.y3-this.slider3.val
        );
    }
}
