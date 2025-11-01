import React from "react";
import "./NewArrivals.css";
import tshirt from "../../assets/new-arrivals/tshirt.png";
import jeans from "../../assets/new-arrivals/jeans.png";
import shirt from "../../assets/new-arrivals/shirt.png";
import striped from "../../assets/new-arrivals/striped.png";
import ProductCard from "../ProductCard";

const products = [
  { id: 1, name: "T-shirt with Tape Details", image: tshirt, rating: 4.5, price: 120 },
  { id: 2, name: "Skinny Fit Jeans", image: jeans, rating: 4.2, price: 240, original: 260, discount: "-20%" },
  { id: 3, name: "Checkered Shirt", image: shirt, rating: 4.8, price: 180 },
  { id: 4, name: "Sleeve Striped T-shirt", image: striped, rating: 4.5, price: 130, original: 160, discount: "-20%" },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals py-5 px-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-uppercase mb-0">New Arrivals</h2>
        </div>

        <div className="row g-4">
          {products.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
