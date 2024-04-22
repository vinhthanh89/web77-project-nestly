import React from 'react';

function CardDetails({ selectedCard, closeCardDetails }) {
  return (
    <div>
      <h2>Selected Card</h2>
      <h3>{selectedCard.name}</h3>
      <p>{selectedCard.description}</p>
      <button onClick={closeCardDetails}>Close</button>
    </div>
  );
}

export default CardDetails;
