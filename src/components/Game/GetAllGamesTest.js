import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetAllGamesTest = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    retrieveGames();
  }, []);

  const retrieveGames = async () => {
    try {
      const response = await fetch('http://localhost:5162/api/Game/GetAllGames');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGames(data);
      setLoading(false);
    } catch (error) {
      console.error('Error retrieving games:', error);
      setLoading(false);
    }
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
              <Link to={`/game-details/${game.id}`}>
                <h3>{game.title}</h3>
                {game.imageUrl && (
                  <img src={game.imageUrl} alt={game.title} className="game-image" />
                )}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAllGamesTest;
