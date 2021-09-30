import React from "react";
import whyChoose from "./svg/whyChoose.svg";
import { Link } from "react-router-dom";

import data from "./whyData";
const Why = () => {
  return (
    <section className="whySection wrapper">
      <div className="whyLeft">
        <img src={whyChoose} />
      </div>

      <div className="whyRight">
        <div className="whyText">
          <h1>
            Why Choose <span>Stegofy?</span>
          </h1>
          <p>
            Stegofy platform is secure, reliable and convenient one-stop
            solution for all your brand and product management needs
          </p>
          <Link to="#">
            <button className="btn btnPrimary">Learn More</button>
          </Link>
        </div>

        <div className="whyGrid">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="whyIcon">
                  <img src={item.icon} />
                </div>

                <div className="whyItemData">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Why;
