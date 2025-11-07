import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="d-flex justify-content-around align-items-center gap-5 mt-5">
        <a className="navbar-brand fw-bold" href="/"><img src="/images/FASCO2.png" alt="man" /></a>
        <div className="footer-links ms-5">
          <a href="#">Support Center</a>
          <a href="#">Invoicing</a>
          <a href="#">Contract</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">FAQs</a>
        </div>
      </div>
      <p className="mt-5 d-flex justify-content-center">Copyright © 2022 Xpro. All rights reserved.</p>
    </section>
  );
};

export default Footer;      