//declarar as variaveis
var corredor,corredorimg,corredorcai
var pedra,pedraimg
var passaro,passaroimg
var fundo,fundoimg
var gameState 
var pontuacao
var invchao
var obstaculosgp
var fimdejogo
var fimdejogoimg
var dimagp
var dimaimg
var blocodimaimg
var corredorcaiu
//objetivo: o steve tem que coletar os diamantes e desviar das pedras e dos passaros 
function preload(){
    //carregar as imagens
    pedraimg=loadImage("Stone_Bricks_JE3_BE2.png");
    passaroimg=loadImage("paraguaio.png");
    corredorimg=loadImage("steveanda.png");
    fundoimg=loadImage("fundo.png")
    dimaimg=loadImage("dima.png")
    blocodimaimg=loadImage("blocodima.png")
    fimdejogoimg=loadImage("gameOver.png")
    corredorcai=loadImage("steve.png")
}

function setup() {
    // criar sprites e coisas que vou usar somente uma vez
    gameState="PLAY"
    pontuacao=0
    createCanvas(windowWidth, windowHeight);

    invchao=createSprite(30,480,200,20)

    fimdejogo=createSprite(300,200)
    fimdejogo.addImage("fim",fimdejogoimg)

    fundo=createSprite(windowWidth-160, windowHeight-200)
    fundo.addImage("fundo",fundoimg)
    fundo.scale=9
    
    corredor=createSprite(30,450,20,50);
    corredor.addImage("corredor",corredorimg);
    corredor.scale=0.1

    corredorcaiu=createSprite(100,450,20,50)
        corredorcaiu.addImage("cai",corredorcai);
        corredorcaiu.scale=0.3
    
    obstaculosgp=createGroup();
    dimagp=createGroup();
    invchao.visible=false

}

function draw() {
    background("black")
    
    if(gameState=="PLAY") {
        //coisas que aparecerão no meio do jogo
        corredorcaiu.visible=false
        fimdejogo.visible=false;
        fundo.velocityX=-(6 + 1*pontuacao/100);
        if (fundo.x<200){
            fundo.x=windowWidth-160
        }
        corredor.velocityY=corredor.velocityY+0.2
        corredor.collide(invchao)
        if (dimagp.isTouching(corredor)){
            dimagp.destroyEach()
        }
        spawncoisas();
        geradima();
        
        if(keyDown("space")&& (corredor.y>380)){
            corredor.velocityY=-7
        }
        if(obstaculosgp.isTouching(corredor)){
            gameState="END"
            obstaculosgp.destroyEach()
        }
       
    }

    if(gameState=="END"){
        //coisas que aparecerão no final do jogo
        obstaculosgp.velocityX=0;
        corredor.velocityY=0;
        fundo.velocityX=0;
        corredor.visible=false;
        obstaculosgp.visible=false;
        fimdejogo.visible=true
        fimdejogo.depth=corredor.depth
        corredorcaiu.visible=true
        corredorcaiu.depth=corredor.depth
        
        if (keyDown("space")){
            //resetar o jogo
            reset();
        }
        
        
       
    }
    

    drawSprites();
    text("precione espaço para recomeçar",windowWidth/2, windowHeight/2,200,50)
}

function spawncoisas(){
    //função para gerar os obstaculos
    if (World.frameCount % 100 == 0){
    var rand = Math.round(random(1,2));
    switch(rand) {
  case 1: pedra=createSprite(windowWidth, windowHeight-200)
        pedra.addImage("pedra",pedraimg);
        pedra.scale=0.3
        pedra.lifetime=200
        pedra.velocityX=fundo.velocityX=-(6 + 1*pontuacao/100);
        obstaculosgp.add(pedra)
          break;
  case 2:passaro=createSprite(windowWidth, windowHeight-400) 
        passaro.addImage("passaro",passaroimg);
        passaro.lifetime=200
        passaro.scale=0.3
        passaro.velocityX=fundo.velocityX=-(6 + 1*pontuacao/100);
        obstaculosgp.add(passaro)
          break;
  default: break;
     }
    }

} 

function reset(){
    //função parar reiniciar o jogo
    pontuacao=0;
    obstaculosgp.visible=true;
    corredor.visible=true;
    corredor.velocityY=10;
    gameState="PLAY";
    
}
function geradima(){
    //função para gerar os diamantes
    if (World.frameCount % 500 == 0){
        var rand = Math.round(random(1,2));
        switch(rand) {
      case 1: dima=createSprite(windowWidth, windowHeight-200)
            dima.addImage("pedra1",dimaimg);
            dima.scale=0.3
            dima.lifetime=350
            dima.velocityX=fundo.velocityX=-(4 + 1*pontuacao/100);
            dimagp.add(dima)
            if(dima.isTouching(corredor)){
                pontuacao=pontuacao+1
            }
              break;
      case 2:blocodima=createSprite(windowWidth, windowHeight-400) 
            blocodima.addImage("passaro1",blocodimaimg);
            blocodima.lifetime=500
            blocodima.scale=0.3
            blocodima.velocityX=fundo.velocityX=-(2 + 2*pontuacao/100);
            dimagp.add(blocodima)
            if(blocodima.isTouching(corredor)){
                pontuacao=pontuacao+5
            }
              break;
      default: break;
         }
        }
}