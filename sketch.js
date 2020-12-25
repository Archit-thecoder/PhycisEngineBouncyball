const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine,myWorld
var ground,ball

function setup(){
createCanvas(400,400)
myEngine = Engine.create();
myWorld = myEngine.world
var option={
  isStatic:true
}

ground = Bodies.rectangle(200,390,400,20,option)
World.add(myWorld,ground)
console.log(ground)
console.log(ground.position)
var option={
  restitution:1.5
}
ball = Bodies.circle(200,200,20,option)
World.add(myWorld,ball)
}
function draw(){
background(0);
Engine.update(myEngine)
rectMode(CENTER)
fill("brown")
rect(ground.position.x,ground.position.y,400,20)
ellipseMode(RADIUS)
fill("blue")
ellipse(ball.position.x,ball.position.y,20,20)
}