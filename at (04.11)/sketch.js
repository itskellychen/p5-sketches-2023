// Code initially from 3.4 Polar Coordinates - The Nature of Code: https://youtu.be/O5wjXoFrau4

let angle = 0;
let r = 150;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255, 5);
  translate(500, 500);
  strokeWeight(1);
  noFill();
  circle(0, 0, r * 4);

  strokeWeight(10);
  stroke(0);
  // let x = r * cos(angle);
  // let y = r * sin(angle);
  // point(x, y);

  angle += random(-0.5, 0.5);
  r += random(-5, 5);
}