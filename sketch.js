const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig,pig2;
var log,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,350,50,50);
    box2 = new Box(280,350,50,50); 
  box3 = new Box(200,290,50,50);
  box4 = new Box(280,290,50,50);
  box5 = new Box(240,230,50,50);

    ground = new Ground(600,height,1200,20);

    pig = new Pig(240,380);
pig2= new Pig(240,280);

    log = new Log(240,325,200,PI/2);
log2 = new Log(240,255,200,PI/2);
log3 = new Log(220,200,120,PI/7);
log4 = new Log(270,200,120,-PI/7);

bird = new Bird(mouseX,mouseY,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
box3.display();
box4.display();
box5.display();

    ground.display();

   pig.display();
pig2.display();

   log.display();
   log2.display();
   log3.display();
   log4.display();

   bird.display();
}