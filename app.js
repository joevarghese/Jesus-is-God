var player1 = "X";
var player2 = "O";
let currentClass = player1;
var moves;
var j = 0;
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

let cells = document.querySelectorAll(".row>div");



for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked, { once: true })

}

function cellClicked() {
  if (currentClass == player1) {
    event.target.textContent = currentClass;
    currentClass = player2;
    testr();

    if (checkWin(player1)) {
      document.getElementById("x").innerHTML = "X Wins!";


      for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', cellClicked, { once: true })
      }

      for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', reset)

      }

      function reset() {
        cells[i].textContent = window.location.reload(true);

      }
    }

  } else {
    currentClass == player2;
    event.target.textContent = currentClass;
    currentClass = player1;
    testr();


    if (checkWin(player2)) {

      document.getElementById("o").innerHTML = "O Wins!"

      for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', cellClicked, { once: true })
      }
      for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', reset)

      }
      function reset() {
        cells[i].textContent = window.location.reload(true);
      }

    }
  }

}

function testr() {
  ++j
  if (j == 9 && checkWin(player1)) {

    document.getElementById("x").innerHTML = "X Wins!";


  } else if (j == 9) {
    document.getElementById("draw").innerHTML = "Draw!";
  }
}

function checkWin(player) {
  return winCombos.some(v => v.every(k => cells[k].textContent == player));
}


