// Footer.js

import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="col1">
          <a href="#" className="brand">Join us</a>
          <ul className="media-icons">
            <li>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
        <div className="col2">
          <ul className="menu">
            <p>Be Update.</p>
          </ul>
        </div>
        <div className="col3">
          <p>Contact Us</p>
          <form>
            <div className="input-wrap">
              <input className="footer-input" type="email" placeholder="ex@gmail.com" />
              <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="mekk">
          <p>Cyber Crime - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
