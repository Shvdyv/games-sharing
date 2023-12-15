import React from 'react';
import GameService from '/Users/Dell/games-sharing/src/services/GameServiceTest';

const DeleteGame = ({ gameId }) => {
  const handleDelete = async () => {
    try {
      await GameService.deleteGame(gameId);
      // Możesz dodać odpowiednie działania po usunięciu gry, np. przekierowanie lub odświeżenie danych
      console.log('Game deleted successfully');
    } catch (error) {
      console.error('Error while deleting game:', error);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete Game
    </button>
  );
};

export default DeleteGame;