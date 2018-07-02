var currentPlayer = "X";
var nextPlayer = "O";
var playerXSelections = new Array();
var playerOSelections = new Array();
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
handleClick = function (event) {
    var cell = event.target;

    cell.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    playerSelections.push(parseInt(cell.id));

    // Swap players
    var cell = event.target
    console.log(cell.id);
    let checkWhowon = checkWinner();
    if (checkWhowon == true) {
        alert("Player " + currentPlayer + " Won!")
        console.log("h");
        resetGame();
    }
    if(checkDraw()) {
        alert("Draw!");
        resetGame();
      }    
    currentPlayer = nextPlayer;
}
var cells = document.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}
function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
  } 
function checkWinner() {
    // Check if player has all values of each combination

    for (let combo of winningCombinations) {
        let matches = 0
        console.log(combo);
        for (let items of playerSelections) {
            if (combo.includes(items)) {
                matches++;
                console.log (matches);
            }
        }
        if (matches == 3) {
            return (true);
        }
    }
    return (false);
}
function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for(var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = ""
    }
  }