var block;
var stand;
var box1,box2,box3,box4,box5,box6box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  block = new Ground();
  stand = new Ground();
  box1 = new Box(180,235,30,40);
  box2 = new Box(210,235,30,40);
  box1 = new Box(240,235,30,40);
  box4 = new Box(270,235,30,40);
  box7 = new Box(300,235,30,40);
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);
}

function draw() {
  background(255,255,255);  
  block.display();
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box5.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  drawSprites();
 

}