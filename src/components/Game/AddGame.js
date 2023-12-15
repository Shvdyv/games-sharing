import React, { useState } from 'react';
import GameService from '/Users/Dell/games-sharing/src/services/GameServiceTest';
import AddPhotos from './AddPhotos';

const AddGame = () => {
  const initialGameState = {
    title: '',
    description: '',
    user: '',
    file: '',
    image: '',
  };

  const [game, setGame] = useState(initialGameState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setGame({ ...game, [name]: value });
  };

  const saveGame = () => {
    var data = {
      title: game.title,
      description: game.description,
      user: game.user,
      file: game.file,
      image: game.image,
    };

    GameService.addGame(data)
      .then(response => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const newGame = () => {
    setGame(initialGameState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newGame}>
            Add Another Game
          </button>
          <AddPhotos gameId={game.id} />
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={game.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={game.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Username</label>
            <input
              type="text"
              className="form-control"
              id="author"
              required
              value={game.user}
              onChange={handleInputChange}
              name="author"
            />
          </div>

          <div className="form-group">
            <label htmlFor="file">File</label>
            <input
              type="text"
              className="form-control"
              id="file"
              required
              value={game.file}
              onChange={handleInputChange}
              name="file"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="image"
              required
              value={game.image}
              onChange={handleInputChange}
              name="image"
            />
          </div>

          <button onClick={saveGame} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddGame;
