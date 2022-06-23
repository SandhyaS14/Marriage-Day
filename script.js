function preload() {
    img = loadImage("Madhu and Abhi.JPG")
    img = loadImage("Pinni and Babai.JPG")
}

function setup() {
    img.loadPixels();
    canvas = createCanvas(400, 400);
}

function draw() {
    image(img, 0, 0, 400, 400);
}