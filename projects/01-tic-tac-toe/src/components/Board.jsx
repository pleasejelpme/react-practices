import { Square } from "./Square"
import { updateBoard } from '../App'

export const Board = ({board}) => {
    board.map((square, index) => {
        return(
            <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
            </Square>          
        )
    })    
}