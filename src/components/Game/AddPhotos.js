import React, { useState } from 'react';
import GameService from '/Users/Dell/games-sharing/src/services/GameServiceTest';

const AddPhotos = ({ gameId }) => {
  const [photo, setPhoto] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { value } = event.target;
    setPhoto(value);
  };

  const savePhoto = () => {
    var data = {
      gameId: gameId,
      photoUrl: photo,
    };

    GameService.addPhotos(data)
      .then(response => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const newPhoto = () => {
    setPhoto('');
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Photo added successfully!</h4>
          <button className="btn btn-success" onClick={newPhoto}>
            Add Another Photo
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="photo">Photo URL</label>
            <input
              type="text"
              className="form-control"
              id="photo"
              required
              value={photo}
              onChange={handleInputChange}
              name="photo"
            />
          </div>

          <button onClick={savePhoto} className="btn btn-success">
            Add Photo
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPhotos;
