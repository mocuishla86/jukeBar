import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <p>Edit Profile</p>
       
       <Link to="/profile">Update</Link>
      </div>
    )
  }
}
