import React, { useState } from "react";
import "./WhatsAppFloat.css";
import { MessageSquare, X } from "lucide-react";

function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = "https://wa.me/923061064907?text=Hello%20Dr.%20Khushro%20Shahookar,%20I%20am%20visiting%20the%20Selfless%20Humanitarian%20Service%20website%20and%20would%20like%20to%20learn%20more.";

  return (
    <div className="whatsapp-floating-container">
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="whatsapp-tooltip">
          <div className="tooltip-content">
            <span className="tooltip-title">Need help or want to donate?</span>
            <span className="tooltip-sub">Chat directly with Director Dr. Khushro</span>
          </div>
          <button 
            className="tooltip-close" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Close tooltip"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-btn-pulse"
        aria-label="Chat on WhatsApp"
      >
        <span className="pulse-ring"></span>
        <svg 
          viewBox="0 0 32 32" 
          className="whatsapp-svg-icon"
          fill="currentColor"
        >
          <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.6a11.6 11.6 0 0 1-5.9-1.6l-.4-.3-4.3 1.1 1.2-4.2-.3-.4a11.7 11.7 0 1 1 9.4 5.4zm6.4-8.7c-.4-.2-2.1-1-2.4-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4-.4.2-.8 0a9.8 9.8 0 0 1-2.9-1.8 10.9 10.9 0 0 1-2-2.5c-.2-.4 0-.6.2-.8s.4-.4.5-.6.2-.4.3-.6.1-.4 0-.6-.9-2.1-1.2-2.9c-.3-.8-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.5s-1.6 1.6-1.6 3.8 1.6 4.4 1.8 4.7 3.2 4.9 7.7 6.9c1.1.5 1.9.7 2.6.9 1.1.4 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2s-.5-.3-.9-.5z"/>
        </svg>
      </a>
    </div>
  );
}

export default WhatsAppFloat;
