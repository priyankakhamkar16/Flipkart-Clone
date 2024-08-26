import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/ProductList.css';

const productsData = {
  Grocery: [
    { id: 1, name: 'Apple', price: 120 },
    { id: 2, name: 'Banana', price: 50 },
    { id: 3, name: 'Rice', price: 40 },
  ],
  Mobiles: [
    { id: 4, name: 'iPhone 12', price: 80000 },
    { id: 5, name: 'Samsung Galaxy', price: 60000 },
  ],
  Fashion: [
    { id: 6, name: 'T-Shirt', price: 500 },
    { id: 7, name: 'Jeans', price: 1200 },
  ],
  // Add products for other categories
};

function ProductList() {
  const { categoryName } = useParams();
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const products = productsData[categoryName] || [];

  return (
    <div className="product-list">
      <h2>{categoryName} Products</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
