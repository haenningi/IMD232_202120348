let ball;

let pos;
let vel;
let acc;

let center;
let mouse;
let centerToMouse;

function setup() {
  setCanvasContainer('canvas', 2, 2, true);
  background('#00FA9A');
  ball = new Mover(width / 3, 0, 10);

  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);

  center = createVector(pos.x, pos.y);
  mouse = createVector();
  centerToMouse = createVector();
}

function draw() {
  background('#00FA9A');
  ball.update();
  ball.display();
  checkEdges();
  display();
  stick01();
  stick02();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(1);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill('#FF69B4');
  ellipse(pos.x, pos.y, 80);
}

function stick01() {
  mouse.set(mouseX, mouseY);
  centerToMouse = p5.Vector.sub(mouse, center);
  strokeWeight(2);
  stroke('white');
  line(pos.x, pos.y, mouse.x, mouse.y);

  centerToMouse.normalize();
  centerToMouse.mult(50);
  strokeWeight(4);
  stroke('black');
  translate(pos.x, pos.y);
  line(0, 0, centerToMouse.x, centerToMouse.y);
}

function stick02() {
  centerToMouse.normalize();
  centerToMouse.mult(200);
  strokeWeight(2);
  stroke('blue');
  line(0, 0, centerToMouse.x, centerToMouse.y);
}
