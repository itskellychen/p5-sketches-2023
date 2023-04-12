// Code intially from Delusha, then referenced from https://p5js.org/reference/#group-3D

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(255);
  fill(255);
  ambientLight(5);

  // point lights are controlled by mouse position
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 100);

  // syntax: torus([radius], [tubeRadius], [detailX], [detailY])
  shininess(100);
  // torus(-90, 50, 100, 100);
  torus(300, 90, 540, 40);
}