import React from 'react';
import '../assets/styles/Product.css';

const Product = ({ img, title, price }) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
}

export default Product;
