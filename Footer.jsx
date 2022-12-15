import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="icons-footer">
      <FontAwesomeIcon className="facebook" icon={faFacebook} />
      <FontAwesomeIcon className="twitter" icon={faTwitter} />
      <FontAwesomeIcon className="instagram" icon={faInstagram} />
      <FontAwesomeIcon className="github" icon={faGithub} />
    </div>
  );
}
export default Footer;
