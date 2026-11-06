import React from "react";
import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="box mission">
        <h2>Our Mission</h2>
        <p>
          To provide quality education and safe learning environments for underprivileged children
        and orphans in Pakistan, and to empower disadvantaged youth through information technology
        and technical training centres, for skill development and sustainable opportunities that 
        foster independence and growth.
        </p>
      </div>

      <div className="box vision">
        <h2>Our Vision</h2>
        <p>
          Uplift of the community through accessible education and skills training that create 
          sustainable employment, empower youth, and break the cycle of poverty. To create a 
          world where every child has access to quality learning and the chance to build a 
          brighter, self‑reliant future.
        </p>
      </div>
    </section>
  );
}

export default MissionVision;
