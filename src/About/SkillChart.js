import React, { Component } from "react";
import ReactPlayer from "react-player";

import "./SkillChart.css";

class SkillChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SkillChartBody">
        <div className="center ">
          <h1 className="SkillChartSkillsTitle videoRow ">Software Skills</h1>
          <div className="skillbox">
            <p>HTML5</p>
            <p>95%</p>
            <div className="skill">
              <div className="skill_level" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="skillbox">
            <p>JavaScript</p>
            <p>85%</p>
            <div className="skill">
              <div className="skill_level" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skillbox">
            <p>React.JS</p>
            <p>95%</p>
            <div className="skill">
              <div className="skill_level" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="skillbox">
            <p>PostgreSQL</p>
            <p>75%</p>
            <div className="skill">
              <div className="skill_level" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skillbox">
            <p>Python</p>
            <p>90%</p>
            <div className="skill">
              <div className="skill_level" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skillbox">
            <p>jQuery</p>
            <p>88%</p>
            <div className="skill">
              <div className="skill_level" style={{ width: "88%" }}></div>
            </div>
          </div>
        </div>
        <div className="youtubeVideoAbout ">
          <ReactPlayer
            className="videoSpecs"
            url="https://www.youtube.com/watch?v=mPQ07Z5ASR8&feature=youtu.be"
          />
        </div>
      </div>
    );
  }
}

export default SkillChart;
