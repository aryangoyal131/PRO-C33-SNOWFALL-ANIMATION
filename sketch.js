
var character;
function preload(){
 backGround_img = loadImage("snow1.jpg");
 character_img = loadImage("character1.png");
}



function setup() {
  createCanvas(800,400);
 character = createSprite(400, 200, 50, 50);
 character.addImage(character_img);
 character.scale = 0.5;

}

function draw() {
  background(backGround_img);

if(keyDown(LEFT_ARROW)){
  character.x = character.x - 5 ;
}


if(keyDown(RIGHT_ARROW)){
  character.x = character.x + 5 ;
}


  drawSprites();

}