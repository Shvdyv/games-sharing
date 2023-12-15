import React, { useState, useEffect } from 'react';
import GameService from '/Users/Dell/games-sharing/src/services/GameServiceTest';

const DownloadGame = () => {
  const [games, setGames] = useState([]);
  const [downloadedGameId, setDownloadedGameId] = useState(null);

  useEffect(() => {
    fetchAllGames();
  }, []);

  const fetchAllGames = () => {
    GameService.getAllGames()
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.error('Error while fetching games:', error);
      });
  };

  const handleDownload = (id, fileName) => {
    GameService.downloadGame(id, fileName)
      .then((data) => {
        console.log('Game downloaded:', data);
        setDownloadedGameId(id);
      })
      .catch((error) => {
        console.error('Error while downloading game:', error);
      });
  };

  return (
    <div className="games-list">
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <h3>{game.title}</h3>
          {downloadedGameId !== game.id ? (
            <button
              className="btn btn-primary"
              onClick={() => handleDownload(game.id, game.fileName)}
            >
              Download
            </button>
          ) : (
            <p>Game downloaded successfully!</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DownloadGame;