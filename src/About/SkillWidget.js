import React, { Component } from "react";
import "./SkillWidget.css";
import responsive from "./responsiveDesign.png";
import dynamic from "./dynamic.png";
import logic from "./logic.png";
import data from "./data.png";

class SkillWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skillWidgetBody">
        <div className="section1">
          <div className="skillWidgetTitle">Responsive Design</div>
          <div className="hexagon"> </div>
          <img src={responsive} alt="responsive" className="aboutIcons"></img>
          <div className="TextSkill">
            No matter the device, your web app will be functional across all
            devices big or small.
            <div className="languages">
              HTML5 | CSS3 | MEDIA QUERIES | FLEXBOX | GRIDBOX
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="skillWidgetTitle">Interactive, Dynamic Web Apps</div>
          <div className="hexagon"> </div>
          <img src={dynamic} alt="responsive" className="computer"></img>
          <div className="TextSkill">
            Taking static web features and turning it into a blazing fast web
            application that morphs to your will.
            <div className="languages">Javascript | React | jQuery</div>
          </div>
        </div>
        <div className="section1">
          <div className="skillWidgetTitle">
            Robust Business Logic And Security
          </div>
          <div className="hexagon"> </div>
          <img src={logic} alt="responsive" className="logic"></img>

          <div className="TextSkill">
            Handle all of the functionality and logic powering your web
            application. Whether thats using APIs, interacting with a database,
            creating libraries, or working on business processes and data
            architecture I got you covered.
            <div className="languages">
              Node with Express | Python with Flask
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="skillWidgetTitle">
            Organized, Flexible Data Management
          </div>
          <div className="hexagon"> </div>
          <img src={data} alt="responsive" className="data"></img>
          <div className="TextSkill">
            When it comes to how your data is stored and organized I will pick
            the safest and best way to store your data.
            <div className="languages">SQL | PostGres | MongoDB</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillWidget;
