import React from "react";

const products = [
    {
        id: 1,
        name: "Shiny Dress",
        brand: "Al Karam",
        price: 95.5,
        reviews: "(41k) Customer Reviews",
        status: "Almost Sold Out",
        image: "/images/shiny-dress.png",
    },
    {
        id: 2,
        name: "Long Dress",
        brand: "Al Karam",
        price: 95.5,
        reviews: "(41k) Customer Reviews",
        status: "Almost Sold Out",
        image: "/images/long-dress.png",
    },
    {
        id: 3,
        name: "Full Sweater",
        brand: "Al Karam",
        price: 95.50,
        reviews: "(41k) Customer Reviews",
        status: "Almost Sold Out",
        image: "/images/full-sweater.png",
    },
    {
        id: 4,
        name: "White Dress",
        brand: "Al Karam",
        price: 95.50,
        reviews: "(41k) Customer Reviews",
        status: "Almost Sold Out",
        image: "/images/white-dress.png",
    },
    {
        id: 5,
        name: "Colorful Dress",
        brand: "Al Karam",
        price: 95.50,
        reviews: "(41k) Customer Reviews",
        status: "Almost Sold Out",
        image: "/images/colorful-dress.png",
    },
    {
        id: 6,
        name: "White Shirt",
        brand: "Al Karam",
        price: 95.50,
        reviews: "(41k) Customer Reviews",
        status: "Almost Sold Out",
        image: "/images/white-shirt.png",
    },
];

const NewArrivals = () => {
    return (
        <section id="NewArrivals" className="py-5">
            {/* Header */}
            <div className="text-center mb-5">
                <h2 className="fw-bold">New Arrivals</h2>
                <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                    duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
                    sollicitudin.
                </p>
            </div>

            {/* Tabs */}
            <div className="d-flex justify-content-center gap-2 mb-5">
                <button className="btn btn-light">Men&apos;s Fashion</button>
                <button className="btn btn-dark">Women&apos;s Fashion</button>
                <button className="btn btn-light">Women Accessories</button>
                <button className="btn btn-light">Men Accessories</button>
                <button className="btn btn-light">Discount Deals</button>
            </div>

            {/* Product Grid */}
            <div className="container">
                <div className="row g-4">
                    {products.map((product) => (
                        <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                            <div className="card shadow-sm h-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="card-img-top"
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="text-muted mb-1">{product.brand}</p>
                                    <div className="d-flex justify-content-between small mb-2">
                                        <span>{product.reviews}</span>
                                        <span className="text-warning">★★★★★</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fw-bold">${product.price}</span>
                                        {product.status && (
                                            <span className="text-danger small">{product.status}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center my-4">
                <button className="btn btn-dark px-4 py-2">View More</button>
            </div>
        </section>
        
    );
};

export default NewArrivals;
