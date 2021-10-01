import React from "react";
import logo1 from "./svg/logo1.svg";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { CgInstagram } from "react-icons/cg";
import { SiTwitter } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};
console.log(linkStyle);
const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footer wrapper">
        <div className="footerTop">
          <div className="footerLeft">
            <img src={logo1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              semper mauris auctor nibh bibendum, non euismod quam tincidunt.
            </p>
            <div className="socialMediaSection">
              <CgInstagram />
              <SiTwitter />
              <ImLinkedin2 />
              <CgFacebook />
            </div>
          </div>
          <div className="footerMid">
            <div>
              <h4>Company</h4>
              <ul>
                <Link to="#" style={linkStyle}>
                  <li>Blog</li>
                </Link>
                <Link to="#" style={linkStyle}>
                  <li>Careers</li>
                </Link>
                <Link to="#" style={linkStyle}>
                  <li>About Us</li>
                </Link>
              </ul>
            </div>

            <div>
              <h4>Products</h4>
              <ul>
                <Link to="#" style={linkStyle}>
                  <li>Watch Demo</li>
                </Link>

                <Link to="#" style={linkStyle}>
                  <li>Term of Service</li>
                </Link>

                <Link to="#" style={linkStyle}>
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>

            <div>
              <h4>Help & Support</h4>

              <ul>
                <Link to="#" style={linkStyle}>
                  <li>Report Bug</li>
                </Link>

                <Link to="#" style={linkStyle}>
                  <li>Share Feedback</li>
                </Link>

                <Link to="#" style={linkStyle}>
                  <li>Contact Support</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="footerRight">
            <p>Subscribe to our Newsletter</p>
            <div className="footerForm">
              <div className="mail">
                <div className="mailIcon">
                  <HiOutlineMail />
                </div>

                <div className="emailInput">
                  <input type="text" placeholder="Enter Email Address" />
                </div>
              </div>

              <div className="getStarted">
                <button className="btnPrimary">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            Copyright 2020. Stegofy All rights reserved | privacy policy |
            Refund and Cancellation Policy | Terms of Use | Cookies | Sitemap
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
