import React from "react";
import dengue from "../../assets/denguemos.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="app-wrapper" id="home">
      <header className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              <span className="pd">Proactive Defense.</span>
              <br></br>
              <span className="sp">Smart Prediction.</span>
            </h1>
            <p>
              Transforming dengue mitigation from a reactive to a proactive
              approach using AI and community-driven data.
            </p>

            <div className="hero-btn-container">
              <button>
                <h1>Coming Soon!</h1>
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img src={dengue} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
