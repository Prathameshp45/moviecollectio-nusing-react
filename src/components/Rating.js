import { useState } from 'react';

function Rating({ currentRating, onRate }) {
  const [rating, setRating] = useState(currentRating);

  const handleRate = (rate) => {
    setRating(rate);
    onRate(rate);
  };

  return (
    <div>
      <p>Rate this movie:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
          onClick={() => handleRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
