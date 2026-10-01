import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import flowerIcon from "../../assets/icons/pink_flower.webp";
import LOGO from "../../assets/favicon.png";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu automatically when path changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`navbar-container ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}> 
        <img src={LOGO} className="app-logo" alt="logo" /> 
      </Link>

      {/* HAMBURGER TOGGLE BUTTON FOR MOBILE */}
      <button 
        className={`hamburger-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* NAV LINKS (DESKTOP & MOBILE DROPDOWN) */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-link ${isActive ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {isActive && (
                <img 
                  src={flowerIcon} 
                  alt="active page indicator" 
                  className="active-flower-icon" 
                />
              )}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;