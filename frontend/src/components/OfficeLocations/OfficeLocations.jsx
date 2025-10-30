import React from "react";
import "./OfficeLocations.css";

const locations = [
  {
    image: "images/noida.jpg",
    name: "Noida, India",
  },
  {
    image: "images/delhi.jpg",
    name: "Delhi, India",
  },
  {
    image: "images/newyork.jpg",
    name: "New York , US",
  },
  // {
  //   image: "images/banglore.jpg",
  //   name: "Bangalore, India",
  // },
//   {
//     image: "images/pune.jpg",
//     name: "Pune, India",
//   },
];

const OfficeLocations = () => {
  return (
    <section className="office-section">
      <h2 className="office-title">Office Locations</h2>
      <div className="office-flex">
        {locations.map((loc, idx) => (
          <div className="office-card" key={idx}>
            <img src={loc.image} alt={loc.name} className="office-img" />
            <h3 className="office-name">{loc.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeLocations;
