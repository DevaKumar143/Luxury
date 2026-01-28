import React from "react";

const Card = () => {
  const imageStyle = {
    height: "200px",
    width: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  const cardStyle = {
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#e3f2fd",
        paddingTop: "60px",
        paddingBottom: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "50px", color: "#1e88e5" }}>
        Our Services
      </h2>

      <div className="container">
        {/* First Row */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          <div className="col">
            <div
              className="card h-100"
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <img
                src="https://livpure.com/cdn/shop/articles/family-spending-time-together-outside_23-2148659464_e0d1fe68-5a26-488e-a17e-c1486f0d3d89-131818.jpg?v=1726725415"
                className="card-img-top"
                alt="Split AC"
                style={imageStyle}
              />
              <div className="card-body">
                <h5 className="card-title">Split AC</h5>
                <p className="card-text">
                  Professional Split AC services including installation, dismantling, gas refilling, troubleshooting, and regular maintenance to ensure efficient cooling and long-lasting performance.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100"
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <img
                src="https://www.jagranimages.com/img-affiliate/2025/Feb/431449.webp"
                className="card-img-top"
                alt="AC Repair"
                style={imageStyle}
              />
              <div className="card-body">
                <h5 className="card-title">AC Repair</h5>
                <p className="card-text">
                  Reliable AC repair services including troubleshooting, component replacement, gas refilling, and regular maintenance to restore optimal cooling performance.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100"
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <img
                src="https://akm-img-a-in.tosshub.com/aajtak/images/story/201504/ac-collage_650_040515120303.jpg?size=948:533"
                className="card-img-top"
                alt="Window AC"
                style={imageStyle}
              />
              <div className="card-body">
                <h5 className="card-title">Window AC</h5>
                <p className="card-text">
                  Comprehensive Window AC services including installation, dismantling, gas refilling, cleaning, and regular maintenance for optimal cooling efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100"
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <img src="Washings.jpeg" className="card-img-top" alt="Outdoor AC Unit Cleaning" style={imageStyle} />
              <div className="card-body">
                <h5 className="card-title">Outdoor AC Cleaning</h5>
                <p className="card-text">
                  Professional cleaning service for outdoor AC units to remove dust, dirt, and debris. Regular cleaning improves cooling efficiency, reduces energy consumption, and extends the lifespan of your air conditioning system.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mt-4">
          <div className="col">
            <div
              className="card h-100"
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <img src="Washings.jpeg" className="card-img-top" alt="AC Cleaning" style={imageStyle} />
              <div className="card-body">
                <h5 className="card-title">AC Cleaning</h5>
                <p className="card-text">
                  Thorough cleaning and maintenance for indoor AC units to ensure efficient cooling, better air quality, and prolonged appliance life.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100"
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <img src="Sellsandbuy.jpeg" className="card-img-top" alt="Buy & Sell ACs" style={imageStyle} />
              <div className="card-body">
                <h5 className="card-title">Old AC Buy & Sell</h5>
                <p className="card-text">
                  We buy your old AC units and sell quality pre-owned or new ACs. Our team ensures fair pricing, safe handling, and a hassle-free process to help you upgrade efficiently and affordably.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100"
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <img src="cac.jpeg" className="card-img-top" alt="C AC" style={imageStyle} />
              <div className="card-body">
                <h5 className="card-title">C AC Services</h5>
                <p className="card-text">
                  Professional C AC services including installation, regular servicing, gas refilling, and troubleshooting to ensure optimal performance and efficient cooling.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card h-100"
              style={cardStyle}
              onMouseEnter={cardHover}
              onMouseLeave={cardLeave}
            >
              <img src="instrument.jpeg" className="card-img-top" alt="AC Repair" style={imageStyle} />
              <div className="card-body">
                <h5 className="card-title">Working AC & Outdoor Unit Repair</h5>
                <p className="card-text">
                  Our expert technicians provide professional repair and maintenance services for working ACs and outdoor units. We handle troubleshooting, component replacement, cleaning, and gas refilling to ensure your AC runs efficiently year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;



