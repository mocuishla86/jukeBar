import React, { Component } from 'react'
import AuthService from '../auth/service';
import { Redirect } from 'react-router'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { username: 'marujon', password: '1111' };
    this.service = new AuthService();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {

console.log("Respuesta login: " + JSON.stringify(response))
        this.setState({
          username: username,
          password: password,
          error: false,
          logged: true,
            spotifyLoginUrl: response.spotifyLoginUrl
        });

        this.props.getUser(response.theUser)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }


  render() {
    //https://stackoverflow.com/questions/43230194/how-to-use-redirect-in-the-new-react-router-dom-of-reactjs
    const { logged } = this.state;

    if (logged) {
      window.location = this.state.spotifyLoginUrl
      return null;
    }

    return (
      <div class="main-login-signup">
       <h1>Log in</h1>
        <div className="left-column">
          <label htmlFor="username">Username</label>
          <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
          <br />
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
          </div>
          <br />
          <button onClick={this.handleSubmit}>Log in</button>
          <p>{this.state.error ? 'Wrong user or password': ''}</p>
      </div>
    )
  }
}

