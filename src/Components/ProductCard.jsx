import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';


export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const stars = '★'.repeat(fullStars) + (half ? '½' : '');
    return stars.padEnd(5, '☆');
  };

  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.title} was added successfully.`,
      icon: 'success',
      confirmButtonColor: '#111',
      confirmButtonText: 'Great!',
      timer: 1800,
      showConfirmButton: false,
    });
  };

  return (
    <>
      <div className="product-card">
        {product.discount && (
          <div className="discount-badge">{product.discount}% OFF</div>
        )}

        <img src={product.image} alt={product.title} onClick={() => setShowModal(true)} />

        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="stars">{renderStars(product.rating || 4)}</p>

        <button onClick={handleAddToCart}>Add to Cart</button>
        <button className="quick-view" onClick={() => setShowModal(true)}>
          Quick View
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{renderStars(product.rating || 4)}</p>
            <p>Category: {product.category}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
