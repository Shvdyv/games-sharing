import axios, { AxiosResponse } from 'axios';

interface AddPostRepresantation {
  Author: string;
  Content: string;
}

class ForumAPI {
  private baseURL = 'https://localhost:35598/api/forum';

  public async addPost(addPostData: AddPostRepresantation): Promise<AxiosResponse> {
    return axios.post(`${this.baseURL}/AddPost`, addPostData);
  }

  public async displayPosts(): Promise<AxiosResponse> {
    return axios.get(`${this.baseURL}/DisplayPosts`);
  }

  public async deletePost(id: string): Promise<AxiosResponse> {
    return axios.delete(`${this.baseURL}/DeletePost/${id}`);
  }
}

const forumAPI = new ForumAPI();

const newPost: AddPostRepresantation = {
  Author: 'Autor posta',
  Content: 'Treść posta'
};

forumAPI.addPost(newPost)
  .then(response => {
    console.log('Post został dodany!', response);
  })
  .catch(error => {
    console.error('Błąd podczas dodawania posta', error);
  });