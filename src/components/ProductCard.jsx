import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const { cart, addItem, removeItem } = useCart();
  const [wishlisted, setWishlisted] = React.useState(false);
  const quantity = cart[item.id]?.quantity || 0;

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
        <h6 className="fw-semibold mb-0 text-truncate flex-grow-1 me-2">
          {item.name}
        </h6>
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

      {/* Price + Cart Buttons */}
      <div className="mt-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div className="price">
            {item.original && (
              <span className="text-muted text-decoration-line-through me-2">
                ${item.original}
              </span>
            )}
            <span className="fw-bold">${item.price}</span>
          </div>

          {quantity === 0 ? (
            <button
              className="btn btn-dark rounded-pill small-btn px-3 py-1 fw-semibold"
              onClick={() => addItem(item)} // ✅ Add to global cart
            >
              Shop Now
            </button>
          ) : (
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-dark rounded-circle"
                onClick={() => removeItem(item.id)}
              >
                −
              </button>
              <span className="fw-bold">{quantity}</span>
              <button
                className="btn btn-outline-dark rounded-circle"
                onClick={() => addItem(item)}
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

export default ProductCard;
