function setup() {
  createCanvas(800,800);
  x = random(width);
  y = random(height);
}

function draw() { 
  fill(random(255), random(255), random(255), 100);
    noStroke();
  rect(random(width), random(height), 50, 50);
  rect(x, y, mouseX, mouseY);

}
