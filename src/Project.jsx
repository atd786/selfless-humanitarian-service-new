import React, { useState } from "react";
import "./Project.css";
import { 
  GraduationCap, 
  Wrench, 
  Utensils, 
  BookOpen, 
  Clock, 
  Award, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Heart,
  Sparkles
} from "lucide-react";

function Project({ onDonateClick }) {
  const [activeTab, setActiveTab] = useState("all");

  const courses = [
    { name: "Computer Applications & IT Office Skills", duration: "3 Months", icon: "💻" },
    { name: "Computer Hardware & Network Basics", duration: "4 Months", icon: "🖥️" },
    { name: "Basic Web Development & Digital Literacy", duration: "6 Months", icon: "🌐" },
    { name: "Electrical & Home Appliances Repair", duration: "4 Months", icon: "⚡" },
    { name: "Mobile Phone Hardware & Diagnostics", duration: "3 Months", icon: "📱" },
    { name: "Solar Panel & UPS Installation & Maintenance", duration: "2 Months", icon: "☀️" },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={14} /> Transforming Communities
          </div>
          <h2 className="section-title">Our Envisioned Projects</h2>
          <p className="section-subtitle">
            Three strategic, high-impact initiatives specifically tailored to empower 
            impoverished youth, women, and children in Lahore.
          </p>
        </div>

        {/* Project 1: High School & Evening Academy */}
        <div className="project-feature-card">
          <div className="project-card-grid">
            <div className="project-image-column">
              <div className="project-image-wrapper">
                <img 
                  src="./image1.png" 
                  alt="Students in classroom learning" 
                  className="project-image"
                />
                <div className="project-badge-floating">
                  <GraduationCap size={18} /> High School Expansion
                </div>
              </div>

              {/* Location & Schedule Highlights */}
              <div className="project-quick-facts">
                <div className="fact-item">
                  <MapPin size={16} className="fact-icon" />
                  <span>Shahdara, Lahore, Pakistan</span>
                </div>
                <div className="fact-item">
                  <Utensils size={16} className="fact-icon" />
                  <span>Daily Nutritious Meals Included</span>
                </div>
                <div className="fact-item">
                  <Clock size={16} className="fact-icon" />
                  <span>Day School + Evening Academy</span>
                </div>
              </div>
            </div>

            <div className="project-text-column">
              <div className="project-tag">Project 1</div>
              <h3 className="project-name">
                English-Medium High School & Evening Academy
              </h3>
              <p className="project-lead">
                Extending our established elementary school to a quality high school (Grades 9 to 12) 
                for bright students from impoverished backgrounds who cannot afford private academies.
              </p>

              <div className="problem-solution-box">
                <h4 className="box-mini-title">Why This Project is Crucial:</h4>
                <ul className="project-points-list">
                  <li>
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>
                      <strong>The College Barrier:</strong> In Pakistan, only high-scoring students in 9th–12th grade matric/intermediate exams can enter reputable universities. Over 90% of public school students fail to qualify.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>
                      <strong>English Proficiency:</strong> Government schools teach in Urdu with minimal English, creating an insurmountable handicap in higher education and corporate careers.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>
                      <strong>Supervised Homework:</strong> Parents from poor backgrounds are largely illiterate and cannot assist. Our evening academy provides rigorous tutoring and homework supervision.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>
                      <strong>Daily Nutritional Support:</strong> Students frequently arrive with empty stomachs. Free wholesome meals and rest breaks ensure cognitive energy throughout the day.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="project-cta-row">
                <button 
                  className="btn btn-primary"
                  onClick={() => onDonateClick("Project 1: High School")}
                >
                  <Heart size={16} fill="currentColor" /> Sponsor High School Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Technical Training Institute */}
        <div className="project-feature-card project-card-reverse">
          <div className="project-card-grid">
            <div className="project-text-column">
              <div className="project-tag project-tag-accent">Project 2 (In Design Phase)</div>
              <h3 className="project-name">
                Technical & Vocational Training Institute
              </h3>
              <p className="project-lead">
                A dedicated skills center providing hands-on certified training in high-demand industrial 
                and IT trades for marginalized youth who cannot afford college.
              </p>

              <div className="problem-solution-box">
                <h4 className="box-mini-title">Key Model & Objectives:</h4>
                <ul className="project-points-list">
                  <li>
                    <CheckCircle2 size={16} className="point-icon icon-accent" />
                    <span>
                      <strong>Industry-Relevant Short Courses:</strong> 2 to 6 month intensive tracks combining classroom theory and extensive lab work.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="point-icon icon-accent" />
                    <span>
                      <strong>Zero Barrier to Entry:</strong> Free or nominal token fees, ensuring poverty is never an obstacle to learning a livelihood.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="point-icon icon-accent" />
                    <span>
                      <strong>Capable Mentors & Teachers:</strong> Experienced industry practitioners teaching practical troubleshooting skills that employers actively seek.
                    </span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="point-icon icon-accent" />
                    <span>
                      <strong>Livelihood for Life:</strong> Direct preparation for self-employment or technical jobs, breaking generational poverty for entire households.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="project-cta-row">
                <button 
                  className="btn btn-accent"
                  onClick={() => onDonateClick("IT and Vocational Training Equipment PKR 85,000 or $300 one-time")}
                >
                  <Heart size={16} fill="currentColor" /> Fund Technical Institute
                </button>
              </div>
            </div>

            <div className="project-image-column">
              {/* Courses Grid Preview (No Image for Project 2) */}
              <div className="courses-preview-section">
                <h5 className="courses-title">Envisioned Short Courses:</h5>
                <div className="courses-grid">
                  {courses.map((course, idx) => (
                    <div key={idx} className="course-pill">
                      <span className="course-icon">{course.icon}</span>
                      <div className="course-text">
                        <span className="course-name">{course.name}</span>
                        <span className="course-duration">{course.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-quick-facts">
                <div className="fact-item">
                  <Award size={16} className="fact-icon icon-accent" />
                  <span>Completion Certificates Awarded</span>
                </div>
                <div className="fact-item">
                  <Clock size={16} className="fact-icon icon-accent" />
                  <span>2 to 6 Month Fast-Track Durations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Tailoring Training Centre for Girls (No Image) */}
        <div className="project-feature-card">
          <div className="project-card-grid project-card-no-image">
            <div className="project-text-column">
              <div className="project-tag">Project 3 (Envisioned)</div>
              <h3 className="project-name">
                Tailoring Training Centre for Girls
              </h3>
              <p className="project-lead">
                In Pakistan, in rural and poor communities, girls / women are usually deprived of education and employment opportunities. They have no opportunities other than working in people&apos;s homes as domestic servants, maids and cleaners. A common way to uplift these communities is to start a tailoring training and employment centre, where they can learn the cutting, stitching and embroidery of dresses, as well as work to manufacture products for sale. We intend to start the tailoring training centre in an appropriate poor / shanty town area in Lahore.
              </p>

              <div className="project-quick-facts" style={{ marginBottom: "22px" }}>
                <div className="fact-item">
                  <MapPin size={16} className="fact-icon" />
                  <span>Target Location: Appropriate Poor / Shanty Town Area in Lahore</span>
                </div>
                <div className="fact-item">
                  <CheckCircle2 size={16} className="fact-icon" />
                  <span>Cutting, Stitching, Dress Embroidery & Product Manufacturing for Sale</span>
                </div>
              </div>

              <div className="project-cta-row">
                <button 
                  className="btn btn-primary"
                  onClick={() => onDonateClick("Support our Institutes and Projects (any amount)")}
                >
                  <Heart size={16} fill="currentColor" /> Support Tailoring Training Centre
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <a 
            href="#/projects" 
            className="btn btn-primary" 
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px" }}
          >
            View Full Projects, High School Specs & Vocational Syllabi <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Project;
