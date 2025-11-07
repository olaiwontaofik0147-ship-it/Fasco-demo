import React from "react";

function Deals() {
    return (
        // Deals of the Month
        <section id="deals" className="container mt-5">
          <div className="row">
            {/* Left */}
            <div className="col-md-4">
              <h3 className="text-secondary">Deals Of The Month</h3>
              <p className="fs-6 fw-lighter">
                Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                elit. Scelerisque duis ultrices sollicitudin aliquam sem.<br />
                Scelerisque duis ultrices sollicitudin 
              </p>
              <button className="btn btn-dark mb-3 mt-3">Buy Now</button>

              {/* Countdown */}
              <div><h4 className="fs-6 mt-4">Hurry, Before It's Too Late!</h4></div>
              <div className="d-flex gap-4 mt-2">
                <div className="text-center">
                  <h5 className="border rounded shadow p-1">02</h5>
                  <p>Days</p>
                </div>
                <div className="text-center">
                  <h5 className="border rounded shadow p-1">06</h5>
                  <p>Hrs</p>
                </div>
                <div className="text-center">
                  <h5 className="border rounded shadow p-1">05</h5>
                  <p>Mins</p>
                </div>
                <div className="text-center">
                  <h5 className="border rounded shadow p-1">30</h5>
                  <p>Sec</p>
                </div>
              </div>
            </div>

            {/* Right - Cards */}
            <div className="col-md-8 d-flex">
              <div className="card mx-2" style={{ width: "18rem" }}>
                <img src="/images/pt2img1.png" alt="model" />
              </div>
              <div className="card mx-2" style={{ width: "14rem" }}>
                <img src="/images/pt2img2.png" className="card-img-top" alt="model" />
                <div className="card-body">
                  <img src="/images/dots.png" alt="" />
                </div>
              </div>
              <div className="card mx-2" style={{ width: "8rem" }}>
                <img src="/images/pt2img3.png" className="card-img-top" alt="model" />
              </div>
            </div>
          </div>
        </section>
    );
};

export default Deals;











