import React from "react";
import Deals from "../component/Deals";
import Footer from "../component/Footer";
import Newsletter from "../component/Newsletter";
import ProductDetail from "../component/ProductDetail";
import Slider from "../component/Slider";

function ProductPage() {
  return (
    <div className="App">
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
                <a className="nav-link small text-secondary" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active small text-secondary"
                  href="/shopPage"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link small text-dark border-bottom border-2 border-dark" href="/productPage">
                  Products
                </a>
              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle small text-secondary"
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
      <ProductDetail />
      <Slider />
      <Deals />
      <Newsletter />
      <Footer />
    </div>
  );
}
export default ProductPage;