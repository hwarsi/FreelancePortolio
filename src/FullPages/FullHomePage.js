import React, { Component } from "react";
import Homepage from "../Homepage/Banner/Banner";
import NavBar from "../Homepage/NavBar/NavBar";

class FullHomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Homepage />
      </div>
    );
  }
}

export default FullHomePage;
