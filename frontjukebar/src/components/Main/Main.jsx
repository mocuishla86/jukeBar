import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div class="main-login-signup">
        
        <p>Do you have an account?</p>
        <p><Link to="/Login">Login</Link></p> or
       <p><Link to="/Signup">Signup</Link></p>
        
      </div>
    )
  }
}
