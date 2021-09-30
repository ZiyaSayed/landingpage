import React from "react";
import data from "./hiwData";

const Howitworks = () => {
  return (
    <section className="worksSection wrapper">
      <div className="worksText">
        <h1>How it works</h1>
      </div>

      <div className="worksGrid">
        {data.map((item) => {
          return (
            <div key={item.id} id={`div-${item.id}`}>
              <div className="dataIcon">
                <img src={item.icon} />
              </div>
              <div className="dataText">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Howitworks;
