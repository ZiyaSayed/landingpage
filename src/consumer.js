import React from "react";
import consumersConcern from "./svg/consumersConcern.svg";
import concerns from "./consumerConcerns";

const Consumer = () => {
  return (
    <section className="wrapper">
      <div className="consumer">
        <div className="consumerRight">
          <img src={consumersConcern} className="consumerImage" />
        </div>

        <div className="consumerLeft">
          <div className="consumerHeading">
            <h1>What are the Consumer's Concerns During Shopping?</h1>
          </div>

          <div className="consumerGrid">
            <ul>
              {concerns.map((concern) => {
                return (
                  <li key={concern.id}>
                    <div className="concernSvg">
                      <img src={concern.icon} />
                    </div>

                    <div className="concernText">
                      <h4>{concern.title}</h4>
                      <p>{concern.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consumer;
