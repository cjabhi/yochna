import React from "react";
import { createRoot } from "react-dom/client";
import ContactSection from "../../components/ContactSection/ContactSection";
import './Contact.css';

const App = () => {
  return (
    <>

      <div className="talent-page">
        <div className="talent-container">
          <h1 className="talent-heading">We're here to help</h1>
          <p className="talent-subheading">
            Resolve Your Talent Acquisition Challenges
          </p>

          <div className="talent-box">
            <h2 className="talent-box-title">
              Expand Your Business with Top Talent Partner with Yochana IT
              Solutions Inc.
            </h2>
            <p className="talent-text">
              Are you looking to grow your business and build a high-performing
              team? At Yochana IT Solutions Inc., we specialize in talent
              acquisition, workforce solutions, and strategic hiring to connect
              you with highly qualified professionals.
            </p>

            <p className="talent-text">
              We provide expert hiring solutions across multiple industries,
              including:
            </p>

            <ul className="talent-list">
              {[
                "Information Technology (IT talent solutions)",
                "Operations Management",
                "Accounting & Finance",
                "Sales & Marketing",
              ].map((item, i) => (
                <li className="talent-list-item" key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="talent-icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="talent-text">
              Whether you need contract professionals, project-based talent, or
              full-time hires, we customize our solutions to meet your
              business's unique needs.
            </p>

            <p className="talent-text">
              <strong>
                Boost productivity and scale your workforce with top-tier
                professionals.
              </strong>{" "}
              Contact us today to discover how our expertise can drive your
              company's success.
            </p>
          </div>

          <div className="talent-contact-group">
            <div className="talent-contact-info">
              <p className="talent-contact-label">Call us at:</p>
              <p className="talent-contact-value">+91 9650481240</p>
            </div>
            <div className="talent-contact-info">
              <p className="talent-contact-label">Email us:</p>
              <p className="talent-contact-value">info@adamanthr.com</p>
            </div>
          </div>

          <div className="talent-btn-wrapper">

            <button
                onClick={() => {
                document
                .getElementById("form-container")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
             className="talent-btn" >Schedule a free consultation</button>

          </div>
        </div>
      </div>
      
      <div className="office-locations">
  <h2>Our Offices</h2>
  <div className="locations-wrapper">
    <div className="location-card">
      <h3>Delhi Office</h3>
      <p>
        A-127, 3rd Floor, Mayur Vihar, Phase-III,<br/>
        Opp. Bank Of Baroda,<br/>
        New Delhi – 110096
      </p>
    </div>
    <div className="location-card">
      <h3>Noida Office</h3>
      <p>
        B1, Building No 50, Block-C Sec-6,<br/>
        Noida, Uttar Pradesh – 201301
      </p>
    </div>
    <div className="location-card">
      <h3>USA Office</h3>
      <p>
        1520 Preston Rd.<br/>
        Plano, Texas – 75093
      </p>
    </div>
  </div>
</div>


      <ContactSection />

    </>
  );
};

export default App;
