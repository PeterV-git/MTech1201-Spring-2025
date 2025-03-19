//Peter Velotti 
//Blue Pikmin :)
//I wanted to make a pikmin because I thought it would be cute and its something that I like and I can take a lot from the franchise for future projects

function setup(){
  createCanvas(1280,1280);

  background(13,54,13);

  stroke(24,125,255);

  fill(24,125,255);

  ellipse(640,500,200,300);

  //continue to use the same stroke and fill for the rest of the main body parts

  fill(255,255,255);
  stroke(255,255,255);

//eyes

  circle(570,500,80);
  circle(710,500,80);
  
  fill(0,0,0);

//pupils
  
  circle(570,500,50);
  circle(710,500,50);

  //he is kinda creepy at this point ]

  fill(255,209,220);

  triangle(590,600,690,600,640,550);

  stroke(24,125,255);

  fill(24,125,255);

//body

  quad(600,600,680,600,550,900,750,900);

  //DRAWING QUADRILATERALS IS SO DAMN HARD 

//left arm

strokeWeight(50);

line(600,720,500,700);

//right arm

line(690,720,800,700);

//left leg

line(600,900,570,1000);

//right leg

line(700,900,700,1000);

//stem

line(640,400,640,300);
line(640,300,750,200);

fill(255,255,255);
strokeWeight(0)
circle(750,200,100);

}