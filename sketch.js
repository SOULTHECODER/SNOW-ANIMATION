const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var snow1;
var snow2;
var snow3;
var snow4;
var snow5;
var snow6;
var snow7;
var snow8;
var snow9;
var snow10;

var snowBackground;
function preload(){
snowBackground=loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
snow1=new Snow(20,0);
snow2=new Snow(30,0);
snow3=new Snow(40,0); 
snow4=new Snow(50,0);
snow5=new Snow(60,0);
snow6=new Snow(70,0);
snow7=new Snow(80,0);
snow8=new Snow(90,0);
snow9=new Snow(110,0)
snow10=new Snow(100,0);
}

function draw() {
  background(snowBackground); 
  Engine.update(engine)
  snow1.display() ;
  snow2.display() ;
  snow3.display() ;
  snow4.display() ;
  snow5.display() ;
  snow6.display() ;
  snow7.display() ;
  snow8.display() ;
  snow9.display() ;
  snow10.display() ;
  drawSprites();
}
