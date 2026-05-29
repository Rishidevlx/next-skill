import React, { useState } from 'react';
import './Technologies.css';

const DesktopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ServerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const SmartphoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const ShoppingCartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const CodeTagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const ReactIcon = () => (
  <svg width="16" height="16" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1">
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    <circle r="2" fill="currentColor"/>
  </svg>
);

const VueIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 17.5L2 3h5.5L12 10.5 16.5 3H22L12 17.5z" fill="currentColor"/>
  </svg>
);

const AngularIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5L22 5.5 12 2zm0 2.5l5 12.5h-2l-1.3-3H10.3l-1.3 3H7l5-12.5zm0 2.5l-2.2 5.5h4.4L12 7z" fill="currentColor"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobility', label: 'Mobility' },
    { id: 'fullstack', label: 'Full stack' },
    { id: 'ecommerce', label: 'E-Commerce & CMS' },
    { id: 'blockchain', label: 'Block Chain' },
    { id: 'devops', label: 'DevOps & ML' }
  ];

  const tabData = {
    frontend: {
      icon: <DesktopIcon />,
      title: 'Frontend',
      description: 'Crafting visually stunning and responsive interfaces that bring ideas to life. We ensure seamless user experiences across all devices.',
      techs: [
        { name: 'HTML/CSS', icon: <CodeTagIcon /> },
        { name: 'React JS', icon: <ReactIcon /> },
        { name: 'Angular JS', icon: <AngularIcon /> },
        { name: 'Vue JS', icon: <VueIcon /> }
      ]
    },
    backend: {
      icon: <ServerIcon />,
      title: 'Backend',
      description: 'Building robust, scalable, and secure server-side architectures to power your complex business logic and data processing needs.',
      techs: [
        { name: 'Node JS', icon: <CodeTagIcon /> },
        { name: 'Python', icon: <CodeTagIcon /> },
        { name: 'Java', icon: <CodeTagIcon /> },
        { name: 'Go', icon: <CodeTagIcon /> }
      ]
    },
    mobility: {
      icon: <SmartphoneIcon />,
      title: 'Mobility',
      description: 'Developing high-performance, native and cross-platform mobile applications that provide native experiences on both iOS and Android.',
      techs: [
        { name: 'Flutter', icon: <CodeTagIcon /> },
        { name: 'React Native', icon: <ReactIcon /> },
        { name: 'Swift', icon: <CodeTagIcon /> },
        { name: 'Kotlin', icon: <CodeTagIcon /> }
      ]
    },
    fullstack: {
      icon: <LayersIcon />,
      title: 'Full stack',
      description: 'Delivering end-to-end solutions that cover everything from user interfaces to server deployment and database management.',
      techs: [
        { name: 'MERN', icon: <ReactIcon /> },
        { name: 'MEAN', icon: <AngularIcon /> },
        { name: 'Django', icon: <CodeTagIcon /> },
        { name: 'Spring Boot', icon: <CodeTagIcon /> }
      ]
    },
    ecommerce: {
      icon: <ShoppingCartIcon />,
      title: 'E-Commerce & CMS',
      description: 'Creating powerful, conversion-optimized online stores and content management systems tailored to your business needs.',
      techs: [
        { name: 'Shopify', icon: <CodeTagIcon /> },
        { name: 'WordPress', icon: <CodeTagIcon /> },
        { name: 'Magento', icon: <CodeTagIcon /> },
        { name: 'WooCommerce', icon: <CodeTagIcon /> }
      ]
    },
    blockchain: {
      icon: <LinkIcon />,
      title: 'Block Chain',
      description: 'Implementing secure, decentralized ledger technologies and smart contracts to revolutionize your data integrity and transactions.',
      techs: [
        { name: 'Ethereum', icon: <CodeTagIcon /> },
        { name: 'Solidity', icon: <CodeTagIcon /> },
        { name: 'Web3.js', icon: <CodeTagIcon /> },
        { name: 'Hyperledger', icon: <CodeTagIcon /> }
      ]
    },
    devops: {
      icon: <ServerIcon />,
      title: 'DevOps & ML',
      description: 'Streamlining your development pipeline with continuous integration and deploying intelligent machine learning models.',
      techs: [
        { name: 'AWS', icon: <CodeTagIcon /> },
        { name: 'Docker', icon: <CodeTagIcon /> },
        { name: 'Kubernetes', icon: <CodeTagIcon /> },
        { name: 'TensorFlow', icon: <CodeTagIcon /> }
      ]
    }
  };

  const currentData = tabData[activeTab];

  return (
    <section className="techSection">
       <div className="techBackground"></div>

       <div className="techContainer">
         <div className="techHeader">
           <span className="techBadge">Technologies</span>
           <h2 className="techTitle">Technologies we use</h2>
           <p className="techSubtitle">
             Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly
           </p>
         </div>

         <div className="techTabsWrapper">
           <div className="techTabsMenu">
             {tabs.map(tab => (
               <button 
                 key={tab.id}
                 className={`techTabBtn ${activeTab === tab.id ? 'activeTechTab' : ''}`}
                 onClick={() => setActiveTab(tab.id)}
               >
                 {tab.label}
               </button>
             ))}
           </div>
         </div>

         <div className="techContentBoxWrapper">
           <div className="techContentBox" key={activeTab}>
             <div className="techContentHeader">
               <span className="techContentIcon">{currentData.icon}</span>
               <h3 className="techContentTitle">{currentData.title}</h3>
             </div>
             <p className="techContentDesc">{currentData.description}</p>
             
             <div className="techList">
               {currentData.techs.map((tech, idx) => (
                 <div key={idx} className="techItemBadge">
                   <span className="techItemIcon">{tech.icon}</span>
                   <span className="techItemName">{tech.name}</span>
                 </div>
               ))}
             </div>
           </div>
         </div>

         <div className="techAction">
           <button className="techPrimaryBtn">
             Request a Callback <ArrowRightIcon />
           </button>
         </div>
       </div>
    </section>
  );
};

export default Technologies;
