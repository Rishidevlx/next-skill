import React, { useState } from 'react';
import './Solutions.css';

import icon0 from '../../assets/solutionassest/Sloution icons.png';
import icon1 from '../../assets/solutionassest/Sloution icons (1).png';
import icon2 from '../../assets/solutionassest/Sloution icons (2).png';
import icon3 from '../../assets/solutionassest/Sloution icons (3).png';
import icon4 from '../../assets/solutionassest/Sloution icons (4).png';
import icon5 from '../../assets/solutionassest/Sloution icons (5).png';
import icon6 from '../../assets/solutionassest/Sloution icons (6).png';

const Solutions = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeId, setActiveId] = useState(4);

  const solutionsList = [
    { id: 1, title: 'Custom Software', icon: icon0 },
    { id: 2, title: 'Networking & IT', icon: icon1 },
    { id: 3, title: 'Office Management', icon: icon2 },
    { id: 4, title: 'Enterprise Applications', icon: icon3 },
    { id: 5, title: 'E-Commerce Solutions', icon: icon4 },
    { id: 6, title: 'Data Analytics', icon: icon5 },
    { id: 7, title: 'Web Development', icon: icon6 }
  ];

  const displaySolutions = [...solutionsList, ...solutionsList];
  const activeSolution = solutionsList.find(s => s.id === (hoveredId || activeId));

  return (
    <section className="solutionsSection">
      <div className="solutionsContainer">
        <span className="solutionsBadge">solutions</span>
        <h2 className="solutionsTitle">Tailored Services for Your Unique Needs</h2>
        
        <div className="solutionsRow">
          <div className="solutionsTrack">
            {displaySolutions.map((solution, index) => {
              const isHovered = hoveredId === solution.id;
              return (
                <div
                  key={`${solution.id}-${index}`}
                  className={`solutionIconWrapper ${isHovered ? 'activeSolution' : ''}`}
                  onMouseEnter={() => setHoveredId(solution.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveId(solution.id)}
                >
                  {isHovered && (
                    <>
                      <div className="rippleRing ring1"></div>
                      <div className="rippleRing ring2"></div>
                      <div className="rippleRing ring3"></div>
                    </>
                  )}
                  <img src={solution.icon} alt={solution.title} className="solutionImg" />
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="solutionBottom">
          <div className="solutionTitleBtn">
            {activeSolution?.title}
          </div>
          <div className="solutionReflection"></div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
