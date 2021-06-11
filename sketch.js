const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var box;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var box_options = {
    restitution:1.5

  }
  box = Bodies.rectangle(200,200,50,50,box_options);
  World.add(world,box);

  var ground_options = {
    isStatic:true

  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution:1.8
  }

  ball = Bodies.circle(200,100,25,ball_options);
  World.add(world,ball);
}

function draw() {
  background("blue"); 
  Engine.update(engine);
  rectMode(CENTER);
  stroke("red");
  fill("yellow");
  rect(box.position.x,box.position.y,50,50);
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,20,40);
}