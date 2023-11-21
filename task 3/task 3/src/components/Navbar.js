// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Sidebar from './Sidebar';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const sidebarRef = useRef();

  // Update your toggleMenu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const container = document.querySelector('.container');
    container.classList.toggle('blur', isMenuOpen);
  };

  const closeMenu = () => {
    console.log('Closing menu');
    setIsMenuOpen(false);
  };

  const handleNavigation = (section) => {
    console.log(`Navigating to ${section}`);
    closeMenu();
    // Add your navigation logic here
  };

  useEffect(() => {
    const closeSidebarOnOutsideClick = (event) => {
      if (isMenuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', closeSidebarOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeSidebarOnOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className={`container ${isMenuOpen ? 'shifted' : ''}`}>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="toggle-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕ ' : '☰ '}
        </div>

        <div className="search-bar">
          <input
          className='NavSearch'
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>

      <Sidebar isOpen={isMenuOpen} closeMenu={closeMenu} handleNavigation={handleNavigation} searchTerm={searchTerm} sidebarRef={sidebarRef} />
    </div>
  );
}

export default Navbar;
