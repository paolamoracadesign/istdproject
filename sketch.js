let currentFontIndex = 0;
let fonts;
let textContent = "For you can only know yourself when you strike an attitude: a statue: not alive. When one is alive, one lives and does not see himself. To know one's self is to die. The reason you spend so much time looking at yourself in that mirror, in all mirrors, is that you are not alive; you do not know how to live, you cannot, or you do not want to live.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(18);
  textAlign(CENTER, TOP);  // Align text to the top of the text box
  textLeading(26);

  fonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman'];
}

function draw() {
  background(255);
  textFont(fonts[currentFontIndex]);

  let boxWidth = width * 0.8;
  let boxHeight = height * 0.8;  // We keep a large enough box height

  let x = width / 2;
  let y = height / 2 - boxHeight / 2;  // Adjust y to center vertically

  // Draw the text, wrapping inside the box
  text(textContent, x, y, boxWidth, boxHeight);
}

function mousePressed() {
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

