import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Categories.css';

function Categories() {
  return (
    <nav className="categories">
      <ul>
        <li className="category">
          <Link to="/category/grocery">
            <img src="../assets/images/grocery.webp" alt="Grocery" />
            <span>Grocery</span>
          </Link>
          <div className="dropdown">
            <ul>
              <li><Link to="/category/grocery/fruits-vegetables">Fruits & Vegetables</Link></li>
              <li><Link to="/category/grocery/staples">Staples</Link></li>
              <li><Link to="/category/grocery/snacks">Snacks</Link></li>
            </ul>
          </div>
        </li>
        <li className="category">
          <Link to="/category/mobiles">
            <img src="../assets/images/mobiles.webp" alt="Mobiles" />
            <span>Mobiles</span>
          </Link>
          <div className="dropdown">
            <ul>
              <li><Link to="/category/mobiles/smartphones">Smartphones</Link></li>
              <li><Link to="/category/mobiles/feature-phones">Feature Phones</Link></li>
              <li><Link to="/category/mobiles/accessories">Accessories</Link></li>
            </ul>
          </div>
        </li>
        {/* Add more categories in the same format */}
      </ul>
    </nav>
  );
}

export default Categories;
