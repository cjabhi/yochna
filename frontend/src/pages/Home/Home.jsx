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
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Contact from '../Contact/Contact';

const Home = ({url}) => {
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
            {/* <div className="chamber-logo">
                <img src="/images/chamber.png" alt="Windsor Essex Chamber of Commerce" />
            </div> */}

            <div className="chamber-stats">
                <div className="stat">
                <h3>10+ <span>Years</span></h3>
                <p>Experience in helping businesses</p>
                </div>
                <div className="stat">
                <h3>100 <span>%</span></h3>
                <p>Statutory Compliance</p>
                </div>
                <div className="stat">
                <h3>4.5K+</h3>
                <p>Candidates Placed</p>
                </div>
                <div className="stat">
                <h3>20+</h3>
                <p>States Connectivity in India</p>
                </div>
            </div>
         </section>

        <TalentSection />

        <FeaturesSection />

        <Services url={url} />

        <IndustrySlider />

        {/* <Reviews /> */}


        <WhyChooseUs />
        <Contact />
        <OfficeLocations />
        <ContactSection />

    </div>

  )
}

export default Home