frame = 0;
let vid;
let img;

function preload(){
    // img = loadImage("img.png");
}

function setup(){
    c = createCanvas(1000, 1000);

    // vid = createCapture(VIDEO);
    // vid.size(640, 480);
    // vid.hide();

    // image(img, 100, 100);

    // img.loadPixels();
    // console.log(img.pixels);

    frameRate(60);

    beginShape()
    for (let i=0; i<width; i++) {

        let yPosition = sin(i/10)*1000;

        vertex(i, yPosition)
    }
    endShape()
}

function draw() {
    
    // background(255);

    // ellipseSize(sin(frame));
    // rect(500, 500, 200, 300);
    // ellipse(500, 500, ellipseSize);
    // sin(frame);

    // angleMode(DEGREES);

    // ellispeSize= sin(frame/20)*200;
    // rotate(sin(frame)*180);
    // rect(500, 500, 200, 300);

    // image(img, 500, 500);
    // image(vid, 0, 0);

    // gridSize = 40;

    // for (let y=0; y<img.height; y=y+gridSize) {
    //     for (let x=0; x<img.width; x=x+gridSize) {
    //         let index = (y * img.width +x)*4;
    //         let r = img.pixels[index];
    //     }
    // }

    // translate(500, 500);
    // push();
    // rotate(sin(frame))*180;

    // rect(0, 0, 200, 300);
    // pop();

    console.log(sin(frame));
    frame++
}

function draw(){

    // colorMode(HSB);
    frameRate(5);
    
    ellipse(random(500), random(500), random(100));
    
    fill(random(255), random(255), random(255));
    fill(random(255));

    if ((mouseX > 500) && (mouseY > 500)) {
        ellipse(mouseX, mouseY, 50);
    }

    // for (let i=0; i<100; i++) {
    //     ellipse(random(width), random(height), 30);
    // }

    // ellipse(500+random(50), 500+random(50), 500+random(50));
    
    console.log("no value: "+ random());
    console.log("one value: "+ random(100)); // value between 100
    console.log("two value: "+ random(200)); // value between 200
}