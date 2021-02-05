const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16
var score = 0;

function preload(){
    pimg = loadImage("ball.png")
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(700,300,400,20);

    b1 = new Box(600,275,30,40);
    b2 = new Box(630,275,30,40);
    b3 = new Box(660,275,30,40);
    b4 = new Box(690,275,30,40);
    b5 = new Box(720,275,30,40);
    b6 = new Box(750,275,30,40);
    b7 = new Box(770,275,30,40);
    b8 = new Box(630,235,30,40);
    b9 = new Box(660,235,30,40);
    b10 = new Box(690,235,30,40);
    b11 = new Box(720,235,30,40);
    b12 = new Box(750,235,30,40);
    b13 = new Box(660,195,30,40);
    b14 = new Box(690,195,30,40);
    b15 = new Box(720,195,30,40);
    b16 = new Box(690,155,30,40);

    polygon = Bodies.circle(400,200,20);
    World.add(world,polygon);

    slingshot = new Chain(this.polygon,{x:400,y:200});
}

function draw(){
    background("lightblue");
    Engine.update(engine);
text("Score "+score,750,40)
   

    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    b10.score();
    b11.score();
    b12.score();
    b13.score();
    b14.score();
    b15.score();
    b16.score();
    slingshot.display()

   

    imageMode(CENTER)
    image(pimg,this.polygon.position.x,this.polygon.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode === 32){
slingshot.attach(this.polygon);
    }
}