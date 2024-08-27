import React from 'react';
import '../assets/styles/CartPage.css';

function CartPage({ cart, removeFromCart }) {
  return (
    <section className="cart-page">
      <h2 className="section-title">Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-description">{item.description}</p>
                <p className="cart-item-price">{item.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default CartPage;
