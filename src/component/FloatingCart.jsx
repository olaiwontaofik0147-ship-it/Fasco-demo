import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaArrowUp, FaTimes } from "react-icons/fa";

const FloatingCart = () => {
  const [showTop, setShowTop] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Handle scroll visibility for top button
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleCart = () => setShowCart(!showCart);

  return (
    <>
      {/* Floating Buttons */}
      <div className="floating-buttons">
        {/* Cart Button */}
        <button className="btn cart-btn shadow-sm" onClick={toggleCart}>
          <FaShoppingCart size={18} />
        </button>

        {/* Scroll-to-top Button */}
        {showTop && (
          <button className="btn top-btn shadow-sm" onClick={scrollToTop}>
            <FaArrowUp size={18} />
          </button>
        )}
      </div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${showCart ? "open" : ""}`}>
        <div className="cart-header d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <h5 className="mb-0 fw-bold">Shopping Cart</h5>
          <button className="btn btn-link text-dark" onClick={toggleCart}>
            <FaTimes size={18} />
          </button>
        </div>

        {/* Cart Item */}
        <div className="cart-item d-flex align-items-center mb-3">
          <img
            src="/images/red-tshirt.png"
            alt="Product"
            className="rounded me-3"
            width="70"
          />
          <div>
            <p className="mb-1 fw-bold">Denim Jacket</p>
            <p className="text-muted small mb-1">Color: Red</p>
            <p className="fw-bold mb-0">$39.00</p>
          </div>
        </div>

        {/* Quantity Control */}
        <div className="d-flex align-items-center mb-3">
          <button className="btn btn-outline-secondary btn-sm me-2">−</button>
          <input
            type="text"
            value="1"
            readOnly
            className="form-control text-center"
            style={{ width: "50px" }}
          />
          <button className="btn btn-outline-secondary btn-sm ms-2">+</button>
        </div>

        {/* Wrap Product Option */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="wrapProduct"
          />
          <label className="form-check-label small" htmlFor="wrapProduct">
            For $10.00 Please Wrap The Product
          </label>
        </div>

        {/* Free Shipping Message */}
        <div className="alert alert-light border text-center small mb-4">
          Buy <strong>$122.35</strong> more and get <strong>Free Shipping</strong>
        </div>

        {/* Subtotal + Buttons */}
        <div className="cart-footer">
          <div className="d-flex justify-content-between fw-bold mb-3">
            <span>Subtotal</span>
            <span>$39.00</span>
          </div>
          <button className="btn btn-dark w-100 mb-2">Checkout</button>
          <button className="btn btn-outline-dark w-100">View Cart</button>
        </div>
      </div>

      {/* Overlay when cart is open */}
      {showCart && <div className="cart-overlay" onClick={toggleCart}></div>}
    </>
  );
};

export default FloatingCart;
