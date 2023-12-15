import axios, { AxiosResponse } from 'axios';

interface GameRepresentation {
  Id: string;
  Title: string;
  Description: string;
  Image: string;
  Author: string;
  File: string;
}

interface CommentGameRepresentation {
  Content: string;
  Author: string;
  Created: string;
  Game: string;
}

interface RateGameRepresentation {
  UserId: string;
  Rate: number;
  Game: string;
}

interface AddPhotosRepresentation {
  Photo: string;
  Game: string;
}

class GameAPI {
  private baseURL = 'https://localhost:12977/api/game';

  public async addGame(gameData: GameRepresentation): Promise<AxiosResponse> {
    return axios.post(`${this.baseURL}/AddGame`, gameData);
  }

  public async deleteGame(id: string): Promise<AxiosResponse> {
    return axios.delete(`${this.baseURL}/DeleteGame/${id}`);
  }

  public async editGame(gameData: GameRepresentation): Promise<AxiosResponse> {
    return axios.put(`${this.baseURL}/EditGame`, gameData);
  }

  public async getAllGames(): Promise<AxiosResponse> {
    return axios.get(`${this.baseURL}/GetAllGames`);
  }

  public async displayDetailsGame(id: string): Promise<AxiosResponse> {
    return axios.get(`${this.baseURL}/DisplayDetailsGame/${id}`);
  }

  public async downloadGame(id: string, file: string): Promise<AxiosResponse> {
    return axios.get(`${this.baseURL}/DownloadGame/${id}?file=${file}`);
  }

  public async commentGame(commentData: CommentGameRepresentation): Promise<AxiosResponse> {
    return axios.post(`${this.baseURL}/CommentGame`, commentData);
  }

  public async rateGame(rateData: RateGameRepresentation): Promise<AxiosResponse> {
    return axios.post(`${this.baseURL}/RateGame`, rateData);
  }

  public async addPhotos(photosData: AddPhotosRepresentation): Promise<AxiosResponse> {
    return axios.post(`${this.baseURL}/AddPhotos`, photosData);
  }

  public async deleteRate(id: string): Promise<AxiosResponse> {
    return axios.delete(`${this.baseURL}/DeleteRate/${id}`);
  }

  public async deleteComment(id: string): Promise<AxiosResponse> {
    return axios.delete(`${this.baseURL}/DeleteComment/${id}`);
  }
}


const gameAPI = new GameAPI();


const newGame: GameRepresentation = {
  Id: '123',
  Title: 'Nowa Gra',
  Description: 'Opis nowej gry',
  Image: 'url-do-obrazka.jpg',
  Author: 'Autor gry',
  File: 'sciezka-do-pliku.exe'
};

gameAPI.addGame(newGame)
  .then(response => {
    console.log('Gra została dodana!', response);
  })
  .catch(error => {
    console.error('Błąd podczas dodawania gry', error);
  });
