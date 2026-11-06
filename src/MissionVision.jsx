import React from "react";
import "./MissionVision.css";
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  GraduationCap, 
  Cpu, 
  HeartHandshake, 
  Sparkles 
} from "lucide-react";

function MissionVision() {
  const missionPoints = [
    "Safe, nurturing elementary school learning environments",
    "Special focus on orphans and underprivileged children in Shahdara",
    "Empowering marginalized youth through IT & technical centres",
    "Sustainable skills that foster lifelong independence and dignity"
  ];

  const visionPoints = [
    "Breaking generational poverty through practical skills",
    "Creating viable pathways to technical and industrial employment",
    "A Pakistan where no child is denied English-medium schooling",
    "Self-reliant, confident youth contributing to society"
  ];

  return (
    <section className="mission-vision-section" id="mission">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} /> Guided by Purpose
          </div>
          <h2 className="section-title">Our Guiding Mission & Vision</h2>
          <p className="section-subtitle">
            Dedicated to breaking the cycle of poverty in Pakistan through transformative education, 
            compassionate care, and market-ready vocational training.
          </p>
        </div>

        <div className="mv-cards-grid">
          {/* Mission Card */}
          <div className="mv-card mission-card">
            <div className="mv-header">
              <div className="mv-icon-badge mission-badge">
                <Target size={28} />
              </div>
              <div>
                <span className="mv-kicker">Our Commitment</span>
                <h3 className="mv-title">Our Mission</h3>
              </div>
            </div>

            <p className="mv-statement">
              To provide quality education and safe learning environments for underprivileged children 
              and orphans in Pakistan, and to empower disadvantaged youth through information technology 
              and technical training centres, for skill development and sustainable opportunities that 
              foster independence and growth.
            </p>

            <div className="mv-divider"></div>

            <ul className="mv-checklist">
              {missionPoints.map((point, index) => (
                <li key={index} className="mv-checklist-item">
                  <CheckCircle2 size={18} className="check-icon check-mission" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="mv-card vision-card">
            <div className="mv-header">
              <div className="mv-icon-badge vision-badge">
                <Eye size={28} />
              </div>
              <div>
                <span className="mv-kicker">The Future We Seek</span>
                <h3 className="mv-title">Our Vision</h3>
              </div>
            </div>

            <p className="mv-statement">
              Uplift of the community through accessible education and skills training that create 
              sustainable employment, empower youth, and break the cycle of poverty. To create a 
              world where every child has access to quality learning and the chance to build a 
              brighter, self‑reliant future.
            </p>

            <div className="mv-divider"></div>

            <ul className="mv-checklist">
              {visionPoints.map((point, index) => (
                <li key={index} className="mv-checklist-item">
                  <CheckCircle2 size={18} className="check-icon check-vision" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Pillars Strip */}
        <div className="pillars-strip">
          <div className="pillar-item">
            <GraduationCap size={22} className="pillar-icon" />
            <div>
              <h4>Quality English Education</h4>
              <p>Overcoming the English deficit that holds government students back</p>
            </div>
          </div>

          <div className="pillar-item">
            <HeartHandshake size={22} className="pillar-icon" />
            <div>
              <h4>Daily Nutritious Meals</h4>
              <p>Ensuring poor students receive healthy food between study sessions</p>
            </div>
          </div>

          <div className="pillar-item">
            <Cpu size={22} className="pillar-icon" />
            <div>
              <h4>Vocational & IT Training</h4>
              <p>Practical 2–6 month certified short courses in high demand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
