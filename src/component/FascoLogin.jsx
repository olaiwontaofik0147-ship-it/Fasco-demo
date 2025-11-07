import React, { useState } from "react";
import { Link } from "react-router";

const FascoLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Simple form validation
        if (!email || !password) {
            setError("Please fill in both fields.");
            return;
        }

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Mock login success (you can replace this with Firebase or API)
        if (email === "admin@fasco.com" && password === "123456") {
            setSuccess("Login successful! Redirecting...");
            setTimeout(() => {
                alert("Welcome to FASCO Dashboard 🎉");
            }, 1500);
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 p-3">
            <div
                className="d-flex flex-column flex-md-row bg-white rounded-4 shadow overflow-hidden"
                style={{ maxWidth: "900px", width: "100%" }}
            >
                {/* LEFT IMAGE SECTION */}
                <div
                    className="login-image"
                    style={{
                        flex: 1.3,
                        backgroundImage: "url('/images/fashion.png')", // Place image in public folder
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "100%",
                    }}
                ></div>

                {/* RIGHT FORM SECTION */}
                <div className="login-form p-5">
                    <a className="mb-5" href="/"><img src="/images/FASCO2.png" alt="man" /></a>
                    <p className="text-muted mb-4 mt-5">Sign In To FASCO</p>

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
                    <div className="divider d-flex align-items-center text-secondary my-3">
                        <div className="flex-grow-1 border-top"></div>
                        <span className="mx-2 small text-muted">OR</span>
                        <div className="flex-grow-1 border-top"></div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control rounded-3 py-2"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control rounded-3 py-2"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Error / Success Message */}
                        {error && (
                            <div className="alert alert-danger py-2 text-center" role="alert">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="alert alert-success py-2 text-center" role="alert">
                                {success}
                            </div>
                        )}

                        <button className="btn btn-dark w-100 rounded-3 py-2 fw-semibold">
                            Sign In
                        </button>
                        <button className="btn btn-light w-100 rounded-3 py-2 fw-light border-info mt-2">
                            <Link to="/signUp" className="text-decoration-none text-primary">
                                Register Now
                            </Link>
                        </button>

                        <div className="d-flex justify-content-end align-items-center mt-3 small">
                            <Link to="/forgetPassword" className="text-decoration-none text-primary">
                                Forgot Password?
                            </Link>
                        </div>
                    </form>

                    <p className="d-flex justify-content-end align-items-end text-center text-muted small mt-5">
                        FASCO Terms &amp; Conditions
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FascoLogin;
