import React from "react";

import "./hero.scss";

const HeroSection = () => {
  return (
    <div className="hero__container">
      <div className="hero__title">
        <h1 className="hero__title-item">Portfolio</h1>
      </div>
      <div className="hero__description">
        <p className="hero__description-item">
          Agency provides a full service range including technical skills design
          bussines understanding
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
