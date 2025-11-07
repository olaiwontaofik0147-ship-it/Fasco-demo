import React, { useState } from "react";
import { Link } from "react-router";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#1b2a56");
  const [quantity, setQuantity] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [wrapProduct, setWrapProduct] = useState(false);

  const handleQuantity = (type) => {
    if (type === "add") setQuantity(quantity + 1);
    else if (type === "subtract" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    setCartOpen(true);
  };

  return (
    <div className="container my-5 product-detail">
      <div className="row g-4">
        {/* Left column – Product images */}
        <div className="col-md-6">
          <div className="d-flex flex-row align-items-start">
            <div className="d-flex gap-1 mb-3 small-images flex-column me-3">
              {[
                "/images/purplecoat.png",
                "/images/mini-red-tshirt.png",
                "/images/denim-front.png",
                "/images/denim-full.png",
                "/images/denim-back.png",
                "/images/blackcoat-front.png",
                "/images/blackcoat-girl.png",
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumbnail"
                  className="img-thumbnail"
                  width="60"
                  height="60"
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>

            <img
              src="/images/red-tshirt.png"
              alt="main"
              className="img-fluid rounded shadow-sm main-image"
            />
          </div>
        </div>

        {/* Right column – Product info */}
        <div className="col-md-6">
          <h5 className="text-uppercase text-muted small">FASCO</h5>
          <h3 className="fw-bold mb-2">Denim Jacket</h3>
          <div className="mb-2">
            <span className="text-dark">★★★★☆</span>
            <span className="text-muted small ms-2">(3 reviews)</span>
          </div>

          <h4 className="fw-bold mb-2">
            $39.00{" "}
            <small className="text-decoration-line-through text-muted fs-6">
              $59.00
            </small>{" "}
            <span className="badge bg-danger text-white fs-6">Save 33%</span>
          </h4>

          <p className="text-secondary small mb-2">
            <i className="bi bi-eye"></i> 24 people are viewing this right now
          </p>

          <div className="alert alert-light border-danger text-danger py-2 small d-flex justify-content-between">
            ⏰ Hurry up! Sale ends in <strong>00:05:59</strong>
          </div>

          <p className="text-secondary small">
            Only <strong>9 items</strong> left in stock!
          </p>

          {/* Size selection */}
          <div className="mb-3">
            <h6 className="fw-bold">Size</h6>
            {["M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={`btn me-2 mb-2 ${selectedSize === size ? "btn-dark text-white" : "btn-outline-secondary"
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Color selection */}
          <div className="mb-3">
            <h6 className="fw-bold">Color</h6>
            <div className="d-flex gap-2">
              {["#8db4d2", "#000000", "#f8cfcf"].map((color) => (
                <span
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: color,
                    borderRadius: "50%",
                    cursor: "pointer",
                    border:
                      selectedColor === color ? "3px solid black" : "1px solid #ddd",
                  }}
                ></span>
              ))}
            </div>
            <div className="mt-2 fw-bold">
              <p>Quantity</p>
            </div>
          </div>

          {/* Quantity & Add to cart */}
          <div className="d-flex align-items-center mb-3">
            <div className="d-flex flex-column text-center">
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleQuantity("subtract")}
              >
                −
              </button>
            </div>
            <input
              type="text"
              value={quantity}
              readOnly
              className="form-control text-center mx-2"
              style={{ width: "60px" }}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleQuantity("add")}
            >
              +
            </button>
            <button
              className="btn btn-white col-md-8 border-black ms-3 px-4"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>

          <div className="small text-dark mb-3">
            <p className="mb-1 fw-bold">
              ✓ Estimated Delivery:<span className="fw-normal"> Jul 30 – Aug 03</span>
            </p>
            <p className="mb-1 fw-bold">
              ✓ Free Shipping & Returns:<span className="fw-normal"> On all orders over $75</span>
            </p>
          </div>
          <div className="container d-flex flex-column justify-content-center align-items-center py-5 bg-secondary-subtle gap-3">
            <img src="/images/visa.png" alt="visa" width="50%" className="me-2" />
            <p>Guarantee safe & secure checkout</p>
          </div>
        </div>
      </div>

      {/* 🛒 Cart Sidebar Drawer */}
      <div className={`cart-sidebar ${cartOpen ? "open" : ""}`}>
        <div className="cart-header d-flex justify-content-between align-items-center p-3 border-bottom">
          <h5 className="fw-bold mb-0">Shopping Cart</h5>
          <button className="btn-close" onClick={() => setCartOpen(false)}></button>
        </div>

        <div className="cart-body p-3">
          {/* Free Shipping Banner */}
          <div className="mb-3">
            Buy<span className="fw-bold"> $122.35 </span> More And Get <span className="fw-bold"> Free Shipping</span>
          </div>

          {/* Cart Item */}
          <div className="d-flex align-items-center mb-3 border-bottom pb-3">
            <img
              src="/images/red-tshirt.png"
              alt="cart-item"
              className="rounded me-3"
              width="80"
            />
            <div className="flex-grow-1">
              <h6 className="fw-normal mb-1">Denim Jacket</h6>
              <p className="small mb-1 text-secondary">
                Color: <span>Red</span>
              </p>
              <span className="fw-normal">$ {(quantity * 14.80).toFixed(2)}</span>
              <div className="d-flex align-items-center mt-2">
                <div className="d-flex flex-column text-center">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleQuantity("subtract")}
                  >
                    −
                  </button>
                </div>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="form-control text-center mx-2"
                  style={{ width: "60px" }}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleQuantity("add")}
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Wrap option */}
          <div className="form-check mt-5">
            <input
              className="form-check-input"
              type="checkbox"
              id="wrapProduct"
              checked={wrapProduct}
              onChange={() => setWrapProduct(!wrapProduct)}
            />
            <label className="form-check-label small" htmlFor="wrapProduct">
              For <span className="fw-bold"> $10.00 </span> Please Wrap The Product
            </label>
          </div>

          {/* Subtotal */}
          <div className="d-flex justify-content-between fw-normal mt-5 mb-3 border-top pt-3">
            <span>Subtotal:</span>
            <span>${(quantity * 100 + (wrapProduct ? 2 : 0)).toFixed(2)}</span>
          </div>

          {/* Buttons */}
          <Link to="/CheckoutPage" className="btn btn-dark w-100 mb-2">Checkout</Link>
          <Link to="/cartPage" className="btn border-bottom w-100">View Cart</Link>
        </div>
      </div>

      {/* Backdrop overlay */}
      {cartOpen && (
        <div className="cart-backdrop" onClick={() => setCartOpen(false)}></div>
      )}
    </div>
  );
};

export default ProductDetail;
