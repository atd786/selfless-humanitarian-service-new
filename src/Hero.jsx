import React, { useState, useEffect } from "react";
import { ArrowRight, Heart, ShieldCheck, Award, Users, ChevronRight, Sparkles } from "lucide-react";
import "./Hero.css";

const slides = [
  {
    image: "/images/hero-slider-1.jpg",
    title: "Empowering Young Minds Through Quality Education",
    subtitle: "Providing completely free high school education, books, uniforms, and daily nutrition to underprivileged children in Shahdara, Lahore.",
    tag: "High School & Evening Academy"
  },
  {
    image: "/images/hero-slider-2.jpg",
    title: "Equipping Future Tech & Vocational Leaders",
    subtitle: "Establishing the Selfless Humanitarian Service Technical Training Institute to impart computer IT, coding, digital arts, and market-ready vocational skills.",
    tag: "Technical Training Initiative"
  },
  {
    image: "/images/hero-slider-3.jpg",
    title: "Nurturing Dignity, Health & Daily Nutrition",
    subtitle: "Ensuring no child studies on an empty stomach through daily mid-day balanced meals and basic medical care.",
    tag: "Health & Child Welfare"
  },
  {
    image: "/images/hero-slider-4.jpg",
    title: "Selfless Humanitarian Service for a Brighter Pakistan",
    subtitle: "Founded by international educator Dr. Khushro Shahookar (Ph.D., USA), registered nationally with SECP as a nonprofit.",
    tag: "SECP Registered NGO"
  }
];

const quickCauses = [
  { id: "Sponsor a Child's Tuition (PKR 5,500/mo or USD 20/mo)", label: "Sponsor a Child's Tuition", amount: "PKR 5,500 / $20 mo", sub: "1 student per month" },
  { id: "Daily Nutritious Student Meals (PKR 11,000/mo or USD 40/mo)", label: "Daily Nutritious Student Meals", amount: "PKR 11,000 / $40 mo", sub: "Monthly campus nutrition" },
  { id: "Sponsor a Classroom (10 Students) (PKR 55,000/mo or $200/mo)", label: "Sponsor a Classroom (10 Students)", amount: "PKR 55,000 / $200 mo", sub: "Full classroom monthly support" },
  { id: "Support our Institutes and Projects (any amount)", label: "Support our Institutes and Projects", amount: "Any Amount", sub: "Flexible PKR / USD giving" }
];

function Hero({ onDonateClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedQuickCause, setSelectedQuickCause] = useState(quickCauses[0].id);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideObj = slides[currentSlide];

  return (
    <section className="hero-section">
      {/* Background Slider */}
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Main Content Layout: Asymmetric 2-Column Flagship Hero */}
      <div className="container hero-container-inner">
        <div className="hero-grid">
          {/* Left Column: Narrative & Primary CTAs */}
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <span className="hero-badge">
                <Sparkles size={14} className="badge-sparkle" />
                {currentSlideObj.tag}
              </span>
              <span className="hero-slide-counter">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>

            <h1 className="hero-title">{currentSlideObj.title}</h1>
            <p className="hero-subtitle">{currentSlideObj.subtitle}</p>

            <div className="hero-actions">
              <button
                className="btn btn-accent btn-shimmer hero-cta-btn"
                onClick={() => onDonateClick("Sponsor a Child's Tuition (PKR 5,500/mo or USD 20/mo)")}
              >
                <Heart size={19} fill="currentColor" /> Sponsor a Child Today
              </button>
              <a href="#projects" className="btn btn-outline-white hero-secondary-btn">
                Explore Our Projects <ArrowRight size={18} />
              </a>
            </div>

            {/* Micro Trust Strip */}
            <div className="hero-micro-trust">
              <span><ShieldCheck size={15} /> Zero-Overhead Field Model</span>
              <span><Award size={15} /> Verified Campus in Shahdara</span>
              <span><Users size={15} /> Direct WhatsApp Transparency</span>
            </div>

            {/* Slide Indicator Controls */}
            <div className="hero-dots" aria-label="Slide controls">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`hero-dot ${idx === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Floating Direct Impact Quick-Pledge Glassmorphic Widget */}
          <div className="hero-quick-widget">
            <div className="widget-header">
              <span className="widget-pill">Direct 100% Campus Impact</span>
              <h3>Quick Sponsorship Pledge</h3>
              <p>Select a priority need to support immediately via Bank Transfer or Direct WhatsApp.</p>
            </div>

            <div className="widget-causes">
              {quickCauses.map((cause) => {
                const isSelected = selectedQuickCause === cause.id;
                return (
                  <button
                    key={cause.id}
                    type="button"
                    className={`widget-cause-option ${isSelected ? "selected" : ""}`}
                    onClick={() => setSelectedQuickCause(cause.id)}
                  >
                    <div className="cause-option-left">
                      <span className="cause-radio">
                        {isSelected && <span className="cause-radio-dot" />}
                      </span>
                      <div>
                        <div className="cause-name">{cause.label}</div>
                        <div className="cause-sub">{cause.sub}</div>
                      </div>
                    </div>
                    <div className="cause-amt">{cause.amount}</div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="btn btn-primary btn-shimmer widget-submit-btn"
              onClick={() => onDonateClick(selectedQuickCause)}
            >
              Pledge This Cause <ChevronRight size={18} />
            </button>

            <div className="widget-footer-note">
              <ShieldCheck size={14} /> Direct confirmation from Dr. Khushro Shahookar
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Trust Stats Strip */}
      <div className="hero-stats-strip">
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="stat-icon"><Users size={22} /></div>
            <div className="stat-info">
              <div className="stat-num">100%</div>
              <div className="stat-lbl">Free Tuition & Books</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><ShieldCheck size={22} /></div>
            <div className="stat-info">
              <div className="stat-num">SECP</div>
              <div className="stat-lbl">Registered Nonprofit NGO</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Award size={22} /></div>
            <div className="stat-info">
              <div className="stat-num">10+ Yrs</div>
              <div className="stat-lbl">Community Commitment</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Heart size={22} /></div>
            <div className="stat-info">
              <div className="stat-num">Direct</div>
              <div className="stat-lbl">Zero-Overhead Aid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
