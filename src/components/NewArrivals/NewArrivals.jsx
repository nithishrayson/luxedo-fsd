import React from "react";
import "./NewArrivals.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import tshirt from "../../assets/new-arrivals/tshirt.png";
import jeans from "../../assets/new-arrivals/jeans.png";
import shirt from "../../assets/new-arrivals/shirt.png";
import striped from "../../assets/new-arrivals/striped.png";

const products = [
  { id: 1, name: "T-shirt with Tape Details", image: tshirt, rating: 4.5, price: "$120" },
  { id: 2, name: "Skinny Fit Jeans", image: jeans, rating: 4.2, price: "$240", original: "$260", discount: "-20%" },
  { id: 3, name: "Checkered Shirt", image: shirt, rating: 4.8, price: "$180" },
  { id: 4, name: "Sleeve Striped T-shirt", image: striped, rating: 4.5, price: "$130", original: "$160", discount: "-20%" },
];

const ProductCard = ({ item }) => {
  const { cart, addItem, removeItem } = useCart();
  const [wishlisted, setWishlisted] = React.useState(false);
  const quantity = cart[item.id] || 0;

  return (
    <div className="product-card border rounded-3 bg-white shadow-sm p-3 d-flex flex-column h-100">
      {/* Image Section */}
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
        >
          {wishlisted ? <FaHeart color="red" size={20} /> : <FaRegHeart color="grey" size={20} />}
        </button>
      </div>

      <div className="text-warning small mb-2">
        ★★★★★ <span className="text-dark">{item.rating}</span>
      </div>

      {/* Price + Button */}
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
