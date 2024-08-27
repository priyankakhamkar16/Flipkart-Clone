import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ProductPage.css';

import mobileImage from '../assets/images/mobile.webp';
import headphonesImage from '../assets/images/headphones.webp';
import macbookImage from '../assets/images/macbook.webp';
import canonImage from '../assets/images/camera.webp';
import tvImage from '../assets/images/tv.webp';
import fridgeImage from '../assets/images/fridge.webp';
import cameraImage from '../assets/images/camera2.webp';
import tabletImage from '../assets/images/tablet.webp';
import smartwatchImage from '../assets/images/watch.webp';
import printerImage from '../assets/images/printer.webp';
import speakerImage from '../assets/images/speaker.webp';

function ProductPage({ addToCart }) {
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const products = [
    { id: 1, name: "Samsung Galaxy S21", image: mobileImage, description: "5G, 128GB, Phantom Gray", price: "₹69,999" },
    { id: 2, name: "Sony WH-1000XM4", image: headphonesImage, description: "Wireless Noise Cancelling Headphones", price: "₹29,990" },
    { id: 3, name: "Apple MacBook Air", image: macbookImage, description: "M1, 8GB RAM, 256GB SSD", price: "₹92,900" },
    { id: 4, name: "Canon EOS 1500D", image: canonImage, description: "24.1MP Digital SLR Camera", price: "₹29,999" },
    { id: 5, name: "LG 55-Inch 4K TV", image: tvImage, description: "Ultra HD, Smart TV", price: "₹54,990" },
    { id: 6, name: "Samsung 500L Refrigerator", image: fridgeImage, description: "Double Door, Frost Free", price: "₹35,990" },
    { id: 7, name: "Nikon D3500", image: cameraImage, description: "DSLR Camera, 24.2MP", price: "₹32,990" },
    { id: 8, name: "Apple iPad Pro", image: tabletImage, description: "12.9-inch, Wi-Fi + Cellular", price: "₹89,900" },
    { id: 9, name: "Samsung Galaxy Watch", image: smartwatchImage, description: "4G, Fitness Tracking", price: "₹22,990" },
    { id: 10, name: "HP LaserJet Printer", image: printerImage, description: "Wireless, Color Printing", price: "₹19,990" },
    { id: 11, name: "Bose SoundLink Speaker", image: speakerImage, description: "Bluetooth, Portable", price: "₹15,990" },
    { id: 12, name: "Sony PlayStation 5", image: tvImage, description: "Gaming Console, 825GB SSD", price: "₹49,990" },
  ];

  const handleAddToCart = (product) => {
    if (!user) {
      alert('Please log in to add products to the cart');
      navigate('/login');
      return;
    }

    addToCart(product);
    setSuccessMessage(`${product.name} has been added to your cart`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <section className="product-page">
      <h2 className="section-title">Best of Electronics</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductPage;
