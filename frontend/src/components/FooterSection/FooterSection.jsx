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
          {/* <h2 className="logo">Yo<span>CHANA</span></h2> */}
          {/* <img src="images/logo.png" alt=""  className="logo"/> */}
          <button className="btn"
            onClick={() => {document.getElementById("form-container")?.scrollIntoView({ behavior: "smooth" });}}
          >Schedule Consultation</button>

          <p>📞 Phone: +91 9650481240</p>
          <p>✉️ info@adamanthr.com</p>

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

    {/* <img src="images/logo.png" alt=""  className="logo"/> */}
    {/* <h2 className="logo"> */}
      {/* <span className="red">Y</span>
      <span className="blue">o</span>
      <span className="black">CHANA</span> */}
      
    {/* </h2> */}

    {/* Divider */}
    <span className="divider" />

    {/* Address */}
    <p>B1, Building No 50, Block-C Sec-6,
Noida, Uttar Pradesh – 201301</p>

    {/* Divider */}
    <span className="divider" />

    {/* Contact */}
    <p>T: +91 9650481240<br />E: info@adamanthr.com</p>

    {/* Divider */}
    <span className="divider" />

    {/* Socials */}
    <div className="socials">
      <a href="https://www.linkedin.com/company/adamanthr/" target="_blank"><FaLinkedin /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaFacebook /></a>
      <a href="#"><FaInstagram /></a>
    </div>
  </div>

  {/* Bottom row */}
  <div className="footer-bottom-row">
    <p>© 2025 Adamant</p>
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
