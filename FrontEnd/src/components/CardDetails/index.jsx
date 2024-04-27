
import { useParams } from 'react-router-dom';

function CardDetails() {
  const { cardId } = useParams(); 
  
  return (
    <div>
      <h1>Card Detail for ID: {cardId}</h1>
    </div>
  );
}

export default CardDetails;
