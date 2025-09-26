import React from "react";
import "./FooterSection.css";
import { FaCheckCircle, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
<>
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Industries */}
        <div className="footer-column">
          <h3>Industries</h3>
          <ul>
            {[
              "High Tech Industries",
              "AI/ML",
              "Administrative",
              "Automotive",
              "Construction",
              "Creative",
              "Customer Service",
              "Education",
              "Energy",
              "Engineering",
              "Financial Services",
              "Healthcare",
              "Hospitality",
            ].map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="check-icon" /> {item}
              </li>
            ))}
          </ul>
          <a href="/business#allindustries">

          <button className="btn">View all Industries</button>
          </a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Why us</li>
            <li>Diversity, Equity and Inclusion</li>
            <li>Philanthropic Actions</li>
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div className="footer-column contact">
          <h2 className="logo">Yo<span>CHANA</span></h2>
          <button className="btn"
            onClick={() => {document.getElementById("form-container")?.scrollIntoView({ behavior: "smooth" });}}
          >Schedule Consultation</button>

          <p>📞 Tollfree: 888-259-0537</p>
          <p>✉️ hello@yochana.com</p>

          <input
            type="email"
            placeholder="Subscribe for Newsletter, Enter email"
            className="newsletter"
          />
          <div className="terms">
            <input type="checkbox" /> I accept the service terms and hereby give my consent to
            receive the newsletter. I understand that I can unsubscribe at any time.
          </div>

          <div className="captcha">
  <div class="captcha-inner">
    <input type="checkbox" id="robot" class="captcha-checkbox" />
    <label for="robot" class="captcha-label">I’m not a robot</label>
    <img
      class="captcha-logo"
      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
      alt="reCAPTCHA logo"
    />
  </div>
  <small class="captcha-footer">reCAPTCHA • Privacy • Terms</small>
</div>

          <button className="btn send">Send →</button>
        </div>
      </div>

    </footer>
{/* Bottom Section */}
<div className="footer-bottom">
  <div className="footer-container">
    {/* Logo */}
    <h2 className="logo">
      <span className="red">Y</span>
      <span className="blue">o</span>
      <span className="black">CHANA</span>
    </h2>

    {/* Divider */}
    <span className="divider" />

    {/* Address */}
    <p>23000 Commerce Drive, Farmington Hills, MI 48335, USA</p>

    {/* Divider */}
    <span className="divider" />

    {/* Contact */}
    <p>T: +1 248-213-6465<br />E: hello@yochana.com</p>

    {/* Divider */}
    <span className="divider" />

    {/* Socials */}
    <div className="socials">
      <a href="#"><FaLinkedin /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaFacebook /></a>
      <a href="#"><FaInstagram /></a>
    </div>
  </div>

  {/* Bottom row */}
  <div className="footer-bottom-row">
    <p>© 2025 Yochana</p>
    <div className="footer-links">
      <a href="/">Terms & Conditions</a>
      <a href="/">Privacy Policy</a>
      <a href="/">Unsubscribe</a>
    </div>
  </div>
</div>

</>
  );
};

export default Footer;
