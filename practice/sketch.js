// Toggle for B&W only
function setup(){
    createCanvas(1000, 1000);
    background(255);
}

function draw(){
    if (mouseIsPressed){
        ellipse(mouseX, mouseY, 50, 50);
    } else {
        ellipse(500, 500, 700, 700); // inner ring
        fill(255);
        noStroke();
    
        ellipse(500, 500, 500, 650); // outer ring
        fill(0);
        noStroke();
        
        ellipse(500, 500, 100, 100); // smaller 'o' inside ring
    }

    // ellipse(500, 500, 700, 700); // inner ring
    // fill(36, 55, 99);
    // noStroke();

    // ellipse(500, 500, 500, 650); // outer ring
    // fill(0, 129, 180);
    // noStroke();

    // ellipse(500, 500, 100, 100); // smaller 'o' inside ring
}

// // Toggle for colour only
// function setup(){
//     createCanvas(1000, 1000);
//     background(249,245,244);
// }

// function draw(){
//     if (mouseIsPressed){
//         ellipse(mouseX, mouseY, 50, 50);
//     } else {
//         ellipse(500, 500, 700, 700); // inner ring
//         fill(249,245,244);
//         noStroke();
    
//         ellipse(500, 500, 500, 650); // outer ring
//         fill(140,211,208);
//         noStroke();
        
//         ellipse(500, 500, 100, 100); // smaller 'o' inside ring
//     }
// }

// Note to self: look at this resource for your next sketch -> ßhttps://p5js.org/reference/#/p5/vertex