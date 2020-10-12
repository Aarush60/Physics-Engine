const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; 

  var ground_option = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_option);
  World.add(world,ground);

  var ball_option = {
    restitution:1
  }


  ball = Bodies.circle(200,100,20,ball_option);
  World.add(world,ball);

  //console.log(object.position.x);
  //console.log(object.position.y);

  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
}


