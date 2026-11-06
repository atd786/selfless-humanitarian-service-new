import React from "react";
import PageBanner from "./PageBanner";
import "./MissionPage.css";
import { 
  Target, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Utensils, 
  Cpu, 
  Briefcase, 
  TrendingUp,
  Heart,
  BookOpen
} from "lucide-react";

function MissionPage({ onNavigate, onDonateClick }) {
  const theoryStages = [
    {
      num: "01",
      title: "Outreach & Enrollment",
      desc: "Identifying out-of-school children and orphans in Shahdara, Lahore, overcoming parental hesitation through full financial and nutritional support.",
      icon: <Target size={22} />
    },
    {
      num: "02",
      title: "Foundational English-Medium Education",
      desc: "Providing structured KG–5 elementary instruction with daily hot meals, free books, and emotional care in a safe environment.",
      icon: <GraduationCap size={22} />
    },
    {
      num: "03",
      title: "Secondary & Evening Academy",
      desc: "Bridging the competitive gap in Grades 9–12 through intensive evening tutoring, ensuring underprivileged students pass university entrance exams.",
      icon: <BookOpen size={22} />
    },
    {
      num: "04",
      title: "Technical & Vocational Training",
      desc: "Offering 2 to 6 month certified short courses in high-demand IT, electronics, solar, and computer skills for youth seeking immediate employment.",
      icon: <Cpu size={22} />
    },
    {
      num: "05",
      title: "Sustainable Livelihood",
      desc: "Graduates secure skilled employment or self-employment, breaking the cycle of poverty and uplifting their entire extended family permanently.",
      icon: <Briefcase size={22} />
    }
  ];

  const roadmap = [
    {
      year: "2026",
      phase: "Phase 1: Institutional Foundation",
      focus: "SECP compliance, elementary school facility upgrades, and teacher enrichment for our 50+ students in Shahdara."
    },
    {
      year: "2027",
      phase: "Phase 2: High School & Evening Academy",
      focus: "Groundbreaking of our High School extension (Grades 9–12) with intensive evening tutoring and expanded student kitchen facilities."
    },
    {
      year: "2028",
      phase: "Phase 3: Vocational Institute Setup",
      focus: "Establishing dedicated hardware, electrical, and computer labs with certified instructors for initial vocational student cohorts."
    },
    {
      year: "2029–2030",
      phase: "Phase 4: Industry Placement & Scale",
      focus: "Partnering with Lahore commercial and industrial firms for direct job placement, expanding vocational seats, and documenting replicable impact."
    }
  ];

  return (
    <div className="mission-page">
      <PageBanner
        title="Our Mission & Strategic Vision"
        subtitle="The philosophical blueprint and systematic roadmap that drives our dedication to educational equality and vocational empowerment in Pakistan."
        breadcrumb="Mission & Vision"
        onNavigate={onNavigate}
      />

      {/* Deep-Dive Statements Section */}
      <section className="statements-section">
        <div className="container">
          <div className="statements-grid">
            {/* Mission Pillar Card */}
            <div className="statement-box mission-box">
              <div className="statement-header">
                <div className="stmt-icon-circle mission-circle">
                  <Target size={32} />
                </div>
                <div>
                  <span className="stmt-tag">Our Daily Commitment</span>
                  <h2 className="stmt-title">The Mission</h2>
                </div>
              </div>

              <blockquote className="stmt-quote">
                "To provide quality education and safe learning environments for underprivileged children and orphans in Pakistan, and to empower disadvantaged youth through information technology and technical training centres, for skill development and sustainable opportunities that foster independence and growth."
              </blockquote>

              <div className="stmt-breakdown">
                <h3 className="breakdown-title">Four Core Operational Objectives:</h3>
                <ul className="breakdown-list">
                  <li>
                    <CheckCircle2 size={18} className="check-icon-m" />
                    <div>
                      <strong>Free Quality Education:</strong> Eradicating fee barriers so even the poorest families can access high-standard schooling.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon-m" />
                    <div>
                      <strong>Safe & Nurturing Classrooms:</strong> Creating peaceful, modern learning environments protected from social vulnerability.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon-m" />
                    <div>
                      <strong>Youth IT & Technical Centers:</strong> Imparting certified, job-oriented technical skills that industry employers demand.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon-m" />
                    <div>
                      <strong>Fostering Independence:</strong> Transforming dependents of poverty into self-reliant, wage-earning community leaders.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Pillar Card */}
            <div className="statement-box vision-box">
              <div className="statement-header">
                <div className="stmt-icon-circle vision-circle">
                  <Eye size={32} />
                </div>
                <div>
                  <span className="stmt-tag">Our Long-Term Horizon</span>
                  <h2 className="stmt-title">The Vision</h2>
                </div>
              </div>

              <blockquote className="stmt-quote">
                "Uplift of the community through accessible education and skills training that create sustainable employment, empower youth, and break the cycle of poverty. To create a world where every child has access to quality learning and the chance to build a brighter, self‑reliant future."
              </blockquote>

              <div className="stmt-breakdown">
                <h3 className="breakdown-title">Transformational Outcomes:</h3>
                <ul className="breakdown-list">
                  <li>
                    <CheckCircle2 size={18} className="check-icon-v" />
                    <div>
                      <strong>Breaking Generational Poverty:</strong> One skilled individual with steady income lifts 5 to 7 family members permanently out of destitution.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon-v" />
                    <div>
                      <strong>Eradicating Educational Inequality:</strong> Leveling the playing field so poor children can compete with elite academy students.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon-v" />
                    <div>
                      <strong>Productive Youth Economy:</strong> Channeling Pakistan's youth dividend into productive technical contributors.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon-v" />
                    <div>
                      <strong>Community Dignity & Self-Reliance:</strong> Moving communities from reliance on handouts to economic autonomy.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="theory-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Methodology</span>
            <h2 className="section-title">Our 5-Stage Theory of Change</h2>
            <p className="section-subtitle">
              How our integrated pedagogical and technical model creates measurable, lifelong socioeconomic mobility.
            </p>
          </div>

          <div className="theory-steps-grid">
            {theoryStages.map((st, idx) => (
              <div key={idx} className="theory-card">
                <div className="theory-number">{st.num}</div>
                <div className="theory-icon-wrapper">{st.icon}</div>
                <h3 className="theory-card-title">{st.title}</h3>
                <p className="theory-card-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="roadmap-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Looking Ahead</span>
            <h2 className="section-title">Strategic Roadmap (2026–2030)</h2>
            <p className="section-subtitle">
              Our phased approach to building sustainable secondary schooling and vocational technical training in Lahore.
            </p>
          </div>

          <div className="roadmap-timeline">
            {roadmap.map((rm, idx) => (
              <div key={idx} className="roadmap-item">
                <div className="roadmap-year">{rm.year}</div>
                <div className="roadmap-content">
                  <h3 className="roadmap-phase-title">{rm.phase}</h3>
                  <p className="roadmap-focus-desc">{rm.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="mission-cta-section">
        <div className="container">
          <div className="mission-cta-card">
            <h3 className="m-cta-title">Be Part of the Vision</h3>
            <p className="m-cta-sub">
              Help us turn these strategic phases into classrooms, technical laboratories, and fulfilled futures.
            </p>
            <button className="btn btn-accent" onClick={onDonateClick}>
              <Heart size={16} fill="currentColor" /> Support Our Strategic Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MissionPage;
