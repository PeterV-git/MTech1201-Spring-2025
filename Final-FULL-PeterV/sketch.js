let scene = 0;
let maxScene = 5;

let circleX = 500;
let circleY = 400;

let pikminArmy = [];  // Array to store Pikmin

let tears = [];
let fly;

function setup() {
  createCanvas(1920, 1080);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  rectMode(CENTER);

  if (scene !== 3) {
    background(0, 100, 0);
  }

  if (scene === 0) {
    // Main Menu
    fill(160, 32, 240);
    rect(400, 400, 400, 100);
    rect(1000, 400, 400, 100);
    rect(1600, 400, 400, 100);

    fill(255);
    text("Isaac", 400, 400);
    text("Pikmin", 1000, 400);
    text("Draw", 1600, 400); 

  } else if (scene === 1) {
    // Pikmin Army Scene
    fill(255);
    text("Click to make a Pikmin army!!", width / 2, 50);

    for (let pikmin of pikminArmy) {
      pikmin.display();
    }

  } else if (scene === 2) {
    fill(255);
    text("Make Isaac Cry!!", width / 2, 50);
    drawIsaac();

    } else if (scene === 3) {
    // Draw scene
    fill(255);
    text("Click and drag to draw!!", width / 2, 50);

    if (mouseIsPressed) {
      noStroke();
      fill(255); // Drawing color
      ellipse(mouseX, mouseY, 20, 20);
    }
  }
}

function mousePressed() {
  if (scene === 0) {
    if (mouseX > 400 - 200 && mouseX < 400 + 200 && mouseY > 400 - 50 && mouseY < 400 + 50) {
      scene = 2;
    } else if (mouseX > 1000 - 200 && mouseX < 1000 + 200 && mouseY > 400 - 50 && mouseY < 400 + 50) {
      scene = 1;
    } else if (mouseX > 1600 - 200 && mouseX < 1600 + 200 && mouseY > 400 - 50 && mouseY < 400 + 50) {
      scene = 3;
    }
  } else if (scene === 1) {
    // Add a Pikmin on the mouse position when the player clicky
    pikminArmy.push(new Pikmin(mouseX, mouseY));
  } else if (scene === 2) {
    tears.push(new Tear(250, 400));  // Isaac's eye location (Idk why he looks like that)
  }
}

function drawIsaac() {
  background(233, 116, 81);

  // Draw Isaac
  fill(230, 200, 180);
  rect(150, 300, 200, 1000);
  circle(250, 400, 400);

  fill(0);
  circle(130, 400, 130);
  circle(370, 400, 130);

  fill(255);
  circle(100, 380, 50);
  circle(340, 380, 50);

  fill(0);
  arc(250, 400, 80, 80, 0, PI);

  textSize(100);
  text('Make Isaac Cry!', 600, 100, 600, 600);

  // Spawn fly if it doesn't exist
  if (!fly) {
    fly = new Fly(1000, 400);
  }

  fly.display();

  // Update tears
  for (let i = tears.length - 1; i >= 0; i--) {
    tears[i].move();
    tears[i].display();

    // Check for collision with fly
    if (fly && tears[i].hits(fly)) {
      fly = null;  // Remove fly
      tears.splice(i, 1);  // Remove the tear
    } else if (tears[i].x > width) {
      tears.splice(i, 1);  // Remove if offscreen
    }
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE || keyCode === ESCAPE) {
    scene = 0;
    pikminArmy = [];  // Clear Pikmin on reset
  }
}

// Pikmin Class for array functioning 
class Pikmin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(0.3);  // had to make them tiny or else it was way too big
    noStroke();

    fill(24, 125, 255);
    ellipse(0, 0, 200, 300); 

    fill(255);
    circle(-70, 0, 80);
    circle(70, 0, 80);

    fill(0);
    circle(-70, 0, 50);
    circle(70, 0, 50);

    fill(255, 209, 220);
    triangle(-50, 100, 50, 100, 0, 50);

    fill(24, 125, 255);
    quad(-40, 100, 40, 100, -90, 300, 90, 300);

    strokeWeight(20);
    stroke(24, 125, 255);
    line(-40, 200, -100, 190);
    line(40, 200, 100, 190);
    line(-40, 300, -70, 370);
    line(40, 300, 70, 370);

    strokeWeight(10);
    line(0, -150, 0, -200);
    line(0, -200, 100, -300);

    noStroke();
    fill(255);
    circle(100, -300, 100);
    pop();
  }
}

class Tear {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.speed = 10;
  }

  move() {
    this.x += this.speed;
  }

  display() {
    fill(173, 216, 230);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }

  hits(fly) {
    let d = dist(this.x, this.y, fly.x, fly.y);
    return d < this.r + fly.r;
  }
}

class Fly {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 40;
  }

  display() {
    // Simple cartoon fly
    fill(0);
    ellipse(this.x, this.y, this.r * 2);       // Body
    fill(150);
    ellipse(this.x - 30, this.y - 20, 40, 30); // Left wing
    ellipse(this.x + 30, this.y - 20, 40, 30); // Right wing
  }
}