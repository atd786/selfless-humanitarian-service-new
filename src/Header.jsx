import React, { useState, useEffect } from "react";
import "./Header.css";
import { 
  Heart, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ExternalLink 
} from "lucide-react";

function Header({ currentPage = "home", onNavigate, onDonateClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", key: "home", href: "#/" },
    { name: "About Us", key: "about", href: "#/about" },
    { name: "Mission & Vision", key: "mission", href: "#/mission" },
    { name: "Our Projects", key: "projects", href: "#/projects" },
    { name: "Our History", key: "history", href: "#/history" },
    { name: "Leadership", key: "team", href: "#/team" },
    { name: "Gallery", key: "gallery", href: "#/gallery" },
    { name: "Volunteer", key: "volunteer", href: "#/volunteer" },
    { name: "Contact & Donate", key: "donate", href: "#/donate" },
  ];

  const handleNavClick = (e, key, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.location.hash = href;
    if (onNavigate) {
      onNavigate(key);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-badge">
              <span className="live-pulse-dot" aria-hidden="true"></span>
              <ShieldCheck size={14} /> SECP-Registered National NGO
            </span>
            <span className="top-location">
              <MapPin size={13} /> Shahdara, Lahore, Pakistan
            </span>
          </div>
          <div className="top-bar-right">
            <a 
              href="mailto:selflesshumanitarianservice@gmail.com"
              className="top-email-link"
              title="Email Selfless Humanitarian Service"
            >
              selflesshumanitarianservice@gmail.com
            </a>
            <a 
              href="https://wa.me/923061064907?text=Hello%20Dr.%20Khushro,%20I%20would%20like%20to%20learn%20more%20about%20Selfless%20Humanitarian%20Service" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-contact"
            >
              <Phone size={13} /> Direct WhatsApp: +92 306 1064907
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-container">
          <a 
            href="#/" 
            className="nav-brand"
            onClick={(e) => handleNavClick(e, "home", "#/")}
          >
            <img src="./logo.png" alt="Selfless Humanitarian Service Logo" className="nav-logo" />
            <div className="nav-brand-text">
              <span className="brand-title">Selfless</span>
              <span className="brand-title">Humanitarian</span>
              <span className="brand-title">Service</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`nav-link ${currentPage === link.key ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, link.key, link.href)}
              >
                {link.name}
              </a>
            ))}
            <button 
              className="btn btn-primary btn-shimmer nav-donate-btn"
              onClick={onDonateClick}
            >
              <Heart size={16} fill="currentColor" /> Donate
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <>
            <div 
              className="mobile-backdrop" 
              onClick={() => setMobileMenuOpen(false)} 
              aria-hidden="true"
            />
            <div className="mobile-drawer">
              <div className="container mobile-drawer-content">
                {navLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className={`mobile-nav-link ${currentPage === link.key ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, link.key, link.href)}
                  >
                    <span>{link.name}</span>
                    <span className="mobile-nav-arrow">→</span>
                  </a>
                ))}
                <button 
                  className="btn btn-primary mobile-donate-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDonateClick();
                  }}
                >
                  <Heart size={18} fill="currentColor" /> Support Our Projects
                </button>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Header;