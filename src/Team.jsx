import React from "react";
import "./Team.css";

function Team() {
  const team = [
    {
      img: "/member1.png",
      title: "Founder & Director",
      name: "Dr. Khushro Shahookar",
      qualification: "Ph.D., USA"
    },
    {
      img: "/member2.png",
      title: "Director",
      name: "Solomon Samuel",
      qualification: "M.A., M.Ed., experienced school teacher"
    },
    {
      img: "/member3.png",
      title: "Director",
      name: "Mrs. Sabah Solomon Samuel",
      qualification: "B.A., experienced school teacher"
    }
  ];

  return (
    <section className="team-section">
      <h3 className="team-heading">Our Team</h3>
      <div className="team-container">
        {team.map((member, index) => (
          <div className="team-box" key={index}>
            <img src={member.img} alt={member.name} className="team-img" />
            <h4 className="team-name">{member.name}</h4>
            <p className="team-title">{member.title}</p>
            <p className="team-qualification">{member.qualification}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
