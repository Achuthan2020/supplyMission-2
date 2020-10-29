const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var helicopter, helicopterImage, package,packageImage, stick1, stick2, stick3;


function preload(){
    helicopterImage.loadImage("helicopter.png");
    packageImage.loadImage=("package.png");
}
function setup() {
    var canvas=createCanvas(400,1200);
    
    engine=Engine.create();
    world=engine.world;
    helicopter=createSprite(100,200,20,50);
    helicopter.addImage(supplyDropper,helicopterImage);
    package=createSprite(helicopter.x,helicopter.y,20,20);
    package.addImage(supply,package.png)
    stick1=new dustbin(250,360,20,50);
    stick2=new dustbin(260,365,50,20);
    stick3=new dustbin(300,385,20,50)

}
function draw() {
    if(keydown("down")) {
        package.velocityX=2;
        restitution:0.3;
    }
    helicopter.display();
    package.display();
    stick1.display();
    stick2.display();
    stick3.display();
}