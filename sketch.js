var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  movingRect.createSprite(400, 200, 100, 100);
  fixedRect.createSprite(200,200,100,200);
  movingRect.shapeColor="yellow"
  fixedRect.shapeColor="yellow"
  
}

function draw() {
  background('blue');  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeCOlor = "green";
  }
  else{
    fixedRect.shapeColor = "yellow"
    movingRect.shapeColor="yellow"
  }


  drawSprites();
}