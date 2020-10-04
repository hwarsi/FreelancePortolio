import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";

import development from "./development.png";
import ReactPlayer from "react-player";

import "./ServiceProcess.css";

class ServiceProcess extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="WholePageProcess">
        <div className="youtubeVideoSkills ">
          <ReactPlayer
            className="videoSKills"
            url="https://www.youtube.com/watch?v=mPQ07Z5ASR8&feature=youtu.be"
            width="130%"
          />
        </div>
        <div className="processContainer ">
          <div className="col">
            <div className="row">
              <div className="iconAlign">
                <FontAwesomeIcon icon={faSearch} size="4x" />
              </div>
              <div className="processBox">
                <div className="processSubHeading topSubHeading ">
                  Tell me the current situation
                </div>
                <div className="processTitle ">Discovery Stage</div>
                <div className="processDescription videoRow">
                  During this stage I will connect with you and your team to
                  learn more about your project. What you can expect during this
                  stage is for me to listen to your problem and work with you to
                  set targeted goals for your project.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="iconAlign">
                <FontAwesomeIcon icon={faHandshake} size="4x" />
              </div>
              <div className="processBox">
                <div className="processSubHeading">
                  Get To Know Your Business And Team
                </div>
                <div className="processTitle">Onboarding</div>
                <div className="processDescription ">
                  Congrats, you took your first successful step towards a
                  successful website project. During this kick off meeting, we
                  will discuss your brand and design preferences. At the end of
                  the meeting we will have already defined a content plan and
                  other key deliverables needed.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="iconAlign">
                <img
                  src={development}
                  className="development"
                  id="computerDiscovery"
                ></img>
              </div>
              <div className="processBox">
                <div className="processSubHeading">
                  Breathing Life Into Your Project
                </div>
                <div className="processTitle">Devlopment</div>

                <div className="processDescription">
                  I will start devleoping the custom web app solution at this
                  stage. This is where the overall "feel" of your website comes
                  alive and where I start developing the functionality and
                  features. I specialized in custom development that fits your
                  needs and that means if you can dream of it, I can create it.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="iconAlign">
                <FontAwesomeIcon icon={faGlobe} size="4x" />
              </div>
              <div className="processBox">
                <div className="processSubHeading">Your Problems Solved</div>
                <div className="processTitle">Going Live</div>
                <div className="processDescription">
                  Congratulations, we have made it to the most exciting part
                  where I launch your brand new website! I will help make sure
                  there is a smooth launch and that the whole web app is
                  completely functional.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="iconAlign">
                <FontAwesomeIcon icon={faTools} size="4x" />
              </div>
              <div className="processBox">
                <div className="processSubHeading">I Am Here To Help</div>
                <div className="processTitle">Maintenance and Updates</div>
                <div className="processDescription">
                  With how fast the world is changing, your business could be
                  changing as well. I am always on stand by, ready to make any
                  changes that you request. I will work with you on updates and
                  maintenance. I also offer hosting plans and development plans
                  that fit your needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceProcess;
