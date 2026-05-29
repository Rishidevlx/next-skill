import React, { useRef } from 'react';
import './clients.css';

import clientsLogos from '../../assets/clients/Clients.png';
import client1 from '../../assets/clients/client 1.png';
import client2 from '../../assets/clients/client 2.png';
import icon3 from '../../assets/solutionassest/Sloution icons (3).png';

const Clients = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      id: 1,
      image: client1,
      text: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      icon: icon3
    },
    {
      id: 2,
      image: client2,
      text: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      icon: icon3
    },
    {
      id: 3,
      image: client1,
      text: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      icon: icon3
    },
    {
      id: 4,
      image: client2,
      text: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      icon: icon3
    },
    {
      id: 5,
      image: client1,
      text: "I love how Finen simplifies my The detailed analytics and clear visualization in tools give me the to more confidence to make smart financial decisions.",
      name: "David Ramirez",
      company: "Abc Technologies",
      icon: icon3
    }
  ];

  return (
    <section className="clientsSection">
      <div className="clientsContainer">
        
        {/* Top Section - Logos */}
        <div className="clientsTop">
          <div className="clientsBadgeWrapper">
            <span className="clientsBadge">Our Clients</span>
          </div>
          <div className="clientsLogosWrapper">
            <img src={clientsLogos} alt="Our Clients" className="clientsLogosImg" />
          </div>
        </div>

        {/* Bottom Section - Reviews */}
        <div className="reviewsHeader">
          <div className="reviewsHeaderLeft">
             <span className="clientsBadge">Our Clients Reviews</span>
             <h2 className="reviewsTitle">What our clients say about us</h2>
          </div>
          <div className="reviewsHeaderRight">
            <button className="reviewArrowBtn" onClick={scrollLeft} aria-label="Scroll left">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button className="reviewArrowBtn" onClick={scrollRight} aria-label="Scroll right">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="reviewsTrack" ref={scrollRef}>
          {reviews.map((review) => (
            <div key={review.id} className="reviewCard">
              <div className="reviewCardLeft">
                <img src={review.image} alt={review.name} className="reviewProfileImg" />
              </div>
              <div className="reviewCardRight">
                <p className="reviewText">"{review.text}"</p>
                <div className="reviewAuthorInfo">
                   <div>
                      <h4 className="reviewAuthorName">{review.name}</h4>
                      <p className="reviewAuthorCompany">{review.company}</p>
                   </div>
                   <img src={review.icon} alt="Company Icon" className="reviewCompanyIcon" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
