import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
function Main() {
  return (
    <div className="main-content">
      <h1 className="nav-name">Sai Teja</h1>
      <p className="nav-designation">Front End Developer</p>
      <a href="#" className="nav-website">
        saiteja.chandala
      </a>
      <button className="nav-email">
        <FontAwesomeIcon className="email" icon={faEnvelope} />
        Email
      </button>
      <button className="nav-linkedin">
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
        LinkedIn
      </button>
      <h3 className="about">About</h3>
      <p className="aboutus-para">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h3 className="interests">Interests</h3>
      <p className="interests-para">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}
export default Main;
