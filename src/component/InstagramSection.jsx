import React from "react";

const images = [
  "public/images/insta1.png",
  "public/images/insta2.png",
  "public/images/insta3.png",
  "public/images/insta4.png",
  "public/images/insta5.png",
  "public/images/insta6.png",
  "public/images/insta7.png",
];

const InstagramSection = () => {
  return (
    <section className="py-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Follow Us On Instagram</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin.
        </p>
      </div>

      {/* Image Row */}
      <div className="container-fluid">
        <div className="row g-0">
          {images.map((img, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg">
              <div className="insta-img-wrapper">
                <img
                  src={img}
                  alt={`Instagram ${index + 1}`}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover", height: "350px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
