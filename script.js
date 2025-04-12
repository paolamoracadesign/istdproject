// Array con i nomi dei font che hai caricato
const fonts = [
  'PPRightGrotesk-Medium',
  'PPRightGrotesk-MediumItalic',
  'PPRightGrotesk-Regular',
  'PPRightGrotesk-RegularItalic',
  'PPRightGrotesk-SpatialLight',
  'PPRightGrotesk-SpatialLightItalic',
  'PPRightGrotesk-WideBold',
  'PPRightGrotesk-WideBoldItalic'
];

let currentFontIndex = 0; // Indice del font corrente

// Cambia il font ogni volta che il testo viene cliccato
document.getElementById('text').addEventListener('click', function() {
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
  document.getElementById('text').style.fontFamily = fonts[currentFontIndex];
});
