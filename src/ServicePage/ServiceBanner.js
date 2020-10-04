import React, { Component } from "react";
import "./serviceBanner.css";

class ServiceBanner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bodyServiceBanner">
        <div className="serviceTitle">Let Me Help Tell Your Story</div>
        <div className="servicesubTitle">
          Using industry best practices to build commercially ready web apps
          that are ready to solve your business problems
        </div>
      </div>
    );
  }
}

export default ServiceBanner;
