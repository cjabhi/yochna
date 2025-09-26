import React from 'react'
import './Home.css';
import Carousel from '../../components/Carousel/Carousel'
import TalentSection from '../../components/TalentSection/TalentSection';
import FeaturesSection from '../../components/FeatureSection/FeaturesSection';
import Services from '../../components/Services/Services';
import IndustrySlider from '../../components/IndustrySlider/IndustrySlider';
import Reviews from '../../components/Reviews/Reviews';
import OfficeLocations from '../../components/OfficeLocations/OfficeLocations';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/FooterSection/FooterSection';

const Home = () => {
  return (
    <div>
        <Carousel />

        <section className="partner-section">
            <h2>Partner with a Premier Executive Talent Firm</h2>
            <div className="partner-buttons">
            <button className="partner-btn">Employers</button>
            <button className="partner-btn">Careers</button>
            </div>
        </section>

        <section className="chamber-section">
            <div className="chamber-logo">
                <img src="/images/chamber.png" alt="Windsor Essex Chamber of Commerce" />
            </div>

            <div className="chamber-stats">
                <div className="stat">
                <h3>15 <span>Years</span></h3>
                <p>assisting businesses in growth</p>
                </div>
                <div className="stat">
                <h3>98 <span>%</span></h3>
                <p>Client Satisfaction</p>
                </div>
                <div className="stat">
                <h3>10K+</h3>
                <p>Candidates Placed</p>
                </div>
                <div className="stat">
                <h3>24 <span>hr</span></h3>
                <p>Average Answer Time</p>
                </div>
            </div>
         </section>

        <TalentSection />

        <FeaturesSection />

        <Services />

        <IndustrySlider />

        <Reviews />

        <OfficeLocations />

        <ContactSection />

    </div>

  )
}

export default Home