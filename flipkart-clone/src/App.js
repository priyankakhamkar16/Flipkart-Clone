// App.js (updated)
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
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleSignup = (newUser) => {
    setUser(newUser);
  };

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
