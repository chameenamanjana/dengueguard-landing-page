import React from "react";
import dengue from "../../assets/denguemos.jpg";
import './hero.css'

const Hero = () => {
  return (
    <div className="app-wrapper">
      <header className="hero">
        <div className="hero-container">
          <div className="hero-content">
            
            <h1>
              Proactive Defense.
              <br />
              <span>Smart Prediction.</span>
            </h1>
            <p>
              Transforming dengue mitigation from a reactive to a proactive approach using AI and community-driven data.
            </p>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img
                src={dengue}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
