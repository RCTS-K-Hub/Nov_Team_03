import React from 'react';
import './SideNav.css';

function SideNav() {
  return (
    <>
      <input type="checkbox" id="menuToggle" />
      <div className="sidenav">
        <a href="#Home">Main</a>
        <a href="#Cards">Top crimes</a>
        <a href="#Piecharts">Overview</a>
        <a href="#Table">Analysis</a>
        <a href="#Contact">Contact</a>
      </div>
    </>
  );
}

export default SideNav;
