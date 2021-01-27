
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){

binImg = loadImage("sprites/dustbin.png")

}




function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	 Engine.run(engine)
  //Create the Bodies Here.

  bin = createSprite(909,315,20,20);
  bin.addImage(binImg);
  bin.scale = 0.45;

	
	box1 = new Box(860,310,10,140);
	box2 = new Box(954,310,10,140);
	box3= new Box(907,390,80,20);
	
	ground = new Ground(600,height,1200,20)

	paper1 = new Paper(200,200,40)
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  Engine.update(engine);

   
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper1.display();


  drawSprites();
 
}

function keyPressed()
{

  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-100})
  }

}



