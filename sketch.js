function setup() {
  createCanvas(windowWidth, windowHeight)
  background("white");
  textSize(15);
  text("Draw the coriandoli to celebrate", width/6, height / 2);

}

function draw() {
  push();
  noStroke();
  fill(color(random()*255, random()*255,random()*255));
  ellipse(mouseX,mouseY, random(50));
  pop();

}

function touchMoved(){
  return false;
}
