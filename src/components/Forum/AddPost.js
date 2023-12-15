import React, { useState } from 'react';
import ForumService from '/Users/Dell/games-sharing/src/services/ForumServiceTest';

const AddPost = () => {
  const initialPostState = {
    author: '',
    content: '',
  };

  const [post, setPost] = useState(initialPostState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const savePost = () => {
    var data = {
      author: post.author,
      content: post.content,
    };

    ForumService.addPost(data)
      .then(response => {
        setPost({
          author: response.data.author,
          content: response.data.content,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const newPost = () => {
    setPost(initialPostState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPost}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              required
              value={post.author}
              onChange={handleInputChange}
              name="author"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              required
              value={post.content}
              onChange={handleInputChange}
              name="content"
            />
          </div>

          <button onClick={savePost} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPost;
