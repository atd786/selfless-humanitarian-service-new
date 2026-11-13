import React from "react";
import "./Team.css";
import { Users, Award, GraduationCap, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

function Team() {
  const team = [
    {
      img: "./member1.png",
      role: "Founder & Director",
      name: "Dr. Khushro Shahookar",
      qualification: "Ph.D., USA",
      badge: "Founding Philanthropist",
      desc: "Providing vision, philanthropic capital, and global expertise to guide the strategic expansion of Selfless Humanitarian Service in Pakistan."
    },
    {
      img: "./member2.png",
      role: "Director & Principal",
      name: "Solomon Samuel",
      qualification: "M.A., M.Ed.",
      badge: "Educational Leadership",
      desc: "Seasoned educationist who has managed the school since 2015, establishing curriculum standards and personally teaching underprivileged students daily."
    },
    {
      img: "./member3.png",
      role: "Director & Lead Educator",
      name: "Mrs. Sabah Solomon Samuel",
      qualification: "B.A. in Education",
      badge: "Student Care & Pedagogy",
      desc: "Dedicated primary school educator who nurtures children from kindergarten to grade 5 with foundational reading, language mastery, and emotional care."
    }
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Users size={14} /> Dedicated Leadership
          </div>
          <h2 className="section-title">Meet Our Board of Directors</h2>
          <p className="section-subtitle">
            Passionate educators and visionaries who have personally nurtured and funded 
            this mission since day one.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-container">
                <img src={member.img} alt={member.name} className="team-image" />
                <span className="team-floating-badge">{member.badge}</span>
              </div>

              <div className="team-details">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <div className="member-qualification">
                  <GraduationCap size={15} />
                  <span>{member.qualification}</span>
                </div>
                <p className="member-bio">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Callout */}
        <div className="governance-banner">
          <ShieldCheck size={28} className="gov-icon" />
          <div className="gov-text">
            <h4>SECP-Registered & Transparent Governance</h4>
            <p>
              Our directors draw zero administrative salaries from public donations. 100% of donor 
              contributions directly support student education, daily meals, uniforms, and classroom facilities.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <a 
            href="#/team" 
            className="btn btn-outline-crimson btn-shimmer" 
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Read Full In-Depth Leadership Profiles & Letters <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Team;
