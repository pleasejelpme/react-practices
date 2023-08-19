import { WINNING_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
    for (let combo of WINNING_COMBOS) {
        const [a, b, c] = combo 
        if (boardToCheck[a] && 
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
          ) {
              return boardToCheck[a]
          }
    }

    return null
}

export const checkEndGame = (newBoard) => {
    // revisa si todas las posiciones del tablero son diferentes a null, es decir, estan ocupadas
    // por "x" u "o", y si es asi, retorna true
    return newBoard.every((square) => square !== null)
}
