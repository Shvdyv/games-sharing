import axios from 'axios';

const API_URL = 'http://localhost:5162/api/Game';

const authenticateByToken = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/AuthenticateByToken?token=${token}`);
    return response.data;
  } catch (error) {
    console.error('Error while authenticating by token:', error);
    throw error;
  }
};

const addGame = async (gameRepresentation) => {
  try {
    const response = await axios.post(`${API_URL}/AddGame`, gameRepresentation);
    return response.data;
  } catch (error) {
    console.error('Error while adding a game:', error);
    throw error;
  }
};

const deleteGame = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/DeleteGame/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while deleting a game:', error);
    throw error;
  }
};

const editGame = async (gameRepresentation) => {
  try {
    const response = await axios.put(`${API_URL}`, gameRepresentation);
    return response.data;
  } catch (error) {
    console.error('Error while editing a game:', error);
    throw error;
  }
};

const getAllGames = async () => {
  try {
    const response = await axios.get(`${API_URL}/GetAllGames`);
    return response.data;
  } catch (error) {
    console.error('Error while getting all games:', error);
    throw error;
  }
};

const displayDetailsGame = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/DisplayDetailsGame/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while displaying details of a game:', error);
    throw error;
  }
};

const downloadGame = async (id, file) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/DownloadGame?file=${file}`);
    return response.data;
  } catch (error) {
    console.error('Error while downloading a game:', error);
    throw error;
  }
};

const commentGame = async (commentGameRepresentation) => {
  try {
    const response = await axios.post(`${API_URL}/CommentGame`, commentGameRepresentation);
    return response.data;
  } catch (error) {
    console.error('Error while commenting on a game:', error);
    throw error;
  }
};

const rateGame = async (rateGameRepresentation) => {
  try {
    const response = await axios.post(`${API_URL}/RateGame`, rateGameRepresentation);
    return response.data;
  } catch (error) {
    console.error('Error while rating a game:', error);
    throw error;
  }
};

const addPhotos = async (addPhotosRepresentation) => {
  try {
    const response = await axios.post(`${API_URL}/AddPhotos`, addPhotosRepresentation);
    return response.data;
  } catch (error) {
    console.error('Error while adding photos to a game:', error);
    throw error;
  }
};

const deleteRate = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/DeleteRate/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while deleting a rate:', error);
    throw error;
  }
};

const deleteComment = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/DeleteComment/${id}`);
    return response.data;
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