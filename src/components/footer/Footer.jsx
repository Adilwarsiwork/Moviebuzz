import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="infoText">
          Moviebuzz is a platform where user can search for their favourite
          Movies, Tv shows & Web seriers and they can find the details of that
          shows like rating, star cast, release date, director name, poster and
          also they can watch trailer of that.
        </div>
        <div className="contact">
          <h4> &nbsp; Contacts</h4>
          <a
            title="Click to call on +919575726843"
            className="contact-details"
            href="tel:+919575726843"
            target="_blank"
          >
            +91 9575726843
          </a>
          <a
            title="Click to send E-mail"
            className="contact-details"
            href="mailto:warsi.work@gmail.com"
            target="_blank"
          >
            aadilwarsi.work@gmail.com
          </a>
          <br />
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a href="https://www.instagram.com/aadilwarsi.in" target="_blank">
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a href="mailto:aadilwarsi.work@gmail.com" target="_blank">
              <SiGmail />
            </a>
          </span>
          <span className="icon">
            <a href="tel:+919575726843" target="_blank" title="+919575726843">
              <IoCall />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://linkedin.com/in/adil-warsi-0b3a47252"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </span>
          <span className="icon">
            <a href="https://github.com/Adilwarsiwork" target="_blank">
              <SiGithub />
            </a>
          </span>
        </div>
        <hr className="hrline" />
        <div className="author">
          {/* This site is developed and maintain by ADIL WARSI.
          <br /> */}
          <h6>
            All copyrights <FaRegCopyright className="copyright-icon" />{" "}
            reserved to ADIL WARSI - 2024.
          </h6>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
