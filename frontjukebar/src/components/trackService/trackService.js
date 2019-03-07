import axios from "axios";

export default class TrackService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/tracks`,
      withCredentials: true
    });
    this.service = service;
  }

  getTrack = () => {
    return this.service.get("/").then(data => data.data);
  };

  searchTrack = (track, userId) => {
    return this.service
      .post("/search", { track, userId })
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  addTrack = (track, partyId) => {
    return this.service
      .post("/", { track, partyId })
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

}