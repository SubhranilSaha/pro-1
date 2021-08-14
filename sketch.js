var pc, pcImage;
var 
function preload() {
  pcImage = loadImage ("images/player.png")
}
function setup() {
  createCanvas(800,400);
  
  pc =   createSprite(400, 200, 50, 50);
pc.addImage(pcImage)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}