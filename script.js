let currentFontIndex = 0;
let fonts;
let texts = [
  "YOU WANT TOO MUCH TO KNOW YOURSELF; AND MEANWHILE, YOU ARE NOT LIVING.",
  "One's aim should be never to see one's self. For the reason that, however much you may try, you can never know yourself as others see you.",
  "What annoyed me more than anything else was that this total abnegation of mine was interpreted as being a true penitence...",
  "No name. No memory today of yesterday's name; of today's name tomorrow.",
  "I am no one"
];
let currentTextIndex = 0;
let cycleCount = 0;
let maxCycles = 2; // 2 full cycles before showing all texts

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  textAlign(CENTER, CENTER);
  textLeading(28);

  fonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman'];

  document.getElementById("no-one").addEventListener("click", resetText);
}

function draw() {
  background(255);
  
  if (cycleCount < maxCycles) {
    showText(texts[currentTextIndex]);
  } else {
    showAllTexts();
  }
}

function showText(text) {
  textFont(fonts[currentFontIndex]);
  let boxWidth = width * 0.8;
  let x = width / 2;
  let y = height / 2 - 50;

  if (text === "I am no one") {
    // Special case for "I am no one"
    fill(0);
    textSize(150); // Make it 3 times bigger
    text(text, x, y);
  } else {
    fill(0);
    textSize(24);
    let textW = textWidth(text);
    if (textW > width * 0.8) {
      let splitText = text.split(' ');
      let firstLine = splitText.slice(0, Math.ceil(splitText.length / 2)).join(' ');
      let secondLine = splitText.slice(Math.ceil(splitText.length / 2)).join(' ');
      text(firstLine, x, y);
      text(secondLine, x, y + 30);  // Second line
    } else {
      text(text, x, y);
    }
  }
}

function mousePressed() {
  if (cycleCount < maxCycles) {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    if (currentTextIndex === 0) {
      cycleCount++;
    }
  } else {
    showAllTexts();
  }
}

function showAllTexts() {
  let x = width / 2;
  let y = height / 2;
  for (let i = 0; i < texts.length; i++) {
    textSize(24);
    fill(0, 0, 0, 200); // Text with transparency
    text(texts[i], x, y + i * 30); // Stack text
  }
  // Make "I am no one" appear after everything
  document.getElementById("no-one").style.visibility = "visible";
}

function resetText() {
  document.getElementById("no-one").style.visibility = "hidden";
  currentFontIndex = 0;
  currentTextIndex = 0;
  cycleCount = 0;
}
