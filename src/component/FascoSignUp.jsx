import React from "react";
import { Link } from "react-router";

const FascoSignUp = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 p-3">
      <div
        className="d-flex flex-column flex-md-row bg-white rounded-4 shadow overflow-hidden"
        style={{ maxWidth: "1000px", width: "100%" }}
      >
        {/* LEFT IMAGE SECTION */}
        <div className="col-12 col-md-6 p-0">
          <img src="images/fashion2.png" alt="sign in" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="signUp-form p-5">
          <a className="navbar-brand fw-bold" href="/"><img src="/images/FASCO2.png" alt="man" /></a>
          <p className="text-muted mb-4 mt-5">Create Account</p>

          {/* Social Buttons */}
          <div className="social-buttons d-flex gap-2 mb-3">
            <button className="btn border rounded-3 flex-fill d-flex align-items-center justify-content-center gap-2">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                width="18"
              />
              Sign up with Google
            </button>
            <button className="btn border rounded-3 flex-fill d-flex align-items-center justify-content-center gap-2">
              <img
                src="https://www.svgrepo.com/show/156923/email-envelope-outline.svg"
                alt="Email"
                width="18"
              />
              Sign up with Email
            </button>
          </div>

          {/* Divider */}
          <div className="divider d-flex align-items-center text-secondary mt-5 mb-5 my-3">
            <div className="flex-grow-1 border-top"></div>
            <span className="mx-2 small text-muted">OR</span>
            <div className="flex-grow-1 border-top"></div>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Phone Number" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="password" className="form-control" placeholder="Confirm Password" />
              </div>
            </div>
            <button className="btn btn-dark w-100 rounded-3 py-2 fw-semibold mt-4">
              Create Account
            </button>
            <p className="text-center mt-3">
              Already have an account? <Link to="/signIn" className="text-decoration-none">Login</Link>
            </p>
          </form>
          <p className="d-flex justify-content-end align-items-end text-center text-muted small mt-5">
            FASCO Terms &amp; Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default FascoSignUp;
