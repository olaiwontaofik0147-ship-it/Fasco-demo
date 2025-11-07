import React from "react";

const products = [
    {
        id: 1,
        name: "Rounded Red Hat",
        price: "$8.00",
        img: "/images/red-hat.png",
        colors: ["#f00", "#000"],
    },
    {
        id: 2,
        name: "Linen-blend Shirt",
        price: "$17.00",
        img: "/images/linen-shirt.png",
        colors: ["#f8cfcf", "#d1cfcf"],
        soldOut: true,
    },
    {
        id: 3,
        name: "Long-sleeve Coat",
        price: "$106.00",
        img: "/images/coat.png",
        colors: ["#d4e8d4", "#000"],
    },
    {
        id: 4,
        name: "Boxy Denim Hat",
        price: "$25.00",
        img: "/images/denim-hat.png",
        colors: ["#1b2a56", "#142c4c"],
    },
    {
        id: 5,
        name: "Linen Plain Top",
        price: "$25.00",
        img: "/images/plain-top.png",
        colors: ["#c5e6c5", "#d1cfcf"],
    },
    {
        id: 6,
        name: "Oversized T-shirt",
        price: "$11.00",
        img: "/images/red-tshirt.png",
        colors: ["#f8cfcf", "#fff"],
    },
    {
        id: 7,
        name: "Polarized Sunglasses",
        price: "$18.00",
        oldPrice: "$21.00",
        img: "/images/sunglasses.png",
        colors: ["#b3a183", "#7e6a54"],
    },
    {
        id: 8,
        name: "Rockstar Jacket",
        price: "$22.00",
        img: "/images/jacket.png",
        colors: ["#000", "#d1cfcf"],
    },
    {
        id: 9,
        name: "Dotted Black Dress",
        price: "$20.00",
        img: "/images/black-dress.png",
        colors: ["#000", "#8caacb"],
    },
];

const FashionPage = () => {
    return (
        <div className="container">
            <div className="container-fluid my-4">
                <h2 className="text-center fw-bold mb-4">Fashion</h2>

                <div className="d-flex justify-content-center gap-2">
                    {/* FILTER SIDEBAR */}
                    <div className="col-md-3 col-lg-3 mb-4">
                        <div className="p-3 bg-white">
                            <h5 className="fw-bold mb-3">Filters</h5>

                            <div className="mb-4">
                                <h6>Size</h6>
                                <div className="d-flex gap-2">
                                    {["S", "M", "L", "XL"].map((size) => (
                                        <button key={size} className="btn btn-outline-secondary btn-sm">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h6>Colors</h6>
                                <div className="d-flex flex-wrap gap-3">
                                    {[
                                        "#ff4b4b",
                                        "#ff8a00",
                                        "#ffd400",
                                        "#40c057",
                                        "#6cff9e",
                                        "#6cffdc",
                                        "#6cb9ff",
                                        "#6cf6ff",
                                        "#6ca7ff",
                                        "#6c7bff",
                                        "#8a6cff",
                                        "#b66cff",
                                        "#fc6cff",
                                        "#ff6c6c",
                                    ].map((color, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                backgroundColor: color,
                                                borderRadius: "50%",
                                                display: "inline-block",
                                            }}
                                        ></span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h6>Prices</h6>
                                <ul className="list-unstyled">
                                    {["$0–$50", "$50–$100", "$100–$150", "$150–$200", "$300–$400"].map(
                                        (range, i) => (
                                            <li key={i} className="text-secondary small">{range}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h6>Brands</h6>
                                <ul className="list-unstyled small text-secondary d-flex flex-wrap gap-4">
                                    <li>Minimog</li>
                                    <li>Retrolie</li>
                                    <li>Brook</li>
                                    <li>Learts</li>
                                    <li>Vagabond</li>
                                    <li>Abby</li>
                                </ul>
                            </div>
                            <div>
                                <h6>Collections</h6>
                                <ul className="list-unstyled small text-secondary">
                                    <li>All products</li>
                                    <li>Best sellers</li>
                                    <li>New arrivals</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                            <div>
                                <h6>Tags</h6>
                                <ul className="list-unstyled small d-flex flex-wrap gap-2 text-secondary">
                                    <li>Fashion</li>
                                    <li>Hats</li>
                                    <li>Sandal</li>
                                    <li>Belt</li>
                                    <li>Bags</li>
                                    <li>Sneaker</li>
                                    <li>Denim</li>
                                    <li>Minimog</li>
                                    <li>Vagabond</li>
                                    <li>Sunglasses</li>
                                    <li>Beachwear</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT GRID */}
                    <div className="col-md-9 col-lg-10">
                        <div className="row g-3">
                            {products.map((p) => (
                                <div key={p.id} className="col-md-4">
                                    <div className="card border-0 shadow-sm rounded-3 h-100">
                                        <div className="position-relative">
                                            <img
                                                src={p.img}
                                                alt={p.name}
                                                className="card-img-top rounded-top-3"
                                            />
                                        </div>
                                        <div className="card-body text-start">
                                            <h6 className="card-title mb-2">{p.name}</h6>
                                            <p className="card-text fw-normal mb-1">
                                                {p.price}
                                                {p.oldPrice && (
                                                    <small className="text-decoration-line-through text-muted ms-2">
                                                        {p.oldPrice}
                                                    </small>
                                                )}
                                            </p>
                                            <div className="d-flex justify-content-start gap-2">
                                                {p.colors.map((c, i) => (
                                                    <span
                                                        key={i}
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                            backgroundColor: c,
                                                            borderRadius: "50%",
                                                            border: "1px solid #ddd",
                                                            display: "inline-block",
                                                        }}
                                                    ></span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* PAGINATION */}
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <ul className="pagination mb-0">
                                <li className="page-item active">
                                    <button className="page-link border-0">1</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link border-0">2</button>
                                </li>
                                <li className="page-item">
                                    <button className="page-link border-0">3</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FashionPage;
