import React from "react";
import PageBanner from "./PageBanner";
import "./TeamPage.css";
import { 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Heart, 
  Phone, 
  Mail, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  FileText
} from "lucide-react";

function TeamPage({ onNavigate, onDonateClick }) {
  const directors = [
    {
      id: "khushro",
      name: "Dr. Khushro Shahookar",
      title: "Founder & Director",
      qualification: "Ph.D., United States of America",
      image: "./member1.png",
      tag: "Founding Philanthropist & Visionary",
      directContact: "+92 306 1064907",
      whatsappUrl: "https://wa.me/923061064907?text=Hello%20Dr.%20Khushro,%20I%20would%20like%20to%20connect%20regarding%20Selfless%20Humanitarian%20Service",
      quote: "True philanthropy is not about donating surplus money from afar; it is about building self-sustaining pathways that allow disadvantaged youth to stand tall on their own two feet.",
      bio: [
        "Dr. Khushro Shahookar earned his Ph.D. in the United States and built a distinguished career at the intersection of technology and research. Despite living and working abroad, his deep moral attachment to Pakistan motivated him to take direct action against educational poverty.",
        "In 2015, rather than establishing a symbolic charity, Dr. Khushro partnered with veteran educators in Lahore to open a free, English-medium school for children who had never stepped foot inside a classroom.",
        "For ten consecutive years, Dr. Khushro personally funded 100% of the school's operational expenditures—including building rent, teacher salaries, learning materials, and daily student meals—ensuring that the school never depended on unpredictable donations or took on debt.",
        "Today, Dr. Khushro is leading the strategic expansion to establish the High School and the Technical Training Institute, leveraging his background to equip Pakistani youth with globally competitive technical and IT skills."
      ],
      responsibilities: [
        "Overall strategic direction, legal governance, and institutional scaling",
        "Curriculum modernization and technical vocational program design",
        "Primary philanthropic sponsor and financial guarantor since 2015",
        "Liaison with overseas Pakistani diaspora and institutional partners"
      ]
    },
    {
      id: "solomon",
      name: "Mr. Solomon Samuel",
      title: "Director & Principal Educator",
      qualification: "M.A., M.Ed. (Master of Arts & Master of Education)",
      image: "./member2.png",
      tag: "Master Educator & School Administrator",
      quote: "When you give a poor child the same English books and respect that wealthy children receive, their eyes ignite. Poverty cannot stop an educated, determined mind.",
      bio: [
        "Mr. Solomon Samuel Bhatti brings distinguished teaching and school administration experience in Punjab. Holding both a Master of Arts and a Master of Education, Mr. Solomon has dedicated his life to reforming early childhood and primary education.",
        "Since the school's inception in 2015, Mr. Solomon has served as the on-ground Principal, arriving each morning at 7:30 AM to oversee classroom instruction, manage teacher mentorship, and counsel student families.",
        "Under his strict pedagogical standards, 100% of students completing Grade 5 at Selfless Humanitarian Service achieve fluent English reading, strong arithmetic foundations, and disciplined civic values."
      ],
      responsibilities: [
        "Daily academic administration, syllabus planning, and classroom teaching",
        "Direct family engagement, parental counseling, and attendance monitoring",
        "Evening tutoring academy supervision and academic remediation",
        "Staff teacher training and educational standards compliance"
      ]
    },
    {
      id: "sabah",
      name: "Mrs. Sabah Solomon Samuel",
      title: "Director & Lead Educator",
      qualification: "B.A. in Education (Bachelor of Arts)",
      image: "./member3.png",
      tag: "Student Welfare & Foundational Pedagogy",
      quote: "Children cannot learn when their stomachs are empty or their spirits are frightened. We treat every child who walks through our door as our own son or daughter.",
      bio: [
        "Mrs. Sabah Solomon Samuel is a devoted primary educator whose warmth and pedagogical patience form the heartbeat of the Selfless Humanitarian Service Elementary School in Shahdara.",
        "Specializing in early childhood education (Kindergarten through Grade 2), Mrs. Sabah focuses on phonetic reading, foundational vocabulary, and emotional safety, helping children from traumatic home environments transition into enthusiastic learners.",
        "In addition to her classroom responsibilities, Mrs. Sabah personally oversees the Daily Student Nutrition Program, ensuring fresh, wholesome meals and clean drinking water are prepared and distributed to every pupil every single school day.",
        "Her tireless advocacy for young girls' education has helped overcome traditional parental reluctance, resulting in an exemplary 50/50 gender balance across all primary grades in our school."
      ],
      responsibilities: [
        "Kindergarten and primary phonetics, literacy, and numeracy instruction",
        "Student nutrition, hygiene education, and physical well-being oversight",
        "Female student welfare advocacy and mother-teacher community sessions",
        "Student emotional care, creative arts, and classroom pastoral support"
      ]
    }
  ];

  return (
    <div className="team-page">
      <PageBanner
        title="Our Leadership & Board of Directors"
        subtitle="Meet the educators and visionaries who have personally nurtured, taught, and funded Selfless Humanitarian Service on the ground since 2015."
        breadcrumb="Leadership & Board"
        onNavigate={onNavigate}
      />

      {/* Directors Narrative Showcase */}
      <section className="directors-showcase-section">
        <div className="container">
          <div className="directors-stack">
            {directors.map((dir, idx) => (
              <div key={dir.id} className="director-profile-card">
                <div className="director-columns-grid">
                  {/* Portrait Column - Fully fitted and uncropped */}
                  <div className="director-media-col">
                    <div className="director-image-wrapper">
                      <img 
                        src={dir.image} 
                        alt={dir.name} 
                        className="director-uncropped-img" 
                      />
                      <span className="director-tag-pill">{dir.tag}</span>
                    </div>

                    <div className="director-credential-box">
                      <div className="cred-title"><GraduationCap size={16} /> Qualification</div>
                      <div className="cred-text">{dir.qualification}</div>
                      
                      {dir.directContact && (
                        <div className="cred-contact">
                          <a 
                            href={dir.whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="director-wa-btn"
                          >
                            <Phone size={14} /> WhatsApp: {dir.directContact}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Biography & Role Column */}
                  <div className="director-info-col">
                    <div className="director-header-info">
                      <span className="director-role-tag">{dir.title}</span>
                      <h2 className="director-fullname">{dir.name}</h2>
                    </div>

                    <blockquote className="director-quote-box">
                      <p className="dir-quote">"{dir.quote}"</p>
                    </blockquote>

                    <div className="director-bio-paragraphs">
                      {dir.bio.map((paragraph, pIdx) => (
                        <p key={pIdx} className="bio-p">{paragraph}</p>
                      ))}
                    </div>

                    <div className="director-resp-box">
                      <h4 className="resp-heading">Key Institutional Responsibilities:</h4>
                      <ul className="resp-list">
                        {dir.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx}>
                            <CheckCircle2 size={16} className="resp-check" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Fiduciary Oversight Section */}
      <section className="governance-section">
        <div className="container">
          <div className="governance-card">
            <div className="governance-header">
              <Building2 size={36} className="gov-icon" />
              <div>
                <h3 className="gov-title">Institutional Governance & Legal Status</h3>
                <p className="gov-lead">Registered National NGO under the Securities & Exchange Commission of Pakistan</p>
              </div>
            </div>

            <div className="gov-grid">
              <div className="gov-item">
                <ShieldCheck size={22} className="gov-check" />
                <div>
                  <h4 className="gov-item-title">Zero Administrative Overhead</h4>
                  <p className="gov-item-desc">The Directors draw no executive salaries or management fees from donor contributions. 100% of donor funding goes directly to classroom and student operations.</p>
                </div>
              </div>

              <div className="gov-item">
                <FileText size={22} className="gov-check" />
                <div>
                  <h4 className="gov-item-title">SECP Corporate Compliance</h4>
                  <p className="gov-item-desc">Incorporated under Section 42 of the Companies Act, 2017. Maintaining transparent annual statutory filings, books of accounts, and governance oversight.</p>
                </div>
              </div>

              <div className="gov-item">
                <Users size={22} className="gov-check" />
                <div>
                  <h4 className="gov-item-title">Direct On-Site Accountability</h4>
                  <p className="gov-item-desc">School operations are managed directly by board members present in the classrooms daily, eliminating multi-tiered bureaucratic leakage.</p>
                </div>
              </div>

              <div className="gov-item">
                <Award size={22} className="gov-check" />
                <div>
                  <h4 className="gov-item-title">Donor Reporting & Transparency</h4>
                  <p className="gov-item-desc">Child sponsors receive direct academic progress reports, term evaluations, and direct updates on student achievements.</p>
                </div>
              </div>
            </div>

            <div className="gov-cta-row">
              <button className="btn btn-accent" onClick={onDonateClick}>
                <Heart size={16} fill="currentColor" /> Partner With Our Leadership
              </button>
              <a 
                href="https://wa.me/923061064907?text=Hello%20Dr.%20Khushro,%20I%20would%20like%20to%20schedule%20a%20call%20or%20campus%20visit." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-white"
              >
                <Phone size={16} /> Speak Directly with Dr. Khushro
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamPage;