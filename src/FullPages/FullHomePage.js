import React, { Component } from "react";
import Banner from "../Homepage/Banner/Banner";
import NavBar from "../Homepage/NavBar/NavBar";

class FullHomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PageContainer">
        <NavBar />
        <Banner />
      </div>
    );
  }
}

export default FullHomePage;
