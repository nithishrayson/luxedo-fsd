import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import "./Header.css"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 px-4">
            <div className="container-fluid d-flex justify-content-between align-items-center">

                <div className="navbar-brand fw-bold fs-4">LUXEDO</div>

                <div className="d-none d-lg-flex flex-grow-1 justify-content-center align-items-center gap-4">
                    <ul className="navbar-nav flex-row gap-4">
                        <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
                        <li className="nav-item"><a className="nav-link" href="/on-sale">On Sale</a></li>
                        <li className="nav-item"><a className="nav-link" href="/new-arrivals">New Arrivals</a></li>
                        <li className="nav-item"><a className="nav-link" href="/brands">Brands</a></li>
                    </ul>

                    <div className="ms-4">
                        <div
                            className="input-group rounded-pill overflow-hidden"
                            style={{ minWidth: '450px', background: '#d3d3d3' }}
                        >
                            <span className="input-group-text bg-white border-0">
                                <FaSearch size={16} />
                            </span>
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Search for products..."
                                aria-label="Search"
                            />
                        </div>
                    </div>

                </div>

                {/* Right: Icons */}
                <div className="d-flex gap-3">
                    <FaShoppingCart size={20} />
                    <FaUser size={20} />
                </div>
            </div>
        </nav>
    );
};

export default Header;