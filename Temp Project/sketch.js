function setup() {
  createCanvas(400, 400);
  background(52,204,67)

  fill(255,255,0)

  //Making a Smiley Face

//Face Shape

  circle(200,200,300);

//Eyes

  fill(255,255,255)

  ellipse(100,100,50,150)
  ellipse(300,100,50,150)
  fill(0,0,0)
  ellipse(100,100,20,100)
  ellipse(300,100,20,100)
//smile

  arc(200,250,100,50,80,PI+QUARTER_PI,CHORD);

//Hair

  strokeWeight(10)
  line(200,50,200,10);
  line(200,50,150,20);
  line(200,50,250,20);

}

