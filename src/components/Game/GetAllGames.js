import React, { useState, useEffect } from 'react';
import GameService from '/Users/Dell/games-sharing/src/services/GameService';

const GetAllGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    retrieveGames();
  }, []);

  const retrieveGames = () => {
    GameService.getAllGames()
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>All Games</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="games-list">
          {games.map(game => (
            <div key={game.id} className="game-item">
              <h3>{game.title}</h3>
              {game.image && (
                <img src={game.image} alt={game.title} className="game-image" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAllGames;