import React, { useState } from "react";
import PageBanner from "./PageBanner";
import "./ProjectsPage.css";
import { 
  GraduationCap, 
  Cpu, 
  BookOpen, 
  Wrench, 
  Laptop, 
  Sun, 
  Smartphone, 
  Palette, 
  CheckCircle2, 
  Heart, 
  ArrowRight, 
  Calendar, 
  Users, 
  Target, 
  DollarSign,
  Clock,
  Award
} from "lucide-react";

function ProjectsPage({ onNavigate, onDonateClick }) {
  const [activeCourseTab, setActiveCourseTab] = useState(0);

  const technicalCourses = [
    {
      id: "it-office",
      name: "Computer Applications & Office Automation",
      duration: "3 Months (120 Hours)",
      seats: "25 Students per Batch",
      icon: <Laptop size={24} />,
      badge: "High Employment Demand",
      summary: "Foundational digital literacy and office productivity suite training designed to place students directly into administrative, clerical, and back-office roles.",
      curriculum: [
        "Operating System fundamentals, file management, and touch typing (35+ WPM)",
        "Advanced Microsoft Word (Business formatting, reports, letters, and documentation)",
        "Microsoft Excel (Formulas, pivot tables, data visualization, and financial tracking)",
        "Microsoft PowerPoint & Professional Slide Presentation Design",
        "Business Email Etiquette, Google Workspace, Cloud Storage, and Online Research",
        "Introduction to AI productivity tools for automated office workflows"
      ],
      careerOutcomes: "Office Assistant, Data Entry Specialist, Administrative Clerk, Computer Operator.",
      equipmentNeeded: "Desktop Workstations, Ergonomic Desks, High-speed Internet, UPS Power Backup."
    },
    {
      id: "web-dev",
      name: "Web Development & Digital Literacy",
      duration: "4 Months (160 Hours)",
      seats: "20 Students per Batch",
      icon: <Cpu size={24} />,
      badge: "Remote Freelancing Ready",
      summary: "Practical training in modern web technologies, teaching students how to build responsive business websites and start earning through online freelancing platforms.",
      curriculum: [
        "Semantic HTML5 & Modern CSS3 fundamentals and layout algorithms (Flexbox, Grid)",
        "Mobile-responsive web design principles and CSS frameworks",
        "JavaScript essentials: DOM manipulation, events, and modern ES6+ syntax",
        "Content Management Systems: Setting up, styling, and securing WordPress websites",
        "Web hosting, domain configuration, FTP, and website deployment",
        "Freelance platforms onboarding: Profile creation, proposal drafting on Upwork & Fiverr"
      ],
      careerOutcomes: "Junior Frontend Developer, WordPress Specialist, Freelance Web Designer.",
      equipmentNeeded: "Development Laptops/PCs, Dual Monitors, GitHub student setup."
    },
    {
      id: "mobile-repair",
      name: "Mobile Phone Diagnostics & Hardware Repair",
      duration: "3 Months (120 Hours)",
      seats: "20 Students per Batch",
      icon: <Smartphone size={24} />,
      badge: "Instant Entrepreneurship",
      summary: "Hands-on diagnostic and micro-soldering training enabling youth to repair smartphones and open their own independent repair stalls or shops.",
      curriculum: [
        "Smartphone architecture: Motherboards, chipsets, power management ICs, and displays",
        "Micro-soldering techniques, SMD rework stations, and jumper wiring",
        "Screen separation, optical clear adhesive (OCA) lamination, and glass refurbishing",
        "Diagnostic troubleshooting with digital multimeters and DC power supplies",
        "Software flashing, OS unlocking, firmware troubleshooting, and data backup",
        "Shop management, spare parts sourcing from wholesale markets, and customer billing"
      ],
      careerOutcomes: "Hardware Repair Technician, Independent Repair Shop Owner, Mobile Diagnostic Tech.",
      equipmentNeeded: "SMD Rework Stations, Digital Multimeters, Micro-soldering Irons, OCA Machines."
    },
    {
      id: "electrical-appliances",
      name: "Electrician & Home Appliance Maintenance",
      duration: "4 Months (150 Hours)",
      seats: "25 Students per Batch",
      icon: <Wrench size={24} />,
      badge: "High Local Demand",
      summary: "Comprehensive electrical wiring and appliance servicing curriculum preparing technicians for residential, commercial, and industrial maintenance jobs.",
      curriculum: [
        "Electrical safety standards, grounding, single-phase and three-phase circuits",
        "Residential wiring, conduit installation, distribution boards, and circuit breakers",
        "Electric motor diagnostics, rewinding basics, and pump troubleshooting",
        "Air conditioner (Split AC) installation, gas charging, and servicing",
        "Refrigerator, washing machine, and microwave diagnostic and repair protocols",
        "Inverter and UPS wiring, battery bank maintenance, and surge protection"
      ],
      careerOutcomes: "Certified Electrician, Appliance Repair Specialist, Maintenance Contractor.",
      equipmentNeeded: "Electrical Toolkits, Demonstration Wall Panels, Motor Testing Benches."
    },
    {
      id: "solar-pv",
      name: "Solar PV Installation & Renewable Energy",
      duration: "3 Months (120 Hours)",
      seats: "20 Students per Batch",
      icon: <Sun size={24} />,
      badge: "Booming Green Sector",
      summary: "Preparing youth for Pakistan's massive transition to renewable solar energy with certified training on on-grid, off-grid, and hybrid solar installations.",
      curriculum: [
        "Fundamentals of Solar Photovoltaics (PV): Irradiance, cell types, and efficiency factors",
        "Solar system sizing: Calculating residential and commercial load requirements",
        "Inverter technologies: On-grid string inverters, hybrid inverters, and net-metering protocols",
        "Battery energy storage: Lithium-ion (LiFePO4) vs Tubular lead-acid configurations",
        "Rooftop mounting structures, angle optimization, DC/AC cabling, and lightning protection",
        "System commissioning, thermal testing, performance auditing, and preventative maintenance"
      ],
      careerOutcomes: "Solar PV Installer, Solar Maintenance Tech, Renewable Energy Project Assistant.",
      equipmentNeeded: "Solar Panel Training Rig, Inverters, Battery Bank, Clamping Multimeters, Safety Harnesses."
    },
    {
      id: "graphic-design",
      name: "Graphic Design & Digital Media Production",
      duration: "3 Months (120 Hours)",
      seats: "20 Students per Batch",
      icon: <Palette size={24} />,
      badge: "Creative Economy",
      summary: "Visual communication and digital graphics training teaching students how to create branding, advertising assets, and social media marketing graphics.",
      curriculum: [
        "Visual design theory: Color theory, typography, composition, and visual hierarchy",
        "Adobe Photoshop: Image manipulation, background removal, retouching, and mockups",
        "Adobe Illustrator: Vector graphics, logo creation, branding guidelines, and icon design",
        "Social media marketing assets: Carousel posts, YouTube thumbnails, and banner creation",
        "Print preparation: Bleed, resolution (CMYK vs RGB), and packaging design basics",
        "Building a Behance and Dribbble portfolio and winning first freelance gigs"
      ],
      careerOutcomes: "Graphic Designer, Social Media Creative, Brand Identity Specialist, Freelancer.",
      equipmentNeeded: "High-performance Graphic Workstations, Drawing Tablets, Color-accurate Displays."
    }
  ];

  return (
    <div className="projects-page">
      <PageBanner
        title="Our Projects & Strategic Initiatives"
        subtitle="Transforming lives across generations through quality elementary schooling, secondary education expansion, and job-ready technical vocational training."
        breadcrumb="Our Projects"
        onNavigate={onNavigate}
      />

      {/* Navigation Quick Anchors */}
      <section className="projects-nav-strip">
        <div className="container">
          <div className="quick-links-bar">
            <a href="#elementary-school" className="quick-anchor-btn">
              <GraduationCap size={16} /> 1. Elementary School (Active)
            </a>
            <a href="#high-school" className="quick-anchor-btn">
              <BookOpen size={16} /> 2. High School Extension (Envisioned)
            </a>
            <a href="#technical-institute" className="quick-anchor-btn">
              <Cpu size={16} /> 3. Technical Training Institute (Flagship)
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT 1: Free Elementary School */}
      <section id="elementary-school" className="project-detail-section active-project-bg">
        <div className="container">
          <div className="project-detail-grid">
            <div className="project-text-content">
              <div className="status-badge-active">
                <span className="pulsing-dot"></span> Active Operational Project (Since 2015)
              </div>
              <h2 className="project-title">Free English-Medium Elementary School (KG–Grade 5)</h2>
              <p className="project-lead">
                Located in Shahdara, Lahore, our primary school provides comprehensive, English-medium education completely free of cost to children of impoverished daily-wage laborers, domestic helpers, and orphans.
              </p>
              
              <div className="project-subsections">
                <div className="subsection-block">
                  <h4 className="sub-title">What We Provide Every Student:</h4>
                  <ul className="project-feature-list">
                    <li>
                      <CheckCircle2 size={18} className="feat-check" />
                      <span><strong>100% Free Tuition & Admissions:</strong> Zero fees, zero registration charges, and no hidden testing costs.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} className="feat-check" />
                      <span><strong>Complete Academic Supplies:</strong> Quality English-medium textbooks, notebooks, geometry boxes, and stationery sets renewed each term.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} className="feat-check" />
                      <span><strong>School Uniforms & Shoes:</strong> Clean, dignified uniforms and winter warm sweaters so children take pride in coming to class.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} className="feat-check" />
                      <span><strong>Daily Wholesome Meals:</strong> Fresh morning nutrition to eradicate student hunger and maximize cognitive alertness.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} className="feat-check" />
                      <span><strong>Evening Academic Tutoring:</strong> Free after-school homework supervision led by Mr. Solomon Samuel and Mrs. Shakeela Solomon.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="project-action-row">
                <button 
                  className="btn btn-primary"
                  onClick={() => onDonateClick("Elementary School Student Sponsorship")}
                >
                  <Heart size={16} fill="currentColor" /> Sponsor an Elementary Student ($25/mo)
                </button>
              </div>
            </div>

            <div className="project-visual-content">
              <div className="project-img-frame">
                <img src="./hero-bg.png" alt="Elementary School Classroom" className="project-photo" />
                <div className="photo-tag">Daily Classroom in Shahdara</div>
              </div>

              <div className="project-metrics-grid">
                <div className="metric-box">
                  <span className="metric-num">50+</span>
                  <span className="metric-lbl">Active Students</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">100%</span>
                  <span className="metric-lbl">Free Tuition</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">KG–5</span>
                  <span className="metric-lbl">Current Grades</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">10+</span>
                  <span className="metric-lbl">Years Running</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 2: High School Extension */}
      <section id="high-school" className="project-detail-section envisioned-project-bg">
        <div className="container">
          <div className="project-detail-grid reverse-grid">
            <div className="project-visual-content">
              <div className="project-img-frame">
                <img src="./banner.png" alt="High School Campus Project" className="project-photo" />
                <div className="photo-tag">Envisioned Campus Expansion</div>
              </div>

              <div className="project-spec-card">
                <h4 className="spec-card-title">High School Facility Specifications</h4>
                <div className="spec-item">
                  <span className="spec-label">Target Grades:</span>
                  <span className="spec-val">Grade 6 through Grade 10 (Matriculation)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Projected Capacity:</span>
                  <span className="spec-val">150+ Secondary Students</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Planned Science Labs:</span>
                  <span className="spec-val">Physics, Chemistry, Biology & Computer Lab</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Board Affiliation:</span>
                  <span className="spec-val">BISE Lahore (Matric Science / Arts)</span>
                </div>
              </div>
            </div>

            <div className="project-text-content">
              <div className="status-badge-envisioned">
                <Target size={14} /> Envisioned High School Project
              </div>
              <h2 className="project-title">Secondary High School Expansion (Grades 6–10)</h2>
              <p className="project-lead">
                In Shahdara, thousands of bright children pass Grade 5 only to drop out permanently because local secondary high schools are either too expensive, too distant, or lacking proper safety.
              </p>
              
              <div className="project-subsections">
                <p className="body-paragraph">
                  Our High School Project will ensure that our elementary graduates do not hit a dead-end. We will provide continuous, high-calibre secondary education that prepares youth for Matriculation board exams and pre-university programs.
                </p>

                <div className="pillar-highlights-grid">
                  <div className="pillar-card">
                    <h5 className="pillar-title">Science & Computer Laboratories</h5>
                    <p className="pillar-desc">Fully equipped physics, chemistry, biology, and IT benches ensuring students get true empirical scientific training.</p>
                  </div>
                  <div className="pillar-card">
                    <h5 className="pillar-title">Intensive Evening Academy</h5>
                    <p className="pillar-desc">Free evening preparatory classes for board examinations so poor students achieve top grades and university scholarships.</p>
                  </div>
                  <div className="pillar-card">
                    <h5 className="pillar-title">English-Medium Instruction</h5>
                    <p className="pillar-desc">Strengthening bilingual proficiency to equip youth for competitive corporate, medical, and engineering careers.</p>
                  </div>
                  <div className="pillar-card">
                    <h5 className="pillar-title">Nutritional & Well-being Support</h5>
                    <p className="pillar-desc">Extended meal programs and mentorship to keep teenagers focused, motivated, and supported throughout adolescence.</p>
                  </div>
                </div>
              </div>

              <div className="project-action-row">
                <button 
                  className="btn btn-primary"
                  onClick={() => onDonateClick("High School Building Fund")}
                >
                  <Heart size={16} fill="currentColor" /> Support the High School Building Fund
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 3: Technical Training Institute */}
      <section id="technical-institute" className="project-detail-section tech-institute-bg">
        <div className="container">
          <div className="tech-header-area">
            <div className="status-badge-flagship">
              <Cpu size={14} /> Flagship Economic Empowerment Initiative
            </div>
            <h2 className="project-title-center">Selfless Technical & Vocational Training Institute</h2>
            <p className="project-lead-center">
              A state-of-the-art vocational center designed to provide free 2 to 6 month certified technical courses to marginalized youth, equipping them with immediate, marketable skills that create lifelong financial independence.
            </p>
          </div>

          {/* Interactive Course Selector */}
          <div className="courses-interactive-container">
            <div className="courses-tab-bar">
              {technicalCourses.map((course, idx) => (
                <button
                  key={course.id}
                  className={`course-tab-btn ${activeCourseTab === idx ? "active" : ""}`}
                  onClick={() => setActiveCourseTab(idx)}
                >
                  <span className="tab-icon">{course.icon}</span>
                  <span className="tab-text">{course.name}</span>
                </button>
              ))}
            </div>

            {/* Course Detail Card */}
            <div className="course-detail-view">
              <div className="course-detail-header">
                <div>
                  <span className="course-badge">{technicalCourses[activeCourseTab].badge}</span>
                  <h3 className="course-title">{technicalCourses[activeCourseTab].name}</h3>
                </div>
                <div className="course-meta-tags">
                  <span className="meta-tag"><Clock size={14} /> {technicalCourses[activeCourseTab].duration}</span>
                  <span className="meta-tag"><Users size={14} /> {technicalCourses[activeCourseTab].seats}</span>
                </div>
              </div>

              <p className="course-summary-text">
                {technicalCourses[activeCourseTab].summary}
              </p>

              <div className="course-curriculum-grid">
                <div className="curriculum-col">
                  <h4 className="curriculum-heading">Key Syllabus Modules:</h4>
                  <ul className="syllabus-list">
                    {technicalCourses[activeCourseTab].curriculum.map((item, cIdx) => (
                      <li key={cIdx}>
                        <CheckCircle2 size={16} className="check-curric" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="curriculum-sidebar">
                  <div className="career-box">
                    <h5 className="side-title"><Award size={16} /> Target Career Outcomes</h5>
                    <p className="side-desc">{technicalCourses[activeCourseTab].careerOutcomes}</p>
                  </div>

                  <div className="equipment-box">
                    <h5 className="side-title"><Wrench size={16} /> Laboratory Equipment Required</h5>
                    <p className="side-desc">{technicalCourses[activeCourseTab].equipmentNeeded}</p>
                  </div>

                  <button 
                    className="btn btn-accent btn-full"
                    onClick={() => onDonateClick(`Vocational Lab Sponsor: ${technicalCourses[activeCourseTab].name}`)}
                  >
                    <Heart size={16} fill="currentColor" /> Sponsor This Technical Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Multiplier Section */}
      <section className="impact-multiplier-section">
        <div className="container">
          <div className="multiplier-card">
            <h3 className="multiplier-title">Why Technical Training Changes Generations</h3>
            <div className="multiplier-grid">
              <div className="m-item">
                <span className="m-number">100%</span>
                <span className="m-text">Tuition-free training with provided lab kits & study guides</span>
              </div>
              <div className="m-item">
                <span className="m-number">3–6 Mo</span>
                <span className="m-text">Rapid turnaround to job market readiness and earnings</span>
              </div>
              <div className="m-item">
                <span className="m-number">5x–10x</span>
                <span className="m-text">Higher household income compared to unskilled day labor</span>
              </div>
              <div className="m-item">
                <span className="m-number">Zero</span>
                <span className="m-text">Donor funds diverted to administrative overhead</span>
              </div>
            </div>
            <div className="multiplier-cta">
              <button 
                className="btn btn-light"
                onClick={() => onDonateClick("Vocational Institute General Fund")}
              >
                Join Us in Equipping Pakistan's Youth
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;