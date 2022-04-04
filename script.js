/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// Assegnazione variabili elementi e array

const grid = document.querySelector(".grid");
let bombAmount = 20;
let squares = [];
let fields = 100;

// Creazione Tabella

function createBoard() {
  // Creazione di due array contenenti le bombe e le caselle vuote, ed unione dei due array tramite la funzione di concatenazione delle stringhe. Il totale andrà a formare il nostro campo di gioco.
  const bombsArray = Array(bombAmount).fill("bomb");
  const emptyArray = Array(fields - bombAmount).fill("valid");
  const gameArray = emptyArray.concat(bombsArray);
  const shuffledArray = gameArray.sort(() => Math.random() - 0.5);
  //
  console.log(shuffledArray);
  //
  for (let i = 0; i < fields; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    square.classList.add(shuffledArray[i]);
    grid.appendChild(square);
    squares.push(square);

    // Click generico sui quadratini

    square.addEventListener("click", function (e) {
      click(square);
    });
  }
}

// Aggiunta dei numeri

for (let i = 0; i < squares.length; i++) {
  squares[i].setAttribute("data", total);
}

// Verifica il livello di difficoltà selezionato dall'utente

let e = document.getElementById("difficulty");

let play = document.querySelector(".play");

// Esegui funzione per creare la tabella

play.addEventListener("click", function () {
  let value = e.options[e.selectedIndex].value;
  let text = e.options[e.selectedIndex].text;
  console.log(value + text);

  if ((text = "medium")) {
    let fields = 81;
  } else if ((text = "hard")) {
    let fields = 49;
  } else {
    let fields = 100;
  }

  createBoard();
});

// click sui quadrati

function click(square) {
  if (square.classList.contains("bomb")) {
    alert("Game Over!");
  } else {
    let total = square.getAttribute("data");
    if (total != 0) {
      square.classList.add("checked");
      square.innerHtml = total;
      return;
    }
  }
}
