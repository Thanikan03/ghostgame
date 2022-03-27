var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300);
  ghost.addImage("ghost",ghostImg);  
  ghost.scale = 0.5

  climbersGroup=new Group()
  doorsGroup=new Group()
}

function draw() {
  background(200);

if (gameState==="play"){



 if (keyDown("UP_ARROW")){
  ghost.velocityY = -10
 }

ghost.velocityY=ghost.velocityY+0.2

if (keyDown("RIGHT_ARROW")){
ghost.x=ghost.x+3
}

if(keyDown("LEFT_ARROW")){
  ghost.x=ghost.x-3
}

  if(tower.y > 400){
      tower.y = 300
      
    }
    spawnDoors()
    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY=0
      gameState="end"
    }
    drawSprites()
  }
if (gameState==="end"){
      fill("red")
      textSize(30)
      text("GAME OVER :(",30,250)
    }
}

function spawnDoors(){
  if(frameCount%240===0){
  door=createSprite(300,-50)
  climber=createSprite(300,10)
  climber.addImage("climber",climberImg)
  door.addImage("door",doorImg)
  door.velocityY=1
  door.x=Math.round(random(100,500))
  climber.x=door.x
  climber.velocityY=1

  doorsGroup.add(door)
  climbersGroup.add(climber)
}
}