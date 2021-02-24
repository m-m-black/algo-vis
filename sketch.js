let sliders;
let labels;
let selector;
let dragging;
let models;
let model;

function setup() {
	createCanvas(windowWidth, windowHeight);
	dragging = false;
	models = [new Square(), new Circle(), new Triangle()];
	model = models[0];
	sliders = model.sliders;
	labels = [];
	models.forEach(model => {
		labels.push(model.label);
	});
	selector = new Selector(20, 20, 200, labels);
}

function draw() {
	background(0);
	strokeWeight(2);
	sliders.forEach(slider => {
		slider.display();
	});
	selector.display();
	noFill();
	let s0 = sliders[0];
	let s1 = sliders[1];
	model.display();
}

function mousePressed() {
	monitorSlidersOnClick();
	monitorSelectorOnClick();
	return false;
}

function mouseDragged() {
	monitorSlidersOnDrag();
	return false;
}

function mouseReleased() {
	monitorSlidersOnRelease();
	return false;
}

function monitorSlidersOnClick() {
	sliders.forEach(slider => {
		if (slider.within(mouseX, mouseY)) {
			let val = mouseX - slider.x;
			slider.update(val);
		}
	});
}

function monitorSlidersOnDrag() {
	sliders.forEach((slider, i) => {
		if (slider.within(mouseX, mouseY) && !dragging) {
			dragging = true;
			slider.drag();
			sliders.forEach((s, y) => {
				if (i !== y) {
					s.block();
				}
			})
		}
		if (slider.isDragging() && dragging) {
			let rawVal = mouseX - slider.x;
			let val = constrain(rawVal, 0, slider.size);
			slider.update(val);
		}
	});
}

function monitorSlidersOnRelease() {
	if (dragging) {
		dragging = false;
	}
}

function monitorSelectorOnClick() {
	if (selector.withinLeft(mouseX, mouseY)) {
		selector.goLeft();
		setModel(selector.getCurrentLabel());
		sliders = model.sliders;
	} else if (selector.withinRight(mouseX, mouseY)) {
		selector.goRight();
		setModel(selector.getCurrentLabel());
		sliders = model.sliders;
	}
}

function setModel(label) {
	switch (label) {
		case "square":
			model = models[0];
			break;
		case "circle":
			model = models[1];
			break;
		case "triangle":
			model = models[2];
			break;
		default:
			break;
	}
}
