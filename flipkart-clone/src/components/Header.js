import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo.png';  // Path to your Flipkart logo

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <img src={logo} alt="Flipkart Logo" className="header__logo" />
        <div className="header__search">
          <input type="text" placeholder="Search for products, brands and more" />
          {/* Optionally, you can add a search icon within the input */}
        </div>
        <div className="header__options">
          <Link to="/login" className="header__option">
            <i className="fas fa-user"></i>
            <span>Login</span>
          </Link>
          <Link to="/cart" className="header__option">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </Link>
          <Link to="/seller" className="header__option">
            <i className="fas fa-store"></i>
            <span>Become a Seller</span>
          </Link>
        </div>
      </div>

      {/* Categories section */}
      <nav className="header__categories">
        {/* Add your categories here if needed */}
      </nav>
    </header>
  );
}

export default Header;
