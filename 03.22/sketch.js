function setup(){
    createCanvas(1000, 1000);
    background(36, 55, 99);
}

function draw(){

    // ellipse(500, 500, 700, 700); // inner ring
    // fill(36, 55, 99);
    // noStroke();

    // ellipse(500, 500, 500, 650); // outer ring
    // fill(0, 129, 180);
    // noStroke();

    // ellipse(500, 500, 100, 100); // smaller 'o' inside ring

    if (mouseIsPressed){
        ellipse(mouseX, mouseY, 50, 50);
    } else {
        ellipse(500, 500, 700, 700); // inner ring
        fill(36, 55, 99);
        noStroke();
    
        ellipse(500, 500, 500, 650); // outer ring
        fill(0, 129, 180);
        noStroke();
        
        ellipse(500, 500, 100, 100); // smaller 'o' inside ring
    }
}

// For next time:
// https://p5js.org/reference/#/p5/vertex