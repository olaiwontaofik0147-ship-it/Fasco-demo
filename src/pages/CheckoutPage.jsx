import React, { useState } from "react";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

const CheckoutPage = () => {
    const [saveInfo, setSaveInfo] = useState(false);
    const [discountCode, setDiscountCode] = useState("");
    const [shipping, setShipping] = useState(40);
    const itemPrice = 100;

    const subtotal = itemPrice;
    const total = subtotal + shipping;

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3">
                <div className="container">
                    {/* Brand */}
                    <a className="navbar-brand fw-bold" href="/"><img src="/images/FASCO2.png" alt="man" /></a>

                    {/* Toggle button for mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Center navigation links */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item mx-2">
                                <a className="nav-link small text-dark" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a
                                    className="nav-link active small text-dark"
                                    href="/shopPage"
                                >
                                    Shop
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link small text-dark" href="/productPage">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a
                                    className="nav-link dropdown-toggle small text-dark"
                                    href="#"
                                    id="pagesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Right icons */}
                    <div className="d-flex align-items-center gap-3">
                        <a href="#" className="text-secondary">
                            <i className="bi bi-search"></i>
                        </a>
                        <a href="#" className="text-secondary">
                            <i className="bi bi-person"></i>
                        </a>
                        <a href="#" className="text-secondary">
                            <i className="bi bi-star"></i>
                        </a>
                        <a href="#" className="text-secondary">
                            <i className="bi bi-bag"></i>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="container-fluid bg-light min-vh-100 py-5">
                <div className="container bg-white p-4 rounded shadow-sm">
                    <h3 className="text-center fw-bold mb-4">FASCO Demo Checkout</h3>

                    <div className="row g-5">
                        {/* Left Column - Contact, Delivery, Payment */}
                        <div className="col-lg-8">
                            {/* Contact Section */}
                            <section className="mb-4">
                                <h5 className="fw-bold">Contact</h5>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span></span>
                                    <a href="/signUp" className="text-decoration-none text-dark">
                                        Have an account? <span className="text-primary"> Create Account </span>
                                    </a>
                                </div>
                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="Email Address"
                                />
                            </section>

                            {/* Delivery Section */}
                            <section className="mb-4">
                                <h5 className="fw-bold">Delivery</h5>
                                <select className="form-select mb-3">
                                    <option>Country / Region</option>
                                    <option>Ghana</option>
                                    <option>Nigeria</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                </select>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Address"
                                />

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Postal Code"
                                        />
                                    </div>
                                </div>

                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="saveInfo"
                                        checked={saveInfo}
                                        onChange={(e) => setSaveInfo(e.target.checked)}
                                    />
                                    <label className="form-check-label small" htmlFor="saveInfo">
                                        Save this info for future
                                    </label>
                                </div>
                            </section>

                            {/* Payment Section */}
                            <section className="mb-4">
                                <h5 className="fw-bold">Payment</h5>
                                <select className="form-select mb-3">
                                    <option>Credit Card</option>
                                    <option>PayPal</option>
                                    <option>Bank Transfer</option>
                                </select>

                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Card Number"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Expiration Date"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Security Code"
                                        />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Card Holder Name"
                                        />
                                    </div>
                                </div>

                                <div className="form-check mb-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="saveCard"
                                    />
                                    <label className="form-check-label small" htmlFor="saveCard">
                                        Save this info for future
                                    </label>
                                </div>

                                <button className="btn btn-dark w-100 py-2 shadow-sm">
                                    Pay Now
                                </button>
                            </section>
                        </div>

                        {/* Right Column - Order Summary */}
                        <div className="col-lg-4 bg-secondary-subtle">
                            <div className="border rounded p-3 bg-secondary-subtle">
                                {/* Product Info */}
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src="/images/red-tshirt.png"
                                        alt="product"
                                        className="rounded me-3"
                                        style={{ width: "70px", height: "80px", objectFit: "cover" }}
                                    />
                                    <div>
                                        <h6 className="fw-semibold mb-1">
                                            Mini Dress With Ruffled Straps
                                        </h6>
                                        <p className="small text-muted mb-0">Red</p>
                                    </div>
                                    <span className="ms-auto fw-semibold">${itemPrice}</span>
                                </div>

                                {/* Discount */}
                                <div className="input-group mb-3 gap-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Discount code"
                                        value={discountCode}
                                        onChange={(e) => setDiscountCode(e.target.value)}
                                    />
                                    <button className="btn btn-dark rounded">Apply</button>
                                </div>

                                <div className="d-flex justify-content-between small mb-2">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between small mb-2">
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between fw-bold">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default CheckoutPage;
