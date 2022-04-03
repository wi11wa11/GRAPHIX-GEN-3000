// William Wallis ---- s3773723
// 04/04/2022
// Computational Prototyping
// RMIT University

let yoff = 0;
let noiseValue = 1;
let brushSize = 150; //radius of blob
let x1;
let y1;
let x2;
let y2;
let r, g, b;

let drawMode = 1;

let brushCounterLimit = 10;
let brushCounter = 0;
let img;

let start = 0;

function preload() {
  img = [
    //loadImage("drawTool2323.png"),
    //loadImage('drawTool (3).png'),
    //loadImage('drawTool (4).png'),
    loadImage("drawTool (5).png"),
    loadImage("drawTool111.png"),
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNER);
  background(220);

  if (start == 0) {
    textSize(32);
    text("GRAPHIX GEN 3000", 100, 100);
    textSize(26);
    textStyle(ITALIC);
    text("Press Enter to start creating ur graphic experience", 100, 150);
    textStyle(NORMAL);
    textSize(22);
    text(" (~˘▾˘)~  use keys 1,2,3,5 to switch brushes", 100, 200);
    text("               use keys shift and 4 to use makeRects !!!", 100, 225);
    text("               use z to save ur l33t graphix!", 100, 250);
    text("               use bkspc to clear screen!", 100, 275);
    text("               experiment to find more interaction!!!!!!", 100, 300);
    textSize(15);
    textStyle(ITALIC);
    text("               by w1llw@ll ", 100, 500);
  } //text startup
}

function draw() {
  if (start == 1) {
    //all draw functions wrapped in this if statement
    //draw blobShape geometry
    if (drawMode == 1) {
      if (mouseIsPressed == true) blobShape();
    }

    if (drawMode == 2) {
      if (mouseIsPressed == true) blobDotShape();
    }

    if (drawMode == 3) {
      if (mouseIsPressed == true) blobLineShape();
    }

    //to draw rectangles first set the x1 and y1 using SHIFT key
    //draw rectangle by holding CONTROL and clicking mouse at rect x2, y2 position
    //holding and dragging mouse will overlay MANY rects
    //pressing mouse ONCE will draw ONE rect
    if (drawMode == 4) {
      if (mouseIsPressed == true) manyRect();
    }

    //img brush
    if (drawMode == 5) {
      if (mouseIsPressed == true) imgBrush();
    }
  }
}

function blobShape() {
  push();
  translate(mouseX, mouseY); //translates to mouse
  noFill();
  strokeWeight(0.5); //!!!ADJUST!!! stroke weight

  beginShape(); //starts shape made with vertices
  let xoff = 0; // need to put this outside loop

  //loops angle (a), TWO_PI to have full circle, PI just does half circle
  //angleMode is in RADIANS so we are counting up by 0.1
  for (let a = 0; a < TWO_PI; a += 0.1) {
    //this does perlin noise at a specified offest reference point,
    //maps offset to a perlin noise influenced value
    //the noise * (xoff, yoff) moves betwen 0 and 1
    //mapped to between -25 and 25?
    //don't fully understand but now all the points I made move around
    let offset = map(noise(xoff, yoff), 0, noiseValue, -25, 25);

    // r is local variable used to calculate x and y values
    let r = brushSize + offset;

    //this is doing polar to cartesian coordinate translation
    //dont fully understand but this now gives me lots of points around a central point
    let x = r * sin(a);
    let y = r * cos(a);

    vertex(x, y); //draws vertices at x and y coords given by translation

    xoff += 0.1; // !!!ADJUST!!! value to get more variation in geometry
  }
  endShape(CLOSE); //CLOSE closes the vertexes from the last one to the start
  pop();
  yoff += 0.01;
}

function blobDotShape() {
  push();
  translate(mouseX, mouseY); //translates to mouse
  noFill();
  strokeWeight(0.5); //!!!ADJUST!!! stroke weight

  beginShape(POINTS); //starts shape made with vertices
  let xoff = 0; // need to put this outside loop

  //loops angle (a), TWO_PI to have full circle, PI just does half circle
  //angleMode is in RADIANS so we are counting up by 0.1
  for (let a = 0; a < TWO_PI; a += 0.1) {
    //this does perlin noise at a specified offest reference point,
    //maps offset to a perlin noise influenced value
    //the noise * (xoff, yoff) moves betwen 0 and 1
    //mapped to between -25 and 25?
    //don't fully understand but now all the points I made move around
    let offset = map(noise(xoff, yoff), 0, noiseValue, -25, 25);

    // r is local variable used to calculate x and y values
    let r = brushSize + offset;

    //this is doing polar to cartesian coordinate translation
    //dont fully understand but this now gives me lots of points around a central point
    let x = r * sin(a);
    let y = r * cos(a);

    vertex(x, y); //draws vertices at x and y coords given by translation

    xoff += 0.1; // !!!ADJUST!!! value to get more variation in geometry
  }
  endShape(CLOSE); //CLOSE closes the vertexes from the last one to the start
  pop();
  yoff += 0.01;
}

function blobLineShape() {
  push();
  translate(mouseX, mouseY); //translates to mouse
  noFill();
  strokeWeight(0.5); //!!!ADJUST!!! stroke weight

  beginShape(LINES); //starts shape made with vertices
  let xoff = 0; // need to put this outside loop

  //loops angle (a), TWO_PI to have full circle, PI just does half circle
  //angleMode is in RADIANS so we are counting up by 0.1
  for (let a = 0; a < TWO_PI; a += 0.1) {
    //this does perlin noise at a specified offest reference point,
    //maps offset to a perlin noise influenced value
    //the noise * (xoff, yoff) moves betwen 0 and 1
    //mapped to between -25 and 25?
    //don't fully understand but now all the points I made move around
    let offset = map(noise(xoff, yoff), 0, noiseValue, -25, 25);

    // r is local variable used to calculate x and y values
    let r = brushSize + offset;

    //this is doing polar to cartesian coordinate translation
    //dont fully understand but this now gives me lots of points around a central point
    let x = r * sin(a);
    let y = r * cos(a);

    vertex(x, y); //draws vertices at x and y coords given by translation

    xoff += 0.1; // !!!ADJUST!!! value to get more variation in geometry
  }
  endShape(CLOSE); //CLOSE closes the vertexes from the last one to the start
  pop();
  yoff += 0.01;
}

function manyRect() {
  x2 = mouseX;
  y2 = mouseY;
  strokeWeight(0);

  fill(r, g, b, 20);
  rect(x1, y1, x2 - x1, y2 - y1); //makes rectangles to mouse point
}

function imgBrush() {
  push();
  translate(mouseX, mouseY);
  rotate(random(0, 20));
  let imageWidth = random(50, 200);
  incrementBrushCounter(); //counts brushcounter
  if (brushCounter == 0) {
    // every time counter = 0 code executes
    tint(255, random(50, 200));
    image(random(img), 0, 0, imageWidth, imageWidth);
  }
  pop();

  function incrementBrushCounter() {
    brushCounter++; // counts up
    if (brushCounter > brushCounterLimit) {
      //when counter exceeds limit value reset to 0
      brushCounter = 0;
    }
  }
}

function keyReleased() {
  if (key == "1") drawMode = 1; //blob
  if (key == "2") drawMode = 2; //dots
  if (key == "3") drawMode = 3; //lines
  if (key == "4") drawMode = 4; //rects
  if (key == "5") drawMode = 5; //imgBrush
}

function keyPressed() {
  //press enter to start painting
  if (keyCode == ENTER) {
    start = 1;
    background(220);
  }

  //press delete or backspace to clear background
  if (keyCode == DELETE || keyCode == BACKSPACE) background(220);

  //press z to save your canvas
  if (key == "z") saveCanvas("drawTool-new");

  //adjust brushSize
  if (key == "w") brushSize += 10;
  if (key == "s") brushSize -= 10;

  //adjustNoise
  if (keyCode == UP_ARROW) noiseValue -= 0.05;
  if (keyCode == DOWN_ARROW) noiseValue += 0.05;

  //reset values
  if (key == "r") {
    brushSize = 150;
    noiseValue = 1;
  }
  //sets rect brush x, y values and color values
  if (keyCode == SHIFT) {
    x1 = mouseX;
    y1 = mouseY; //sets x1 and y1 values for corner of rects

    print("value = " + x1);
    print("value = " + y1);

    r = random(255);
    g = random(255);
    b = random(255);
  }
}
