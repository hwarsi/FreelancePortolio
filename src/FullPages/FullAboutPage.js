import React, { Component, useEffect } from "react";
import AboutPage from "../About/AboutPage";
import TimeLine from "../About/TimeLine";
import NavBar from "../Homepage/NavBar/NavBar";
import Contact from "../ContactWidget/Contact";
import SkillChart from "../About/SkillChart";

class FullAboutPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <AboutPage />
        <SkillChart />
        <TimeLine />
      </div>
    );
  }
}

export default FullAboutPage;
