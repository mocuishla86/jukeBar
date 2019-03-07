import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
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
    return this.service.post("login", { username, password },{
      validateStatus: status => {
        return status >= 200 && status < 300; // Reject only if the status code is greater than or equal to 500
      }})
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
        //https://medium.com/front-end-weekly/error-propagation-in-javascript-with-error-translation-pattern-78cf7178fe92
        throw error
      })
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

    loginSpotify = (code) =>  {
        return this.service.post("login-spotify", {code },{
            validateStatus: status => {
                return status >= 200 && status < 300; // Reject only if the status code is greater than or equal to 500
            }})
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
                //https://medium.com/front-end-weekly/error-propagation-in-javascript-with-error-translation-pattern-78cf7178fe92
                throw error
            })
    }
}

export default AuthService;