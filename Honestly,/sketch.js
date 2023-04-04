let c;
let ourFont;
let points;

function preload() {
    ourFont = loadFont('CormorantGaramond-Italic.ttf');
}

function setup(){
    c = createCanvas(1000, 1000);
    // background(0);

    textFont(ourFont);
    points = ourFont.textToPoints("Honestly,", 50, 400, 270);

    i = 0;

    while(i<points.length) {

        ellipse(points[i].x+random(1, 1), points[i].y+random(1, 1), 100);
        i = i+1;
    }
}

function draw(){

    strokeWeight(1);
    noFill();
    // syntax: ellipse(x, y, w, [h])

    ellipse(300, 500, 200, 450); // inner ring
    ellipse(300, 500, 500); // outer ring

    ellipse(700, 700, 200, 450); // inner ring
    ellipse(700, 700, 500); // outer ring

    // ellipse(400, 700, 200, 450); // inner ring
    // ellipse(400, 700, 500); // outer ring
}