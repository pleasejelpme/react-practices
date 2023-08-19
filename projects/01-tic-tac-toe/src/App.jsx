import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'


import './App.css'


function App() {
    const [board, setBoard] = useState(() => {
        const boardFromLocalStorage = window.localStorage.getItem('board')
        return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
    })

    const [turn, setTurn] = useState(() => {
        const turnFromLocalStorage = window.localStorage.getItem('turn')
        return turnFromLocalStorage ?? TURNS.x
    })

    const [winner, setWinner] = useState(null)
   
    useEffect(() => {
        console.log('useEffect')
    }, [winner])


    const updateBoard = (index) => {
        // revisa si la casilla ya esta marcada o existe un ganador
        if (board[index] || winner) return  

        // actualiza el estado del tablero con un nuevo tablero, e inserta en el recuadro cliceado
        // un valor "x" u "o" dependiendo de en que turno fue clickeado
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        // revisa el valor del turno despues de hacer click en el recuadro, y cambia el turno
        const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
        setTurn(newTurn)
        
        // Guardar la partida en el Local Storage
        window.localStorage.setItem('board', JSON.stringify(newBoard))
        window.localStorage.setItem('turn', newTurn)

        // despues de cada update del tablero, llama a la funcion checkWinner para revisar si hay un
        // ganador, y si lo hay, actualiza el estado de winner
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            confetti()
            setWinner(newWinner)
            window.localStorage.clear('board')
            window.localStorage.clear('turn')
        } else if (checkEndGame(newBoard)) {
          setWinner(false)
        }
    }

    const resetGame = () => {
        // reinicia el juego con los valores iniciales
        setBoard(Array(9).fill(null))
        setTurn(TURNS.x)
        setWinner(null)

        window.localStorage.clear('board')
        window.localStorage.clear('turn')
    }

    return (
      <main className="board">
        <h1>Tic tac toe</h1>
        <button onClick={resetGame}>Reset game</button>
        <section className='game'>
          {
            board.map((cell, index) => {
              return(
                <Square key={index} index={index} updateBoard={updateBoard}>
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.x}>
            {TURNS.x}
          </Square>
          <Square isSelected={turn === TURNS.o}>
            {TURNS.o}
          </Square>
        </section>
        
        <WinnerModal winner={winner} resetGame={resetGame}/>
      </main>
    )
  }

export default App
