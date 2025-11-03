import React from "react";
import { FaCog, FaBriefcase, FaUsers } from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="whychooseus" id="whychooseus">
      <div className="whychooseus-container">
        {/* Left Image */}
        <div className="whychooseus-image">
          <img src="/images/whychooseus.png" alt="Working professional" />
        </div>

        {/* Right Content */}
        <div className="whychooseus-content">
          <h2>WHY CHOOSE US</h2>
          <p className="whychooseus-description">
            Our vision is to grow further and become the most sought after HR
            consultancy in the world. We aim to become a one-stop shop for all
            the HR needs and provide brilliant quality service at affordable
            costs while placing the right people at the right jobs so that both
            the parties can be equally benefitted.
          </p>

          <div className="whychooseus-points">
            <div className="point">
              <FaCog className="point-icon" />
              <div>
                <h3>Near real time and quality service.</h3>
                <p>A dedicated team with industry specialization.</p>
              </div>
            </div>

            <div className="point">
              <FaBriefcase className="point-icon" />
              <div>
                <h3>Business Consulting</h3>
                <p>
                  We provide customized service to our client to help them grow
                  in their business.
                </p>
              </div>
            </div>

            <div className="point">
              <FaUsers className="point-icon" />
              <div>
                <h3>Temporary staffing</h3>
                <p>
                  Team of professional recruiters offer staffing services for
                  temporary, temp, temp to hire, contract to hire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
