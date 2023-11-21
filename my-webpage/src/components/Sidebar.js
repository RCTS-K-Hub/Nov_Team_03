import React, { useState } from 'react';
import '../styles/Sidebar.css'; // Import the CSS file for Sidebar styles

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <h2>LEARNING</h2>
      <ul className="sidebar-list">
        <li><a href="/dashboard" onClick={closeSidebar}>Dashboard</a></li>
        <li><a href="/settings" onClick={closeSidebar}>Settings</a></li>
        <li><a href="/profile" onClick={closeSidebar}>Profile</a></li>
        {/* Add more sidebar items */}
      </ul>
      {/* More Sidebar content */}
    </div>
  );
};

export default Sidebar;
