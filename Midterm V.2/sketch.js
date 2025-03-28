let scene = 0;  // Track current scene
let maxScene = 5;  // Set max scenes (scene 0 for main menu, scene 1 for Pikmin, scene 2 for Isaac)

let circleX = 500; 
let circleY = 400; 

function setup() {
  createCanvas(1920, 1080);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  rectMode(CENTER);
  background(0, 100, 0);  

  if (scene === 0) {
    // Main Menu Scene
   
    fill(160, 32, 240);
    rect(400, 400, 400, 100);  // Isaac button
    rect(1000, 400, 400, 100);  // Pikmin button
    rect(1600, 400, 400, 100);  // Dinos button
    
    
    fill(255);
    text("Isaac", 400, 400);  
    text("Pikmin", 1000, 400);  
    text("Dinos", 1600, 400);

  } else if (scene === 1) {
    // Scene 1 (Pikmin army scene)
    fill(255); 
    text("Click to make a Pikmin army!!", width / 2, 50); 
    // You can add Pikmin drawing here if necessary
  } else if (scene === 2) {
    // Scene 2 (Make Isaac Cry scene)
    fill(255);
    text("Make Isaac Cry!!", width / 2, 50);
    
    // Call Isaac crying animation when in scene 2
    drawIsaac();
  }
}

// Mouse pressed function to handle scene transition and actions
function mousePressed() {
  // Check if the mouse is clicked inside the "Isaac" button (scene 0)
  if (scene === 0) {
    if (mouseX > 400 - 200 && mouseX < 400 + 200 && mouseY > 400 - 50 && mouseY < 400 + 50) {
      scene = 2;  // Transition to Scene 2 (Isaac crying)
    }
    // Check if the mouse is clicked inside the "Pikmin" button (scene 0)
    else if (mouseX > 1000 - 200 && mouseX < 1000 + 200 && mouseY > 400 - 50 && mouseY < 400 + 50) {
      scene = 1;  // Transition to Scene 1 (Pikmin army)
    }
    // Check if the mouse is clicked inside the "Dinos" button (scene 0)
    else if (mouseX > 1600 - 200 && mouseX < 1600 + 200 && mouseY > 400 - 50 && mouseY < 400 + 50) {
      scene = 3;  // You can add functionality for Dinos later if needed
    }
  }
}

// Draw Isaac crying animation in Scene 2
function drawIsaac() {
  circleX = 500;
circleY = 400;

function setup() {
  //canvas background
  createCanvas(1200,800);
  background(233, 116, 81);
  //head and and body plus skin color
  fill(230, 200, 180);
  rect(150,300,200,1000);
  circle(250,400,400);
  //tears
  //fill(173, 216, 230);
  //rect(80,400,100,200);
  //rect(320,400,100,200);
  //eyes
  fill(0,0,0);
  circle(130,400,130);
  circle(370,400,130);
  //mouth
  arc(250,400,80,80,0,PI);
  //eye glint
  fill(255,255,255);
  circle(100,380,50)
  circle(340,380,50)
  //Text
  textSize(100)
  text('Make Isaac Cry!',600,100,600,600);
}

function drawIsaac() {
  createCanvas(1200,800);
  background(233, 116, 81);
   //head and and body plus skin color
   fill(230, 200, 180);
   rect(150,300,200,1000);
   circle(250,400,400);
   //tears
   if (mouseIsPressed) 
    {fill(173, 216, 230);
    rect(80,400,100,200);
    rect(320,400,100,200);
   //tear shot
    fill(173, 216, 230);
   circle(circleX,circleY,80);
    circleX += 5;}

   //eyes
   fill(0,0,0);
   circle(130,400,130);
   circle(370,400,130);
   //mouth
   arc(250,400,80,80,0,PI);
   //eye glint
   fill(255,255,255);
   circle(100,380,50)
   circle(340,380,50)
   //Text
   textSize(100)
   text('Make Isaac Cry!',600,100,600,600);
   //tear shot
  fill(173, 216, 230);
    }
  }