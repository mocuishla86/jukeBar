import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3001/auth',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password) => {
    return this.service.post("signup", { username, password })
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  login = (username, password) => {
    return this.service.post("login", { username, password })
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  edit = (username) => {
    return this.service.put("edit", { username })
      .then(response => response.data)
      .catch(error => console.log(error))
  }


  loggedin = () => {
    return this.service.get("loggedin")
      .then(response => response.data)
  }

}

export default AuthService;