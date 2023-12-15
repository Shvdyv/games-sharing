import React, { useState, useEffect } from 'react';
import GameService from '/Users/Dell/games-sharing/src/services/GameServiceTest';
import DeleteGame from './DeleteGame';
import RateGame from './RateGame';
import CommentGame from './CommentGame';
import DeleteComment from './DeleteComment';

const DisplayDetailsGame = ({ match }) => {
  const [gameDetails, setGameDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gameId = match.params.id;
    fetchGameDetails(gameId);
  }, [match.params.id]);

  const fetchGameDetails = async (id) => {
    try {
      setLoading(true);
      const response = await GameService.displayDetailsGame(id);
      setGameDetails(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching game details:', error);
      setLoading(false);
    }
  };

  return (
    <div className="game-details">
      {loading ? (
        <p>Loading game details...</p>
      ) : (
        <div>
          <h2>Game Details</h2>
          <p>Title: {gameDetails.title}</p>
          <p>Description: {gameDetails.description}</p>
          <p>ImageUrl: {gameDetails.imageUrl}</p>
          <p>Author: {gameDetails.author}</p>
          <p>FileUrl: {gameDetails.fileUrl}</p>
          <p>Rate: {gameDetails.rate}</p>
          <p>Comments:</p>
          <ul>
            {gameDetails.comments &&
              gameDetails.comments.map((comment) => (
                <li key={comment.id}>
                  <p>{comment.content}</p>
                  <DeleteComment commentId={comment.id} />
                </li>
              ))}
          </ul>

          <DeleteGame gameId={gameDetails.id} />
          <RateGame gameId={gameDetails.id} />
          <CommentGame gameId={gameDetails.id} />
        </div>
      )}
    </div>
  );
};

export default DisplayDetailsGame;
