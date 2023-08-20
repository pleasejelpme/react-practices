import './card.css'

export const Card = ({card, handleChoice, isSelected}) => {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className='card'>
            <div className={ isSelected ? 'flipped' : '' }>
                <div className='front' alt='card-front' onClick={handleClick}>{card.emoji}</div>
                <div className='back' alt='card back'></div>
            </div>
        </div>
    )
}
