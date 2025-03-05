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

function draw() {
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

