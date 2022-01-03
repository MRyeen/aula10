var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a66f9edf-dac1-447c-9a2f-260f0d111b16","4f3114e2-b27e-400d-bc1d-73d9487782b6","3dc06f97-2e93-4034-a8d8-e63ff9561b05"],"propsByKey":{"a66f9edf-dac1-447c-9a2f-260f0d111b16":{"name":"roberto","categories":["people"],"frameCount":1,"frameSize":{"x":119,"y":383},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-15 21:45:01 UTC","pngLastModified":"2021-01-15 21:45:02 UTC","version":"zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP","sourceUrl":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png","sourceSize":{"x":119,"y":383},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png"},"4f3114e2-b27e-400d-bc1d-73d9487782b6":{"name":"jogo1","categories":["household_objects"],"frameCount":1,"frameSize":{"x":94,"y":57},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:16:07 UTC","pngLastModified":"2021-01-05 19:16:17 UTC","version":"XZxz72M6r.iOeeaRofipj0vRgjL182kH","sourceUrl":"assets/api/v1/animation-library/gamelab/XZxz72M6r.iOeeaRofipj0vRgjL182kH/category_household_objects/game_controller.png","sourceSize":{"x":94,"y":57},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/XZxz72M6r.iOeeaRofipj0vRgjL182kH/category_household_objects/game_controller.png"},"3dc06f97-2e93-4034-a8d8-e63ff9561b05":{"name":"soap_1","categories":["household_objects"],"frameCount":1,"frameSize":{"x":382,"y":387},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:16:14 UTC","pngLastModified":"2021-01-05 19:16:20 UTC","version":"GlmZcmandJZzlDkazV66DhdYJnBJZoz8","sourceUrl":"assets/api/v1/animation-library/gamelab/GlmZcmandJZzlDkazV66DhdYJnBJZoz8/category_household_objects/soap.png","sourceSize":{"x":382,"y":387},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/GlmZcmandJZzlDkazV66DhdYJnBJZoz8/category_household_objects/soap.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//o jogo mais dificil do mundo(agora eu faço certo :b)
//
var tempo=0;

var gameState="play";

var eu=createSprite(30,330,10,10);
eu.setAnimation("roberto");
eu.scale=0.3;

var terminarObg=createSprite(200,30,400,10);
terminarObg.scale=0.19;
terminarObg.setAnimation("soap_1");

var jogo1=createSprite(35,215,10,10);
jogo1.setAnimation("jogo1");
jogo1.scale=0.5;

var jogo2=createSprite(200,175,10,10);
jogo2.setAnimation("jogo1");
jogo2.scale=0.5;

playSound( "assets/category_loops/vibrant_game_coming_back_vibe_loop_1.mp3",true);

function draw() {
  background("white");
  createEdgeSprites();
 
 fill("black");
textSize(30);
text("hora:"+tempo+" da tarde",10,100);
 
 if (gameState=="play"){
textSize(20);
text("precione espaço para começar",60,300);
  
jogo1.bounceOff(edges);
jogo2.bounceOff(edges);
eu.bounceOff(edges);

if(keyDown("space")){
jogo1.velocityX=15;

jogo2.velocityX=-12; 
}
  
  if (keyDown("left")){
  eu.x=eu.x-5;
  
  }
  
  if (keyDown("right")){
  eu.x=eu.x+5;
  
  }
  
  if (keyDown("up")){
  eu.y=eu.y-5;
  
  }
  
  if (keyDown("down")){
  eu.y=eu.y+5;
  
  }
  
  if (eu.isTouching(jogo1)||(eu.isTouching(jogo2))){
  eu.x=30;
  eu.y=330;
 tempo=tempo+1;
 
 playSound( "assets/category_hits/8bit_splat.mp3");
  }
  
  if(tempo==6){

  gameState="fim";

playSound("assets/category_points/negative_point_counter.mp3");

jogo1.velocityX=0;
jogo2.velocityX=0;
  }
  
  if(eu.isTouching(terminarObg)){
gameState="ganhar";
  
jogo1.velocityX=0;
jogo2.velocityX=0;

 playSound( "assets/category_points/vibrant_game_cartoon_musical_bling_1.mp3");
  
  }
 }
 
 if(gameState=="fim"){
 fill("black");
textSize(25);
text("acabou o tempo!",140,250);
text("precione R para recomeçar",60,300);

if(keyDown("r")){

jogo1.x=35;
jogo2.x=200;
eu.x=30;
eu.y=330;
tempo=0;

gameState="play";
}
 }
 
 if(gameState=="ganhar"){

 
 fill("black");
textSize(25);
text("você conseguiu!",140,250);
 
 text("precione R para recomeçar",60,300);
 
 if(keyDown("r")){

jogo1.x=35;
jogo2.x=200;
eu.x=30;
eu.y=330;
tempo=0;

gameState="play";
}
 
 }
drawSprites();
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
