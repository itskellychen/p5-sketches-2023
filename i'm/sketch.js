// Code initially from Let's Cook Math Donuts in p5.js: https://youtu.be/iNA4yH7DAN8

let r0 = 300, r1 = 100;
let offset = 0;

function setup(){
  createCanvas(1000, 1000, WEBGL);
  angleMode(DEGREES);

  strokeWeight(5);
}

function draw(){
  background(255);
  orbitControl(5, 5);
  rotateX(-100);
  rotateY(-50);

  for(let theta = 0; theta < 360; theta += 3){
    beginShape(POINTS);
      for(let phi = 0; phi < 360; phi += 30){
        let x = (r0+r1 * cos(phi+offset)) * sin(theta);
        let y = r1 * sin(phi);
        let z = (r0+r1 * cos(phi+offset)) * cos(theta);
        vertex(x, y, z);
      }
    endShape();
  }
  offset += 0.5;
}