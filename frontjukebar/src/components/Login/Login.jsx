import React, { Component } from 'react'
import AuthService from '../auth/service';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
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
        this.setState({
          username: username,
          password: password,
          error: false,
          success: true
        });

        this.props.getUser(response)
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
    return (
      <div>
       <h1>Log in</h1>
        <div className="left-column">
          <label htmlFor="username">Username</label>
          <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
          <br />
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
          </div><br />
          <button onClick={this.handleSubmit}>Log in</button>
          <p>{this.state.success ? 'You are logged in' : ''}</p>
      </div>
    )
  }
}
