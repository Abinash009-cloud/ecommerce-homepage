// src/components/Footer.jsx


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>ShopSphere</h3>
          <p>Your one-stop shop for fashion, gadgets, and more. Experience smart shopping with us!</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i>🌐</i></a>
            <a href="#"><i>📘</i></a>
            <a href="#"><i>📸</i></a>
            <a href="#"><i>🎥</i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 ShopSphere. All rights reserved.
      </div>
    </footer>
  )
}
