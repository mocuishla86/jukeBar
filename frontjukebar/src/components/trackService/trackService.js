import axios from "axios";

export default class TrackService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:3001/tracks",
      withCredentials: true
    });
    this.service = service;
  }

  // getTrack = () => {
  //   return this.service.get("/").then(data => data.data);
  // };

  searchTrack = track => {
    return this.service
      .post("/", { track })
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

}