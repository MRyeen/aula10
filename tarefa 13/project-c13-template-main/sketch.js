var garden,rabbit;
var gardenImg,rabbitImg;
var score;
score=0;

console.log(score);

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {

  

  //if (keyDown("left")){
    //rabbit.x=rabbit.x-5;
  //}
     
  //if (keyDown("right")){
    //rabbit.x=rabbit.x+5;
  //}

  rabbit.x=World.mouseX;

  if (rabbit.isTouching="apple"){
    score=score+10;
  }

  if (rabbit.isTouching="red"){
    score=score-50;
  }

  if (rabbit.isTouching="orange"){
    score=score-25;
  }

  background(0);

  spawnOrange()

  spawnApple();

  spawnRed();

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}

  function spawnApple(){
  if(frameCount%60===0){
   // cloud=createSprite(600,rand=Math.round(random(50,100)),40,10);
   apple=createSprite(200,0,40,10);
   apple.addImage("apple.png", appleImg);
   apple.x=Math.round(random(50,350));
   apple.scale=0.05;
   apple.velocityY=3;
   apple.lifetime=150;
  }
  }

 function spawnRed(){
  if(frameCount%60===0){
   // cloud=createSprite(600,rand=Math.round(random(50,100)),40,10);
   red=createSprite(200,0,40,10);
   red.addImage("redImage.png", redImg);
   red.x=Math.round(random(50,350));
   red.scale=0.05;
   red.velocityY=4;
   red.lifetime=150;
    }
   }


   function spawnOrange(){
    if(frameCount%60===0){
     // cloud=createSprite(600,rand=Math.round(random(50,100)),40,10);
     orange=createSprite(200,0,40,10);
     orange.addImage("orangeLeaf.png", orangeImg);
     orange.x=Math.round(random(50,350));
     orange.scale=0.05;
     orange.velocityY=5;
     orange.lifetime=150;
      }
     }