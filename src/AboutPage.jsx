import React from "react";
import PageBanner from "./PageBanner";
import "./AboutPage.css";
import { 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  MapPin, 
  Users, 
  GraduationCap, 
  Sparkles, 
  Award,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

function AboutPage({ onNavigate, onDonateClick }) {
  const coreValues = [
    {
      title: "Unconditional Compassion",
      desc: "Every child deserves dignity, respect, and a nurturing environment regardless of their parents' financial or social background.",
      icon: <Heart size={24} className="val-icon" />
    },
    {
      title: "Academic Excellence",
      desc: "We refuse to offer substandard education. Our goal is competitive English-medium learning that rivals top private schools.",
      icon: <GraduationCap size={24} className="val-icon" />
    },
    {
      title: "Integrity & Zero Overhead",
      desc: "The directors receive zero salaries from donor funds. 100% of contributions directly support student tuition, books, and meals.",
      icon: <ShieldCheck size={24} className="val-icon" />
    },
    {
      title: "Sustainable Self-Reliance",
      desc: "Our mission goes beyond charity; we aim to permanently break poverty cycles by giving youth market-ready technical skills.",
      icon: <Award size={24} className="val-icon" />
    }
  ];

  return (
    <div className="about-page">
      <PageBanner
        title="About Selfless Humanitarian Service"
        subtitle="An SECP-registered National NGO dedicated to uplifting marginalized children and youth in Pakistan through free English-medium education, nutrition, and vocational skills."
        breadcrumb="About Us"
        onNavigate={onNavigate}
      />

      {/* Main Narrative Section */}
      <section className="about-main-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-text-col">
              <span className="badge-tag">
                <Sparkles size={14} /> Who We Are
              </span>
              <h2 className="about-heading">
                A Mission Born from Personal Conviction in Lahore
              </h2>
              <p className="lead-text">
                Selfless Humanitarian Service is an officially registered National Non-Governmental Organization (NGO) with the Securities and Exchange Commission of Pakistan (SECP).
              </p>
              <p className="body-text">
                Established in 2015 by <strong>Dr. Khushro Shahookar</strong> (Ph.D., USA) and experienced school teacher <strong>Mr. Solomon Samuel Bhatti</strong> (M.A., M.Ed.), our NGO was founded with a singular, resolute objective: to bring world-class English-medium education and compassionate care to children in Pakistan who would otherwise be deprived of schooling entirely.
              </p>
              <p className="body-text">
                For nearly a decade, our school has operated continuously in Shahdara, Lahore, educating over 50 underprivileged children and orphans from Kindergarten to Grade 5. The school has been taught daily by Mr. and Mrs. Solomon Samuel and sustained through the personal financial contributions of Dr. Khushro Shahookar without relying on outside public funding.
              </p>

              <div className="about-highlights-list">
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="check-gold" />
                  <span>Officially registered with SECP under Pakistani non-profit law</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="check-gold" />
                  <span>100% free tuition, textbooks, notebooks, and uniforms</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="check-gold" />
                  <span>Wholesome daily meals provided to ensure cognitive energy</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} className="check-gold" />
                  <span>Active day-school plus evening homework academy</span>
                </div>
              </div>
            </div>

            <div className="about-image-col">
              <div className="about-framed-image">
                <img src="./image1.png" alt="Selfless Humanitarian Service School Campus" className="framed-img" />
                <div className="img-floating-caption">
                  <MapPin size={16} /> Campus in Shahdara, Lahore, Pakistan
                </div>
              </div>

              <div className="about-stats-card">
                <div className="stats-row">
                  <div className="stat-unit">
                    <span className="stat-big">50+</span>
                    <span className="stat-caption">Active Students</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-big">2015</span>
                    <span className="stat-caption">Founded in Lahore</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-big">KG–5</span>
                    <span className="stat-caption">Current Grades</span>
                  </div>
                </div>
                <div
                  className="stats-expansion-note"
                  style={{
                    marginTop: "14px",
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.18)",
                    textAlign: "center",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "#fde68a",
                    letterSpacing: "0.01em"
                  }}
                >
                  Soon expanding to Grade 10 with English medium of studies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Context Section */}
      <section className="community-context-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">The Challenge</span>
            <h2 className="section-title">Why Shahdara, Lahore?</h2>
            <p className="section-subtitle">
              Understanding the systemic educational crisis in marginalized Pakistani communities.
            </p>
          </div>

          <div className="context-grid">
            <div className="context-card">
              <h3 className="context-title">1. The Illiteracy Trap</h3>
              <p>
                In communities like Shahdara, parents are largely illiterate daily-wage laborers. They lack the academic ability to assist with homework or guide their children, leading to staggering dropout rates before Grade 6.
              </p>
            </div>

            <div className="context-card">
              <h3 className="context-title">2. The Urdu vs. English Divide</h3>
              <p>
                Government schools teach strictly in local Urdu with negligible English. When poor students attempt competitive college entrance tests or high school board exams, they are fundamentally disadvantaged against private school graduates.
              </p>
            </div>

            <div className="context-card">
              <h3 className="context-title">3. The Morning Hunger Crisis</h3>
              <p>
                Over 60% of children in poverty arrive at school without breakfast. Hunger leads to fatigue, low retention, and behavioral distress. Our school integrates daily hot meals to nourish minds and bodies together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Our Ethical Compass</span>
            <h2 className="section-title">Core Organizational Values</h2>
            <p className="section-subtitle">
              The four foundational pillars guiding every administrative and pedagogical decision we make.
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="val-icon-box">{val.icon}</div>
                <h3 className="val-title">{val.title}</h3>
                <p className="val-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-box">
            <h3 className="cta-heading">Want to See Our Work Firsthand?</h3>
            <p className="cta-text">
              We welcome donors, educationists, and volunteers to visit our school campus in Shahdara, Lahore. For institutional inquiries, write to us at <a href="mailto:selflesshumanitarianservice@gmail.com" style={{ color: "var(--accent)", textDecoration: "underline" }}>selflesshumanitarianservice@gmail.com</a>.
            </p>
            <div className="cta-actions">
              <button className="btn btn-accent" onClick={onDonateClick}>
                <Heart size={16} fill="currentColor" /> Sponsor a Student
              </button>
              <button className="btn btn-outline" onClick={() => onNavigate("projects")}>
                Explore Our Projects <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
