
import "../style/Footer.css";

const Footer = () => {
  const googleMapLink =
    "https://www.google.com/maps/place/Sai+Chaya+Apt,+Shop+NO+5+Pakhadi+Kharegaon,+Kalwa+West,+Thane,+Maharashtra+400605";

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Luxury Cooling Service</h3>

         
          <p>
            <a href={googleMapLink} target="_blank" rel="noreferrer" className="location">
              <i className="fa-solid fa-location-dot"></i>{" "}
              Sai Chaya Apt, Shop NO 5 Pakhadi Kharegaon, Kalwa West, Thane, Maharashtra
            </a>
          </p>

          <p>Pin Code: 400605</p>

          <p>
            Email:{" "}
            <a href="mailto:luxurycoolingservice1@gmail.com" className="email">
              luxurycoolingservice1@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+919967047728" className="phone">
              +91 9967047728
            </a>
          </p>

         
          <div className="footer-socials">
            <a
              href="https://youtube.com/@luxurycoolingservice-rc3yk?si=ja2wcFacoJ3vUSEx"
              target="_blank"
              rel="noreferrer"
              className="youtube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/luxurycoolingservice"
              target="_blank"
              rel="noreferrer"
              className="facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/nishadmahendra44?igsh=MTh2YzM2ZTM5bTY0ZQ=="
              target="_blank"
              rel="noreferrer"
              className="instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        
        <div className="footer-links">
          <h3>Customer Support</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      
    
      <div className="footer-bottom">
  <p>© 2026 Luxury Cooling Service. All Rights Reserved.</p>
  <p className="developer">
    Developed by{" "}
    <a
      href="https://www.linkedin.com/in/deva-vishwakarma-ba08a824b/"
      target="_blank"
      rel="noreferrer"
    >
      Deva Vishwakarma
    </a>{" "}
    | Email:{" "}
    <a href="mailto:deva.vishwakrma063@gmail.com">
      deva.vishwakrma063@gmail.com
    </a>
  </p>
</div>

    </footer>
  );
};

export default Footer;

