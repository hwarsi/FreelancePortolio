import React, { Component } from "react";
import "./ContactPage.css";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contactPageBody">
        <div className="contactPageTopMargin">
          <div className="contactformPage">
            <div className="ContactPageTitle">Get In Touch</div>
            <div className="ContactPageinputTitle ContactPagename">
              Your Name
            </div>
            <input
              className="FirstName ContactPagename"
              placeholder="  First Name"
            ></input>
            <input
              className="LastName ContactPagename"
              placeholder="  Last Name"
              id="contactPageLastName"
            ></input>
            <div className="ContactPageinputTitle ContactPagename">Email</div>
            <input
              className="Email otherPage ContactPagename"
              placeholder="  Email"
            ></input>
            <div className="ContactPageinputTitle ContactPagename">
              Phone Number
            </div>
            <input
              className="PhoneNumber otherPage ContactPagename"
              placeholder="  Phone Number"
            ></input>
            <div className="ContactPageinputTitle ContactPagename">Message</div>
            <textarea
              rows="6"
              cols="39"
              className="contactPageTextField ContactPagename"
            ></textarea>
            <div className="submitButtonPage">SEND MESSAGE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
