import React from 'react';
import './TopSelling.css';
import tshirt from '../../assets/new-arrivals/tshirt.png';
import jeans from '../../assets/new-arrivals/jeans.png';
import shirt from '../../assets/new-arrivals/shirt.png';
import striped from '../../assets/new-arrivals/striped.png';

const products = [
  {
    name: 'T-shirt with Tape Details',
    image: tshirt,
    rating: 4.5,
    price: '$120',
  },
  {
    name: 'Skinny Fit Jeans',
    image: jeans,
    rating: 4.2,
    price: '$240',
    original: '$260',
    discount: '-20%',
  },
  {
    name: 'Checkered Shirt',
    image: shirt,
    rating: 4.8,
    price: '$180',
  },
  {
    name: 'Sleeve Striped T-shirt',
    image: striped,
    rating: 4.5,
    price: '$130',
    original: '$160',
    discount: '-20%',
  },
];

const TopSelling = () => {
  return (
    <section className="top-selling py-5 px-3">
      <div className="container">
        <h2 className="fw-bold mb-4 d-flex flex-col justify-content-center">TOP SELLING</h2>
        <div className="row g-4">
          {products.map((item, idx) => (
            <div key={idx} className="col-md-3">
              <div className="product-card p-3 border rounded text-start h-100">
                <div className='product-image d-flex flex-row justify-content-center'>
                  <img src={item.image} alt={item.name} className="img-fluid mb-3 product-img" />
                </div>
                <div>
                  <h6 className="fw-semibold mb-1">{item.name}</h6>
                  <div className="text-warning mb-2">★★★★★ {item.rating}</div>
                  <div className="price mb-2">

                    {item.original && (
                      <span className="text-muted text-decoration-line-through me-2">{item.original}</span>
                    )}
                    <span className="fw-bold">{item.price}</span>
                    {item.discount && (
                      <span className="ms-2 text-danger">{item.discount}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-outline-dark rounded-pill wide-btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;