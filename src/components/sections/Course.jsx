import React from 'react';
import './Course.css';

import designImg from '../../assets/course/Design.png';
import developImg from '../../assets/course/develop.png';
import marketImg from '../../assets/course/market.png';

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.52 2 2 0 0 1 3.6 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const CodeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const DesignIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>;
const SearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const MegaphoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>;
const ImageIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
const PenIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>;
const HeadCodeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="17 8 19 10 17 12"></polyline><polyline points="22 8 20 10 22 12"></polyline></svg>;

const Course = () => {
  return (
    <section className="courseSection">
      <div className="courseContainer">
        
        <div className="courseHeader">
          <span className="courseBadge">Explore courses</span>
          <h2 className="courseTitle">Designed to transform you into a highly skilled Software Professional</h2>
        </div>

        <div className="courseCards">
          
          {/* Design Card */}
          <div className="courseCard">
            <div className="courseCardImgWrapper">
              <div className="courseImgHeaderLeft">
                <div className="courseImgTitle">
                  <span>Design</span>
                  <span>course</span>
                </div>
                <div className="courseImgIcon">
                  <PenIcon />
                </div>
              </div>
              <div className="courseImgHeaderRight">
                <img src={designImg} alt="Design Course" className="courseCardImg" />
              </div>
            </div>
            <div className="courseCardContent">
              <h3 className="courseCardTitle">Design</h3>
              <p className="courseCardDesc">design fundamentals, typography, illustration, branding, and user experience design.</p>
              
              <ul className="courseList">
                <li><DesignIcon /> <span>UI/UX Design</span></li>
                <li><ImageIcon /> <span>Graphic Design</span></li>
                <li><PenIcon /> <span>Branding</span></li>
              </ul>
              
              <div className="courseActions">
                <button className="courseBtnPrimary">
                  Request to call back <PhoneIcon />
                </button>
                <button className="courseBtnSecondary">
                  View more
                </button>
              </div>
            </div>
          </div>

          {/* Development Card */}
          <div className="courseCard">
            <div className="courseCardImgWrapper">
              <div className="courseImgHeaderLeft">
                <div className="courseImgTitle">
                  <span>Developme</span>
                  <span>course</span>
                </div>
                <div className="courseImgIcon">
                  <HeadCodeIcon />
                </div>
              </div>
              <div className="courseImgHeaderRight">
                <img src={developImg} alt="Development Course" className="courseCardImg" />
              </div>
            </div>
            <div className="courseCardContent">
              <h3 className="courseCardTitle">Development</h3>
              <p className="courseCardDesc">help you learn the skills and knowledge needed to work in web development, design, and other related fields</p>
              
              <ul className="courseList">
                <li><CodeIcon /> <span>Python Full Stack</span></li>
                <li><CodeIcon /> <span>PHP Full Stack</span></li>
                <li><CodeIcon /> <span>Javascript Full Stack</span></li>
              </ul>
              
              <div className="courseActions">
                <button className="courseBtnPrimary">
                  Request to call back <PhoneIcon />
                </button>
                <button className="courseBtnSecondary">
                  View more
                </button>
              </div>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="courseCard">
            <div className="courseCardImgWrapper">
              <div className="courseImgHeaderLeft">
                <div className="courseImgTitle">
                  <span>Digital</span>
                  <span>marketing</span>
                </div>
                <div className="courseImgIcon">
                  <MegaphoneIcon />
                </div>
              </div>
              <div className="courseImgHeaderRight">
                <img src={marketImg} alt="Digital Marketing Course" className="courseCardImg" />
              </div>
            </div>
            <div className="courseCardContent">
              <h3 className="courseCardTitle">Digital Marketing</h3>
              <p className="courseCardDesc">The use of the internet to promote brands and connect with potential customers. marketing</p>
              
              <ul className="courseList">
                <li><SearchIcon /> <span>SEO</span></li>
                <li><ImageIcon /> <span>Social Media Marketing</span></li>
                <li><MegaphoneIcon /> <span>Performance Marketing</span></li>
              </ul>
              
              <div className="courseActions">
                <button className="courseBtnPrimary">
                  Request to call back <PhoneIcon />
                </button>
                <button className="courseBtnSecondary">
                  View more
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Course;
