// Code initially from Coding Challenge #59: Steering Behaviors: https://youtu.be/4hA7G3gup-4

var font;
var vehicles = [];

function preload() {
  font = loadFont('Nabla-Regular.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  // background(255);
  // textFont(font);
  // textSize(500);
  // text('O', 350, 700);

  var points = font.textToPoints('O.', 250, 700, 500);

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(0);
    // strokeWeight(5);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(255);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}