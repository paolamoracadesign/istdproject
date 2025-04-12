let currentFontIndex = 0;
const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Georgia'];
let textContent = "For you can only know yourself when you strike an attitude: a statue: not alive. When one is alive, one lives and does not see himself. To know one's self is to die. The reason you spend so much time looking at yourself in that mirror, in all mirrors, is that you are not alive; you do not know how to live, you cannot, or you do not want to live.";

function setup() {
  createCanvas(windowWidth, windowHeight);  // Crea una canvas che si adatta alla finestra
  textSize(24);
  textAlign(CENTER, CENTER); // Centra il testo sia orizzontalmente che verticalmente
}

function draw() {
  background(255); // Imposta il background a bianco

  let x = width / 2;  // Posizione centrale orizzontale
  let y = height / 2; // Posizione centrale verticale

  // Imposta il font
  textFont(fonts[currentFontIndex]);

  // Mostra il testo centrato
  text(textContent, x, y, width * 0.8, height * 0.8); // Aggiustiamo la larghezza per evitare che il testo vada oltre i bordi
}

function mousePressed() {
  // Cambia font quando si clicca sul testo
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Rende la canvas responsive alla dimensione della finestra
}

