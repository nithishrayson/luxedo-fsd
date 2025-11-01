import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css";
import logo from "../../assets/logos/logo.png";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();
  const { cartCount } = useCart();

  return (
    <header className="main-header">
      <div className="container header-inner">
        <a href="/" className="d-flex align-items-center">
          <img src={logo} alt="Shop Logo" className="logo-img" />
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/shop" className="nav-item">Shop</a>
          <a href="/on-sale" className="nav-item">On Sale</a>
          <a href="/new-arrivals" className="nav-item">New Arrivals</a>
          <a href="/brands" className="nav-item">Brands</a>
        </nav>

        <div className="search-box d-none d-md-flex">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for products..." />
        </div>

        <div className="header-icons">
          <div className="cart-container" onClick={() => navigate("/cart")}>
            <FaShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-bubble">{cartCount}</span>}
          </div>
          <FaUser size={20} />
        </div>

        <button className="menu-toggle d-md-none" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
