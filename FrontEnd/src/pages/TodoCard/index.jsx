import { useState, useEffect } from "react";
import CardList from "../../components/CardList";
import CardDetails from "../../components/CardDetails";
import './style.css'
const TodoCard = () => {
    const [cards] = useState([
        { id: 1, name: 'Card 1', description: 'Description for card 1' },
        { id: 2, name: 'Card 2', description: 'Description for card 2' },
      ]);
      const [selectedCard, setSelectedCard] = useState(null);
    
      const showCardDetails = (card) => {
        setSelectedCard(card);
      };
    
      const closeCardDetails = () => {
        setSelectedCard(null);
      };
    
      return (
        <div>
          {selectedCard ? (
            <CardDetails selectedCard={selectedCard} closeCardDetails={closeCardDetails} />
          ) : (
            <CardList cards={cards} showCardDetails={showCardDetails} />
          )}
        </div>)
}
export default TodoCard;