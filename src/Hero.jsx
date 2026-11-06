import React, { useState, useEffect } from "react";
import "./Hero.css";
import { 
  Heart, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Calendar, 
  Award,
  Sparkles 
} from "lucide-react";

const slides = [
  {
    image: "./slide1.jpg",
    tagline: "Free Elementary & Primary Education",
    title: "Lighting the Torch of Knowledge for Underprivileged Children",
    desc: "Providing high-quality schooling from KG to Year 5 for children deprived of education in Shahdara, Lahore."
  },
  {
    image: "./slide2.jpg",
    tagline: "Equal Opportunity Learning",
    title: "Empowering Margins of Society with Modern Classrooms",
    desc: "Overcoming poverty through structured English-medium education, personal mentorship, and dedicated teachers."
  },
  {
    image: "./slide3.jpg",
    tagline: "Nutrition & Care",
    title: "Nourishing Young Bodies and Inspiring Curious Minds",
    desc: "Ensuring children receive nutritious meals and safe study environments so no child studies on an empty stomach."
  },
  {
    image: "./slide4.jpg",
    tagline: "Vocational & Technical Training",
    title: "Preparing Pakistan's Youth for High-Demand Careers",
    desc: "Equipping young people with industrial and technical skills for sustainable employment and long-term independence."
  }
];

function Hero({ onDonateClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="about">
      {/* Background Slides */}
      <div className="hero-slides-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="container hero-content-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <Sparkles size={16} className="sparkle-icon" />
            <span>SECP-Registered National NGO in Pakistan</span>
          </div>

          <h1 className="hero-title animate-fade-in-up">
            {slides[currentSlide].title}
          </h1>

          <p className="hero-description animate-fade-in-up-delay">
            {slides[currentSlide].desc}
          </p>

          <div className="hero-actions">
            <button className="btn btn-accent btn-hero-primary" onClick={onDonateClick}>
              <Heart size={18} fill="currentColor" /> Support Our Projects
            </button>
            <a 
              href="#projects" 
              className="btn btn-outline btn-hero-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Projects <ArrowRight size={18} />
            </a>
          </div>

          {/* Slide Indicator Dots */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats Banner Strip */}
      <div className="hero-stats-strip">
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Users size={24} className="stat-icon" />
            </div>
            <div className="stat-info">
              <span className="stat-number">50+</span>
              <span className="stat-label">Students Educated (KG–5)</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Calendar size={24} className="stat-icon" />
            </div>
            <div className="stat-info">
              <span className="stat-number">2015</span>
              <span className="stat-label">Established & Serving</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <BookOpen size={24} className="stat-icon" />
            </div>
            <div className="stat-info">
              <span className="stat-number">100%</span>
              <span className="stat-label">Free Education & Books</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Award size={24} className="stat-icon" />
            </div>
            <div className="stat-info">
              <span className="stat-number">2 Major</span>
              <span className="stat-label">Envisioned Expansions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
