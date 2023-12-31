import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

import { CARDS } from './constants/constants'
import { Card } from './components/Card'
import { useEffect } from 'react'


function App() {
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [cards, setCards] = useState([])
  const [turn, setTurn] = useState(0)

  useEffect(() => {
    const prevCards = cards
    if (checkWin(prevCards)) return 
  }, [cards])

  useEffect(() => {
    const cleanValues = () => {
      setChoiceOne(null)
      setChoiceTwo(null)
      const newTurn = turn + 1
      setTurn(newTurn)
    }

    // const prevCards = cards
    // if (prevCards.every(element => element.match === true)) return confetti()

    if (choiceOne && choiceTwo) {
      if (choiceOne.emoji === choiceTwo.emoji && choiceOne.id !== choiceTwo.id) {
        setCards(prevCards => {
          return prevCards.map( card => {
            return card.emoji === choiceOne.emoji ? {...card, match: true} : card
          })
        })
        cleanValues()
      }
      cleanValues()
    }
  }, [choiceOne, choiceTwo, turn, cards])

  const checkWin = (element) => {
    if (element.every(item => item.match === true)) return confetti()
  }


  // Takes the array of emojis, duplicates it and then shuffle it
  const randomizeCards = () => {
    const shuffledCards = [...CARDS, ...CARDS]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id:Math.random()}))

    setCards(shuffledCards)
    setTurn(0)
    console.log(shuffledCards)
  } 

  const handleChoice = (card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  
  return (
    <div className="App">
      <h1>Memory game 🎮</h1>
      <button onClick={randomizeCards}>new game</button>
      <div className="card-grid">
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice} 
            isSelected={ card === choiceOne || card === choiceTwo|| card.match } />
        ))}
      </div>
    </div>
  )
}

export default App
