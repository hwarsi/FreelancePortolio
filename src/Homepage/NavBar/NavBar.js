import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="NavBody" id="NavBody">
          <nav>
            <li>
              <a href="/">
                Home
                <span className="link-space">
                  <Link to="/" className="fare">
                    Home
                  </Link>
                  <Link to="/" className="back">
                    Home
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="/services">
                Services
                <span className="link-space">
                  <Link to="/services" className="fare">
                    Services
                  </Link>
                  <Link to="/services" className="back">
                    Services
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="/about">
                About
                <span className="link-space">
                  <Link to="/about" className="fare">
                    About
                  </Link>
                  <Link to="/about" className="back">
                    About
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a href="/blog">
                Blog
                <span className="link-space">
                  <span className="fare">Blog</span>
                  <span className="back">Blog</span>
                </span>
              </a>
            </li>
            <li>
              <a href="/contact">
                Contact
                <span className="link-space">
                  <Link to="/contact" className="fare">
                    Contact
                  </Link>
                  <Link to="/contact" className="back">
                    Contact
                  </Link>
                </span>
              </a>
            </li>
          </nav>
        </div>
      </Router>
    );
  }
}

export default NavBar;
