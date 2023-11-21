import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, closeMenu }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeMenu}>
        
      </button>
      <ul>
        <li>
          <a href="#Cards">
            Cards
            </a>
        </li>
        <li>
        <a href="#PieCharts">
            PieCharts
            </a>
        </li>
        <li>
        <a href="#Table">
            Table
            </a>
        </li>
        <li>
        <a href="#Form">
            Form
            </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;