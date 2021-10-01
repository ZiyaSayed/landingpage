import React from "react";
import { Link } from "react-router-dom";
import logo from "./svg/logo.svg";
import verify from "./svg/verify.svg";

const linkStyle = {
  textDecoration: "none",
  color: "#b8c4cf",
};

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="navSection">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Stegofy" />
          </Link>
        </div>

        <div className="navComponent">
          <div className="navLinks">
            <ul>
              <li>
                <Link to="#" style={linkStyle}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" style={linkStyle}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" style={linkStyle}>
                  Our Journey
                </Link>
              </li>
              <li>
                <Link to="#" style={linkStyle}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="navButtons">
            <div className="navButton">
              <Link to="#">
                <button className="btn btnPrimary">
                  <div className="verifyButton">
                    <img src={verify} className="verifyIcon" />
                    <div>Verify</div>
                  </div>
                </button>
              </Link>
            </div>

            <div className="navButton">
              <Link to="#">
                <button className="btn btnSecondary">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { linkStyle };
