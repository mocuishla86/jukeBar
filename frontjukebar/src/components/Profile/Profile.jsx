import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
       <p>My profile</p>
       
        <p><Link to="/create-party">Create Playlist</Link></p>
        <p><Link to="/playlists">My playlists</Link></p>
   
      </div>
    )
  }
}
