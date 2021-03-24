
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper, paperPNG;
var world;


function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);

	angleMode(RADIANS);

	window.addEventListener("keydown", (e)=>{
		if(e.key=="ArrowRight") {
			Body.applyForce(paper.body, {y:paper.body.position.y, x:paper.body.position.x}, {x:5, y:-30})
		}
		if(e.key=="ArrowUp") {
			Body.applyForce(paper.body, {y: paper.body.position.y+10, x: paper.body.position.x}, {x: 0, y: -50});
		}
	})

	paperPNG=loadImage("paper.png")


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,470,width,20);
	dustbinObj=new dustbin(700,450);
	paper = new Paper(200, 350);
	
	world.gravity.y = 0.07
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.run(engine);

  groundObject.display();
  dustbinObj.display();
  paper.display();

}