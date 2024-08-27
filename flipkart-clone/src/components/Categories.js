import React from 'react';
import '../assets/styles/Categories.css';

function Categories() {
  return (
    <nav className="categories">
      <div className="category">
        <span className="category__title">
          Electronics <i className="fas fa-chevron-down"></i>
        </span>
        <div className="dropdown">
          <ul>
            <li>Mobiles</li>
            <li>Tablets</li>
            <li>Laptops</li>
            <li>Accessories</li>
          </ul>
        </div>
      </div>

      <div className="category">
        <span className="category__title">
          TVs & Appliances <i className="fas fa-chevron-down"></i>
        </span>
        <div className="dropdown">
          <ul>
            <li>Televisions</li>
            <li>Washing Machines</li>
            <li>Refrigerators</li>
            <li>Air Conditioners</li>
          </ul>
        </div>
      </div>

      <div className="category">
        <span className="category__title">
          Men <i className="fas fa-chevron-down"></i>
        </span>
        <div className="dropdown">
          <ul>
            <li>Clothing</li>
            <li>Footwear</li>
            <li>Watches</li>
            <li>Grooming</li>
          </ul>
        </div>
      </div>

      <div className="category">
        <span className="category__title">
          Women <i className="fas fa-chevron-down"></i>
        </span>
        <div className="dropdown">
          <ul>
            <li>Clothing</li>
            <li>Footwear</li>
            <li>Jewellery</li>
            <li>Beauty</li>
          </ul>
        </div>
      </div>

      <div className="category">
        <span className="category__title">
          Baby & Kids <i className="fas fa-chevron-down"></i>
        </span>
        <div className="dropdown">
          <ul>
            <li>Clothing</li>
            <li>Toys</li>
            <li>Diapers</li>
            <li>Baby Care</li>
          </ul>
        </div>
      </div>

      <div className="category">
        <span className="category__title">
          Home & Furniture <i className="fas fa-chevron-down"></i>
        </span>
        <div className="dropdown">
          <ul>
            <li>Furniture</li>
            <li>Home Decor</li>
            <li>Kitchenware</li>
            <li>Lighting</li>
          </ul>
        </div>
      </div>

      <div className="category">
        <span className="category__title">
          Sports, Books & More <i className="fas fa-chevron-down"></i>
        </span>
        <div className="dropdown">
          <ul>
            <li>Sports Equipment</li>
            <li>Books</li>
            <li>Musical Instruments</li>
            <li>Stationery</li>
          </ul>
        </div>
      </div>

      <div className="category">
        <span className="category__title">
          Flights <i className="fas fa-chevron-down"></i>
        </span>
        <div className="dropdown">
          <ul>
            <li>Domestic Flights</li>
            <li>International Flights</li>
            <li>Holiday Packages</li>
          </ul>
        </div>
      </div>

      <div className="category">
        <span className="category__title">
          Offer Zone <i className="fas fa-chevron-down"></i>
        </span>
        <div className="dropdown">
          <ul>
            <li>Deals of the Day</li>
            <li>Special Price</li>
            <li>Bank Offers</li>
            <li>Combo Offers</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Categories;
