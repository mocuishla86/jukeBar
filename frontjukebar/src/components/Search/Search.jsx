import React, { Component } from 'react'

import TrackService from "../trackService/trackService";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { track: "" };
    this.service = new TrackService();
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const track = this.state.track;

    this.service
      .searchTrack(track)
      .then(response => {
        this.setState({
          trackHere: true,
          message: "your track"
        });
      })
      .catch(error => {
        this.setState({
          message: "No track yet"
        });
      });
  };



  render() {
    

    return (
      <div>
        <p>Search a song!</p>
        <div className="left-column">
          <div>
            
            <input
              onChange={this.handleChange}
              type="text"
              id="track"
              name="track"
              placeholder = "Search"
              value={this.state.track}
            />
          </div>
        </div>
        <br />
        <button onClick={this.handleSubmit}>Go!</button>
        <span>{this.state.message}</span>
        
      </div>
    )
  }
}

