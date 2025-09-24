import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">Yo<span>CHANA</span></Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="/company">Company ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
            </ul>
          </li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/business">For Business</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>

        {/* Right Buttons */}
        <div className="nav-buttons">
          <button className="support">Client Support</button>
          {/* phone can remain a tel link because it’s not a route */}
          <a className="phone" href="tel:18882590537">+1 888-259-0537</a>
          <Link to="/contact" className="contact">Contact Us</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <details>
          <summary>Company</summary>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/team" onClick={toggleMenu}>Our Team</Link>
        </details>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/business" onClick={toggleMenu}>For Business</Link>
        <Link to="/careers" onClick={toggleMenu}>Careers</Link>
        <Link to="/blog" onClick={toggleMenu}>Blog</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
