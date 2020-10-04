import React, { Component, useEffect } from "react";
import "./TimeLine.css";
import AOS from "aos";

class TimeLine extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }

  render() {
    return (
      <div data-aos="fade-left" className="TimelineContainer">
        <div className="Timeline_Body">
          <div className="TimeLineTitle">Work History</div>
          <div className="timeline">
            <div className="content ">
              <h2>My Value Media LLC</h2>
              <div className="positiontitle">Software Engineer</div>
              <div className="underline"></div>
              <ul>
                <li>
                  Utilized React to create responsive marketing platforms that
                  included landing pages, and analytics dashboards for clients.
                </li>
                <li>
                  Developed RESTful api’s using Python (Flask) and MongoDB for
                  our database.
                </li>
                <li>Collaborated with a small agile engineering team.</li>
                <li>
                  Created unit tests before deploying applications to Google
                  Cloud.
                </li>
                <li>
                  Project: Developed a jewelry eCommerce web app for one of our
                  clients.
                </li>
              </ul>
              <p className="time">August 2018 - Present</p>
            </div>
            <div className="content ">
              <h2>Redhype</h2>
              <div className="positiontitle">Software Engineer Intern</div>
              <div className="underline"></div>
              <li>
                Collaborated with designers to create clean interfaces and
                simple, intuitive interactions and experiences using React.
              </li>
              <li>
                Pair-Programmed with Senior Engineers to work-on backend
                services with Python.
              </li>
              <li>
                Project: Made an application to help recruiting companies find
                engineering candidates.
              </li>
              <p className="time">May 2019 - August 2019</p>
            </div>
            <div className="content ">
              <h2>Bosch Rexroth</h2>
              <div className="positiontitle">Software Engineer Intern</div>
              <div className="underline"></div>
              <li>
                Was responsible for QA testing, fixing bugs with jQuery and
                Python.
              </li>
              <li>
                Responsible for inspecting out of spec parts for quality issues.
              </li>
              <li>
                Project: Helped write a responsive web app to quickly pull up
                vendors, part quotations and specifications.
              </li>
              <p className="time">January 2018 - May 2018</p>
            </div>
          </div>
          <div className="bottomTimeline"></div>
        </div>
      </div>
    );
  }
}

export default TimeLine;
