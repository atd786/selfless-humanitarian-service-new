import React from "react";
import PageBanner from "./PageBanner";
import "./VolunteerPage.css";
import {
  Heart,
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Users,
  BookOpen,
  Sparkles,
  MessageSquare
} from "lucide-react";

function VolunteerPage({ onNavigate, onDonateClick }) {
  return (
    <div className="volunteer-page">
      <PageBanner
        title="Volunteer Opportunities"
        subtitle="Join Selfless Humanitarian Service on the ground in Shahdara, Lahore and make a lasting difference in the lives of deserving children."
        breadcrumb="Volunteer"
        onNavigate={onNavigate}
      />

      <section className="volunteer-main-section">
        <div className="container">
          <div className="volunteer-grid">
            <div className="volunteer-primary-card">
              <span className="badge-tag">
                <Sparkles size={14} /> Get Involved in Person
              </span>
              <h2 className="volunteer-heading">Volunteer Opportunities</h2>

              <p className="volunteer-lead">
                If you want to volunteer at our school in Shahdara. If you
              </p>

              <ul className="volunteer-reasons-list">
                <li>
                  <CheckCircle2 size={20} className="vol-check-icon" />
                  <span>
                    need to perform a project or gain some practical experience for your studies in education,
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={20} className="vol-check-icon" />
                  <span>
                    have some spare time and want to do some good,
                  </span>
                </li>
              </ul>

              <p className="volunteer-closing">
                come to our school and offer your services as a volunteer. You will find it a very fulfilling experience.
              </p>

              <div className="volunteer-highlights-grid">
                <div className="vol-highlight-box">
                  <BookOpen size={22} className="vol-box-icon" />
                  <div>
                    <h4 className="vol-box-title">Teaching &amp; Academic Projects</h4>
                    <p className="vol-box-desc">
                      Ideal for university students in education conducting field projects, lesson observation, English reading circles, or homework support.
                    </p>
                  </div>
                </div>
                <div className="vol-highlight-box">
                  <Users size={22} className="vol-box-icon" />
                  <div>
                    <h4 className="vol-box-title">Meaningful Community Service</h4>
                    <p className="vol-box-desc">
                      Mentor young learners, assist teachers during school hours, or contribute your time to community uplift in Shahdara, Lahore.
                    </p>
                  </div>
                </div>
              </div>

              <div className="volunteer-cta-row">
                <a
                  href="https://wa.me/923061064907?text=Hello%20Dr.%20Khushro%20Shahookar,%20I%20would%20like%20to%20volunteer%20at%20the%20Selfless%20Humanitarian%20Service%20school%20in%20Shahdara."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageSquare size={17} /> Contact via WhatsApp to Volunteer
                </a>
                <a
                  href="mailto:selflesshumanitarianservice@gmail.com?subject=Volunteer%20Opportunity%20Inquiry%20-%20Selfless%20Humanitarian%20Service"
                  className="btn btn-outline-crimson"
                >
                  <Mail size={17} /> Email Our Team
                </a>
              </div>
            </div>

            <div className="volunteer-sidebar">
              <div className="volunteer-info-card">
                <h3 className="vol-card-title">Campus &amp; Coordination Details</h3>

                <div className="vol-info-item">
                  <MapPin size={19} className="vol-info-icon" />
                  <div>
                    <strong>School Location</strong>
                    <p>Shahdara Town, Lahore, Punjab, Pakistan</p>
                  </div>
                </div>

                <div className="vol-info-item">
                  <Clock size={19} className="vol-info-icon" />
                  <div>
                    <strong>School Hours</strong>
                    <p>
                      Monday – Friday<br />
                      8:00 AM – 1:00 PM (Day Classes)<br />
                      3:00 PM – 5:00 PM (Evening Academy)
                    </p>
                  </div>
                </div>

                <div className="vol-info-item">
                  <Phone size={19} className="vol-info-icon" />
                  <div>
                    <strong>WhatsApp &amp; Phone</strong>
                    <p>
                      <a href="https://wa.me/923061064907" target="_blank" rel="noopener noreferrer">
                        +92 306 1064907
                      </a>
                    </p>
                  </div>
                </div>

                <div className="vol-info-item">
                  <Mail size={19} className="vol-info-icon" />
                  <div>
                    <strong>Official Email</strong>
                    <p>
                      <a href="mailto:selflesshumanitarianservice@gmail.com">
                        selflesshumanitarianservice@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="volunteer-support-card">
                <h4>Want to Support Financially Too?</h4>
                <p>
                  Every contribution supports free tuition, daily meals, classrooms, and vocational centres for underprivileged youth.
                </p>
                <button
                  className="btn btn-accent btn-full"
                  onClick={() => onDonateClick("Support our Institutes and Projects (any amount)")}
                >
                  <Heart size={16} fill="currentColor" /> Support Our Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VolunteerPage;
