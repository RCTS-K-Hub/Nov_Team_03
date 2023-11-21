// Navbar.js
import React from 'react';
import '../styles/Navbar.css'; // Import the CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>My Website</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
