import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contactBody">
        <div className="MarginTop"></div>
        <div className="contactFrom">
          <div className="ContactFromTitle">Get In Touch</div>
          <div className="inputTitle name">Your Name</div>
          <input
            className="FirstName name"
            placeholder="  First Name"
            id="firstName"
          ></input>
          <input
            className="LastName name"
            placeholder="  Last Name"
            id="lastName"
          ></input>
          <div className="inputTitle name">Email</div>
          <input className="Email other name" placeholder="  Email"></input>
          <div className="inputTitle name">Phone Number</div>
          <input
            className="PhoneNumber other name"
            placeholder="  Phone Number"
          ></input>
          <div className="inputTitle name">Message</div>
          <textarea rows="6" cols="39" className="textFiled name"></textarea>
          <div className="submitButton">SEND MESSAGE</div>
        </div>
        <div className="MarginBottom"></div>
      </div>
    );
  }
}

export default Contact;
