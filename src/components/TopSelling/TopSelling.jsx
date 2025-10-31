import React, { useState } from "react";
import "./TopSelling.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from "../../context/CartContext"; // ✅ use the global context
import hoodie from "../../assets/top-selling/hoodie.png";
import cargo from "../../assets/top-selling/cargo-pants.png";
import jacket from "../../assets/top-selling/jacket.png";
import polo from "../../assets/top-selling/polo-shirt.png";

const topSellingProducts = [
  { id: 101, name: "Classic Hoodie", image: hoodie, rating: 4.9, price: "$150" },
  { id: 102, name: "Cargo Pants", image: cargo, rating: 4.7, price: "$220", original: "$250", discount: "-12%" },
  { id: 103, name: "Denim Jacket", image: jacket, rating: 4.6, price: "$300" },
  { id: 104, name: "Polo T-shirt", image: polo, rating: 4.8, price: "$140", original: "$180", discount: "-22%" },
];

const ProductCard = ({ item }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const { cart, addItem, removeItem } = useCart(); // ✅ get global cart methods
  const quantity = cart[item.id] || 0;

  return (
    <div className="product-card border rounded-3 shadow-sm p-3 d-flex flex-column h-100">
      {/* Image */}
      <div className="position-relative d-flex justify-content-center align-items-center mb-3 product-image-container">
        {item.discount && (
          <span className="discount-badge position-absolute top-0 start-0 m-2 px-2 py-1 fw-bold rounded">
            {item.discount}
          </span>
        )}
        <img src={item.image} alt={item.name} className="img-fluid product-img" />
      </div>

      {/* Title + Wishlist */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="fw-semibold mb-0 text-truncate flex-grow-1 me-2">{item.name}</h6>
        <button
          className="btn btn-sm wishlist-btn border-0 p-0 bg-transparent"
          onClick={() => setWishlisted(!wishlisted)}
          title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          {wishlisted ? <FaHeart color="red" size={20} /> : <FaRegHeart color="grey" size={20} />}
        </button>
      </div>

      {/* Rating */}
      <div className="text-warning small mb-2">
        ★★★★★ <span className="text-dark">{item.rating}</span>
      </div>

      {/* Price + Add to Cart Controls */}
      <div className="mt-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div className="price">
            {item.original && (
              <span className="text-muted text-decoration-line-through me-2">
                {item.original}
              </span>
            )}
            <span className="fw-bold">{item.price}</span>
          </div>

          {quantity === 0 ? (
            <button
              className="btn btn-dark rounded-pill small-btn px-3 py-1 fw-semibold"
              onClick={() => addItem(item.id)}
            >
              Shop Now
            </button>
          ) : (
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-dark rounded-circle py-0 px-2"
                onClick={() => removeItem(item.id)}
              >
                −
              </button>
              <span className="fw-bold">{quantity}</span>
              <button
                className="btn btn-outline-dark rounded-circle py-0 px-2"
                onClick={() => addItem(item.id)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TopSelling = () => {
  return (
    <section className="top-selling py-5 px-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-uppercase mb-0">TOP SELLING</h2>
        </div>
        <div className="row g-4">
          {topSellingProducts.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
