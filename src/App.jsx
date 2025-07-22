import React, { useEffect } from 'react'
import Header from './components/Header'
import getCards from '../utils'
import Card from './Card'
import Confetti from 'react-confetti'

function App() {

  const [cards, setCards] = React.useState(() => getCards())
  React.useEffect(() => { console.log(cards) }, [cards.length])
  const [user, setUser] = React.useState(0)
  let pointsZero = React.useRef(0)
  let flipArrayZero = React.useRef([])
  let foundArrayZero = React.useRef([])
  let pointsOne = React.useRef(0)
  let flipArrayOne = React.useRef([])
  let foundArrayOne = React.useRef([])
  let foundArray = React.useRef([])
  let bottomRef = React.useRef(null)
  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])
  function flip(id, icon) {
    if (user == 0) {
      if (flipArrayZero.current.length == 0) {
        setCards(prev => prev.map(card => {
          if (card.id == id)
            flipArrayZero.current.push(card.icon)
          return (card.id == id ? { ...card, isFlipped: !card.isFlipped, disabled: true }
            : card)
        }))
      }
      else {
        let isMatch = (icon == flipArrayZero.current[0])
        //show second card
        setCards(prev => prev.map(card => card.id == id ? { ...card, isFlipped: !card.isFlipped, disabled: true } : card))

        //based on isMatch
        if (isMatch) {
          pointsZero.current++;
          flipArrayZero.current = []
          foundArrayZero.current.push(icon)
          foundArray.current.push(icon)
          setUser(prev => prev == 0 ? 1 : 0)
        }
        else {
          flipArrayZero.current = []
        }
        setUser(prev => prev == 0 ? 1 : 0)
        setTimeout(() => {
          setCards(prev => prev.map(card => ({ ...card, isFlipped: false, isFound: foundArray.current.includes(card.icon), disabled: false })))
        }, 450)
      }

    }
    else {
      if (flipArrayOne.current.length == 0) {
        setCards(prev => prev.map(card => {
          if (card.id == id)
            flipArrayOne.current.push(card.icon)
          return (card.id == id ? { ...card, isFlipped: !card.isFlipped, disabled: true }
            : card)
        }))
      }
      else {
        let isMatch = (icon == flipArrayOne.current[0])
        //show second card
        setCards(prev => prev.map(card => card.id == id ? { ...card, isFlipped: !card.isFlipped, disabled: true } : card))

        //based on isMatch
        if (isMatch) {
          pointsOne.current++;
          flipArrayOne.current = []
          foundArrayOne.current.push(icon)
          foundArray.current.push(icon)
          setUser(prev => prev == 0 ? 1 : 0)
        }
        else {
          flipArrayOne.current = []
        }
        setUser(prev => prev == 0 ? 1 : 0)
        setTimeout(() => {
          setCards(prev => prev.map(card => ({ ...card, isFlipped: false, isFound: foundArray.current.includes(card.icon), disabled: false })))
        }, 450)
      }

    }
  }


  const cardElements = cards.map(cardobj => <Card isFlipped={cardobj.isFlipped} key={cardobj.id} disabled={cardobj.disabled} icon={cardobj.icon} flip={() => flip(cardobj.id, cardobj.icon)} isFound={cardobj.isFound} />)
  console.log("points of user 0 are : " + pointsZero.current)
  console.log("points of user 1 are : " + pointsOne.current)
  // console.log(flipArray)
  // console.log(user)
  // console.log(foundArray)
  return (
    <>
      <Header />
      <div className={`card-div-${user}`}>
        {cardElements}
      </div>
      {foundArray.current.length != 12
        &&
        <div style={{ "display": "flex" }}>
          <h1 className='score-num-l'>{pointsZero.current}</h1>
          {user == 0 && <h1 className='score'>🔵🔵BLUE'S TURN🔵🔵</h1>}
          {/* <h1 className='score'>SCORES</h1> */}
          {user == 1 && <h1 className='score'>🔴🔴RED'S TURN🔴🔴</h1>}
          <h1 className='score-num-r'>{pointsOne.current}</h1>
        </div >
      }
      {
        foundArray.current.length == 12
        && <div className='score'><h1>{`PLAYER ${foundArrayOne.current.length >= foundArrayZero.current.length ? `RED` : `BLUE`} WINS !!!`}</h1><Confetti /></div>
      }
      {
        ((pointsZero.current + pointsOne.current == 12))
        && <button className='newGame' ref={bottomRef} onClick={() => {
          pointsZero.current = (0)
          flipArrayZero.current = ([])
          foundArrayZero.current = ([])
          pointsOne.current = (0)
          flipArrayOne.current = ([])
          foundArrayOne.current = ([])
          foundArray.current = ([])
          setCards(getCards())
          ref.current = null
        }}>Start New Game</button>
      }
    </>
  )
}

export default App
