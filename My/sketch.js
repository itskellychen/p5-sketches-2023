function setup(){
    createCanvas(1000, 1000);
    background(255);
}

function draw(){
    strokeWeight(0.5);
    
    // syntax: ellipse(x, y, w, [h])
    // ellipse(500, 500, 500);
    stroke(0);
    noFill();

    frameRate(5);

    ellipse(500+random(30), 500+random(50), 300+random(50));
    ellipse(500+random(30), 500+random(50), 300+random(0, 500, 200, 500));
    
    // ellipse(random(100), random(100), random(100));

    // if ((mouseX > 500) && (mouseY > 500)) {
    //     ellipse(random(mouseX), random(mouseY), 100);
    // }
}