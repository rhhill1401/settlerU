import React, { useState } from "react";
import Mentors from "../Mentors";
import Card from "./card";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      {Mentors.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : slide}
            key={index}
          >
            {" "}
            {index === current && (
              <Card
                key={slide.id}
                name={slide.name}
                imgURL={slide.imgURL}
                quote={slide.quote}
              />
            )}
          </div>
        );
      })}
      <button className="nextButton" onClick={prevSlide}>
        prev
      </button>
      <button className="nextButton" onClick={nextSlide}>
        next
      </button>
    </div>
  );
};

export default ImageSlider;
