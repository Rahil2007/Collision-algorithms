var fixedRect;
var movingRect;
var movingRect1;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,20,30);
  movingRect1=createSprite(100,200,20,20)
  movingRect1.velocityX=2
}

function draw() {
  background(255,255,255);  
  drawSprites();
  console.log(Math.abs(fixedRect.x-movingRect.x))
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  //when the distance between the two rects is less than sum of half widths
//<= moving - fixed || fixed - moving
if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2&&
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}

if(Math.abs(movingRect1.x-fixedRect.x)<=movingRect1.width/2+fixedRect.width/2){
  movingRect1.velocityX=-1*movingRect1.velocityX;
}

}