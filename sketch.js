
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	 Engine.run(engine)
	//Create the Bodies Here.
	
	box1 = new Box(770,300,40,170);
	box2 = new Box(969,300,40,170);
	box3= new Box(870,375,160,20);
	
	ground = new Ground(600,height,1200,20)

	paper1 = new Paper(200,200,30)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

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
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
  }

}



