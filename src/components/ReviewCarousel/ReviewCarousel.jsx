import React from 'react';
import './ReviewCarousel.css';

const reviews = [
    {
        name: 'Sarah M.',
        verified: true,
        rating: 5,
        text: "I'm blown away by the quality and style of the clothes I received from Luxedo From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
        name: 'Ravi K.',
        verified: true,
        rating: 5,
        text: "Luxedo has completely changed how I shop online. The fit, the finish, the delivery — everything is top-notch.",
    },
    {
        name: 'Emily T.',
        verified: false,
        rating: 4,
        text: "Great styles and fast shipping. I wish there were more color options, but overall I'm happy.",
    },
];

const repeatedReviews = Array(5).fill(reviews).flat(); 

const ReviewCarousel = () => {
    return (
        <div className="review-scroller-wrapper py-4 bg-white">
            <h2 className="fw-bold mb-4 text-center text-uppercase">CUSTOMER REVIEWS</h2>
            <div className="review-scroller-track">
                {repeatedReviews.map((review, idx) => (
                    <div key={idx} className="review-card">
                        <div className="stars">
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </div>
                        <div className="reviewer">
                            <strong>{review.name}</strong>
                            {review.verified && <span className="verified">✔</span>}
                        </div>
                        <p className="review-text">"{review.text}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewCarousel;