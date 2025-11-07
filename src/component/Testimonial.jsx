import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonial-section">
          <div className="container">
            <h2 className="fw-bold mb-3">This Is What Our Customers Say</h2>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.</p>

            <div className="testimonial-wrapper">
              {/* Left card */}
              <div>
                <img src="images/user1.png" alt="User 1" className=" me-md-4 mb-3 mb-md-0" width="120" height="120" />
              </div>

              {/* Center (main) card */}
              <div className="bg-secondary-subtle active card-body d-flex align-items-center flex-column flex-md-row p-4">
                <img src="images/user2.png" alt="User 2" className=" me-md-4 mb-3 mb-md-0" width="120" height="120" />
                <div className="mt-3 text-start">
                  <p>"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"</p>
                  <div className="star-rating">★★★★★</div>
                  <h6>James K.</h6>
                  <small className="text-muted">Traveler</small>
                </div>
              </div>

              {/* Right card */}
              <div className="testimonial-card right">
                <div className="mt-1 text-start">
                  <p>"I couldn’t have asked for more than this. Your product is worth much more than I paid."</p>
                  <div className="star-rating">★★★★★</div>
                  <h6>John W.</h6>
                  <small className="text-muted">Entrepreneur</small>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Testimonials;
