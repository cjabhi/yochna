import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FooterSection.css";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";


const Footer = () => {
  const navigate = useNavigate();
  const [captchaToken, setCaptchaToken] = useState("");

  const onChange = (token) => {
    console.log("Received token:", token);
    setCaptchaToken(token);
  };
  
  return (
    <>
      <footer className="footer">
        {/* Top Section */}
        <div className="footer-top simple">
          {/* Column 1 - About */}
          <div className="footer-column c1">
            <h3>About Adamant</h3>
            <p>
              Adamant HR delivers innovative and scalable workforce solutions.
              We connect businesses with top talent across industries and help
              them grow with confidence.
            </p>
            <button
              className="btn"
              onClick={() =>
                document
                  .getElementById("form-container")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Schedule Consultation
            </button>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li onClick={()=>{navigate('/careers')}}>Careers</li>
              {/* <li>Industries</li> */}
              <li onClick={() =>
                document
                  .getElementById("whychooseus")
                  ?.scrollIntoView({ behavior: "smooth" })
              } >Why Choose Us</li>
              {/* <li>Diversity & Inclusion</li> */}
              <li onClick={()=>{navigate('/contact')}}>Contact</li>
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div className="footer-column">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter to get the latest insights.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter"
            />
            <ReCAPTCHA
              sitekey="6Lev1forAAAAAGx0nDoWXktFdYGV8JIov-wdwl4g"
              onChange={onChange}
            />
            <button className="btn send">Subscribe</button>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>
            B1, Building No 50, Block-C Sec-6,
            <br />
            Noida, Uttar Pradesh – 201301
          </p>

          <p>
            T: +91 9650481240 <br /> E: info@adamanthr.com
          </p>

          <div className="socials">
            <a
              href="https://www.linkedin.com/company/adamanthr/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

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
