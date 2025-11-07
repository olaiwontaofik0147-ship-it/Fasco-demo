import React from "react"


const Slider = () => {
    return (
        <>
            {/* Product Section */}
            <div className="container-fluid py-5">
              <div className="row align-items-center">
                {/* Left Side - Image + Labels */}
                <div className="col-md-6 position-relative d-flex justify-content-center">
                  <img
                    src="/images/peaky-blinders.png"
                    alt="Model"
                    className="img-fluid"
                  />

                  {/* Labels */}
                  <div className="position-absolute" style={{ top: "10%", right: "27%" }}>
                    <span className="badge bg-light text-dark">Flat Cap</span>
                  </div>
                  <div className="position-absolute" style={{ top: "30%", left: "10%" }}>
                    <span className="badge bg-light text-dark">Suspender</span>
                  </div>
                  <div className="position-absolute" style={{ top: "40%", right: "30%" }}>
                    <span className="badge bg-light text-dark">Hugo Boss</span>
                  </div>
                  <div className="position-absolute" style={{ top: "58%", left: "4%" }}>
                    <span className="badge bg-light text-dark">Hugo Boss</span>
                  </div>
                  <div className="position-absolute" style={{ bottom: "5%", right: "30%" }}>
                    <span className="badge bg-light text-dark">Santoni</span>
                  </div>
                </div>

                {/* Right Side - Product Info */}
                <div className="col-md-6 bg-secondary-subtle p-5">
                  <h6 className="text-muted">Women Collection</h6>
                  <h2 className="fw-bold">Peaky Blinders</h2>
                  <h6 className="fw-bold">DESCRIPTION</h6>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Scelerisque duis ultricies sollicitudin aliquam sem. Scelerisque
                    duis ultricies sollicitudin.
                  </p>

                  <div className="my-3">
                    <span className="fw-bold me-2">Size:</span>
                    <span className="badge bg-dark">M</span>
                  </div>

                  <h3 className="fw-bold mb-4">$100.00</h3>
                  <button className="btn btn-dark px-5 py-2">Buy Now</button>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="container text-center py-5">
              <div className="row">
                <div className="col-md-3">
                  <i className="bi bi-award fs-2"></i>
                  <h6 className="mt-2">High Quality</h6>
                  <p className="text-muted small">crafted from top materials</p>
                </div>
                <div className="col-md-3">
                  <i className="bi bi-shield-check fs-2"></i>
                  <h6 className="mt-2">Warranty Protection</h6>
                  <p className="text-muted small">Over 2 years</p>
                </div>
                <div className="col-md-3">
                  <i className="bi bi-box-seam fs-2"></i>
                  <h6 className="mt-2">Free Shipping</h6>
                  <p className="text-muted small">Order over 150 $</p>
                </div>
                <div className="col-md-3">
                  <i className="bi bi-headset fs-2"></i>
                  <h6 className="mt-2">24 / 7 Support</h6>
                  <p className="text-muted small">Dedicated support</p>
                </div>
              </div>
            </div>
        </>
    )
}

export default Slider;
