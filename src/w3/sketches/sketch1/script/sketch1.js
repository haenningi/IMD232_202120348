let x;
let y;
let velocityX = -1;
let velocityY = 0.5;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  x = width / 2.0;
  y = height / 2.0;
}
function draw() {
  background('white');
  x += velocityX;
  y += velocityY;
  ellipse(x, y, 50);

  if (x < 0) {
    velocityX *= -1;
  }
}
