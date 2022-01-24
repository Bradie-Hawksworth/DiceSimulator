function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  diceValueOne(180, 310, 180);

}

//This is a user defined function for drawing a dice with the value one.
function diceValueOne(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size/2) + xPoint,(size/2) + yPoint);
}

function diceValueTwo(size){
  strokeWeight(size * 0.01);
  square(70, 20, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + 70,(size * 0.25) + 20);
  point((size * 0.75) + 70,(size * 0.75) + 20);
}

function diceValueThree(size){
  strokeWeight(size * 0.01);
  square(120, 20, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + 120,(size * 0.25) + 20);
  point((size/2) + 120,(size/2) + 20);
  point((size * 0.75) + 120,(size * 0.75) + 20);
}

function diceValueFour(size){
  strokeWeight(size * 0.01);
  square(20, 70, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + 20,(size * 0.25) + 70);
  point((size * 0.25) + 20,(size * 0.75) + 70);
  point((size * 0.75) + 20,(size * 0.25) + 70);
  point((size * 0.75) + 20,(size * 0.75) + 70);
}

function diceValueFive(size){
  strokeWeight(size * 0.01);
  square(70, 70, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + 70,(size * 0.25) + 70);
  point((size * 0.25) + 70,(size * 0.75) + 70);
  point((size * 0.75) + 70,(size * 0.25) + 70);
  point((size * 0.75) + 70,(size * 0.75) + 70);
  point((size/2) + 70,(size/2) + 70);
}

function diceValueSix(size){
  strokeWeight(size * 0.01);
  square(120, 70, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + 120,(size * 0.25) + 70);
  point((size * 0.25) + 120,(size * 0.5) + 70);
  point((size * 0.25) + 120,(size * 0.75) + 70);
  point((size * 0.75) + 120,(size * 0.25) + 70);
  point((size * 0.75) + 120,(size * 0.75) + 70);
  point((size * 0.75) + 120,(size * 0.5) + 70);
}
