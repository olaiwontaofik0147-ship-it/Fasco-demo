import React from "react";
import { Link } from "react-router";

const UltimateSale = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center text-center py-5">
            <div className="row align-items-center">
                <div className="col-md-4 curtain">
                    <img src="/images/img1.png" alt="man" className="img-fluid box" />
                </div>
                <div className="col-md-4 curtain2">
                    <img src="/images/images.png" alt="ladies" className="img-fluid mt-1" />
                    <h5 className="text-uppercase display-5 fw-bold mt-3">Ultimate</h5>
                    <h1 className="sale-text">SALE</h1>
                    <p className="mt-3">New Collection</p>
                    <Link className="btn btn-dark ms-2 mt-2" to="/shopPage">Shop Now</Link>
                    <img src="/images/images2.png" alt="ladies" className="img-fluid mt-5" />
                </div>
                <div className="col-md-4 curtain">
                    <img src="/images/img2.png" alt="man" className="img-fluid box" />
                </div>
            </div>
        </div>
    );
};

export default UltimateSale;