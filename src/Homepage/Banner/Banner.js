import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BannerContainer">
        <div className="bounce">
          <div className="ball bounceA"></div>
        </div>
        <h2 className="Banner">
          <div className="fulllight">
            <div className="welcome">
              <span>W</span>
              <span>E</span>
              <span>L</span>
              <span>C</span>
              <span>O</span>
              <span>M</span>
              <span>E</span>
            </div>
            <div className="subHeading">
              {" "}
              Your destination for quality Software Engineering
            </div>
            <div className="overallbanneButton">
              <a className="bannerButton" href="/services">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Learn More
              </a>
              <div className="runningLights">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </h2>
      </div>
    );
  }
}

export default Banner;
