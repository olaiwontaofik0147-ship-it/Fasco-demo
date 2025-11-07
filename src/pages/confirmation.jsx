import React from "react";
import { Link } from "react-router";

function Confirmation() {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 p-3">
            <div
                className="d-flex flex-column flex-md-row bg-white rounded-4 shadow overflow-hidden"
                style={{ maxWidth: "900px", width: "100%" }}
            >
                {/* LEFT IMAGE SECTION */}
                
                <div className="col-12 col-md-6 p-0">
                    <img src="images/fashion.png" alt="sign in" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
                </div>

                {/* RIGHT FORM SECTION */}
                <div className="login-form p-5">
                    <a className="mb-5" href="/"><img src="/images/FASCO2.png" alt="man" /></a>
                    <p className="text-muted mb-4 fw-medium mt-5">Enter The Confirmation Code</p>

                    <form>
                        <div>
                            <div className="mb-3 col-md-12">
                                <input type="text" className="form-control" placeholder="Confirmation Code" />
                            </div>
                        </div>
                        <button className="btn btn-dark w-100 rounded-3 py-2 fw-semibold"><Link to="/newPassword" className="text-decoration-none text-light">Recover Account</Link></button>
                        <p className="text-center mt-3">
                            Didn't receive confirmation code? <a href="#" className="text-decoration-none">Resend Now</a>
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

export default Confirmation;