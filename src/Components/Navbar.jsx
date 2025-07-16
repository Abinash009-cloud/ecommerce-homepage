import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';


export default function Navbar() {
  const { cart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopZone</Link>

      <ul className="nav-links">
        <li><Link to="/category/Men">Men</Link></li>
        <li><Link to="/category/Women">Women</Link></li>
        <li><Link to="/category/Electronics">Electronics</Link></li>
      </ul>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      <Link to="/cart" className="cart">
  🛒
  <span className="cart-badge">
    {cart.length}
  </span>
  <span className="cart-label">
    {cart.length === 1 ? '1 item' : `${cart.length} items`}
  </span>
</Link>

    </nav>
  );
}
