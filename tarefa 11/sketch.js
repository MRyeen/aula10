//
//eu tenho que criar imagens ou posso usar essas mesmo?
//
var barco, barco_agua;

var mar, mar_imagem;



function preload(){
mar_imagem=loadImage("sea.png");

barco_agua=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");


}

function setup(){
  createCanvas(400,400);
  
  mar=createSprite(620,200);
  mar.addImage("sea", mar_imagem);
 mar.scale=0.3;

  barco=createSprite(200,200);
  barco.addAnimation("ship", barco_agua);
 barco.scale=0.3;

}

function draw() {
  background("blue");
  
  if(mar.x<=-230){

    mar.x=620;
   }
  
 mar.velocity.x=-5;

  
  drawSprites();

 
}
