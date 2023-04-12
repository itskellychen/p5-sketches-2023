// Code initially from 3.4 Polar Coordinates - The Nature of Code: https://youtu.be/O5wjXoFrau4

let angle = 0;
let r = 150;

function setup() {
  createCanvas(1000, 1000);
  frameRate(10);
}

function draw() {
  background(255, 10);
  translate(500, 500);
  stroke(0);
  strokeWeight(1);
  noFill();

  let increment = 0.5;

  beginShape();
    for (let a = 0; a < TWO_PI; a += increment) {
      let r1 = r + random(100, 300);
      let x = r1 * cos(a);
      let y = r1 * sin(a);
      vertex(x, y);
    }
  endShape(CLOSE);
}