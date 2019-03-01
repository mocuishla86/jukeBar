import axios from 'axios';

export default class PartyService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3001/party',
      withCredentials: true
    });
    this.service = service;
  }

  createParty = (partyName) => {
    return this.service.post("/", { partyName })
      .then(response => response.data)
      .catch(error => {
        console.log(error)
        throw error
      })
  }

}
