import React, { useState } from "react";
import "./Donations.css";
import { 
  Heart, 
  Phone, 
  Copy, 
  Check, 
  MapPin, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ExternalLink,
  MessageSquare,
  ArrowRight
} from "lucide-react";

function Donations({ selectedProject }) {
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const whatsappNumber = "+923061064907";
  const displayPhone = "+92 306 1064907";

  const handleCopy = () => {
    navigator.clipboard.writeText(displayPhone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const tiers = [
    {
      title: "Sponsor a Child's Education",
      amountPKR: "PKR 7,500",
      amountUSD: "~$27 / month",
      desc: "Provides 100% free tuition, English textbooks, notebooks, stationery, and uniforms for one primary student.",
      tag: "Most Popular"
    },
    {
      title: "Nutritious Daily Meals",
      amountPKR: "PKR 15,000",
      amountUSD: "~$55 / month",
      desc: "Funds daily wholesome meals and fruit snacks for children arriving without morning breakfast.",
      tag: "Vital Care"
    },
    {
      title: "High School Lab & Desk Fund",
      amountPKR: "PKR 45,000",
      amountUSD: "~$160 one-time",
      desc: "Equips our expanding classrooms with durable desks, ceiling fans, lighting, and English board curriculum sets.",
      tag: "Expansion"
    },
    {
      title: "Vocational IT Equipment",
      amountPKR: "PKR 85,000",
      amountUSD: "~$300 one-time",
      desc: "Sponsors workstation PCs, electronics lab toolkits, and test benches for our technical training institute.",
      tag: "Career Launch"
    }
  ];

  const faqs = [
    {
      q: "Is Selfless Humanitarian Service an officially registered NGO?",
      a: "Yes. Selfless Humanitarian Service is registered with the Securities and Exchange Commission of Pakistan (SECP) as a recognized National NGO, operating under strict legal compliance and governance."
    },
    {
      q: "Can I visit the school in person in Lahore?",
      a: "Absolutely! We warmly welcome all donors, well-wishers, and community members to visit our school in Shahdara, Lahore, interact with the children, meet Mr. and Mrs. Solomon Samuel, and observe classes firsthand."
    },
    {
      q: "How can overseas Pakistanis send support?",
      a: "Overseas donors can reach out directly to Dr. Khushro Shahookar on WhatsApp at +92 306 1064907. He will coordinate official non-profit wire instructions or remittance details and send receipts with student progress updates."
    },
    {
      q: "Are the founders taking administrative salaries?",
      a: "No. The directors have privately self-funded the school since 2015 out of personal conviction. 100% of donor contributions are directed directly to student welfare, teacher stipends, meals, and academic materials."
    }
  ];

  return (
    <section className="donations-section" id="donate">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Heart size={14} /> Partner In Goodness
          </div>
          <h2 className="section-title">Support Our Mission & Projects</h2>
          <p className="section-subtitle">
            Every rupee and dollar directly changes the life of an underprivileged child in Pakistan. 
            Join us in building a sustainable pathway out of poverty.
          </p>
        </div>

        {/* Sponsorship Tiers Grid */}
        <div className="tiers-grid">
          {tiers.map((tier, idx) => (
            <div key={idx} className="tier-card">
              <span className="tier-tag">{tier.tag}</span>
              <h3 className="tier-title">{tier.title}</h3>
              <div className="tier-pricing">
                <span className="price-pkr">{tier.amountPKR}</span>
                <span className="price-usd">{tier.amountUSD}</span>
              </div>
              <p className="tier-desc">{tier.desc}</p>
              <a
                href={`https://wa.me/923061064907?text=${encodeURIComponent(
                  `Hello Dr. Khushro, I would like to support Selfless Humanitarian Service for: ${tier.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary tier-btn"
              >
                <Heart size={15} /> Pledge This Tier
              </a>
            </div>
          ))}
        </div>

        {/* Central Direct Contact & Donation Hub */}
        <div className="donation-contact-card">
          <div className="donation-card-glow"></div>
          <div className="donation-card-content">
            <div className="contact-info-col">
              <span className="hub-badge">
                <Sparkles size={14} /> Direct Coordination
              </span>
              <h3 className="contact-card-title">
                Speak Personally with Our Director
              </h3>
              <p className="contact-card-desc">
                Donations for our elementary school, high school expansion, and technical institute 
                are personally managed by our founding director, <strong>Dr. Khushro Shahookar</strong> (Ph.D., USA).
              </p>

              <div className="contact-detail-items">
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-label">WhatsApp & Phone Hotline</span>
                    <span className="contact-value">{displayPhone}</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-label">School Campus Location</span>
                    <span className="contact-value">Shahdara, Lahore, Punjab, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-actions-col">
              <div className="action-box">
                <h4 className="action-box-title">Instant WhatsApp Contact</h4>
                <p className="action-box-desc">
                  Tap below to message Dr. Khushro Shahookar directly on WhatsApp for bank details, 
                  remittance instructions, or to arrange a campus visit:
                </p>

                <div className="action-button-group">
                  <a
                    href="https://wa.me/923061064907?text=Hello%20Dr.%20Khushro%20Shahookar,%20I%20would%20like%20to%20support%20Selfless%20Humanitarian%20Service%20and%20inquire%20about%20donations."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent btn-whatsapp-action"
                  >
                    <MessageSquare size={18} /> Open WhatsApp Chat
                  </a>

                  <button 
                    className="btn btn-white btn-copy-action"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check size={18} className="text-green" /> Number Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={18} /> Copy Phone Number
                      </>
                    )}
                  </button>
                </div>

                <div className="visit-welcome-note">
                  <ShieldCheck size={16} className="text-accent" />
                  <span>You are warmly welcome to visit us in Shahdara and see our work in person.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="faq-section-wrapper">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? "active" : ""}`}
                onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a 
            href="#/donate" 
            className="btn btn-outline" 
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Visit Dedicated Sponsorship & Online Inquiry Page <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Donations;
