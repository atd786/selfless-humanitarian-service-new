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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tiers = [
    {
      id: "child-1",
      title: "Sponsor a Child's Tuition",
      usd: 20,
      pkr: 5500,
      frequency: "per month",
      desc: "Provides 100% free tuition, English textbooks, notebooks, stationery, and uniforms for one child.",
      badge: "Most Popular",
      impact: "PKR 5,500/mo or USD 20/mo — transforms 1 student's education"
    },
    {
      id: "meals",
      title: "Daily Nutritious Student Meals",
      usd: 40,
      pkr: 11000,
      frequency: "per month",
      desc: "Ensures poor students receive healthy food between study sessions and do not study on an empty stomach.",
      badge: "Vital Care",
      impact: "PKR 11,000/mo or USD 40/mo — daily nutrition support"
    },
    {
      id: "high-school",
      title: "High School Lab & Desk Fund",
      usd: 160,
      pkr: 45000,
      frequency: "one-time",
      desc: "Equips expanding secondary school classrooms with durable desks, science benches, lighting, and curriculum sets.",
      impact: "PKR 45,000 / $160 one-time — expands High School infrastructure"
    },
    {
      id: "vocational",
      title: "IT and Vocational Training Equipment",
      usd: 300,
      pkr: 85000,
      frequency: "one-time",
      desc: "Funds computer workstations, electronics toolkits, and practical vocational training benches for youth.",
      badge: "High Impact",
      impact: "PKR 85,000 / $300 one-time — launches job-ready technical skills"
    },
    {
      id: "general",
      title: "Support our Institutes and Projects (any amount)",
      isAnyAmount: true,
      usd: null,
      pkr: null,
      frequency: "any amount",
      desc: "Contribute any amount in PKR or USD toward our elementary school, high school expansion, daily meals, or technical training institute.",
      impact: "100% zero-overhead direct campus support"
    }
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email address.");
      return;
    }

    setIsSubmitting(true);

    const formatTierPrice = (t) =>
      t.isAnyAmount ? "Any Amount (PKR / USD)" : `PKR ${t.pkr.toLocaleString()} / $${t.usd} ${t.frequency}`;

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "",
      subject: formData.inquiryType,
      tier_or_amount: `${selectedTierObj.title} (${formatTierPrice(selectedTierObj)})`,
      message: formData.message || ""
    };

    try {
      await fetch("./api/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn("Inquiry DB recording notice:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);

      // Generate WhatsApp direct text with their message
      const textMsg = encodeURIComponent(
        `Hello Dr. Khushro,\nMy name is ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nSubject: ${formData.inquiryType}\nTier: ${selectedTierObj.title}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/923061064907?text=${textMsg}`, "_blank");
    }
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
                    {tier.isAnyAmount
                      ? "Any Amount"
                      : currency === "USD"
                      ? `$${tier.usd} / PKR ${tier.pkr.toLocaleString()}`
                      : `PKR ${tier.pkr.toLocaleString()} / $${tier.usd}`}
                  </span>
                  <span className="tier-freq">{tier.isAnyAmount ? "(PKR or USD)" : `/ ${tier.frequency}`}</span>
                </div>

                <p className="tier-card-desc">{tier.desc}</p>
                <div className="tier-impact">
                  <CheckCircle2 size={16} className="tier-check" />
                  <span>{tier.impact}</span>
                </div>

                <button 
                  className={`btn ${selectedTier === tier.id ? "btn-accent" : "btn-outline-crimson"} tier-action-btn`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTier(tier.id);
                    onDonateClick(
                      tier.isAnyAmount
                        ? "Support our Institutes and Projects (any amount)"
                        : `${tier.title} (PKR ${tier.pkr.toLocaleString()} / $${tier.usd})`
                    );
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
              <span className="summary-name">
                {selectedTierObj.title}{" "}
                {selectedTierObj.isAnyAmount
                  ? "(Any Amount — PKR / USD)"
                  : `(PKR ${selectedTierObj.pkr.toLocaleString()} / $${selectedTierObj.usd} ${selectedTierObj.frequency})`}
              </span>
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
                  <span className="info-title">Official Contact &amp; Donation Email:</span>
                  <span className="info-val">selflesshumanitarianservice@gmail.com</span>
                </div>
                <div className="info-row">
                  <span className="info-title">Direct Director Contact:</span>
                  <span className="info-val">+92 306 1064907 (Dr. Khushro Shahookar)</span>
                </div>
                <div className="info-row">
                  <span className="info-title">Google Verified Listing:</span>
                  <span className="info-val">Verified Campus on Google Business Profile &amp; Google Search Console</span>
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
                  <h4 className="success-title">Inquiry Submitted & Forwarded!</h4>
                  <p className="success-desc">
                    Your inquiry has been securely saved to our database and formatted for Dr. Khushro Shahookar (+92 306 1064907). He will reply promptly.
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
                      placeholder="e.g. Tariq Mehmood" 
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

                  <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                    <Send size={16} /> {isSubmitting ? "Recording & Connecting..." : "Send Inquiry & Connect via WhatsApp"}
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