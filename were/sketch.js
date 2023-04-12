let c;
let ourFont;
let points;

function preload() {
    ourFont = loadFont('CormorantGaramond-Italic.ttf');
}

function setup(){
    colorMode(HSB, 255);
    c = createCanvas(1000, 1000);

    textFont(ourFont);
    points = ourFont.textToPoints("O ?", 200, 600, 500);

    i = 0;

    while(i<points.length) {
        ellipse(points[i].x+random(1, 1), points[i].y+random(1, 1), 100);
        i = i+1;
    }
}

function mouseClicked(){ // "Oh" appears randomly when mouse is clicked
    textSize(random(300));
    text("Oh", random(1000), random(1000));
    // text("O!", random(100), random(50));
    // text("Oh", mouseX, mouseY);
}

function mouseDragged(){ // "Oo!" appears randomly when mouse is dragged
    textSize(random(50));
    text("Oo!", random(1000), random(1000));
}