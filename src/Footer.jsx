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

function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLink = (e, pageKey, hash) => {
    e.preventDefault();
    window.location.hash = hash;
    if (onNavigate) {
      onNavigate(pageKey);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content-grid">
        {/* Brand Column */}
        <div className="footer-col footer-col-brand">
          <div className="footer-brand" onClick={(e) => handleLink(e, "home", "#/")} style={{ cursor: "pointer" }}>
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

        {/* Dedicated Pages Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Pages & Overview</h4>
          <ul className="footer-links">
            <li><a href="#/" onClick={(e) => handleLink(e, "home", "#/")}>Home Page</a></li>
            <li><a href="#/about" onClick={(e) => handleLink(e, "about", "#/about")}>About Our NGO</a></li>
            <li><a href="#/mission" onClick={(e) => handleLink(e, "mission", "#/mission")}>Mission & Vision</a></li>
            <li><a href="#/projects" onClick={(e) => handleLink(e, "projects", "#/projects")}>Our Projects</a></li>
            <li><a href="#/history" onClick={(e) => handleLink(e, "history", "#/history")}>Our 10-Year History</a></li>
            <li><a href="#/team" onClick={(e) => handleLink(e, "team", "#/team")}>Board of Directors</a></li>
            <li><a href="#/gallery" onClick={(e) => handleLink(e, "gallery", "#/gallery")}>Campus Photo Gallery</a></li>
            <li><a href="#/donate" onClick={(e) => handleLink(e, "donate", "#/donate")}>Contact & Donate</a></li>
          </ul>
        </div>

        {/* Key Initiatives Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Key Initiatives</h4>
          <ul className="footer-links">
            <li><a href="#/projects" onClick={(e) => handleLink(e, "projects", "#/projects")}>Free Elementary School (KG–5)</a></li>
            <li><a href="#/projects" onClick={(e) => handleLink(e, "projects", "#/projects")}>High School Expansion (Grades 6–10)</a></li>
            <li><a href="#/projects" onClick={(e) => handleLink(e, "projects", "#/projects")}>Technical Training Institute (6 Courses)</a></li>
            <li><a href="#/projects" onClick={(e) => handleLink(e, "projects", "#/projects")}>Daily Student Nutrition Care</a></li>
            <li><a href="#/donate" onClick={(e) => handleLink(e, "donate", "#/donate")}>Sponsor A Child (PKR 5,500 / $20 mo)</a></li>
            <li><a href="#/donate" onClick={(e) => handleLink(e, "donate", "#/donate")}>IT &amp; Vocational Training Equipment (PKR 85,000 / $300)</a></li>
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
              <span>Dr. Khushro Shahookar (Founder & Director)<br /><small style={{ color: "rgba(255,255,255,0.72)" }}>Google Search Console &amp; Business Profile Verified</small></span>
            </li>
            <li>
              <Mail size={18} className="footer-contact-icon" />
              <span>
                <strong>Official Email:</strong><br />
                <a href="mailto:selflesshumanitarianservice@gmail.com">selflesshumanitarianservice@gmail.com</a>
              </span>
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
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;