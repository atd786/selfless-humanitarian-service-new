import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import DonationModal from "./DonationModal";
import WhatsAppFloat from "./WhatsAppFloat";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MissionPage from "./MissionPage";
import ProjectsPage from "./ProjectsPage";
import HistoryPage from "./HistoryPage";
import TeamPage from "./TeamPage";
import GalleryPage from "./GalleryPage";
import DonatePage from "./DonatePage";

function parseHash(hash) {
  const clean = hash.replace(/^#\/?/, "").toLowerCase().trim();
  const validPages = ["about", "mission", "projects", "history", "team", "gallery", "donate"];
  if (validPages.includes(clean)) {
    return clean;
  }
  return "home";
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => parseHash(window.location.hash));
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(current);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const newPage = parseHash(window.location.hash);
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (pageKey) => {
    setCurrentPage(pageKey);
    if (pageKey === "home") {
      window.location.hash = "#/";
    } else {
      window.location.hash = `#/${pageKey}`;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenDonate = (cause = "General Educational Fund") => {
    setSelectedCause(cause);
    setModalOpen(true);
  };

  const handleCloseDonate = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-root">
      <div className="scroll-progress-container" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      <Header 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onDonateClick={() => handleOpenDonate("General Educational Fund")} 
      />
      
      <main>
        {currentPage === "home" && (
          <HomePage 
            onDonateClick={handleOpenDonate} 
            selectedCause={selectedCause} 
          />
        )}
        {currentPage === "about" && (
          <AboutPage 
            onNavigate={navigateTo} 
            onDonateClick={handleOpenDonate} 
          />
        )}
        {currentPage === "mission" && (
          <MissionPage 
            onNavigate={navigateTo} 
            onDonateClick={handleOpenDonate} 
          />
        )}
        {currentPage === "projects" && (
          <ProjectsPage 
            onNavigate={navigateTo} 
            onDonateClick={handleOpenDonate} 
          />
        )}
        {currentPage === "history" && (
          <HistoryPage 
            onNavigate={navigateTo} 
            onDonateClick={handleOpenDonate} 
          />
        )}
        {currentPage === "team" && (
          <TeamPage 
            onNavigate={navigateTo} 
            onDonateClick={handleOpenDonate} 
          />
        )}
        {currentPage === "gallery" && (
          <GalleryPage 
            onNavigate={navigateTo} 
            onDonateClick={handleOpenDonate} 
          />
        )}
        {currentPage === "donate" && (
          <DonatePage 
            onNavigate={navigateTo} 
            onDonateClick={handleOpenDonate} 
          />
        )}
      </main>

      <Footer onNavigate={navigateTo} />

      <DonationModal 
        isOpen={modalOpen} 
        onClose={handleCloseDonate} 
        defaultProject={selectedCause}
      />

      {/* Floating WhatsApp Quick Connect Button Across Entire Website */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;