import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/brands/hero-model.png";

const HeroSection = () => {
  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <section className="hero-section py-5 px-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-6 fw-bold mb-3 hero-title">
                STYLE THAT SPEAKS FOR YOU
              </h1>

              <p className="lead text-muted mb-4 hero-description">
                Discover refined designs crafted with precision, made to complement your personality and unique sense of fashion.
              </p>

              <div className="d-flex flex-row justify-content-center justify-content-lg-start gap-3 button-combo">
                <button className="btn btn-dark rounded-pill px-4 py-2 fw-semibold">
                  Shop Now
                </button>
                <button className="btn btn-outline-dark rounded-pill px-4 py-2 fw-semibold">
                  Explore Now
                </button>
              </div>

              {/* Stats */}
              <div className="stats-row d-flex justify-content-center justify-content-lg-start gap-4 flex-wrap">
                <div className="stat-item text-center">
                  <div className="stat-number fw-bold fs-4">200+</div>
                  <div className="stat-label text-muted small">
                    International Brands
                  </div>
                </div>
                <div className="stat-item text-center">
                  <div className="stat-number fw-bold fs-4">5K+</div>
                  <div className="stat-label text-muted small">
                    High-Quality Products
                  </div>
                </div>
                <div className="stat-item text-center">
                  <div className="stat-number fw-bold fs-4">1M+</div>
                  <div className="stat-label text-muted small">
                    Happy Customers
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 col-md-12 text-center">
              <img
                src={heroImage}
                alt="Fashion model"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
