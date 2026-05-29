import React, { useState } from 'react';
import './Process.css';
import ideateCard from '../../assets/ideate card.png';

const LightbulbIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
  </svg>
);

const PenIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <circle cx="8" cy="10" r="1"/>
    <circle cx="12" cy="10" r="1"/>
    <circle cx="16" cy="10" r="1"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15 3.38-3.38a2.18 2.18 0 0 0-.09-2.91c-.78-.79-2.07-.8-2.91-.09L9 12"/>
    <path d="m16 11 3.38-3.38a2.18 2.18 0 0 0-.09-2.91c-.78-.79-2.07-.8-2.91-.09L13 8"/>
  </svg>
);

const QuestionIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Ideate',
      description: 'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.',
      icon: <LightbulbIcon />
    },
    {
      id: 2,
      title: 'Design',
      description: 'We craft beautiful, intuitive user interfaces that engage your audience and provide a seamless, enjoyable experience across all devices.',
      icon: <PenIcon />
    },
    {
      id: 3,
      title: 'Develop',
      description: 'Our expert engineers build scalable, high-performance applications using the latest technologies and industry best practices.',
      icon: <CodeIcon />
    },
    {
      id: 4,
      title: 'Test',
      description: 'Rigorous quality assurance ensures your product is bug-free, secure, and performs flawlessly under all expected conditions.',
      icon: <MessageIcon />
    },
    {
      id: 5,
      title: 'Launch',
      description: 'We handle the deployment process smoothly, ensuring a successful release to the market with zero downtime.',
      icon: <RocketIcon />
    },
    {
      id: 6,
      title: 'Support',
      description: 'Our team provides continuous monitoring, maintenance, and updates to keep your product running smoothly long after launch.',
      icon: <QuestionIcon />
    }
  ];

  return (
    <section className="processSection">
      <div className="processGlow"></div>
      <div className="processGridBackground"></div>
      
      <div className="processContainer">
        <div className="processHeader">
          <span className="processBadge">Our process</span>
          <h2 className="processTitle">Product creation journey.</h2>
          <p className="processSubtitle">Our product development process</p>
        </div>

        <div className="processContent">
          <div className="processSteps">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;
              const isLast = index === steps.length - 1;
              
              return (
                <div 
                  key={step.id} 
                  className={`stepItem ${isActive ? 'activeStep' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="stepIndicator">
                    <div className="stepNumber">{step.id}</div>
                    {isActive && !isLast && <div className="stepLine"></div>}
                  </div>
                  <div className="stepDetails">
                    <div className="stepTitleWrapper">
                      <span className="stepIcon">{step.icon}</span>
                      <span className="stepName">{step.title}</span>
                    </div>
                    <div className="stepDescriptionWrapper">
                      <p className="stepDescription">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="processVisual">
            <div className="ideateCardContainer">
               <div className="imageShadow2"></div>
               <div className="imageShadow"></div>
               
               <div className="ideateCardFront">
                 <div className="ideateCardLeft">
                   <div className="ideateCardHeader">
                     <div className="ideateCardTitle">
                       <LightbulbIcon /> 
                       <span>Ideate</span>
                     </div>
                     <div className="ideateCardBadge">
                       <span >💡</span>
                       <span>Idea</span>
                     </div>
                   </div>
                   <p className="ideateCardText">
                     Ideation is a creative process where designers generate ideas in sessions brainstorming, worst possible idea.
                   </p>
                 </div>
                 
                 <div className="ideateCardRight">
                   <img src={ideateCard} alt="Illustration" className="ideateIllustration" />
                 </div>
                 
                 
                 <div className="floatingTag tagPlanning"><span>📝</span> planning</div>
                 <div className="floatingTag tagQuestion">?</div>
                 <div className="floatingTag tagCreative"><span>🌈</span> Creative</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
