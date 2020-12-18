
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0 ;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacesImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  
  
}


function draw() {
 background("white");
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : " + survivalTime,300,50)  
  if(ground.x < 190){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -17;
    }
  
  monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide (ground);
  
  food();
  
  obstacles();
  
  bananaGroup = createGroup();
  
  obstaclesGroup = createGroup();
  
  console.log(monkey.y);
  
  drawSprites();
}

function food(){
  
  if(frameCount % 100 === 0){
  
    banana = createSprite(600,200,10,10);
  
    banana.addImage ("banana",bananaImage);
  
    banana.scale=0.1;
  
    banana.velocityX=-4;
  
    banana.lifeTime=150;
  
    banana.y=Math.round(random(120,200));
  
    bananaGroup.add(banana);
  
  
  }
} 
function obstacles(){
  if(frameCount % 300 === 0){
  
    obstacle = createSprite(600,330,100,100);
  
    obstacle.addImage (obstacesImage);
      
    obstacle.scale=0.1;
  
    obstacle.velocityX=-4;
  
    obstacle.lifeTime=150;
    
    obstaclesGroup.add(obstacle);
  }
}