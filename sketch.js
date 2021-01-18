
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(360,200,500,25);
	bob1 = new bob(150,400);
	bob2 = new bob(200,400);
	bob3 = new bob(250,400);
	bob4 = new bob(300,400);
	bob5 = new bob(350,400);
	bob6 = new bob(400,400);
	bob7 = new bob(450,400);
	bob8 = new bob(500,400);
	bob9 = new bob(550,400);
	//rope1 = new Chain(bob1,{x:150,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  bob8.display();
  bob9.display();
  //rope1.display();
  drawSprites();
 
}



