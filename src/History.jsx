import React from "react";
import "./History.css";
import { 
  History as HistoryIcon, 
  Calendar, 
  Heart, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  Quote 
} from "lucide-react";

function History() {
  const milestones = [
    {
      year: "2015",
      title: "The Seed is Planted",
      desc: "Dr. Khushro Shahookar and Mr. Solomon Samuel Bhatti witness underprivileged children in Shahdara deprived of schooling and join forces to establish a free elementary school.",
      icon: <Sparkles size={18} />
    },
    {
      year: "2015 – 2024",
      title: "A Decade of Dedicated Service",
      desc: "For nearly a decade, Mr. and Mrs. Solomon Samuel teach and manage the school day in and day out, while Dr. Khushro provides private funding contributors. 100% free of cost to families.",
      icon: <Heart size={18} />
    },
    {
      year: "Today",
      title: "50+ Active Students (KG to Grade 5)",
      desc: "Currently educating 50 underprivileged students with complete books, uniforms, safe classrooms, and daily foundational learning.",
      icon: <GraduationCap size={18} />
    },
    {
      year: "The Next Era",
      title: "SECP Registration & Expansion",
      desc: "Formally registered as an SECP National NGO, scaling up to launch an English-medium High School, an Evening Academy, and a Technical Training Institute.",
      icon: <ShieldCheck size={18} />
    }
  ];

  return (
    <section className="history-section" id="history">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <HistoryIcon size={14} /> Our Journey
          </div>
          <h2 className="section-title">Our History & Track Record</h2>
          <p className="section-subtitle">
            What started as a quiet personal effort by two founders in 2015 has grown 
            into an accredited national mission transforming young lives in Lahore.
          </p>
        </div>

        {/* Narrative Feature Card */}
        <div className="history-story-card">
          <div className="quote-icon-wrapper">
            <Quote size={40} className="quote-icon" />
          </div>
          <div className="story-content">
            <h3 className="story-title">A Personal Labor of Love Since 2015</h3>
            <p className="story-paragraph">
              The directors of the NGO are currently operating a free school for very poor children, 
              who were previously not attending any school and completely deprived of education. 
              It was established jointly by <strong>Mr. Solomon Samuel Bhatti</strong> and <strong>Dr. Khushro Shahookar</strong> in 2015.
            </p>
            <p className="story-paragraph">
              Since then, <strong>Mr. and Mrs. Solomon Samuel</strong> have been tirelessly teaching and running the daily operations 
              of the school, while <strong>Dr. Khushro Shahookar</strong> has been the primary funding contributor. The school currently 
              educates <strong>50 children</strong>, from kindergarten (KG) to year 5. This has been a dedicated personal effort of the 
              directors, operated with integrity and previously self-funded from personal savings.
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-container">
          <div className="timeline-grid">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="timeline-card">
                <div className="timeline-year-badge">
                  {milestone.icon}
                  <span>{milestone.year}</span>
                </div>
                <h4 className="timeline-title">{milestone.title}</h4>
                <p className="timeline-desc">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
