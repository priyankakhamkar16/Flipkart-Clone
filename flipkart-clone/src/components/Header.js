import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo.png';

function Header({ onLogout, user, cart }) {
  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="header">
      <div className="header__top">
        <img src={logo} alt="Logo" className="header__logo" />
        <div className="header__search">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="header__searchInput"
          />
          <button className="header__searchButton">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="header__nav">
          {user ? (
            <>
              <Link to="/cart" className="header__option">
                <i className="fas fa-shopping-cart"></i>
                <span className="header__optionLineOne">Cart</span>
                <span className="header__optionLineTwo">{cartItemCount}</span>
              </Link>
              <div className="header__option" onClick={onLogout}>
                <i className="fas fa-sign-out-alt"></i>
                <span className="header__optionLineOne">Logout</span>
              </div>
            </>
          ) : (
            <Link to="/login" className="header__option">
              <i className="fas fa-user"></i>
              <span className="header__optionLineOne">Login</span>
            </Link>
          )}
          <div className="header__option header__optionDropdown">
            <i className="fas fa-ellipsis-v"></i>
            <span className="header__optionLineOne">More</span>
            <div className="header__dropdown">
              <ul>
                <li>Notification Preferences</li>
                <li>24x7 Customer Care</li>
                <li>Advertise</li>
                <li>Download App</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="header__categories">
        {/* Add your categories here if needed */}
      </nav>
    </header>
  );
}

export default Header;
