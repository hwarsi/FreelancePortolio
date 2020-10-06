import React, { Component } from "react";
import ContactPage from "../ContactPage/ContactPage";
import NavBar from "../Homepage/NavBar/NavBar";

class FullContactPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PageContainer">
        <NavBar />
        <ContactPage />
      </div>
    );
  }
}

export default FullContactPage;
