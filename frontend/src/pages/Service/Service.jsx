import React from 'react';
import './Service.css';
import ContactSection from '../../components/ContactSection/ContactSection';
import Services from '../../components/Services/Services';
import HowSupport from '../../components/HowSupport/HowSupport';
const Service = ({url}) => {
    return (
        <div>
            <section className="wf-hero">
                <div className="wf-content">
                    <span className="wf-badge">SERVICES</span>
                    <h1 className="wf-title">Workforce Solutions</h1>
                    <p className="wf-subtitle">
                        Elevate Your Business with Reliable and Efficient Technology-Driven
                        Talent Solutions in the USA, Canada, and Mexico
                    </p>
                    <button className="wf-button"
                        onClick={() => {
                            document
                                .getElementById("form-container")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >Schedule a Free Consultation</button>
                </div>
                {/* Decorative overlay */}
                <div className="wf-pattern" aria-hidden="true"></div>
            </section>
            <Services url={url} />
            <HowSupport />
            <ContactSection />
        </div>


    )
}

export default Service