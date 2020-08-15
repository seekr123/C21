var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(600, 100, 50, 80);
  obj1.shapeColor = "green";
  obj2 = createSprite(800, 100, 80, 30);
  obj2.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  obj1.x=mouseX;
  obj1.y=mouseY;
  if (keyDown('down')){
  obj2.velocityY=5
  }
  if (isTouching(obj1,obj2)){
    obj1.shapeColor=rgb(122,122,0)
    obj2.shapeColor=rgb(0,122,122)
  }
  else {
    obj1.shapeColor='yellow'
    obj2.shapeColor='red'
  }
  bounceOff(movingRect,fixedRect);

 
  drawSprites();
}

