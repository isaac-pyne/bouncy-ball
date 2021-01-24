const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

  //create physics engine using Matter.Engine
  engine = Engine.create();

  //create a world using physics engine
  world = engine.world;

  var options =  {isStatic :true};

  //create a ground object
  ground = Bodies.rectangle(200,390,400,20,options);

  //adding the ground object into the world
  World.add(world, ground);

  //console.log(ground);
  //console.log(ground.position.x);
  
  var ball_options = {restitution :1}

  //create a ball object
  ball = Bodies.circle(200,100,20,ball_options );

  //adding the ball object into the world
  World.add(world, ball);

}


function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);
  fill("green");
  rect(ground.position.x, ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  fill("yellow");
  stroke("white");
  strokeWeight(3);
  ellipse(ball.position.x, ball.position.y,20,20);


}