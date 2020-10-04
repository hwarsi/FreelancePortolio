import React, { Component } from "react";
import "./AboutPage.css";
import haris from "./haris.png";
import frame from "./pictureFrame.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AOS from "aos";

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="WholePage">
        <div className="row">
          <div className="col imgContainer">
            <img src={haris} className="haris"></img>
          </div>
          <div className="col bioContainer">
            <h1 className="Introduction">Hi. I'm Haris, nice to meet you!</h1>
            <div className="IntroductionParagraph">
              I am a freelance software engineer based in Atlanta, Georgia. As
              an experienced software engineer, I understand how the perfect
              user interface should look and work. Alongside my clients I am
              able to search for areas of oppportunities and create customized
              solutions. In short, my goal is simple and that is to deliver a
              custom web app solution that fits my clients' buisness needs.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
