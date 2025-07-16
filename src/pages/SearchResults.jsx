import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function SearchResults() {
  const { query } = useParams();

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="category-page">
      <h2>Search Results for "{query}"</h2>
      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No matching products found.</p>
        )}
      </div>
    </div>
  );
}
