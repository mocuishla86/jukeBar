import axios from "axios";

export default class PartyService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/party`,
      withCredentials: true
    });
    this.service = service;
  }

  getParties = () => {
    return this.service.get("/").then(data => data.data);
  };

  createParty = partyName => {
    return this.service
      .post("/", { partyName })
      .then(response => response.data)
      .catch(error => {
        console.log("AAAAAAAAAAAA");
        throw error;
      });
  };


  getPlayList = playlistId => {
    return this.service.get('/'+playlistId)
    .then(data => {
      let onePlaylist = data.data;
      return onePlaylist;
    })
  }

  // addSong = songId => {
  //   return this.service
  //   .post("/addsong", {songId})
  //   .then(response => response.data)
  //   .catch(error => {
  //     console.log(error);
  //     throw error;
  //   })
  // }
}
