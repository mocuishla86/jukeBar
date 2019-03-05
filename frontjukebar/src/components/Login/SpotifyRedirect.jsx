import React, { Component } from 'react'
import AuthService from '../auth/service';
import { Redirect } from 'react-router';
const qs = require('query-string');

export default class SpotifyRedirect extends Component {

  constructor(props) {
    super(props);
    this.state = { logged:false };
    this.service = new AuthService();

    setTimeout( () => {
        console.log("Logging to spotify")
        //https://stackoverflow.com/a/37568368/4251534
        const code = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code;

        this.service.loginSpotify(code)
            .then(response => {
                console.log("Logged to spotify")
                this.setState({
                    logged: true
                });
            })
            .catch(error => {
                console.log("Not logged to spotify")
                this.setState({
                    error: true
                });
            })
    },1000)
  }

  render() {
    //https://stackoverflow.com/questions/43230194/how-to-use-redirect-in-the-new-react-router-dom-of-reactjs
    const { logged } = this.state;

    if (logged) {
      return <Redirect to='/profile'/>;
    }

    return (
      <div class="main-login-signup">
       <h1>Login to Spotify...</h1>
      </div>
    )
  }
}