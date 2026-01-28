
import { useState, useEffect } from "react";

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

const Carousel = () => {
  const brandText = "Luxury Cooling Service";
  const [brandDisplay, setBrandDisplay] = useState("");
  const [brandIndex, setBrandIndex] = useState(0);

  const [serviceIndex, setServiceIndex] = useState(0);
  const [serviceDisplay, setServiceDisplay] = useState("");
  const [serviceCharIndex, setServiceCharIndex] = useState(0);

  useEffect(() => {
    if (brandIndex < brandText.length) {
      const timeout = setTimeout(() => {
        setBrandDisplay((prev) => prev + brandText[brandIndex]);
        setBrandIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [brandIndex]);

  useEffect(() => {
    if (serviceCharIndex < services[serviceIndex].length) {
      const timeout = setTimeout(() => {
        setServiceDisplay(
          (prev) => prev + services[serviceIndex][serviceCharIndex]
        );
        setServiceCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setServiceDisplay("");
        setServiceCharIndex(0);
        setServiceIndex((prev) => (prev + 1) % services.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [serviceCharIndex, serviceIndex]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "40px 20px",
        textAlign: "center",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: "300px",
          height: "300px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-60px",
          width: "400px",
          height: "400px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          filter: "blur(120px)",
        }}
      />

      <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", textShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
        Welcome to{" "}
        <span style={{ color: "#ffcc00" }}>
          {brandDisplay}
          <span className="cursor" style={{ color: "#ff5252" }}>
            |
          </span>
        </span>
      </h1>

      <p style={{ fontSize: "22px", marginBottom: "30px", color: "#f0f0f0", textShadow: "1px 1px 5px rgba(0,0,0,0.2)" }}>
        We offer top-notch AC services for your home & office
      </p>

      <div
        style={{
          fontSize: "28px",
          fontWeight: "600",
          color: "#42a5f5",
          minHeight: "40px",
          textShadow: "1px 1px 8px rgba(0,0,0,0.2)",
        }}
      >
        {serviceDisplay}
        <span className="cursor" style={{ color: "#ff5252" }}>
          |
        </span>
      </div>

      <p style={{ marginTop: "40px", fontSize: "18px", maxWidth: "600px", color: "#f0f0f0", lineHeight: "1.6" }}>
        From installation to repair and maintenance, we’ve got all your AC needs covered.
        Enjoy expert service with a 30-day warranty and flexible AMC plans.
      </p>
    </div>
  );
};

export default Carousel;
