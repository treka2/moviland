import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>contact with me</p>
      <ul className="social-icons">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100008046970527"
            target="blank"
          >
            <FaFacebook className=" face" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/muhammad-salama-1293201a1"
            target="blank"
          >
            <FaLinkedin className=" linked" />
          </a>
        </li>
        <li>
          <a href="https://github.com/treka2" target="blank">
            <FaGithub className=" github" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
