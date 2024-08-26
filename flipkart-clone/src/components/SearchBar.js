import React from 'react';
import '../assets/styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for products, brands and more" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
