import axios from 'axios';

const API_URL = 'http://localhost:5191/api/forum';

const addPost = async (addPostRepresentation) => {
  try {
    const response = await axios.post(`${API_URL}/AddPost`, addPostRepresentation);
    return response.data;
  } catch (error) {
    console.error('Error while adding a post:', error);
    throw error;
  }
};

const displayPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/DisplayPosts`);
    return response.data;
  } catch (error) {
    console.error('Error while displaying posts:', error);
    throw error;
  }
};

const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while deleting a post:', error);
    throw error;
  }
};

const ForumService = {
  addPost,
  displayPosts,
  deletePost,
};

export default ForumService;