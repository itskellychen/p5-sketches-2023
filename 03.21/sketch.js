function setup(){
    createCanvas(1000, 1000);
    background(255);
}

function draw(){
    if (mouseIsPressed) {
        // blue circle
        ellipse(500, 500, 600); // outer ring
        fill(255);
        
        ellipse(500, 500, 400); // inner ring
        fill(0, 120, 191, 50, 50);
    } else {
        // pink circle
        ellipse(500, 500, 500); // outer ring
        fill(255);
        
        ellipse(500, 500, 300); // inner ring
        fill(255, 72, 176, 255);
    }
}