import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import Product from './Product';
import '../assets/styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <Carousel />
      <div className="home-products">
        <Product title="Product 1" price="₹999" />
        <Product title="Product 2" price="₹1,999" />
        {/* Add more products */}
      </div>
    </div>
  );
}

export default Home;
