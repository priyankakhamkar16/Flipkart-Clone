import React from 'react';
import banner from '../assets/images/banner.webp'; // Ensure the correct path to banner image
import '../assets/styles/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="Banner" className="banner__image" />
    </div>
  );
}

export default Banner;
