import React, { Component } from "react";
import { Link } from "react-router-dom";
import PartyService from "../party/party";
import { Redirect } from "react-router";

export default class CreateParty extends Component {
  constructor(props) {
    super(props);
    this.state = { partyName: "" };
    this.service = new PartyService();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const partyName = this.state.partyName;

    this.service
      .createParty(partyName)
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
        <p>Create Party</p>
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
    );
  }
}
