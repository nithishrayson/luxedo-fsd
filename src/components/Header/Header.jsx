import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Header.css';
import logo from '../../assets/logos/logo.png';
import { useCart } from '../../context/CartContext';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const { cartCount } = useCart();

    return (
        <nav className="header navbar navbar-expand-lg bg-white shadow-sm py-3 px-3 px-md-5">
            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img
                        src={logo}
                        alt="Luxedo Logo"
                        className="logo-img"
                        height="40"
                    />
                </a>

                {/* Hamburger Menu Button */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Nav Links */}
                <div className={`navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarContent">
                    <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center gap-4 mb-3 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/on-sale">On Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/new-arrivals">New Arrivals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="/brands">Brands</a>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <form className="d-flex search-bar mx-lg-4 mt-3 mt-lg-0">
                        <span className="search-icon">
                            <FaSearch size={16} />
                        </span>
                        <input
                            className="form-control border-0 shadow-none"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>
                </div>

                {/* Right Icons */}
                <div className="d-flex align-items-center gap-3 ms-auto position-relative">
                    {/* Cart Icon with Count */}
                    <div className="cart-container">
                        <FaShoppingCart size={24} />
                        {cartCount > 0 && <span className="cart-bubble">{cartCount}</span>}
                    </div>

                    {/* User Icon */}
                    <FaUser className="header-icon" size={20} />
                </div>
            </div>
        </nav>
    );
};

export default Header;
