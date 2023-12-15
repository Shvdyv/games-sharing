const API_URL = 'http://localhost:5191/api/forum';

const addPost = async (addPostRepresentation) => {
  try {
    const response = await fetch(`${API_URL}/AddPost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addPostRepresentation),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error while adding a post:', error);
    throw error;
  }
};

const displayPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/DisplayPosts`);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error while displaying posts:', error);
    throw error;
  }
};

const deletePost = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    return await response.json();
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
