function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  diceValueOne();
  diceValueTwo();
  diceValueThree();
  diceValueFour();
  diceValueFive();
  diceValueSix();
}

//This is a user defined function for drawing a dice with the value one.
function diceValueOne(){
  strokeWeight(1);
  square(20, 20, 40);
  strokeWeight(5);
  point(40,40);
}

function diceValueTwo(){
  strokeWeight(1);
  square(70, 20, 40);
  strokeWeight(5);
  point(80,30);
  point(100,50);
}

function diceValueThree(){
  strokeWeight(1);
  square(120, 20, 40);
  strokeWeight(5);
  point(130,30);
  point(140,40);
  point(150,50);
}

function diceValueFour(){
  strokeWeight(1);
  square(20, 70, 40);
  strokeWeight(5);
  point(30,80);
  point(50,80);
  point(30,100);
  point(50,100);
}

function diceValueFive(){
  strokeWeight(1);
  square(70, 70, 40);
  strokeWeight(5);
  point(80,80);
  point(100,80);
  point(90,90);
  point(80,100);
  point(100,100);
}

function diceValueSix(){
  strokeWeight(1);
  square(120, 70, 40);
  strokeWeight(5);
  point(130,80);
  point(150,80);
  point(130,90);
  point(150,90);
  point(150,100);
  point(130,100);
}
