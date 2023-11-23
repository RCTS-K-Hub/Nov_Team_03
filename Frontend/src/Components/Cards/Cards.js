// CountryCards.jsx
import React from 'react';
import './Cards.css'
import Travel from "./assets/se.jpg";
import Travel1 from "./assets/ransmware.jpg"
import Travel2 from "./assets/software.jpg";
import Travel3 from "./assets/crypto.jpeg";
import Travel4 from "./assets/phish.jpg";
import Travel5 from "./assets/se.jpg";

const CountryCards = () => {
  return (
    <section className="journey__container" id="Cards">
        <div className="section__container">
          <h2 className="section__title">Most Popular cyber Crimes</h2>
         
    <div className="journey__grid">
      {/* Country Cards */}
      {/* First country card with name */}
      <div className="country__card">
        <img id="logo" src={Travel} alt="Card Image 1" />
        <div className="country__name">
          <i className="ri-map-pin-2-fill"></i>
          <span>Social engineering</span>
        </div>
      </div>
      <div className="country__card">
        <img id="logo" src={Travel1} alt="Card Image 2" />
        <div className="country__name">
          <i className="ri-map-pin-2-fill"></i>
          <span>Ransomeware</span>
        </div>
      </div>
      <div className="country__card">
        <img id="logo" src={Travel2} alt="Card Image 2" />
        <div className="country__name">
          <i className="ri-map-pin-2-fill"></i>
          <span>Software Privacy</span>
        </div>
      </div>
      <div className="country__card">
        <img id="logo" src={Travel3} alt="Card Image 2" />
        <div className="country__name">
          <i className="ri-map-pin-2-fill"></i>
          <span>Navagio, Greece</span>
        </div>
      </div>
      <div className="country__card">
        <img id="logo" src={Travel4} alt="Card Image 2" />
        <div className="country__name">
          <i className="ri-map-pin-2-fill"></i>
          <span>Phishing</span>
        </div>
      </div>
      <div className="country__card">
        <img id="logo" src={Travel5} alt="Card Image 2" />
        <div className="country__name">
          <i className="ri-map-pin-2-fill"></i>
          <span>Cryptojacking</span>
        </div>
      </div>
    </div>
    </div>
      </section>
  );
};

export default CountryCards;
