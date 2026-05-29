import React from 'react';
import './Programs.css';

import academyImg from '../../assets/academy (1).png';
import internshipImg from '../../assets/academy.png';
import starBadge from '../../assets/star.png';

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.52 2 2 0 0 1 3.6 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Programs = () => {
  return (
    <section className="programsSection">
      <div className="programsGlow"></div>
      <div className="programsGridBackground"></div>
      
      <div className="programsContainer">
        <div className="programsHeader">
          <span className="programsBadge">Programs</span>
          <h2 className="programsTitle">Boost Your Career with Industry-Ready Skills!</h2>
          
          <div className="programsIntro">
            <img src={starBadge} alt="Badge" className="programsStarIcon" />
            <div className="programsIntroText">
              <p>Join our expert-led training programs designed to<br/>enhance your skills and prepare you for the real world.</p>
              <a href="#programs" className="programsLink">View our program &rarr;</a>
            </div>
          </div>
        </div>

        <div className="programsCards">
          {/* Academy Card */}
          <div className="programCard">
            <div className="programCardImgWrapper">
              <img src={academyImg} alt="Academy" className="programCardImg" />
            </div>
            <div className="programCardContent">
              <h3 className="programCardTitle">ACADEMY</h3>
              <p className="programCardDesc">Learn like top IT and Achieve High-paid software</p>
              
              <div className="programTags">
                <span className="programTag tagOrange">POST 12TH / INTERMEDIATE</span>
                <span className="programTag tagOrange">1ST, 2ND, 3RD YEARS COLLEGE STUDENTS</span>
              </div>
              
              <div className="programInfo">
                <div className="programInfoLeft">
                  <span className="infoLabel">Next Batch</span>
                  <span className="infoValue">Start soon</span>
                </div>
                <div className="programInfoRight">
                  <span className="infoText">Limited seats<br/>available</span>
                </div>
              </div>
              
              <div className="programActions">
                <button className="programBtnPrimary btnOrange">
                  Request to call back <PhoneIcon />
                </button>
                <button className="programBtnSecondary btnOrangeText">
                  Know more
                </button>
              </div>
            </div>
          </div>

          {/* Internship Card */}
          <div className="programCard">
            <div className="programCardImgWrapper">
              <img src={internshipImg} alt="Internship" className="programCardImg" />
            </div>
            <div className="programCardContent">
              <h3 className="programCardTitle">INTERNSHIP</h3>
              <p className="programCardDesc">A Proven program to make you a IT professional</p>
              
              <div className="programTags">
                <span className="programTag tagPurple">GRADUATES</span>
                <span className="programTag tagPurple">FINAL YEAR</span>
              </div>
              
              <div className="programInfo">
                <div className="programInfoLeft">
                  <span className="infoLabel">Next Batch</span>
                  <span className="infoValue">Start soon</span>
                </div>
                <div className="programInfoRight">
                  <span className="infoText">Limited seats<br/>available</span>
                </div>
              </div>
              
              <div className="programActions">
                <button className="programBtnPrimary btnPurple">
                  Request to call back <PhoneIcon />
                </button>
                <button className="programBtnSecondary btnPurpleText">
                  Know more
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Programs;
