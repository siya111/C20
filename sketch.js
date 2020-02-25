var frect, mrect;
function setup() {
  createCanvas(800,400);
  frect = createSprite(200,200,20,5);
  frect.shapeColor = "red";
  mrect = createSprite(200, 100, 20, 5);
  mrect.shapeColor = "blue";
}


function draw() {
  background(255,255,255);  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY; 
  console.log(mrect.x - frect.x);
  if(mrect.x - frect.x < mrect.width/2 + frect.width/2 
    && frect.x - mrect.x < mrect.width/2 + frect.width/2
    && mrect.y - frect.y < mrect.height/2 + frect.height/2
    && frect.y - mrect.y < mrect.height/2 + frect.height/2){
    frect.shapeColor = "green";
    mrect.shapeColor = "purple";
  }
  else{
    frect.shapeColor = "red";
    mrect.shapeColor = "blue";
  }
  drawSprites();
}