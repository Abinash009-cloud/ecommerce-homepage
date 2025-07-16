import React from 'react'; // ✅ Required
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter basename="/ecommerce-homepage">
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
