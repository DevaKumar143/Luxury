

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
         padding: "5px 20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
              height: "60px"
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="logo.svg"
            alt="Luxury Cooling Service"
            style={{
              height: "170px",
              width: "auto",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Link>

        {/* Nav Links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "25px",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              About
            </Link>
          </li>
          {/* Contact/Phone */}
          <li>
            <a
              href="tel:+919967047728"
              style={{
                display: "flex",
                alignItems: "center",
                background: "#ff5252",
                padding: "8px 15px",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "background 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ff784e";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ff5252";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <i
                className="fa-solid fa-phone"
                style={{ marginRight: "8px", color: "#fff" }}
              ></i>
              9967047728
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;




