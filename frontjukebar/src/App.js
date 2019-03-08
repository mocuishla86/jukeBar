import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Main from "./components/Main/Main";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import SpotifyRedirect from "./components/Login/SpotifyRedirect";
import Profile from "./components/Profile/Profile"
import Playlists from "./components/Playlists/Playlists";
import Addsong from "./components/Addsong/Addsong";
import Search from "./components/Search/Search";
import ProfileEdit from "./components/ProfileEdit/ProfileEdit";
import PlaylistDetails from "./components/PlaylistDetails/PlaylistDetails";
import MainUser from "./components/MainUser.js/MainUser";
import CreateParty from "./components/CreateParty/CreateParty";
import service from "./components/auth/service";
import CreateSpotifyParty from "./components/CreateSpotifyParty/CreateSpotifyParty";



class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null }
    this.service = new service()
  }

  getUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  


  render() {
    return (
      <div className="App">
      {/* <Main /> */}
      <h2 class="main-logo"><Link to="/main" className="Home">jukeBar</Link></h2>
    
      
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />}/>
          <Route exact path="/login" render={() => <Login getUser={this.getUser} />}/>
          <Route exact path="/login-spotify" component={SpotifyRedirect}/>
          <Route exact path="/profile" component={Profile}/>   
          <Route exact path="/profile/edit" component={ProfileEdit}/>
          <Route exact path="/create-party" component={CreateParty}/>
          <Route exact path="/playlists" component={Playlists}/>
          <Route exact path="/playlists-detail/:partyId" component={PlaylistDetails}/>
          <Route exact path="/addsong-vote" component={Addsong}/>
          <Route exact path="/main-user" component={MainUser}/>
          <Route exact path="/add-track-to-party/:partyId" component={Search}/>
          <Route exact path="/create-spotify-party" component={CreateSpotifyParty}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
