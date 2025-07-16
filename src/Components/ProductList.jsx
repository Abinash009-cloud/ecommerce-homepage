import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <section className="product-list" id='products'>
      <h2>Featured Products</h2>
      <div className="grid">
        {products && products.length > 0 ? (
          products
            .filter((product) => product && product.id && product.title)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
}
