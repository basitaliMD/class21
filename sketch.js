
var fixedRect, movingRect;
var g1, g2;

function setup() {
  createCanvas(1200,800);
 
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 80);
  fixedRect.shapeColor = "green";

  g2 = createSprite(200, 100, 50, 80);
  g2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  else if(isTouching(movingRect,g2)){
    movingRect.shapeColor = "blue";
    g2.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
    g2.shapeColor = "green";
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



