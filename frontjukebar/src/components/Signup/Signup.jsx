import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/service";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    this.service
      .signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
        
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Sign up!</h2>
        <label htmlFor="username">Username</label>
        <input
          onChange={this.handleChange}
          type="text"
          id="username"
          name="username"
          value={this.state.username}
        /><br />
        <label htmlFor="password">Password</label>
        <input
          onChange={this.handleChange}
          type="password"
          id="password"
          name="password"
          value={this.state.password}
        />
        <br />
        <button onClick={this.handleSubmit}>Create your account</button>
        <Link to="/profile">Profile</Link>
        SIGNUP
      </div>
    );
  }
}
