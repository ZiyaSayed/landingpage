import React from "react";
import Experiences from "./Experiences";

const ExperienceSection = () => {
  return (
    <section className="experienceSection wrapper">
      <div className="experienceText">
        <h1>
          One Scan to Trigger Consumers <span>360°</span> Product Experiences
        </h1>
        <p>
          With Stegofy solution, your product packaging and labelling no longer
          provides a static content and making your consumers choose your
          product over a competitors.
        </p>
      </div>

      <div className="experienceGrid">
        {Experiences.map((experience) => {
          return (
            <div key={experience.id}>
              <img src={experience.icon} />
              <h4>{experience.title}</h4>
              <p>{experience.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
