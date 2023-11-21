import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for Navbar styles
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p><FaPhone /> Phone: +91 9856321487 </p>
          <p><FaEnvelope /> Email: khub@gmail.com</p>
        </div>
        <div className="social-icons">
          <a href="#" className="icon-link"><FaPhone /></a>
          <a href="#" className="icon-link"><FaEnvelope /></a>
          {/* Add more social icons */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
