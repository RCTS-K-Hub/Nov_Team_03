// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="close-btn" onClick={closeSidebar}>
        &times;
      </div>
      <ul>
        <li>CONTENTS</li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
        </li>
        <li>
          <Link to="/table">Tables</Link>
        </li>
        <li>
          <Link to="/formdata">formdata</Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
