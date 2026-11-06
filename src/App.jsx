import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MissionVision from "./MissionVision";
import Project from "./Project";
import History from "./History";
import Team from "./Team";
import Gallery from "./Gallery";
import Donations from "./Donations";
import Footer from "./Footer";
import DonationModal from "./DonationModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState("");

  const handleOpenDonate = (cause = "") => {
    setSelectedCause(cause);
    setModalOpen(true);
  };

  const handleCloseDonate = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-root">
      <Header onDonateClick={() => handleOpenDonate("General Educational Fund")} />
      
      <main>
        <Hero onDonateClick={() => handleOpenDonate("General Educational Fund")} />
        <MissionVision />
        <Project onDonateClick={handleOpenDonate} />
        <History />
        <Team />
        <Gallery />
        <Donations selectedProject={selectedCause} />
      </main>

      <Footer />

      <DonationModal 
        isOpen={modalOpen} 
        onClose={handleCloseDonate} 
        defaultProject={selectedCause}
      />
    </div>
  );
}

export default App;
