import React, { useState } from 'react';
import GameService from '/Users/Dell/games-sharing/src/services/GameServiceTest';

const RateGame = ({ gameId }) => {
  const [rating, setRating] = useState(0);

  const handleRate = async () => {
    try {
      const rateGameRepresentation = { gameId, rating };
      await GameService.rateGame(rateGameRepresentation);
      console.log('Game rated successfully');
    } catch (error) {
      console.error('Error while rating game:', error);
    }
  };

  return (
    <div>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleRate}>
        Rate Game
      </button>
    </div>
  );
};

export default RateGame;