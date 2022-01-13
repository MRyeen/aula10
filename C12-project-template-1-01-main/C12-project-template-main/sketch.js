var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  boyImg=loadAnimation("runner-1.png","runner-2.png");
  pathImg=loadImage("path.png");
  i=loadImage("bomb.png")
}

function setup(){
  
  createCanvas(400,400);
 path=createSprite(200,200);
 path.addImage("pathImg",pathImg);
 path.scale=1.2;

 boy=createSprite(200,350);
 boy.addAnimation("boyImg",boyImg);
 boy.scale=0.08;
  

 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible=false;


 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
 if (keyDown("left")){
 boy.x=boy.x-5;
 }
  
 if (keyDown("right")){
   boy.x=boy.x+5;
 }
  



 spawnClouds();

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

function spawnClouds(){
  if(frameCount%60===0){
   // cloud=createSprite(600,rand=Math.round(random(50,100)),40,10);
   cloud=createSprite(200,0,40,10);
   cloud.addImage("bomb.png", i);
   cloud.x=Math.round(random(30,370));
   cloud.scale=0.09;
   cloud.velocityY=3;
  }
 }