import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
      <div>
        PROFILE
        <p><Link to="/profile/edit">Edit</Link></p>
        <p><Link to="/create">Create Playlist</Link></p>
        <p><Link to="/playlists">My playlists</Link></p>
      </div>
    )
  }
}
