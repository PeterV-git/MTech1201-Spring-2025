//Peter Velotti SS_4 Epic Ceratosaurus Click to make a Brachiosaurus appear and after 10 seconds a pteranadon will appear
function preload(){
  Ceratosaurus = loadImage ("images/Ceratosaurus.png");
  Longneck = loadImage ("images/Longneck.png")
  Flying = loadImage ("images/Flying.png")
}

function setup() {
  createCanvas(1200, 800);
  background(20,150,0)
  textSize(100)
  
}

function draw() {
  let time = millis();
  text("EPIC CERATOSAURUS",50,100);
  image(Ceratosaurus,200,200);
  
  if(mouseIsPressed){
  image(Longneck,600,200);
  text("EPIC BRACHIOSAURUS",50,700);
  }

  if(time >= 10000){
    image(Flying,300,50)
  }

}
