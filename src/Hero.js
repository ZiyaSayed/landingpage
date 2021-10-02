import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import heroImg from "./svg/heroImg.svg";
import "./index.css";

const Hero = () => {
  return (
    <main className=" hero wrapper">
      <div className="heroLeft">
        <h1>
          Bring <span>Authencity</span> to your Products
        </h1>
        <p>
          Securing the genunity of your brand and helping consumers buy smartly
        </p>
        <Link to="#">
          <button className="btn btnPrimary rBtn">
            <div className="requenstBtn">
              Request Demo
              <AiOutlineArrowRight className="rightIcon" />
            </div>
          </button>
        </Link>
      </div>

      <div className="heroRight">
        <div className="heroImage">
          <img src={heroImg} className="hImage" alt="hero Image" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
