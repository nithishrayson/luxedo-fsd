import React, { useState, useEffect } from "react";
import "./ReviewCarousel.css";

const reviews = [
  {
    name: "Sarah M.",
    verified: true,
    rating: 5,
    text:
      "I'm blown away by the quality and style of the clothes I received from Luxedo. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Ravi K.",
    verified: true,
    rating: 5,
    text:
      "Luxedo has completely changed how I shop online. The fit, the finish, the delivery — everything is top-notch.",
  },
  {
    name: "Emily T.",
    verified: false,
    rating: 4,
    text:
      "Great styles and fast shipping. I wish there were more color options, but overall I'm happy.",
  },
  {
    name: "John D.",
    verified: true,
    rating: 5,
    text: "Excellent products and fast delivery. Luxedo truly lives up to the hype!",
  },
];

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Touch swipe state
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const SWIPE_THRESHOLD = 50;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) {
      setTouchStartX(null);
      setTouchEndX(null);
      return;
    }
    const delta = touchStartX - touchEndX;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (isMobile) {
    const r = reviews[current];
    return (
      <section className="review-carousel-section py-4">
        <div className="container text-center">
          <h2 className="fw-bold text-uppercase mb-3">Customer Reviews</h2>

          <div
            className="carousel-container-mobile mx-auto"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="review-card mobile activeSlide">
              <div className="stars">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
              <div className="reviewer">
                <strong>{r.name}</strong>
              </div>
              <p className="review-text">"{r.text}"</p>
            </div>

            <div className="dots mt-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop: stacked layout (render all cards with position classes)
  return (
    <section className="review-carousel-section py-5">
      <div className="container text-center">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-uppercase mb-0">CUSTOMER REVIEWS</h2>
        </div>

        <div className="carousel-container desktop mx-auto">
          {reviews.map((review, index) => {
            let position = "nextSlide";
            if (index === current) position = "activeSlide";
            if (
              index === current - 1 ||
              (current === 0 && index === reviews.length - 1)
            )
              position = "lastSlide";

            return (
              <div key={index} className={`review-card ${position}`}>
                <div className="stars">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <div className="reviewer">
                  <strong>{review.name}</strong>
                  {review.verified && <span className="verified">✔</span>}
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            );
          })}

          <button
            className="carousel-btn prev-btn btn btn-outline-dark rounded-circle"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            ‹
          </button>
          <button
            className="carousel-btn next-btn btn btn-outline-dark rounded-circle"
            onClick={nextSlide}
            aria-label="Next review"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
