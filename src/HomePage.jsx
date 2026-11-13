import React from "react";
import Hero from "./Hero";
import MissionVision from "./MissionVision";
import Project from "./Project";
import ImpactSimulator from "./ImpactSimulator";
import History from "./History";
import Team from "./Team";
import Gallery from "./Gallery";
import Donations from "./Donations";

function HomePage({ onDonateClick, selectedCause }) {
  return (
    <div className="home-page">
      <Hero onDonateClick={(cause) => onDonateClick(cause || "General Educational Fund")} />
      <MissionVision />
      <Project onDonateClick={onDonateClick} />
      <ImpactSimulator onDonateClick={onDonateClick} />
      <History />
      <Team />
      <Gallery />
      <Donations selectedProject={selectedCause} />
    </div>
  );
}

export default HomePage;