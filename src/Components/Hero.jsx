import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-banner">
        <h1>Big Deals on Top Brands</h1>
        <p>Save up to 50% on selected items</p>
        <button
          className="hero-btn"
          onClick={() => navigate('/category/Men')}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
