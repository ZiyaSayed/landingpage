import React, { useState, useEffect } from "react";
import features from "./features";
import { slideTabs } from "./features";
const Features = () => {
  const [feature, setFeature] = useState(features);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let currentIndex = index;

    if (currentIndex > feature.length) {
      currentIndex = 1;
    }

    setIndex(currentIndex);
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="features wrapper">
      <div className="sectionCenter">
        {feature.map((feat, featIndex) => {
          const { id, title, text, image } = feat;

          let position = "nextSlide";

          if (featIndex === index - 1) {
            position = "activeSlide";
          }

          return (
            <article key={id} className={position}>
              <div className="articlewrap">
                <div className="featureText">
                  <h1>{title}</h1>
                  <p>{text}</p>
                </div>
                <img src={image} />
              </div>
            </article>
          );
        })}

        {/* ----------- Carousel Button goes here -------------- */}

        <div className="slideButtons">
          {slideTabs.map((slide) => {
            return (
              <button
                onClick={() => setIndex(slide)}
                data-index={slide}
                key={slide}
                id={`slide-${slide}`}
                className={slide === index && "activeSlideButton"}
              >
                <div></div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

{
  /* <a href='https://www.freepik.com/vectors/business'>Business vector created by pikisuperstar - www.freepik.com</a> */
}
