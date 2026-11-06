import React from "react";
import Hero from "./Hero";
import MissionVision from "./MissionVision";
import Project from "./Project";
import History from "./History";
import Team from "./Team";
import Gallery from "./Gallery";
import Donations from "./Donations";

function HomePage({ onDonateClick, selectedCause }) {
  return (
    <>
      <Hero onDonateClick={() => onDonateClick("General Educational Fund")} />
      <MissionVision />
      <Project onDonateClick={onDonateClick} />
      <History />
      <Team />
      <Gallery />
      <Donations selectedProject={selectedCause} />
    </>
  );
}

export default HomePage;