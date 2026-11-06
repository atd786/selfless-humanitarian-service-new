import React from "react";
import "./Footer.css";
import { 
  Heart, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  ArrowUp,
  Mail
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content-grid">
        {/* Brand Column */}
        <div className="footer-col footer-col-brand">
          <div className="footer-brand">
            <img src="./logo.png" alt="Selfless NGO Logo" className="footer-logo" />
            <div>
              <span className="footer-brand-name">Selfless</span>
              <span className="footer-brand-sub">Humanitarian Service</span>
            </div>
          </div>
          <p className="footer-about-text">
            An SECP-registered National NGO operating in Pakistan since 2015. 
            Dedicated to providing free quality education, daily nutritional care, 
            and career-building vocational training to underprivileged children and marginalized youth.
          </p>
          <div className="footer-badge">
            <ShieldCheck size={16} /> SECP-Registered National NGO
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            <li><a href="#about">About Our NGO</a></li>
            <li><a href="#mission">Mission & Vision</a></li>
            <li><a href="#projects">Envisioned Projects</a></li>
            <li><a href="#history">Our 2015 History</a></li>
            <li><a href="#team">Board of Directors</a></li>
            <li><a href="#gallery">Photo Gallery</a></li>
            <li><a href="#donate">Donations & Support</a></li>
          </ul>
        </div>

        {/* Projects Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Key Initiatives</h4>
          <ul className="footer-links">
            <li><a href="#projects">Free Elementary School (KG–5)</a></li>
            <li><a href="#projects">High School Expansion</a></li>
            <li><a href="#projects">Evening Academic Tutoring</a></li>
            <li><a href="#projects">Technical Training Institute</a></li>
            <li><a href="#projects">Daily Student Meal Program</a></li>
            <li><a href="#donate">Sponsor A Child</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Headquarters & Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="footer-contact-icon" />
              <span>Shahdara, Lahore, Punjab, Pakistan</span>
            </li>
            <li>
              <Phone size={18} className="footer-contact-icon" />
              <span>
                <strong>Direct WhatsApp:</strong><br />
                <a href="https://wa.me/923061064907" target="_blank" rel="noopener noreferrer">
                  +92 306 1064907
                </a>
              </span>
            </li>
            <li>
              <ShieldCheck size={18} className="footer-contact-icon" />
              <span>Dr. Khushro Shahookar (Founder & Director)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} Selfless Humanitarian Service. All rights reserved. Registered with SECP, Pakistan.
          </p>

          <button 
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span> <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
