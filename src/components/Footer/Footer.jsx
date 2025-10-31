import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import visa from '../../assets/footer/visa.png';
import mastercard from '../../assets/footer/mastercard.png';
import paypal from '../../assets/footer/paypal.png';
import gpay from '../../assets/footer/gpay.png';
import applepay from '../../assets/footer/applepay.png';
import logo from '../../assets/logos/logo.png'

const Footer = () => {
    return (
        <footer className="footer-section text-dark py-5">
            <div className="container">
                <div className="row gy-5 align-items-start">
                    {/* Brand Column */}
                    <div className="col-lg-3 col-md-6 text-md-start text-center">
                        <a className="navbar-brand d-flex flex-row justify-content-center align-items-center mb-3" href="/">
                            <img
                                src={logo}
                                alt="Luxedo Logo"
                                className="logo-img"
                                height="40"
                            />
                        </a>
                        <p className="text-muted small mb-4">
                            We have clothes that suit your style and which you're proud to wear. From women to men.
                        </p>
                        <div className="d-flex justify-content-md-start justify-content-center gap-3">
                            <FaFacebookF className="footer-icon" />
                            <FaTwitter className="footer-icon" />
                            <FaInstagram className="footer-icon" />
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="col-lg-2 col-md-6 text-md-start text-center">
                        <h6 className="fw-semibold mb-3">COMPANY</h6>
                        <ul className="footer-links list-unstyled">
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 text-md-start text-center">
                        <h6 className="fw-semibold mb-3">HELP</h6>
                        <ul className="footer-links list-unstyled">
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 text-md-start text-center">
                        <h6 className="fw-semibold mb-3">FAQ</h6>
                        <ul className="footer-links list-unstyled">
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Refunds</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 text-md-start text-center">
                        <h6 className="fw-semibold mb-3">RESOURCES</h6>
                        <ul className="footer-links list-unstyled">
                            <li>Free eBooks</li>
                            <li>Development Tutorials</li>
                            <li>How-to Blogs</li>
                            <li>YouTube Playlists</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <hr className="mt-5 mb-4 opacity-25" />
                <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center">
                    <p className="text-muted small mb-0">
                        © 2025 Luxedo. All Rights Reserved.
                    </p>

                    <div className="payment-wrapper d-flex gap-3 flex-wrap">
                        {[visa, mastercard, paypal, gpay, applepay].map((icon, i) => (
                            <img src={icon} alt="payment" key={i} className="payment-icon" />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
