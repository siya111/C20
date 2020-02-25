var frect, mrect;
function setup() {
  createCanvas(800,800);
  frect = createSprite(400,100,20,5);
  frect.shapeColor = "red";
  frect.velocityY = 5;
  mrect = createSprite(400, 800, 20, 25);
  mrect.shapeColor = "blue";
  mrect.velocityY = -4;
}

function draw(){
    background("black");
    if(mrect.x - frect.x < mrect.width/2 + frect.width/2 
        && frect.x - mrect.x < mrect.width/2 + frect.width/2){
            mrect.velocityX = mrect.velocityX * (-1);
            frect.velocityX = frect.velocityX * (-1);
        }
    if(mrect.y - frect.y < mrect.height/2 + frect.height/2
        && frect.y - mrect.y < frect.height/2 + mrect.height/2){
            frect.velocityY = frect.velocityY * (-1);
            mrect.velocityY = mrect.velocityY * (-1);
        }
    drawSprites();
}