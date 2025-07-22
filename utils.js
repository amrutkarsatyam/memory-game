import cards from "./data/cards";
import {v4} from 'uuid'
export default function getCards() {
    const dummyCards = [...cards]
    const cardArray = []
    while (cardArray.length != 12) {
      const index = Math.floor(Math.random() * dummyCards.length);
      cardArray.push({...dummyCards[index],id:v4(),disabled:false,isFound:false})
      console.log(cardArray[cardArray.length-1].id)
      dummyCards.splice(index, 1)
    }
    const dummyCardsDouble = [...cardArray]
    while (cardArray.length != 24) {
        const index = Math.floor(Math.random() * dummyCardsDouble.length);
        cardArray.push({...dummyCardsDouble[index],id:v4(),disabled:false,isFound:false})
        dummyCardsDouble.splice(index, 1)
    }
    return cardArray
}