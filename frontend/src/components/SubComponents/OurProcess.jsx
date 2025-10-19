import React from "react";
import "./OurProcess.css";

const steps = [
  {
    number: "1",
    title: "Reach Out",
    description:
      "We initiate contact, engage in conversations, and comprehend your needs.",
  },
  {
    number: "2",
    title: "Connect",
    description:
      "Building strong ties, ensuring culture and values alignment.",
  },
  {
    number: "3",
    title: "Review",
    description:
      "Meticulous assessment, saving selection time.",
  },
  {
    number: "4",
    title: "Interview & Offer",
    description:
      "We facilitate interviews, aid in offer preparation, and presentation.",
  },
  {
    number: "5",
    title: "Hire & Onboard",
    description:
      "After offer acceptance, seamless hiring and onboarding support.",
  },
];

const OurProcess = () => {
  return (
    <section className="process-section">
      <h2 className="process-title">Our Process</h2>
      <div className="process-container">
        {steps.map((step) => (
          <div key={step.number} className="process-step">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
