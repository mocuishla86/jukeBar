import React, { Component } from "react";
import PartyService from "../party/party";

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
    let playlistId = "5c79c383e461563a99137b34";
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

        <button>add song</button>
      </div>
    );
  }
}
//<img src={this.state.beer.image_url} alt="beerImage"/>
