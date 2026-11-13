import React from "react";
import PageBanner from "./PageBanner";
import "./HistoryPage.css";
import { 
  Calendar, 
  Award, 
  Heart, 
  ShieldCheck, 
  BookOpen, 
  Utensils, 
  Clock, 
  MapPin, 
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

function HistoryPage({ onNavigate, onDonateClick }) {
  const timelineEvents = [
    {
      year: "2015",
      title: "Founding & SECP Registration",
      subtitle: "The Humble Beginning in Shahdara",
      desc: "Dr. Khushro Shahookar (Ph.D., USA) and Mr. Solomon Samuel Bhatti (M.A., M.Ed.) officially established Selfless Humanitarian Service and registered it with the Securities and Exchange Commission of Pakistan (SECP). Starting in a modest rented facility, the first cohort of 15 out-of-school children were provided free books, uniforms, and English-medium schooling.",
      icon: <Sparkles size={20} />
    },
    {
      year: "2017",
      title: "Pioneering the Daily Student Meal Program",
      subtitle: "Nourishing Bodies Alongside Minds",
      desc: "Noticing that many students were fainting in morning assembly due to chronic poverty and empty stomachs at home, Dr. Khushro instituted a daily wholesome meal and breakfast program. Student retention immediately surged, and classroom cognitive focus doubled.",
      icon: <Utensils size={20} />
    },
    {
      year: "2019",
      title: "Expansion to Grade 5 & Evening Academy",
      subtitle: "Full Elementary Spectrum Achieved",
      desc: "Enrollment expanded past 40 students across Kindergarten through Grade 5. To assist illiterate parents who could not help with homework, Mr. and Mrs. Solomon launched a free evening tutoring academy (3:00 PM – 5:00 PM) to ensure homework completion and academic mastery.",
      icon: <BookOpen size={20} />
    },
    {
      year: "2020–2021",
      title: "Navigating the COVID-19 Crisis",
      subtitle: "Zero Children Left Behind",
      desc: "When pandemic lockdowns forced mass school closures across Pakistan, Selfless Humanitarian Service never abandoned its students. The NGO distributed dry ration food baskets, hygiene kits, and customized take-home study packs to student doorsteps while continuing regular staff honorariums.",
      icon: <ShieldCheck size={20} />
    },
    {
      year: "2022–2024",
      title: "A Decade of Proven Academic Results",
      subtitle: "100% Elementary Completion",
      desc: "Cohorts graduating from Grade 5 achieved a 100% completion rate, displaying fluent English reading comprehension, mathematical confidence, and strong moral character. The school proved that impoverished children can achieve academic excellence when provided unconditional support.",
      icon: <Award size={20} />
    },
    {
      year: "2025–2026",
      title: "SECP Registration & The Next Era: IT & Technical Training Institute",
      subtitle: "Institutional Scaling, High School & Other Projects",
      desc: "With 10 years of proven grassroots success, 50+ active KG–Grade 5 students, and formal SECP registration, the Board is launching our next era: the IT and Technical Training Institute, Secondary High School (Grades 6–10), and other community development projects.",
      icon: <Heart size={20} />
    }
  ];

  return (
    <div className="history-page">
      <PageBanner
        title="Our History & Ten-Year Journey"
        subtitle="The story of how quiet personal dedication, grassroots sacrifice, and compassionate educators built an enduring sanctuary of learning in Shahdara, Lahore."
        breadcrumb="Our History"
        onNavigate={onNavigate}
      />

      {/* Narrative Section: The Genesis */}
      <section className="history-intro-section">
        <div className="container">
          <div className="history-intro-grid">
            <div className="history-text-col">
              <span className="badge-tag">
                <Clock size={14} /> Established 2015
              </span>
              <h2 className="history-intro-title">
                A Decade of Quiet, Unwavering Grassroots Dedication
              </h2>
              <p className="intro-lead">
                Selfless Humanitarian Service was not created as a corporate charity or a short-term project. It was born out of a profound moral conviction shared by two dedicated individuals in Lahore.
              </p>
              <p className="body-text">
                In 2015, Dr. Khushro Shahookar, having completed his Ph.D. in the United States and observing the extreme socioeconomic polarization in Pakistan, determined that the only true equalizer for marginalized families was high-calibre, English-medium education.
              </p>
              <p className="body-text">
                He united with <strong>Mr. Solomon Samuel Bhatti</strong>, an educator with extensive teaching and administrative experience in Punjab, and his wife <strong>Mrs. Shakeela Solomon</strong>. Together, they identified Shahdara, Lahore—an area characterized by dense populations of daily-wage laborers, brick-kiln workers, and neglected orphans—as their mission field.
              </p>

              <div className="intro-quote-card">
                <p className="intro-quote">
                  "For the first ten years, Dr. Khushro financed the entire school out of his own pocket. We never held a public fundraiser or asked the community for money. We simply taught the children every single morning, cooked their meals, and bought their books."
                </p>
                <span className="quote-author">— Mr. Solomon Samuel Bhatti, Director & Principal</span>
              </div>
            </div>

            <div className="history-image-col">
              <div className="history-framed-card">
                <img src="./hero-bg.png" alt="Selfless Humanitarian Service School History" className="history-img" />
                <div className="history-card-caption">
                  <MapPin size={15} /> Shahdara, Lahore — Serving continuously since 2015
                </div>
              </div>

              <div className="history-key-facts">
                <div className="fact-item">
                  <span className="fact-number">10+</span>
                  <span className="fact-label">Years of Continuous Daily Schooling</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">50+</span>
                  <span className="fact-label">Children Educated & Fed Daily</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">100%</span>
                  <span className="fact-label">Founder-Financed Without Public Debt</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">SECP</span>
                  <span className="fact-label">Registered National Non-Profit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Milestone Timeline */}
      <section className="timeline-full-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Milestones</span>
            <h2 className="section-title">The Ten-Year Milestone Timeline</h2>
            <p className="section-subtitle">
              Tracing our key breakthroughs, challenges overcome, and institutional growth from 2015 to the present day.
            </p>
          </div>

          <div className="timeline-tree">
            {timelineEvents.map((ev, idx) => (
              <div key={idx} className={`timeline-node ${idx % 2 === 0 ? "node-left" : "node-right"}`}>
                <div className="node-marker">
                  <div className="marker-icon">{ev.icon}</div>
                </div>

                <div className="node-content-card">
                  <span className="node-year-pill">{ev.year}</span>
                  <h3 className="node-title">{ev.title}</h3>
                  <h4 className="node-subtitle">{ev.subtitle}</h4>
                  <p className="node-desc">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders' Ethos & Integrity Section */}
      <section className="ethos-section">
        <div className="container">
          <div className="ethos-card">
            <div className="ethos-header">
              <ShieldCheck size={36} className="ethos-shield-icon" />
              <div>
                <h3 className="ethos-title">Our Sacred Commitment to Accountability</h3>
                <p className="ethos-lead">Why 100% of your contributions go straight to student welfare</p>
              </div>
            </div>

            <div className="ethos-points-grid">
              <div className="ethos-point">
                <CheckCircle2 size={20} className="check-ethos" />
                <div>
                  <strong>Zero Executive Salaries:</strong> Dr. Khushro Shahookar and the Board of Directors receive zero financial compensation, consulting fees, or allowances from NGO accounts.
                </div>
              </div>
              <div className="ethos-point">
                <CheckCircle2 size={20} className="check-ethos" />
                <div>
                  <strong>Direct Beneficiary Impact:</strong> Every rupee and dollar sponsored is tracked directly to classroom rent, teacher honorariums, textbooks, uniforms, and nutritious food.
                </div>
              </div>
              <div className="ethos-point">
                <CheckCircle2 size={20} className="check-ethos" />
                <div>
                  <strong>SECP National Compliance:</strong> Registered under Section 42 of the Companies Act with the Securities and Exchange Commission of Pakistan, subject to annual audited returns.
                </div>
              </div>
              <div className="ethos-point">
                <CheckCircle2 size={20} className="check-ethos" />
                <div>
                  <strong>Open Door Policy:</strong> Donors and community well-wishers are always invited to visit our Shahdara classrooms and interact directly with teachers and children.
                </div>
              </div>
            </div>

            <div className="ethos-cta-row">
              <button className="btn btn-accent" onClick={onDonateClick}>
                <Heart size={16} fill="currentColor" /> Help Us Write the Next Decade
              </button>
              <button className="btn btn-outline-white" onClick={() => onNavigate("team")}>
                Meet Our Leadership Team <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HistoryPage;