/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// Assegnazione variabili elementi e array

const grid = document.querySelector(".grid");
let width = 10;
let squares = [];

// Creazione Tabella

function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    grid.appendChild(square);
    squares.push(square);
  }
}

createBoard();
