// Code initially from circular perlin noise tutorial: https://youtu.be/0YvPgYDR1oM

function setup () {
  createCanvas(1000, 1000);
  angleMode(DEGREES);

  background(255);
  strokeWeight(0.5);

  noiseDetail(random(2), random(1));
}

function draw() {
  translate(width / 2, height / 2);

  var space = 0.1
  // var space = 0.5

  for (var i=0; i<500; i+= space) { // ... how do I get rid of that white rectangle?
    var xoff = map(cos(i), -1, 1, 0, 5)
    var yoff = map(sin(i), -1, 1, 0, 10)

    var n = noise(xoff, yoff)
    var h = map(n, 0, 1, -150, 150)

    rotate(space)

    rect(300, 0, h, 300)
    rect(10, h, 10) // inner ring is a bit extra, but at least it looks cool
  }
}