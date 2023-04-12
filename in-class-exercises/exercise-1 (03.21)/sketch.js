let c;

// When you load the page, setup happens once
function setup(){
    c = createCanvas(1000, 1000);
    // background(0);
    background(100, 200, 255);

    // rect(200, 350, 100, 300);
    // rect(350, 400, 100, 300);
    // rect(500, 350, 100, 300);
    // rect(650, 400, 100, 300);

    //ellipse(400, 200, 500);
}

// A loop that runs 60 times a second
function draw(){
    // background(100, 200, 255); // redraws the background every time
    
    rect(50, 50, mouseX, mouseY);
    stroke(mouseX, mouseY, 255);
    strokeWeight(10);
    noFill();
}

function mousePressed(){
    saveCanvas(c, "03.21", "png");
}

// function setup(){
//     createCanvas(1000, 1000);
//     background(255);
// }

// function draw(){
//     if (mouseIsPressed) {
//         // blue circle
//         ellipse(500, 500, 600); // outer ring
//         fill(255);
        
//         ellipse(500, 500, 400); // inner ring
//         fill(0, 120, 191, 50, 50);
//     } else {
//         // pink circle
//         ellipse(500, 500, 500); // outer ring
//         fill(255);
        
//         ellipse(500, 500, 300); // inner ring
//         fill(255, 72, 176, 255);
//     }
// }