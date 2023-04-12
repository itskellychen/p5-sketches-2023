// Code intially from p5.js Tutorial - Iris of an Eye: https://youtu.be/cABw_nj-9h8

let shape;

function setup() {
  createCanvas(1000, 1000);

  shape = new waver();
  // background(255);
}

function draw() {
  if (frameCount % 1000 == 0) {
    background(255);
  }

  shape.make();
  push();
    noStroke();
    fill(255);
    circle(width/2, height/2, height*0.35);
    noFill();
  pop();
}

function waver() {
  this.x = 0;
  this.y = 0;
  this.yoff = 0;
  this.s = 50;
  this.len = height*0.20;
  this.theta = 0;
  this.ts = 0.015;

  this.make = function() {
    let xoff = 0;
    this.s = map(noise(frameCount*0.01), 0, 1, 1000, 0);
    this.theta += this.ts;

    push(); // clockwise direction of lines
      translate(width/2, height/2);
      rotate(TWO_PI*this.theta);
      stroke(this.r, this.g, this.b, 0);
      strokeWeight(1);
      noFill();

      beginShape();
        let sz = map(noise(frameCount*0.1), 0, 1, 10, this.len);
        let rgap = map(noise(frameCount*0.01), 0, 1, 3, 15);

        for (let x = 0; x < sz; x += rgap) {
          this.y = map(noise(xoff, this.yoff), 0, 1, -this.s, this.s);
          vertex(x, this.y);
          xoff += 0.05;
        }
      endShape();
    pop();

    push(); // counter-clockwise direction of lines
      translate(width/2, height/2);
        rotate(-TWO_PI*this.theta);
        stroke(0);
        strokeWeight(1);
        noFill();

        beginShape();
          sz = map(noise(frameCount*0.1), 0, 1, 10, this.len);

          for (let x = 0; x < sz; x += rgap) {
            this.y = map(noise(xoff, this.yoff), 0, 1, -this.s, this.s);
            vertex(x, this.y);
            xoff += 0.05;
          }
        endShape();
    pop();
  }
}