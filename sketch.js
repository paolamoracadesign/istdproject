let currentFontIndex = 0;
let fonts;
let textContent = "For you can only know yourself when you strike an attitude: a statue: not alive. When one is alive, one lives and does not see himself. To know one's self is to die. The reason you spend so much time looking at yourself in that mirror, in all mirrors, is that you are not alive; you do not know how to live, you cannot, or you do not want to live.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(18);
  textAlign(CENTER, CENTER);
  textLeading(26);

  fonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman'];
}

function draw() {
  background(255);
  textFont(fonts[currentFontIndex]);

  let boxWidth = width * 0.8;
  let x = width / 2;
  let y = height / 2 - 50;

  text(textContent, x, y, boxWidth, height);
}

function mousePressed() {
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
