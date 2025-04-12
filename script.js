// Array di font da usare
const fonts = ['MyFont1', 'MyFont2'];

// Indice corrente del font
let currentFontIndex = 0;

// Funzione che cambia il font ad ogni clic
document.getElementById('text').addEventListener('click', function() {
  // Incrementa l'indice del font
  currentFontIndex = (currentFontIndex + 1) % fonts.length;  // Modulo per tornare al primo font quando arriva alla fine
  // Cambia il font
  document.getElementById('text').style.fontFamily = fonts[currentFontIndex];
});
