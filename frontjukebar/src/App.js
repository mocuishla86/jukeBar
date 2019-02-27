import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Main from "./components/Main/Main";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile"
import Playlists from "./components/Playlists/Playlists";
import Addsong from "./components/Addsong/Addsong";
import Search from "./components/Search/Search";
import ProfileEdit from "./components/ProfileEdit/ProfileEdit";
import PlaylistDetails from "./components/PlaylistDetails/PlaylistDetails";
import MainUser from "./components/MainUser.js/MainUser";
import CreateParty from "./components/CreateParty/CreateParty";


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Main /> */}
      <h2>jukeBar</h2>
      <Link to="/main">Start!</Link>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>   
          <Route exact path="/profile/edit" component={ProfileEdit}/>
          <Route exact path="/create-party" component={CreateParty}/>
          <Route exact path="/playlists" component={Playlists}/>
          <Route exact path="/playlists-detail" component={PlaylistDetails}/>
          <Route exact path="/addsong-vote" component={Addsong}/>
          <Route exact path="/main-user" component={MainUser}/>
          <Route exact path="/search" component={Search}/>
        </Switch>
      </div>
    );
  }
}

export default App;
