import React from 'react';
import './HeroSection.css';
import BrandScroller from '../../widgets/BrandScroller/BrandScroller';
import heroImage from '../../assets/brands/hero-model.png';

const HeroSection = () => {
  return (
    <section className="hero-section bg-light py-3 px-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 className="display-6 fw-bold mb-2 text-start">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="lead mb-3 text-start">
              Browse through our diverse range of meticulously crafted garments designed to bring out your individuality and cater to your sense of style.
            </p>

            <div className="button-combo d-flex gap-3 mb-3">
              <button className="btn btn-dark rounded-pill small-btn">
                Shop Now
              </button>
              <button className="btn btn-light rounded-pill small-btn border-dark">
                Explore Now
              </button>
            </div>

            <div className="stats-row d-flex justify-content-start gap-5 flex-wrap mb-4">
              <div className="stat-item text-center">
                <div className="stat-number fw-bold fs-3">200+</div>
                <div className="stat-label text-muted">International Brands</div>
              </div>
              <div className="stat-item text-center">
                <div className="stat-number fw-bold fs-3">5K+</div>
                <div className="stat-label text-muted">High-Quality Products</div>
              </div>
              <div className="stat-item text-center">
                <div className="stat-number fw-bold fs-3">1B+</div>
                <div className="stat-label text-muted">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 d-flex align-items-start justify-content-center pt-lg-3">
            <img
              src={heroImage}
              alt="Fashion model"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>

      <BrandScroller />
    </section>
  );
};

export default HeroSection;