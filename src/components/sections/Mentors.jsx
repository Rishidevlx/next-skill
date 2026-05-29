import React from 'react';
import './Mentors.css';
import mentorImg from '../../assets/card-1.png';
import logoImg from '../../assets/logo.png';

const Mentors = () => {
  const mentorsList = [
    { id: 1, name: "Pradeep kumar", role: "UI UX Mentor" },
    { id: 2, name: "Pradeep kumar", role: "UI UX Mentor" },
    { id: 3, name: "Pradeep kumar", role: "UI UX Mentor" },
    { id: 4, name: "Pradeep kumar", role: "UI UX Mentor" },
  ];

  return (
    <section className="mentorsSection">
      <div className="mentorsGlow"></div>
      <div className="mentorsGridBackground"></div>

      <div className="mentorsContainer">
        <div className="mentorsHeader">
          <span className="mentorsBadge">Mentors</span>
          <h2 className="mentorsTitle">Learn Live with Industry Experts</h2>
        </div>

        <div className="mentorsCards">
          {mentorsList.map((mentor) => (
            <div key={mentor.id} className="mentorCard">
              <div className="mentorImgWrapper">
                <img src={mentorImg} alt={mentor.name} className="mentorImg" />
              </div>
              <div className="mentorInfo">
                <h4 className="mentorName">{mentor.name}</h4>
                <p className="mentorRole">{mentor.role}</p>
                <div className="mentorLogo">
                  <img src={logoImg} alt="NextSkill" className="mentorLogoImg" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mentorsAction">
          <button className="mentorsBtn">
            Request a Callback &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
