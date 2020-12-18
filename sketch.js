
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	//boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,670,1500,20);
	tree = new Tree(900,350,650,1000);
	stone = new Stone(140,530,40,40);

	//boy = createSprite(200,590);
	//boy.addImage("boy",boyImage);
	//boy.scale=0.12;
	
    boy = new Boy(200,590,300,150);
	mango1 = new Mango(650,220,50,50);
	mango2 = new Mango(520,220,60,50);
	mango3 = new Mango(570,250,40,40);
	mango4 = new Mango(600,180,50,50);
	mango5 = new Mango(700,230,40,40);
	mango6 = new Mango(800,300,70,70);
	mango7 = new Mango(750,280,80,80);
	mango8 = new Mango(1000,200,90,90);
	mango9 = new Mango(900,290,60,60);
	mango10 = new Mango(950,250,50,50);
	mango11 = new Mango(950,100,50,50);
	mango12 = new Mango(970,150,70,50);
	mango13 = new Mango(1000,150,50,50);
	mango14 = new Mango(900,100,90,50);
	mango15 = new Mango(1200,250,50,50);
	mango16 = new Mango(1200,300,80,50);
	mango17 = new Mango(650,250,50,50);
	mango18 = new Mango(1300,250,60,60);
	mango19 = new Mango(1250,200,90,90);
	mango20 = new Mango(1000,200,80,80);
	mango21 = new Mango(1050,250,90,90);
	mango22 = new Mango(950,100,50,50);
	mango23 = new Mango(800,100,90,90);
	mango24 = new Mango(800,200,50,50);
	mango25 = new Mango(850,250,100,100);

	launcher = new Launcher(stone.body,boy.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
  detectCollision(stone,mango15);
  detectCollision(stone,mango16);
  detectCollision(stone,mango17);
  detectCollision(stone,mango18);
  detectCollision(stone,mango19);
  detectCollision(stone,mango20);
  detectCollision(stone,mango21);
  detectCollision(stone,mango22);
  detectCollision(stone,mango23);
  detectCollision(stone,mango24);
  detectCollision(stone,mango25);

  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  mango21.display();
  mango22.display();
  mango23.display();
  mango24.display();
  mango25.display();
  drawSprites();
  stone.display();
  
  launcher.display();
 
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}

}

function mouseDragged(){
Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode  === 0){
		Matter.Body.setStatic(stone.body,{x:140,y:530});
		launcher.attach(stone.body);
	}
}