function setup() {
  setCanvasContainer('p5-Canvas', 2, 2, true);
  background('white');
}

function draw() {
  // 영화 <화양연화> 속 테이블 장면 레퍼런스로 잡고 그리기
  // https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160718_73%2Fmummyco_1468849504500963f4_JPEG%2F003.jpg&type=sc960_832

  // 배경

  background('Maroon');

  // 창문 있는 벽지에 점 무늬 찍고 싶은데 원하는 위치로 가지 않음
  //   stroke('LightCyan');
  //   strokeWeight(6);
  //   point(20, 400);
  //   point(30, 400);
  //   point(40, 400);
  //   point(50, 400);
  //   point(60, 400);
  //   point(70, 400);

  rectMode(CORNER);
  noStroke();
  fill('CadetBlue');
  rect(0, 0, 1000, 300);

  stroke('#3E1414');
  strokeWeight(15);
  line(0, 300, 1000, 300);

  noStroke();
  fill('#630B0B  ');
  rect(0, 800, 1000, 300);

  // 창문

  rectMode(CENTER);
  stroke('#8D7646');
  strokeWeight(10);
  fill('#DBD7A0');
  rect(480, 150, 300, 200);

  // 바깥 풍경
  noStroke();
  fill(255);
  ellipse(480, 160, 160);
  fill('#A0C089');
  rect(480, 220, 290, 50);
  fill('#3A3A2C');
  rect(430, 160, 120, 70, 100, 100, 0, 0);
  fill('#525142');
  rect(365, 170, 60, 50, 100, 100, 0, 0);
  fill('#525142');
  rect(490, 170, 60, 50, 100, 100, 0, 0);

  // 왼쪽 의자
  rectMode(CORNER);
  noStroke();
  fill('#9A2D2D');
  rect(100, 350, 100, 450, 30, 30, 0, 0);
  fill('#390F0F');
  rect(120, 750, 200, 150, 0, 0, 50, 0);
  fill('#9A2D2D');
  rect(100, 700, 250, 100, 0, 30, 30, 0);

  // 오른쪽 의자
  rectMode(CORNER);
  noStroke();
  fill('#9A2D2D');
  rect(760, 350, 100, 450, 30, 30, 30, 10);
  fill('#390F0F');
  rect(640, 750, 200, 150, 0, 0, 0, 50);
  fill('#9A2D2D');
  rect(610, 700, 250, 100, 30, 0, 0, 30);

  // 테이블 (거울 + 테이블)
  rectMode(CENTER);
  noStroke(0);
  fill('#778899');
  rect(480, 450, 270, 200);

  noStroke(0);
  fill('#280C0C');
  rect(480, 600, 270, 20);
  rect(480, 750, 20, 300);
  fill('#98DB94');
  rect(480, 665, 220, 150, 0, 0, 30, 30);

  //조명
  noStroke(0);
  fill('Black');
  rect(480, 400, 150, 120);

  stroke('white');
  strokeWeight(15);
  line(400, 370, 560, 370);
  line(400, 400, 560, 400);
  line(400, 430, 560, 430);

  // 정물 (컵)
  stroke('#6FCBA0');
  strokeWeight(8);
  line(360, 587, 430, 587);
  noStroke(0);
  fill('#85DBB3');
  rect(395, 558, 60, 50, 10, 10, 70, 70);

  stroke('#6FCBA0');
  strokeWeight(8);
  line(530, 587, 600, 587);
  noStroke(0);
  fill('#85DBB3');
  rect(565, 558, 60, 50, 10, 10, 70, 70);
}
