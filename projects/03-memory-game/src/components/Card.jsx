import './card.css'

export const Card = ({card, handleChoice, isSelected}) => {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className='card'>
            <div className={ isSelected ? 'flipped' : 'unflipped'} onClick={handleClick}>
                <div className='front' alt='card front' >{card.emoji}</div>
                <div className='back' alt='card back'></div>
            </div>
        </div>
    )
}
