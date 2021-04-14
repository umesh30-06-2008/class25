const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var ground,Ball
var binImg,bin

function preload() {
	binImg = loadImage("dustbingreen.png")
  paperImg = loadImage("paper.png");
}
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground();
  crumpledpaper = new Paper();

	bin = createSprite(900,520,20,20);
	bin.addImage("bin",binImg);
	bin.scale = 0.45;

  crumpledpaper = createSprite(100,560,10);
	crumpledpaper.addImage("paper",paperImg);
	crumpledpaper.scale = 0.4

}

function draw() {
  background(230);
  Engine.update(engine);

 


  ground.display();
  crumpledpaper.display();

  drawSprites();
  keyPressed();
}


  function keyPressed(){
     if(keyCode === UP_ARROW) {

     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});


    }
      }
      