function setup(){
    createCanvas(1000, 1000);
    background(255);
}

function draw(){
    strokeWeight(1);

    if (mouseIsPressed){ // lighter purple inner circle
        ellipse(mouseX, mouseY, 200);
        fill(0);

        ellipse(mouseX, mouseY, 100, 100);
        fill(255);

    } else { // darker purple inner circle
        ellipse(mouseX, mouseY, 200);
        fill(255);

        ellipse(mouseX, mouseY, 100, 100);
        fill(255);
    }
}

// References:
// https://p5js.org/zh-Hans/reference/#/p5/ellipseMode
// https://gokcetaskan.com/artofcode/basics