// src/components/Navbar.jsx


export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">ShopSphere</div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">Deals</a>
        <a href="#">Contact</a>
      </nav>
      <div className="nav-icons">
        <input type="text" placeholder="Search..." />
        <button className="cart-btn">🛒</button>
      </div>
    </header>
  )
}
