// Code initially from circular perlin noise tutorial: https://youtu.be/0YvPgYDR1oM

function setup () {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  strokeWeight(0.5);

  translate(width / 2, height / 2);

  var space = 0.5

  for (var i=0; i<500; i+= space) {

    var xoff = map(cos(i), -10, 200, 0, 200)
    var yoff = map(sin(i), -1000, 500, 0, 200)

    var n = noise(xoff, yoff)
    var h = map(n, 0, 200, -200, 200)

    rotate(space)

    line(250, 200, h, 300)
    line(250, 0, h, 450)
  }
}