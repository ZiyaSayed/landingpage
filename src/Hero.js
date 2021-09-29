import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./index.css";

const Hero = () => {
  return (
    <main className=" hero container">
      <div className="heroLeft">
        <h1></h1>
        <p></p>
        <Link to="#">
          <button className="btn btnPrimary">
            <div className="requenstBtn">
              Request Demo
              <AiOutlineArrowRight className="rightIcon" />
            </div>
          </button>
        </Link>
      </div>

      <div className="heroRight"></div>
    </main>
  );
};

export default Hero;
