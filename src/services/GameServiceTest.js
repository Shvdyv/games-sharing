const API_URL = 'http://localhost:5162/api/Game';

const fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const authenticateByToken = async (token) => {
  try {
    const response = await fetch(`${API_URL}/AuthenticateByToken?token=${token}`, {
      method: 'POST',
      ...fetchOptions,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while authenticating by token:', error);
    throw error;
  }
};

const addGame = async (gameRepresentation) => {
  try {
    const response = await fetch(`${API_URL}/AddGame`, {
      method: 'POST',
      ...fetchOptions,
      body: JSON.stringify(gameRepresentation),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while adding a game:', error);
    throw error;
  }
};

const deleteGame = async (id) => {
  try {
    const response = await fetch(`${API_URL}/DeleteGame/${id}`, {
      method: 'DELETE',
      ...fetchOptions,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while deleting a game:', error);
    throw error;
  }
};

const editGame = async (gameRepresentation) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'PUT',
      ...fetchOptions,
      body: JSON.stringify(gameRepresentation),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while editing a game:', error);
    throw error;
  }
};

const getAllGames = async () => {
  try {
    const response = await fetch(`${API_URL}/GetAllGames`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while getting all games:', error);
    throw error;
  }
};

const displayDetailsGame = async (id) => {
  try {
    const response = await fetch(`${API_URL}/DisplayDetailsGame/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while displaying details of a game:', error);
    throw error;
  }
};

const downloadGame = async (id, file) => {
  try {
    const response = await fetch(`${API_URL}/${id}/DownloadGame?file=${file}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while downloading a game:', error);
    throw error;
  }
};

const commentGame = async (commentGameRepresentation) => {
  try {
    const response = await fetch(`${API_URL}/CommentGame`, {
      method: 'POST',
      ...fetchOptions,
      body: JSON.stringify(commentGameRepresentation),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while commenting on a game:', error);
    throw error;
  }
};

const rateGame = async (rateGameRepresentation) => {
  try {
    const response = await fetch(`${API_URL}/RateGame`, {
      method: 'POST',
      ...fetchOptions,
      body: JSON.stringify(rateGameRepresentation),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while rating a game:', error);
    throw error;
  }
};

const addPhotos = async (addPhotosRepresentation) => {
  try {
    const response = await fetch(`${API_URL}/AddPhotos`, {
      method: 'POST',
      ...fetchOptions,
      body: JSON.stringify(addPhotosRepresentation),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while adding photos to a game:', error);
    throw error;
  }
};

const deleteRate = async (id) => {
  try {
    const response = await fetch(`${API_URL}/DeleteRate/${id}`, {
      method: 'DELETE',
      ...fetchOptions,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while deleting a rate:', error);
    throw error;
  }
};

const deleteComment = async (id) => {
  try {
    const response = await fetch(`${API_URL}/DeleteComment/${id}`, {
      method: 'DELETE',
      ...fetchOptions,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while deleting a comment:', error);
    throw error;
  }
};

const GameService = {
  authenticateByToken,
  addGame,
  deleteGame,
  editGame,
  getAllGames,
  displayDetailsGame,
  downloadGame,
  commentGame,
  rateGame,
  addPhotos,
  deleteRate,
  deleteComment,
};

export default GameService;
