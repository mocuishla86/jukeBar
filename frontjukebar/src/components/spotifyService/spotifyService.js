import axios from "axios";

export default class SpotifyService {
  constructor(){
    let service = axios.create({
      baseURL: "http://localhost:3001/spotify", //hte qué url va aqui?
      withCredentials: true
    });
    this.service = service;
  }

  getSpotifyParties = () => {
    return this.service.get("/").then(data => data.data);
  }

  createSpotifyParty = partyName => {
    return this.service
      .post("/", { partyName })
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  getSpotifyPlayList = () => {
    return this.service.get('/')
    .then(data => {
      let onePlaylist = data.data;
      return onePlaylist;
    })
  }
}