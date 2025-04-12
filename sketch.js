let currentFontIndex = 0;
const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Georgia'];
let textContent = "For you can only know yourself when you strike an attitude: a statue: not alive. When one is alive, one lives and does not see himself. To know one's self is to die. The reason you spend so much time looking at yourself in that mirror, in all mirrors, is that you are not alive; you do not know how to live, you cannot, or you do not want to live.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  textAlign(CENTER, CENTER); // Centra il testo sia orizzontalmente che verticalmente
}

function draw() {
  background(255);

  // Calcolare la larghezza e l'altezza del testo
  let textWidthValue = textWidth(textContent); // Calcola la larghezza del testo
  let textHeight = textAscent() + textDescent(); // Calcola l'altezza del testo (ascent + descent)

  // Centrare il testo nella canvas
  let x = width / 2;
  let y = height / 2;

  // Verifica se il testo non esce fuori dalla canvas
  if (y - textHeight / 2 < 0) {
    y = textHeight / 2; // Imposta la y per evitare che il testo esca fuori dalla parte superiore
  } else if (y + textHeight / 2 > height) {
    y = height - textHeight / 2; // Imposta la y per evitare che il testo esca fuori dalla parte inferiore
  }

  // Mostra il testo centrato
  textFont(fonts[currentFontIndex]);
  text(textContent, x, y, textWidthValue, height); // Imposta la larghezza del box per il testo
}

function mousePressed() {
  // Cambia font quando si clicca sul testo
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
}

function windowResized() {
  // Rende la canvas responsive
  resizeCanvas(windowWidth, windowHeight);
}
