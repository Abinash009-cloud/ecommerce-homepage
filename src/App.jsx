import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Category from './pages/Category';
import SearchResults from './pages/SearchResults';
 // Assuming you have a global CSS file for styles
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><ProductList /></>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/category/:name" element={<Category />} />

      </Routes>
      <Footer />
    </>
  );
}
