var bubbles = [];
var nBubbles = 70;
var value = 0;


function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(10);
  setShakeThreshold(10);
}

function draw() {

  background("#73D4FF");
  noStroke();

  fill("white");
  textFont("Arial");
  textSize(17);
  text("Shake to get sparkling water", width / 6, height / 2);

  for (var jiji = 0; jiji < bubbles.length; jiji++) {
    bubbles[jiji].move();
    bubbles[jiji].display();
  }
}

function deviceShaken() {
  value = value + 1;
  for (var i = 0; i < nBubbles; i++) {
    var myBubble = new Bubbles(random(0, width), random(-100, height), random(10, 3));
    bubbles.push(myBubble);
  }
  if (value > 100) {
    value = 0;
  }
}

//Bubbles
function Bubbles(_x, _y, _diameter, _color) {
  this.size = _diameter;
  this.x = _x;
  this.y = _y;

  this.speed = 10;

  var xIncrease = 0;
  var yIncrease = -1;

  this.move = function() {
    this.x += xIncrease * this.speed;
    this.y += yIncrease * this.speed;


    this.display = function() {
      fill(255, 255, 255, 100);
      ellipse(this.x, this.y, this.size);
      push();
      translate(this.x, this.y);
      fill("white");
      ellipse(-this.size / 4, -this.size / 4, this.size / 5);
      pop();
    }
  }
}

function touchMoved() {
  return false;
}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
