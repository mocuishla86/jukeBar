import React, { Component } from "react";
import PartyService from "../party/party";
import { Link } from "react-router-dom";



export default class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    };

    this.PartyService = new PartyService()
    this.getParties()
    
  }

  getParties = () => {
    this.PartyService.getParties()
    .then(parties => {
      this.setState({...this.state, playlists:parties.data})
    })
    .catch(err => console.log(err))
  }


  render() {
    //https://stackoverflow.com/a/44860918
    return (
      <div>
      <h2>My Playlists</h2>
      {this.state.playlists.map((party, index)=>{
        return(
          <div key={index}>
          <div>
            <p>Party name: {party.partyName} <Link to={"/playlists-detail/"+party._id}><h4 className="go-link">GO!</h4></Link></p>
           
          </div>
         
          </div>
        )
      })}
       <Link to="/profile">Back</Link>
      </div>
    );
  }
}
