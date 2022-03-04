
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane
var bloco1
var block2
var rotator1
var rotator2
var rotator3
var angle1
var angle2
var angle3
var particle1
var particle2
var particle3
var particle4
var particle5
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	angle1 = 60
	angle2 = 60
	angle3 = 60

	engine = Engine.create();
	world = engine.world;
	
	var particles_options={
		restitution:0.4,
		friction:0.02
	}

	var plane_options={
		isStatic:true
	}

	var bloco2_options={
		isStatic:true
	}
	var bloco1_options={
		isStatic:true
	}
	var rotator1_options={
		isStatic:true
	}

	var rotator2_options={
		isStatic:true
	}
	
	var rotator3_options={
		isStatic:true
	}

	//Crie os Corpos aqui.
	particle1=Bodies.circle(350,100,20,particles_options)
	World.add(world,particle1);
	particle2=Bodies.circle(350,105,20,particles_options)
	World.add(world,particle2);
	particle3=Bodies.circle(350,110,20,particles_options)
	World.add(world,particle3);	
	particle4=Bodies.circle(350,115,20,particles_options)
	World.add(world,particle4);
	particle5=Bodies.circle(350,120,20,particles_options)
	World.add(world,particle5);
	plane = Bodies.rectangle(355,610,700,20,plane_options);
    World.add(world,plane);
	
	bloco1=Bodies.rectangle(100,450,300,40,bloco1_options);
	World.add(world,bloco1);
	
	bloco2=Bodies.rectangle(600,450,100,40,bloco2_options);
	World.add(world,bloco2);

	rotator1=Bodies.rectangle(350,150,100,40,rotator1_options);
	World.add(world,rotator1);
	rotator2=Bodies.rectangle(350,150,100,40,rotator2_options);
	World.add(world,rotator2);
	rotator3=Bodies.rectangle(350,150,100,40,rotator3_options);
	World.add(world,rotator3);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(277);
  Engine.update(engine);
  ellipse(particle1.position.x,particle1.position.y,20);
  ellipse(particle2.position.x,particle2.position.y,20);
  ellipse(particle3.position.x,particle3.position.y,20);
  ellipse(particle4.position.x,particle4.position.y,20);
  ellipse(particle5.position.x,particle5.position.y,20);
  
  rect(bloco2.position.x,bloco2.position.y,150,20);
  rect(bloco1.position.x,bloco1.position.y,150,20);
  rect(plane.position.x,plane.position.y,750,20);

 rect(rotator3.position.x,rotator3.position.y,200,20);
 rect(rotator2.position.x,rotator2.position.y,200,20);
 
	push();
	rect(rotator1.position.x,rotator1.position.y,200,20);
	Matter.Body.rotate(rotator3,angle3)
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1)
	rect(0,0,150,20)
	pop()
	angle1=angle1+50
	
	
	

	push();
	rect(rotator2.position.x,rotator2.position.y,200,20);
	Matter.Body.rotate(rotator2,angle2)
	translate(rotator2.position.x,rotator2.position.y);
	rotate(angle2)
	rect(0,0,150,20)
	pop()
	angle2=angle2+100

	push();
	rect(rotator3.position.x,rotator3.position.y,200,20);
	Matter.Body.rotate(rotator3,angle3)
	translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3)
	rect(0,0,150,20)
	pop()
	angle3=angle3+25
 drawSprites();
 
}



