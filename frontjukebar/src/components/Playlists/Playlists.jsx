import React, { Component } from "react";
import PartyService from "../party/party";
import { Link } from "react-router-dom";
import {QRCode} from "react-qr-svg"

export default class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    };

    this.PartyService = new PartyService();
    this.getParties();
  }

  getParties = () => {
    this.PartyService.getParties()
      .then(parties => {
        this.setState({ ...this.state, playlists: parties.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    //https://stackoverflow.com/a/44860918
    return (
      <div className="playlist-container">
          <p>
          <Link to="/profile">Back</Link>
        </p>
        <h2>My Playlists</h2>
        {this.state.playlists.map((party, index) => {
          return (
            <div key={index}>
              <div>
                <p>
                  Party name: {party.partyName}{" "}
                  <Link to={"/playlists-detail/" + party._id}>
                    <h4 className="go-link">GO!</h4>
                  </Link>
                </p>
              </div>
              <h4 className="qr-link">PRINT!</h4>
              <QRCode bgColor="#fabada" style={{width: 120}}value={"https://juke-bar0119.herokuapp.com/playlists-detail/" + party._id} />
            </div>
          );
        })}
        <Link to="/profile">Back</Link>
      </div>
    );
  }
}
