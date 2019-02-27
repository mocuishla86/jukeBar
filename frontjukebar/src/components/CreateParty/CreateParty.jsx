import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CreateParty extends Component {
  render() {
    return (
      <div>
        <p>Create Party</p>
        <Link to="/search">Search</Link>
      </div>
    )
  }
}

