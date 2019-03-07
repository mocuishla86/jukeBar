import React, { Component } from 'react'
import { Redirect } from 'react-router';
import TrackService from "../trackService/trackService";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [] };
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
        console.log(response)
        this.setState({
          tracks:response,
          trackHere: true,
          message: "your track",

        });
      })
      .catch(error => {
        this.setState({
          message: "No track yet"
        });
      });
  };

  addTrack = track => {
    const partyId = this.props.match.params.partyId;

   this.service.addTrack(track,partyId)
     .then( response => {
        this.setState({
          songAdded: true
        });
     })
     .catch(error => {
       this.setState({
         message: "Error adding song"
       });
     });
  };



  render() {
    const partyId = this.props.match.params.partyId;
    if(this.state.songAdded) {
      return <Redirect to={"/playlists-detail/"+partyId} />; 
    }
    

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
        <div>
          {this.state.tracks.map((track, index)=>{
            return(
              <div key={index}>
              <div className="info-track">
                <h3>{track.name}</h3>
                <img src={track.image} alt={track.album}/>
                <button onClick={() => this.addTrack(track)}>Add to party!</button>
              </div>
              </div>
            )
          })}
        </div>
        <span>{this.state.message}</span>
        
      </div>
    )
  }
}

