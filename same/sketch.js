// Code initially from circular perlin noise tutorial: https://youtu.be/0YvPgYDR1oM

function setup () {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  frameRate(5);
}

function draw() {
  background(255);
  strokeWeight(0.5);

  translate(width / 2, height / 2);

  var space = 0.5

  for (var i=0; i<200; i+= random(space)) { // that white rectangle is still bugging me...
    var xoff = map(cos(i), -1, 1, 0, 5)
    var yoff = map(sin(i), -1, 1, 0, 10)
    var n = noise(xoff, yoff)
    var h = map(n, 0, 1, -150, 150)

    rotate(space)

    rect(300, 0, h, 300)
  }
}