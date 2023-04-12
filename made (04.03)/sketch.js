// Code initially from p5 demos (trigonometry): https://glitch.com/edit/#!/p5-example-trig?path=sketch.js%3A1%3A0

function setup () {
    createCanvas(1000, 1000);
    background(255);
}

function draw(){
    // Use the minimum screen size for relative rendering
    const dim = Math.min(width, height);
    
    noFill();
    
    // How fast it will spin around
    const time = millis() / 1000;
    const speed = 0.25;
    
    // Scale by 2PI, i.e. a full arc/circle
    const angle = time * PI * 2.0 * speed;
    
    // The center of the screen
    const cx = width / 2;
    const cy = height / 2;
  
    // Get the XY position on a unit arc using trigonometry
    const u = Math.cos(angle);
    const v = Math.sin(angle);
  
    // Choose the size of the arc we will draw
    const radius = dim * 0.25;
    
    // Get the final position
    const px = cx + u * radius;
    const py = cy + v * radius;
  
    // This is the radius for the actual shape/ellipse we will draw
    const r = dim * 0.25;
    
    // Finally draw the circle
    ellipse(px, py, r, r);
}