// Toggle for B&W only
function setup(){
    createCanvas(1000, 1000);

    beginShape()
        for (let i=0; i<width; i++) {
            let yPosition = sin(i/10)*1000;
            vertex(i, yPosition)
        }
    endShape()
}

function draw() {
    angleMode(DEGREES);

    ellispeSize= sin(frame/20)*200;
    rotate(sin(frame)*180);
    rect(500, 500, 200, 300);

    console.log(sin(frame));
    frame++
}

function draw(){

    frameRate(1);
    
    // ellipse(random(500), random(500), random(100));
    
    // fill(random(255), random(255), random(255));
    // fill(random(255));

    // if ((mouseX > 500) && (mouseY > 500)) {
    //     ellipse(mouseX, mouseY, 50);
    // }

    for (let i=0; i<100; i++) {
        ellipse(random(width), random(height), 30);
    }

    ellipse(500+random(50), 500+random(50), 500+random(50));
    
    // console.log("no value: "+ random());
    // console.log("one value: "+ random(100)); // value between 100
    // console.log("two value: "+ random(200)); // value between 200
}

// // Toggle for colour only
// function setup(){
//     createCanvas(1000, 1000);

//     beginShape()
//         for (let i=0; i<width; i++) {
//             let yPosition = sin(i/10)*1000;
//             vertex(i, yPosition)
//         }
//     endShape()
// }

// function draw(){
//     frameRate(1);

//     for (let i=0; i<100; i++) {
//         ellipse(random(width), random(height), 30);
//     }

//     ellipse(500+random(50), 500+random(50), 500+random(50));
//     fill(220,206,232);
// }