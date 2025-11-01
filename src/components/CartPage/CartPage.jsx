import React from "react";
import { useCart } from "../../context/CartContext";
import emptycart from "../../assets/cart/empty-bag.png";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, addItem, removeItem } = useCart();
  const navigate = useNavigate();
  const cartItems = Object.values(cart || {});

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <img src={emptycart} alt="Empty Cart" className="empty-cart-image" />
        <h2>Your cart is empty</h2>
        <p>Start shopping to add your favorite items!</p>
        <button className="shop-now-btn" onClick={() => navigate("/")}>
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container">
        <div className="cart-left">
          <h2 className="cart-title">Your Shopping Cart</h2>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="item-meta">
                    Size: {item.size || "M"} | Color: {item.color || "Default"}
                  </p>
                  <h5>${item.price.toFixed(2)}</h5>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => removeItem(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addItem(item)}>+</button>
                  </div>
                  <p className="total-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Discount (20%)</span>
            <span className="discount">-${discount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Total</span>
            <span className="total-amount">${total.toFixed(2)}</span>
          </div>

          <div className="promo-section">
            <input type="text" placeholder="Enter promo code" />
            <button>Apply</button>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
