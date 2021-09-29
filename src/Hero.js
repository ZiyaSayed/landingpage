import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import heroImage from "./svg/Group/heroImage.svg";
import whiteBlue from "./svg/Group/whiteBlue.svg";
import blueWhite from "./svg/Group/blueWhite.svg";
import circlesanddots from "./svg/Group/circlesanddots.svg";
import heroBackground from "./svg/Group/heroBackground.svg";

import "./index.css";

const Hero = () => {
  return (
    <main className=" hero container">
      <div className="heroLeft">
        <h1>
          Bring <span>Authencity</span> to your Products
        </h1>
        <p>
          Securing the genunity of your brand and helping consumers buy smartly
        </p>
        <Link to="#">
          <button className="btn btnPrimary">
            <div className="requenstBtn">
              Request Demo
              <AiOutlineArrowRight className="rightIcon" />
            </div>
          </button>
        </Link>
      </div>

      <div className="heroRight">
        <div className="heroImage">
          <div className="blueWhite sideImages">
            <img src={blueWhite} />
          </div>
          <div className="whiteBlue sideImages">
            <img src={whiteBlue} />
          </div>
          <div className="circlesanddots sideImages">
            <img src={circlesanddots} />
          </div>
          <div className="heroBackground sideImages">
            <img src={heroBackground} />
          </div>
          <img src={heroImage} className="hImage" alt="hero Image" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
