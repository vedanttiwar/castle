const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7;
var pig1,pig2;
var log1,log2,log3,log4;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,400,70,70);
    box2 = new Box(920,400,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(920,320,70,70);
    box5 = new Box(810,260,70,70);
    box6=new Box(705,220,20,70)
    box7=new Box(930,220,20,70)
    pig1=new Pig(810,400);
    pig2=new Pig(810,320);
    ground = new Ground(600,height,1200,20);
    log1=new Log(810,360,300,PI/2);
    log2=new Log(810,280,300,PI/2);
    log3=new Log(760,120,150,PI/4);
    log4=new Log(870,120,150,-PI/4);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
      box3.display();
        box4.display();
    box5.display();
     box6.display();
      box7.display();
    log1.display();
     log2.display();
      log3.display();
      log4.display();

    ground.display();
    pig1.display();
    pig2.display();
}