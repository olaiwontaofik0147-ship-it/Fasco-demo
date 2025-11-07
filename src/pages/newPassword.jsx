import React from "react";

function NewPassword() {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 p-3">
            <div
                className="d-flex flex-column flex-md-row bg-white shadow"
                style={{ maxWidth: "900px", width: "100%" }}
            >
                {/* LEFT IMAGE SECTION */}
                
                <div className="col-12 col-md-6 p-0">
                    <img src="images/fashion.png" alt="sign in" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
                </div>


                {/* RIGHT FORM SECTION */}
                <div className="login-form p-5">
                    <a className="mb-5" href="/"><img src="/images/FASCO2.png" alt="man" /></a>
                    <p className="text-muted mb-4 fw-medium mt-5">Enter Your New Password</p>

                    <form>
                        <div>
                            <div className="mb-3 col-md-12">
                                <input type="text" className="form-control" placeholder="New Password" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <input type="text" className="form-control" placeholder="Confirmation Password" />
                            </div>
                        </div>
                        <button className="btn btn-primary w-100 rounded-3 py-2 fw-semibold">Submit</button>
                    </form>

                    <p className="d-flex justify-content-end align-items-end text-center text-muted small mt-5">
                        FASCO Terms &amp; Conditions
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewPassword;