export const Square = ({children, isSelected, updateBoard, index}) => {
    // cambia el classname del div dependiendo del turno del jugador
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
      updateBoard(index)
    }

    return(
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}