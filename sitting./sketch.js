// Code for the 3D torus shape referenced from: https://p5js.org/examples/3d-geometries.html

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(255);

  push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(500, 300);
  pop();
}