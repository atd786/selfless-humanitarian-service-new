import React, { useState } from "react";
import PageBanner from "./PageBanner";
import "./DonatePage.css";
import { 
  Heart, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Mail, 
  Building2, 
  CheckCircle2, 
  DollarSign, 
  ArrowRight,
  Send,
  Calendar,
  Sparkles,
  HelpCircle
} from "lucide-react";

function DonatePage({ onNavigate, onDonateClick }) {
  const [currency, setCurrency] = useState("USD");
  const [selectedTier, setSelectedTier] = useState("child-1");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Sponsorship Inquiry",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const tiers = [
    {
      id: "child-1",
      title: "Sponsor 1 Student",
      usd: 25,
      pkr: 7000,
      frequency: "per month",
      desc: "Covers complete English-medium schooling, full textbook set, uniform, and daily morning meal.",
      badge: "Most Popular",
      impact: "Transforms 1 child's educational trajectory permanently"
    },
    {
      id: "child-2",
      title: "Sponsor 2 Students",
      usd: 50,
      pkr: 14000,
      frequency: "per month",
      desc: "Supports two siblings or classmates with full tuition, meals, and evening academy homework tutoring.",
      impact: "Lifts an entire household's educational prospects"
    },
    {
      id: "classroom",
      title: "Sponsor a Classroom (10 Students)",
      usd: 250,
      pkr: 70000,
      frequency: "per month",
      desc: "Funds the operational costs, books, nutritious meals, and dedicated teacher honorarium for a 10-student cohort.",
      badge: "High Impact",
      impact: "Provides sustainable classroom operations in Shahdara"
    },
    {
      id: "vocational",
      title: "Equip a Vocational Lab Seat",
      usd: 350,
      pkr: 100000,
      frequency: "one-time",
      desc: "Provides a complete student toolkit (soldering station, diagnostic tools, or computer workstation) for certified vocational trainees.",
      impact: "Launches 1 youth into an immediate technical wage career"
    },
    {
      id: "high-school",
      title: "High School Expansion Sponsor",
      usd: 500,
      pkr: 140000,
      frequency: "one-time or monthly",
      desc: "Contributes directly to science lab benches, computer workstations, and secondary school classroom acquisition.",
      impact: "Helps construct the first free high school in Shahdara"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email address.");
      return;
    }
    // Generate WhatsApp direct text with their message
    const textMsg = encodeURIComponent(
      `Hello Dr. Khushro,\nMy name is ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nSubject: ${formData.inquiryType}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/923061064907?text=${textMsg}`, "_blank");
    setFormSubmitted(true);
  };

  const selectedTierObj = tiers.find(t => t.id === selectedTier) || tiers[0];

  return (
    <div className="donate-page">
      <PageBanner
        title="Sponsorship, Donations & Direct Contact"
        subtitle="100% of your contributions go straight to student schooling, daily wholesome meals, and technical training with SECP-verified fiduciary integrity."
        breadcrumb="Contact & Donate"
        onNavigate={onNavigate}
      />

      {/* Sponsorship Calculator Section */}
      <section className="sponsor-calculator-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">
              <Sparkles size={14} /> Student Sponsorship Program
            </span>
            <h2 className="section-title">Select Your Sponsorship Tier</h2>
            <p className="section-subtitle">
              Transparent, measurable giving options that deliver immediate, tangible impact for underprivileged children.
            </p>

            {/* Currency Switcher */}
            <div className="currency-switch-box">
              <span className="switch-label">Select Currency:</span>
              <div className="currency-pill-toggle">
                <button 
                  className={`cur-btn ${currency === "USD" ? "active" : ""}`}
                  onClick={() => setCurrency("USD")}
                >
                  USD ($)
                </button>
                <button 
                  className={`cur-btn ${currency === "PKR" ? "active" : ""}`}
                  onClick={() => setCurrency("PKR")}
                >
                  PKR (Rs.)
                </button>
              </div>
            </div>
          </div>

          {/* Tiers Grid */}
          <div className="sponsorship-tiers-grid">
            {tiers.map((tier) => (
              <div 
                key={tier.id}
                className={`tier-card ${selectedTier === tier.id ? "selected-tier" : ""}`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.badge && <span className="tier-badge-pill">{tier.badge}</span>}
                <h3 className="tier-card-title">{tier.title}</h3>
                
                <div className="tier-price-box">
                  <span className="tier-amount">
                    {currency === "USD" ? `$${tier.usd}` : `Rs. ${tier.pkr.toLocaleString()}`}
                  </span>
                  <span className="tier-freq">/ {tier.frequency}</span>
                </div>

                <p className="tier-card-desc">{tier.desc}</p>
                <div className="tier-impact">
                  <CheckCircle2 size={16} className="tier-check" />
                  <span>{tier.impact}</span>
                </div>

                <button 
                  className={`btn ${selectedTier === tier.id ? "btn-accent" : "btn-outline"} tier-action-btn`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTier(tier.id);
                    onDonateClick(tier.title);
                  }}
                >
                  <Heart size={15} fill="currentColor" /> Sponsor This Now
                </button>
              </div>
            ))}
          </div>

          {/* Selected Summary Bar */}
          <div className="selected-summary-bar">
            <div className="summary-left">
              <span className="summary-lbl">Selected Initiative:</span>
              <span className="summary-name">{selectedTierObj.title} ({currency === "USD" ? `$${selectedTierObj.usd}` : `Rs. ${selectedTierObj.pkr.toLocaleString()}`})</span>
            </div>
            <div className="summary-right">
              <button 
                className="btn btn-primary"
                onClick={() => onDonateClick(selectedTierObj.title)}
              >
                Proceed with Bank Transfer / Wire Details
              </button>
              <a 
                href={`https://wa.me/923061064907?text=Hello%20Dr.%20Khushro,%20I%20would%20like%20to%20sponsor%20the%20${encodeURIComponent(selectedTierObj.title)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Phone size={16} /> Confirm on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Official Bank Transfer & Legal Verification Section */}
      <section className="bank-legal-section">
        <div className="container">
          <div className="bank-legal-grid">
            {/* Bank Transfer Guidance Card */}
            <div className="bank-details-card">
              <div className="card-header-styled">
                <Building2 size={24} className="bank-icon-h" />
                <h3 className="card-styled-title">Bank Transfer & Wire Information</h3>
              </div>

              <p className="bank-intro-text">
                Direct bank transfers are welcomed from domestic Pakistani bank accounts as well as international wire transfers (USA, UK, Canada, UAE, Europe).
              </p>

              <div className="bank-info-table">
                <div className="info-row">
                  <span className="info-title">Organization Legal Name:</span>
                  <span className="info-val">Selfless Humanitarian Service</span>
                </div>
                <div className="info-row">
                  <span className="info-title">Legal Entity Type:</span>
                  <span className="info-val">Registered Non-Profit NGO (SECP Pakistan)</span>
                </div>
                <div className="info-row">
                  <span className="info-title">Headquarters:</span>
                  <span className="info-val">Shahdara, Lahore, Punjab, Pakistan</span>
                </div>
                <div className="info-row">
                  <span className="info-title">Direct Director Contact:</span>
                  <span className="info-val">+92 306 1064907 (Dr. Khushro Shahookar)</span>
                </div>
              </div>

              <div className="bank-notice-box">
                <ShieldCheck size={20} className="notice-icon" />
                <p className="notice-text">
                  To ensure complete audit compliance and provide you with an official tax acknowledgment receipt, please connect directly with Director Dr. Khushro Shahookar on WhatsApp to receive the current active bank IBAN and SWIFT routing codes.
                </p>
              </div>

              <a 
                href="https://wa.me/923061064907?text=Hello%20Dr.%20Khushro,%20please%20share%20the%20official%20bank%20IBAN%20and%20account%20details%20for%20Selfless%20Humanitarian%20Service%20donation."
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-accent btn-full"
              >
                <Phone size={16} /> Request Official Bank Details on WhatsApp
              </a>
            </div>

            {/* Direct Inquiry & Campus Booking Form */}
            <div className="contact-form-card">
              <div className="card-header-styled">
                <Mail size={24} className="mail-icon-h" />
                <h3 className="card-styled-title">Direct Inquiry & Visit Scheduling</h3>
              </div>

              {formSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h4 className="success-title">Message Forwarded!</h4>
                  <p className="success-desc">
                    Your inquiry has been formatted and opened directly in WhatsApp with Dr. Khushro Shahookar (+92 306 1064907). He will reply promptly.
                  </p>
                  <button className="btn btn-primary" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="direct-contact-form">
                  <div className="form-group">
                    <label className="form-label">Your Full Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Aitzaz Ahmed" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        placeholder="you@example.com" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">WhatsApp / Phone</label>
                      <input 
                        type="tel" 
                        className="form-input" 
                        placeholder="+92 300 1234567" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Subject</label>
                    <select 
                      className="form-select"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    >
                      <option value="Sponsorship Inquiry">Child Sponsorship Inquiry</option>
                      <option value="Campus Visit Request">Schedule a Campus Visit in Shahdara</option>
                      <option value="Vocational Institute Support">Technical Training Institute Partnership</option>
                      <option value="High School Building Fund">High School Building Fund</option>
                      <option value="Overseas Diaspora Wire">Overseas Wire Transfer Guidance</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message or Questions</label>
                    <textarea 
                      className="form-textarea" 
                      rows={4}
                      placeholder="Share any specific questions or details..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    <Send size={16} /> Send Inquiry via WhatsApp to Dr. Khushro
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">
              <HelpCircle size={14} /> Clear Answers
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about sponsoring a child, visiting the school, and legal verification.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <h4 className="faq-q">How do I know my donation actually reaches the students?</h4>
              <p className="faq-a">
                Selfless operates on an absolute zero executive compensation model. The Directors take zero salaries. Donors receive direct term academic reports, student photographs, and direct verification of fees, uniforms, and meals.
              </p>
            </div>

            <div className="faq-card">
              <h4 className="faq-q">Can overseas donors contribute via international wire?</h4>
              <p className="faq-a">
                Yes. We regularly assist donors across the United States, United Kingdom, Canada, the Gulf, and Europe with IBAN and SWIFT routing codes for secure, fee-minimized bank wire transfers.
              </p>
            </div>

            <div className="faq-card">
              <h4 className="faq-q">Can I visit the school campus in person?</h4>
              <p className="faq-a">
                Absolutely. We encourage on-site visits! You can schedule a visit Monday through Friday between 8:00 AM and 1:00 PM to meet Mr. Solomon Samuel, Mrs. Sabah, and the students in person in Shahdara, Lahore.
              </p>
            </div>

            <div className="faq-card">
              <h4 className="faq-q">Is Selfless officially registered with the Government?</h4>
              <p className="faq-a">
                Yes, Selfless Humanitarian Service is registered with the Securities and Exchange Commission of Pakistan (SECP) under Section 42 of the Companies Act as a recognized National NGO.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DonatePage;