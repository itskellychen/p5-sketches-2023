// Code initially from circular perlin noise tutorial: https://youtu.be/0YvPgYDR1oM

function setup () {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  strokeWeight(0.5);

  translate(width / 2, height / 2);

  var space = 1;

  for (var i=0; i<360; i+= space) {
    var xoff = map(cos(i), -1, 1, 0, 1)
    var yoff = map(sin(i), -1, 1, 0, 50)

    var n = noise(xoff, yoff)
    var h = map(n, 0, 1, 0, 100)

    rotate(space)

    line(100, mouseX, h, 360)
  }
}