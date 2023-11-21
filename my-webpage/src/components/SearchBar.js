import React from 'react';
import '../styles/Searchbar.css'; // Import the CSS file for Searchbar styles

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
