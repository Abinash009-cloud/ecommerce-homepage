import React from 'react';
import { useParams } from 'react-router-dom'; // ✅ <-- add this
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { name } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="category-page">
      <h2>{name} Products</h2>
      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}
