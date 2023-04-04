let c;
let ourFont;
let profs = ["ali", "diane", "craig", "nancy", "roderick", "sadie", "diane", "richard"] // remember that arrays start with 0
// console.log(profs);
let points;

let f = 0;

function preload() {
    ourFont = loadFont('RubikIso-Regular.ttf');
}

function setup(){
    c = createCanvas(1000, 1000);
    
    colorMode(HSB, 255);

    // textSize(20);
    textFont(ourFont);

    points = ourFont.textToPoints("$@#", 100, 500, 400);
    // console.log(points);

    // noStroke();

    fill(0);
    i = 0;

    while(i<points.length) {
        // fill(random(255), 255, 255);
        ellipse(points[i].x+random(-5, 1), points[i].y+random(10, 10), 10);
        i = i+1;
        console.log(points[i])
    }

    // textSize(60);
    // fill(0);
}

function draw(){    
    f=f+0.01;

    console.log()

    for(let i=0; i<points.length; i++) {
        fill(noise(f+i*10)*255,255,255)
        // fill(noise(f)*255,255,255)
        ellipse(points[i].x+random(-1, 1), points[i].y+random(-5,5),random(10, 10))
    }

    ellipse(200, 200, random(200));
    ellipse(800, 500, random(150));

    // background(255);
    
    // // noFill();
    // // strokeWeight(5);

    // let ferb = map(mouseX, 0, 1000, 0, 250);
    // // stroke(ferb, 255, 255);
    // fill(ferb, 255, 255);
    // // ellipse(mouseX, mouseY, 200);

    // textSize(mouseX);
    // // text("FERB", 100, 500);
    // // text("!@#$", mouseX, mouseY);

    // let i = 0;
    // while(i<profs.length){

    //     text(profs[i], 100, (100*i+100));
    //     i = i+1;
    // }

    // text(profs[i], mouseX, mouseY);

    // console.log(ferb);
}
