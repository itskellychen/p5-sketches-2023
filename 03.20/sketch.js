function setup(){
    createCanvas(1000, 1000);
    background(236, 242, 255);
}

function draw(){
    strokeWeight(8);

    if (mouseIsPressed){
        // ellipseMode(RADIUS);
        ellipse(mouseX, mouseY, 200);
        fill(236, 242, 255); // inner ring

        // ellipseMode(CENTER);
        ellipse(mouseX, mouseY, 100, 100); // outer ring
        fill(191, 172, 226);
        // fill(62, 84, 172);
    } else {
        ellipse(mouseX, mouseY, 200);
        fill(236, 242, 255); // inner ring

        ellipse(mouseX, mouseY, 100, 100); // outer ring
        fill(62, 84, 172);
    } 
    // if (mouseIsPressed){
    //     fill(0);
    // } else {
    //     fill(255);
    // }

    // ellipse(50, 50, 80, 80);
    // ellipse(mouseX, mouseY, 50);
}

// Resources:
// https://p5js.org/zh-Hans/reference/#/p5/ellipseMode
// https://gokcetaskan.com/artofcode/basics