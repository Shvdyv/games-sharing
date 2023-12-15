import React, { useState, useEffect } from 'react';
import ForumService from '/Users/Dell/games-sharing/src/services/ForumServiceTest';

const DisplayPosts = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      retrievePosts();
    }, []);
  
    const retrievePosts = () => {
      ForumService.displayPosts()
        .then(response => {
          setPosts(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    return (
      <div>
        <h2>Posts List</h2>
        <ul>
          {posts && posts.length > 0 ? (
            posts.map(post => (
              <li key={post.id}>
                <p>{post.content}</p>
                <p>Author: {post.author}</p>
              </li>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default DisplayPosts;