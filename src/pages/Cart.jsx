import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="details">
                <h4>{item.title}</h4>
                <p>${item.price} × {item.quantity}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total:</strong> ${total}
          </div>
          <button className="checkout-btn" onClick={clearCart}>Checkout</button>
        </>
      )}
    </div>
  );
}
