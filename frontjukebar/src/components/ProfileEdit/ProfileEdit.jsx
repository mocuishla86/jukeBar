import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/service";

export default class ProfileEdit extends Component {
  
  
  render() {
    return (
      
      <div>

        <Link to="/profile">Update</Link>
      </div>
    );
  }
}
