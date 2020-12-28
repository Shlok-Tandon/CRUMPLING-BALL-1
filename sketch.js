
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper0 = new Paper();

	b1 = new Dustbin(800,370,200,15);
	b2 = new Dustbin(700,327,15,100);
	b3 = new Dustbin(900,327,15,100);
	
	ground = new Ground();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  paper0.display();

  b1.display();
  b2.display();
  b3.display();

  ground.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed () {

	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paper0.body,paper0.body.position,{x:10,y:-20} );
		
	}
}



