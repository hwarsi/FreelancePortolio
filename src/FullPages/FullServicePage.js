import React, { Component, useEffect } from "react";
import ServiceBanner from "../ServicePage/ServiceBanner";
import SkillSection from "../About/SkillSection";
import ServiceProcess from "../ServicePage/ServiceProcess";
import NavBar from "../Homepage/NavBar/NavBar";
import ContactWidget from "../ContactWidget/Contact";

import "../App.css";

class FullServicePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ServicePageContainer">
        <NavBar />
        <ServiceBanner />
        <SkillSection />
        <ServiceProcess />
        <ContactWidget />

      </div>
    );
  }
}

export default FullServicePage;
