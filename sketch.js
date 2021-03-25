const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,150);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

 //level one
 block1 = new Box(300,275,30,40);
 console.log(block1);
 block2 = new Box(530,275,30,40);
 block3 = new Box(560,275,30,40);
 block4 = new Box(590,275,30,40);
 block5 = new Box(520,275,30,40);
 block6 = new Box(550,275,30,40);
 block7 = new Box(580,275,30,40);
 //level two
 block8 = new Box(430,235,30,40);
 block9 = new Box(460,235,30,40);
 block10 = new Box(490,235,30,40);
 block11 = new Box(520,235,30,40);
 block12 = new Box(550,235,30,40);
 //level three
 block13 = new Box(460,195,30,40);
 block14 = new Box(490,195,30,40);
 block15 = new Box(520,195,30,40);
 //top
 block16 = new Box(490,155,30,40);
}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
  hero.display();
  rope.display();
  monster.display();

  strokeWeight(2);
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("red");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("red");
  block13.display();
  block14.display();
  block15.display();
  fill("red");
  block16.display();

}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}