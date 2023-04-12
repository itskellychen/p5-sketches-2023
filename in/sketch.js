// Code initially from p5 demos (rings): https://glitch.com/edit/#!/p5-example-rings?path=sketch.js

const rings = [];

function setup () {
  createCanvas(1000, 1000);

  const count = floor(random(10, 20));
  
  for (let i = 0; i < count; i++) {
    const diameter = ((i + 1) / count);
    const arcLength = random(PI * 0.05, PI * 2);
    const arcAngle = random(-PI * 2, PI * 5);
    const spinSpeed = random(-0.5, 0.5);
    rings.push({
      spinSpeed,
      diameter,
      arcLength,
      arcAngle
    });
  }
}

function draw() {
  background(255);

  const minDim = Math.min(1000, 1000);
  
  noFill();
  strokeWeight(minDim * 0.005);

  let d = minDim;
  d -= d * 0.25;
  
  for (let i = 0; i < rings.length; i++) {
    const {
      diameter,
      arcLength,
      arcAngle,
      spinSpeed
    } = rings[i];
    
    const spin = millis() / 300 * spinSpeed;
    arc(
      width / 2,
      height / 2,
      diameter * d,
      diameter * d,
      spin + arcAngle,
      spin + arcAngle + Math.PI * arcLength
    );
  }
}