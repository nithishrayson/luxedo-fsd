import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import visa from '../../assets/footer/visa.png';
import mastercard from '../../assets/footer/mastercard.png';
import paypal from '../../assets/footer/paypal.png';
import gpay from '../../assets/footer/gpay.png';
import applepay from '../../assets/footer/applepay.png';

const Footer = () => {
  return (
    <footer className="footer bg-light py-5">
      <div className="container">
        <div className="row gy-4">
          {/* Logo + Tagline */}
          <div className="col-md-3">
            <h4 className="fw-bold">LUXEDO</h4>
            <p className="text-muted small">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            <div className="d-flex gap-3">
              <FaFacebookF className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </div>

          {/* Link Columns */}
          <div className="col-md-2">
            <h6 className="fw-semibold mb-3">COMPANY</h6>
            <ul className="list-unstyled text-muted small">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="fw-semibold mb-3">HELP</h6>
            <ul className="list-unstyled text-muted small">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="fw-semibold mb-3">FAQ</h6>
            <ul className="list-unstyled text-muted small">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>footer</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">RESOURCES</h6>
            <ul className="list-unstyled text-muted small">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlists</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="d-flex justify-content-between align-items-center mt-5 flex-wrap gap-3">
          <p className="text-muted small mb-0">Luxedo © 2025. All Rights Reserved.</p>
          <div className="d-flex gap-3">
            <img src={visa} alt="Visa" className="payment-icon" />
            <img src={mastercard} alt="Mastercard" className="payment-icon" />
            <img src={paypal} alt="PayPal" className="payment-icon" />
            <img src={gpay} alt="Google Pay" className="payment-icon" />
            <img src={applepay} alt="Apple Pay" className="payment-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;