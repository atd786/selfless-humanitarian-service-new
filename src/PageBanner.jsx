import React from "react";
import "./PageBanner.css";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";

function PageBanner({ title, subtitle, kicker = "Selfless Humanitarian Service", breadcrumb, onNavigate }) {
  return (
    <div className="page-banner">
      <div className="banner-pattern-overlay"></div>
      <div className="container banner-inner">
        <div className="banner-kicker">
          <ShieldCheck size={14} className="banner-shield" />
          <span>{kicker}</span>
        </div>

        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}

        <nav className="banner-breadcrumbs" aria-label="Breadcrumb">
          <button 
            className="breadcrumb-home-btn"
            onClick={() => onNavigate("home")}
          >
            <Home size={14} /> Home
          </button>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">{breadcrumb || title}</span>
        </nav>
      </div>
    </div>
  );
}

export default PageBanner;
