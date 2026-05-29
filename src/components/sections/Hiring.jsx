import React, { useState } from 'react';
import './Hiring.css';

import amazonImg from '../../assets/HP/amazon.png';
import nvidaImg from '../../assets/HP/nvida.png';
import accenImg from '../../assets/HP/accen.png';
import deloitteImg from '../../assets/HP/delottieee.png';

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const Hiring = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const logos = [amazonImg, nvidaImg, accenImg, deloitteImg];
  // duplicate for seamless marquee
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  const faqs = [
    { question: "What is a business agency?", answer: "A business agency provides specialized services to help companies grow, manage operations, or improve their marketing strategies." },
    { question: "What services does a business agency provide?", answer: "Services include consulting, marketing, design, development, and strategic planning." },
    { question: "How often should I update my website?", answer: "It's recommended to update your website content regularly, at least once a month, to keep it fresh for SEO and users." },
    { question: "How do subscriptions work?", answer: "Subscriptions are billed on a recurring basis, providing you with continuous access to our premium services and updates." },
    { question: "What other services are you compatible with?", answer: "We integrate with a variety of third-party tools including CRM systems, marketing platforms, and payment gateways." }
  ];

  return (
    <section className="hiringSection">

      <div className="hiringContainer">
        
        {/* Hiring Partners */}
        <div className="hiringTop">
          <span className="hiringBadge">Hiring Partner</span>
          
          <div className="hiringMarqueeWrapper">
            <div className="hiringMarqueeTrack">
              {marqueeLogos.map((logo, idx) => (
                <img key={idx} src={logo} alt="Hiring Partner" className="hiringLogo" />
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="faqWrapper">
          <div className="faqLeft">
            <span className="hiringBadge">FAQ's</span>
            <h2 className="faqTitle">Frequently Asked Question</h2>
            <p className="faqDesc">
              Neque accumsan dolor nullam commodo. Odio massa nisloulpul 
              ullamcorper suspendisse amet amet. Aenean suspendisse eget 
              fames eget eget nascetur ornare.
            </p>
            <button className="faqBtn">Request a Callback &rarr;</button>
          </div>
          
          <div className="faqRight">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faqItem ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faqQuestion">
                  <span>Q. {faq.question}</span>
                  <span className="faqIcon">
                    {openFaq === idx ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </div>
                <div className="faqAnswer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hiring;
