import React, { useState, useEffect } from "react";
import "./DonationModal.css";
import { X, Heart, MessageSquare, Copy, Check, ShieldCheck, MapPin, Mail } from "lucide-react";

function DonationModal({ isOpen, onClose, defaultProject = "" }) {
  const [selectedCause, setSelectedCause] = useState(
    defaultProject || "Support our Institutes and Projects (any amount)"
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultProject) {
      setSelectedCause(defaultProject);
    }
  }, [defaultProject]);

  if (!isOpen) return null;

  const displayPhone = "+92 306 1064907";

  const causes = [
    "Sponsor a Child's Tuition (PKR 5,500/mo or USD 20/mo)",
    "Daily Nutritious Student Meals (PKR 11,000/mo or USD 40/mo)",
    "Sponsor a Classroom (10 Students) (PKR 55,000/mo or $200/mo)",
    "High School Lab & Desk Fund (PKR 45,000 or $160 one-time)",
    "IT and Vocational Training Equipment (PKR 85,000 or $300 one-time)",
    "Support our Institutes and Projects (any amount)"
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(displayPhone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/923061064907?text=${encodeURIComponent(
    `Hello Dr. Khushro Shahookar, I would like to support Selfless Humanitarian Service for: ${selectedCause}. Please provide donation / wire instructions.`
  )}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-heart-icon">
            <Heart size={26} fill="currentColor" />
          </div>
          <h3 className="modal-title">Partner With Selfless Humanitarian Services</h3>
          <p className="modal-subtitle">
            SECP-Registered National NGO • Shahdara, Lahore, Pakistan
          </p>
        </div>

        <div className="modal-body">
          <label className="modal-field-label">Select Project or Cause to Support:</label>
          <div className="causes-picker">
            {causes.map((cause) => (
              <button
                key={cause}
                className={`cause-chip ${selectedCause === cause ? "active" : ""}`}
                onClick={() => setSelectedCause(cause)}
              >
                {cause}
              </button>
            ))}
          </div>

          <div className="modal-contact-highlight">
            <div className="modal-director-info">
              <span className="coord-label">Coordinating Director:</span>
              <strong className="coord-name">Dr. Khushro Shahookar (Ph.D., USA)</strong>
              <span className="coord-phone">{displayPhone}</span>
              <span className="coord-email">
                <Mail size={13} /> selflesshumanitarianservice@gmail.com
              </span>
            </div>

            <div className="modal-action-buttons">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-modal-wa"
              >
                <MessageSquare size={18} /> Open Direct WhatsApp Chat
              </a>

              <button className="btn btn-white btn-modal-copy" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check size={16} className="text-green" /> Number Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy Number
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="modal-trust-footer">
            <ShieldCheck size={16} className="trust-icon" />
            <span>100% of contributions are dedicated to students and academic infrastructure.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationModal;
