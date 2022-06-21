var ship, ship_moving, edges
var seaImage;

function preload() {
  seaImage = loadImage("sea.png");
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")

}

function setup() {
  createCanvas(600, 200);
  ship = createSprite(100, 100, 20, 50);
  ship.scale = 0.2
  ship.addAnimation("moving", ship_moving);
  seaImage.velocityX = -3;
  edges = createEdgeSprites();
}

function draw() {
  background(seaImage);
  if (seaImage.x<0) {
    seaImage.x = seaImage.width / 2
  }
  drawSprites();
}