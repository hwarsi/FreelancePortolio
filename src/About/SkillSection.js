import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Responsive from "./responsiveDesign.png";
import logic from "./logic.png";
import dynamic from "./dynamic.png";
import sheild from "./sheild.png";
import "./SkillSection.css";

class SkillSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body-about-skills">
        <div className="services-section">
          <div className="inner-width">
            <h1 className="section-title">
              What can you expect for your web app?
            </h1>
            <div className="border"></div>
            <div className="services-container">
              <div className="service-box">
                <div className="service-icon">
                  <i>
                    <img
                      src={Responsive}
                      alt="responsive"
                      className="responsiveIcon"
                    ></img>
                  </i>{" "}
                </div>
                <div className="service-title">Responsive Design </div>
                <div className="service-desc">
                  No matter the device, your web app will be functional across
                  all devices big or small.
                </div>
                <div className="Technology">
                  HTML5 | CSS3 | Media Queries | Flexbox | Gridbox
                </div>
              </div>
              <div className="service-box">
                <div className="service-icon">
                  <i>
                    <img src={dynamic} alt="logic" className="logic"></img>
                  </i>
                </div>
                <div className="service-title">
                  Interactive, Dynamic Web Apps
                </div>
                <div className="service-desc">
                  Taking static web features and turning it into a blazing fast
                  web application that morphs to your will.
                </div>
                <div className="Technology">Javascript | React | jQuery </div>
              </div>
              <div className="service-box">
                <div className="service-icon">
                  <i>
                    <img src={sheild} alt="logic" className="logic"></img>
                  </i>
                </div>

                <div className="service-title">
                  Robust Business Logic And Security
                </div>
                <div className="service-desc">
                  Handle all of the functionality and logic powering your web
                  application. Whether thats using APIs, interacting with a
                  database, creating libraries, or working on business processes
                  and data architecture I got you covered.
                </div>
                <div className="Technology">
                  Node with Express | Python with Flask
                </div>
              </div>
              <div className="service-box">
                <div className="service-icon">
                  <i>
                    <img src={logic} alt="logic" className="logic"></img>
                  </i>
                </div>
                <div className="service-title">
                  Organized, Flexible Data Management
                </div>
                <div className="service-desc">
                  When it comes to how your data is stored and organized I will
                  pick the safest and best way to store your data.
                </div>
                <div className="Technology">SQL | PostGres | MongoDB </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillSection;
