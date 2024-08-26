import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Login from './components/Login';
import Signup from './components/Signup';
import './assets/styles/App.css';

function App() {
  // State to manage the current user
  const [user, setUser] = useState(null);

  // State to manage the items in the shopping cart
  const [cart, setCart] = useState([]);

  // Function to handle user login
  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  // Function to handle user signup
  const handleSignup = (newUser) => {
    setUser(newUser);
  };

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    if (user) {
      setCart([...cart, product]);
      console.log('Product added to cart:', product);
    } else {
      alert('Please log in to add products to the cart.');
    }
  };

  return (
    <Router>
      <Header />
      <Categories />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
