// Navbar.js
import React, { useState } from 'react';
import './navbar.css';

const Navbar = ({ handleSearch, toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <nav>
      <div className="navbar-content">
        <div className="logo"></div>
        <div className="heading">Garden Up</div>
        <div className="menu-icon" onClick={toggleSidebar}>
          &#9776;
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;
