import React from "react";

const Newsletter = () => {
    return (
        <section className="newsletter-section mt-5">
          <img src="/images/left-model.png" alt="Left Model" className="left-img" />
          <img src="/images/right-model.png" alt="Right Model" className="right-img" />

          <div className="newsletter-box">
            <h2>Subscribe To Our Newsletter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultricies sollicitudin aliquam sem.</p>
            <input type="email" placeholder="michael@ymail.com" />
            <br />
            <button>Subscribe Now</button>
          </div>
        </section>
    );
};

export default Newsletter;