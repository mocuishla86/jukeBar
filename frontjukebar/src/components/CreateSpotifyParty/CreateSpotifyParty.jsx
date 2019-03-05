import React, { Component } from 'react';
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import SpotifyService from "../spotifyService/spotifyService";

export default class CreateSpotifyParty extends Component {
  constructor(props) {
    super(props);
    this.state = { partyName: "" };
    this.service = new SpotifyService();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const partyName = this.state.partyName;

    this.service
      .createSpotifyParty(partyName)
      .then(response => {
        this.setState({
          partySaved: true,
          message: "Party saved"
        });
      })
      .catch(error => {
        this.setState({
          message: "Party not saved"
        });
      });
  };

  
  render() {
    const { partySaved } = this.state;

    if (partySaved) {
      return <Redirect to="/playlists" />;
    }
    return (
      <div>
      <p>Create Spotify Party</p>
      <div className="left-column">
        <div>
          
          <input
            onChange={this.handleChange}
            type="text"
            id="partyName"
            name="partyName"
            placeholder = "Party name"
            value={this.state.partyName}
          />
        </div>
      </div>
      <br />
      <button onClick={this.handleSubmit}>Save</button>
      <span>{this.state.message}</span>
      <p>
        <Link to="/playlists">My playlists</Link>
      </p>
    </div>
    )
  }
}
