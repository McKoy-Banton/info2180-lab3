document.addEventListener('DOMContentLoaded', function () 
{
    const board = document.getElementById("board")
    const boardSquares = Array.from(board.getElementsByTagName("div"))
    const newGameButton = document.querySelector(".btn")
    const status = document.getElementById("status");
    let currentPlay = "0";
    let gameLive = true

    let playerSwitch = function () {
        currentPlay = currentPlay === "0" ? "X" : "0";
    }

    let moves = [" ", " ", " ",
                 " ", " ", " ",
                 " ", " ", " "]

    boardSquares.forEach(square => {
        square.classList.add("square")
        square.addEventListener("click", () => {
            if (square.innerText === "" && gameLive) {
                square.innerText = currentPlay

                moves[boardSquares.indexOf(square)] = currentPlay

                if (checkWin(boardSquares.indexOf(square))) {
                    gameLive = false
                    status.innerText = currentPlay + "won."
                    status.classList.add("you-won")
                }
                playerSwitch()
            }
        })


    });
    let checkWin = function (square) {
        let playerMove = moves[square]
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const condition of winConditions) {
            if (condition.includes(square)) {
                if (condition.every(index => moves[index] === playerMove)) {
                    return true;
                }
            }
        }
        return false;
    }

})