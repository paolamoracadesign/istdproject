// Array di font da usare
const fonts = ['MyFont1', 'MyFont2'];
let currentFontIndex = 0;

// Funzione per cambiare il font al click
document.getElementById('text').addEventListener('click', function() {
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
  document.getElementById('text').style.fontFamily = fonts[currentFontIndex];
});
