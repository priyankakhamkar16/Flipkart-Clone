import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import ProductPage from './ProductPage'; // Import the ProductPage component
import '../assets/styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <Carousel />
      <ProductPage /> {/* Include ProductPage component here */}
    </div>
  );
}

export default Home;
