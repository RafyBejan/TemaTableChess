let boardSize = 8;
let tileSize;
let pawns = [];

function setup() {
  createCanvas(400, 400);
  tileSize = width / boardSize;
  generatePawns();
}

function draw() {
  background(255);
  drawBoard();
  drawPawns();
}

function drawBoard() {
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      let color = (x + y) % 2 === 0 ? 255 : 0; // Alternăm culorile pătratelor
      fill(color);
      rect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
}

function generatePawns() {
  for (let i = 0; i < 16; i++) {
    let x = floor(random(boardSize));
    let y = floor(random(boardSize));
    let color = (i < 8) ? 'white' : 'black';
    pawns.push(new Pawn(x, y, color));
  }
}

function drawPawns() {
  for (let pawn of pawns) {
    pawn.display();
  }
}

class Pawn {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  display() {
    let x = this.x * tileSize + tileSize / 2;
    let y = this.y * tileSize + tileSize / 2;
    let radius = tileSize / 2;

    // Desenarea cercului pentru pion
    fill(this.color === 'white' ? 255 : 50); // Alegerea culorii în funcție de culoarea pionului
    ellipse(x, y, radius * 2);

    // Desenarea feței zâmbitoare
    fill(this.color === 'white' ? 0 : 255); // Alegerea culorii ochilor și a zâmbetului
    let eyeSize = radius * 0.2;
    let eyeOffsetY = radius * 0.25;
    ellipse(x - radius * 0.25, y - eyeOffsetY, eyeSize, eyeSize); // Ochiul stâng
    ellipse(x + radius * 0.25, y - eyeOffsetY, eyeSize, eyeSize); // Ochiul drept
    noFill();
    strokeWeight(2);
    arc(x, y + radius * 0.3, radius * 0.7, radius * 0.3, 0, PI); // Zâmbetul
  }
}