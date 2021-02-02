var gameobject2, gameobject1
var cat, dog 

function setup() {
  createCanvas(800,400);
   gameobject2 = createSprite(100, 200, 30, 70);
   gameobject1 = createSprite(600,200, 70, 30);
  gameobject1.velocityX = -3

  cat = createSprite(500, 300, 30, 70);
  cat.shapeColor = "green" 
  dog = createSprite(600,300, 70, 30);
  dog.shapeColor = "green"
}

function draw() {
  background(255,235,255); 

  dog.x = mouseX
  dog.y = mouseY

  if (isTouching(cat,dog)){ 
    cat.shapeColor = "red"
    dog.shapeColor = "red"
  }
  else{
    cat.shapeColor = "green"
    dog.shapeColor = "green"
  }

  bounceOff(gameobject1, gameobject2)

  

  drawSprites();



}