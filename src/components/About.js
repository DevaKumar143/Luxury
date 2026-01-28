
import React from "react";

const services = [
  "AC Installation",
  "AC Dismantling",
  "Gas Filling / Refilling",
  "AC Testing & Servicing",
  "Jet Pump Services",
  "30-Day Service Warranty",
  "AMC (Annual Maintenance Contract)",
  "General AC Maintenance & Repairs",
  "Expert Technicians",
  "Old AC Purchase and New AC Sales",
  "PCB Repairs",
  "Compressor Replacement",
];

const About = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#e3f2fd",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, #42a5f5, #1e88e5)",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "36px" }}>About Our AC Services</h2>
        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          We provide a wide range of professional AC services to ensure your
          cooling systems are always running efficiently. Our expert technicians
          are trained to handle every type of air conditioning service.
        </p>
        <div
          
        ></div>
      </div>

      <div
        
      >
        <div
          style={{
            background: "#fff",
            padding: "10px 0",
            overflow: "hidden",
            borderBottom: "2px solid #42a5f5",
          }}
        >
          <div
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1e88e5",
              animation: "marquee 15s linear infinite",
            }}
          >
            All Types of AC, Washing Machine, Refrigerator, Water Dispenser, and
            Deep Freezer Services
          </div>
        </div>

        <style>
          {`
    @keyframes marquee {
      0% { transform: translateX(150px); }                   /* start 150px from right */
      100% { transform: translateX(calc(-100% - 150px)); }   /* end 150px before left */
    }
  `}
        </style>
      </div>

      <div style={{ padding: "40px 20px" }}>
        <h3
          style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}
        >
          Our Services Include:
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "25px",
                width: "260px",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "#333",
          fontSize: "16px",
        }}
      >
        <p>
          We offer reliable service with 30-day warranty and flexible AMC
          contracts for long-term maintenance. Your comfort is our priority!
        </p>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default About;



