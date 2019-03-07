import React, { Component } from "react";
import PartyService from "../party/party";
import { Link } from "react-router-dom";

export default class PlaylistDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: undefined
    };

    this.PartyService = new PartyService();
    this.getPlayList();
  }

  getPlayList = () => {
    console.log(this.state)
     //https://stackoverflow.com/a/44860918
    let playlistId = this.props.match.params.partyId;
    console.log(playlistId)
    this.PartyService.getPlayList(playlistId)
      .then(playlistReturnedByTheService => {
        console.log(playlistReturnedByTheService);

        this.setState({ playlist: playlistReturnedByTheService });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.playlist) {
      return <div>Cargando...</div>;
    }

    return (
      <div>
        <div>Playlist: {this.state.playlist.partyName}</div>

        <div>Created at: {this.state.playlist.created_at}</div>
          
        <p><Link to={"/add-track-to-party/"+this.state.playlist._id}>add song</Link></p>
      </div>
    );
  }
}
//<img src={this.state.beer.image_url} alt="beerImage"/>
