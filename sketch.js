const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder,ball,ground;

function setup(){
    createCanvas(400,300)
    engine =Engine.create();
    world = engine.world;
    
    var ground_options={
        isStatic:true
    }

    var holder_options={
        isStatic:true
    }

    ground=Bodies.rectangle(200,300,410,20,ground_options)
    World.add(world,ground);

    holder=Bodies.rectangle(225,100,300,20,holder_options)
    World.add(world,holder);

    var ball_options={
        restituion:1.0,
        density:1.0
    }
    ball=Bodies.circle(220,200,50,ball_options)
    World.add(world,ball);
   
    var options = {
        bodyA:ball,
        bodyb:holder,
        stiffness:0.004,
        lenght:100
    }

    var string=Constraint.create(options)
    World.add(world,string)

    fill("yellow");
}

function draw(){
    backgroundColor(0)
    Engine.update(engine);
    text("Press spacebar to oscillate the pendulum with mouse",10,25);
    text("Press Enter to stop the pendulum from oscillating",10,30);

    fill("orange");
    rectMode(CENTER);
    rect(holder.position.x,holder.position.y,300,20);

    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    fill("red");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40);

    strokeWeight(8);
    stoke("green");
    line(ball.position.x,ball.position.y,holder.position.x,holder.position.y);

    if(KeyCode===32){
        ball.position.y=MouseY;
        ball.position.x=MouseX;
    }

    else if(KeyCode===ENTER){
        ball.position.x=200
    }
}