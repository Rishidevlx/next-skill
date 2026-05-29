import React from 'react';
import './Success.css';
import avatar1 from '../../assets/clients/client 1.png';
import avatar2 from '../../assets/clients/client 2.png';
import avatar3 from '../../assets/clients/client 3.png';

const Success = () => {
  const stories = [1, 2, 3, 4, 5, 6];

  return (
    <section className="successSection">
      <div className="successGlow"></div>
      <div className="successGridBackground"></div>

      <div className="successContainer">
        
        <div className="successHeaderTop">
          <span className="successBadge">Student success stories</span>
          <h3 className="successSubtitle">See How Our Students Made Their</h3>
        </div>

        <div className="successHeaderMain">
          <div className="successHeaderLeft">
            <h2 className="successTitle">150+Students Got placed.🥳</h2>
          </div>
          <div className="successHeaderRight">
            <div className="successAvatars">
              <img src={avatar1} alt="Avatar" className="avatarCircle" />
              <img src={avatar2} alt="Avatar" className="avatarCircle" />
              <img src={avatar3} alt="Avatar" className="avatarCircle" />
              <img src={avatar1} alt="Avatar" className="avatarCircle" />
            </div>
            <p className="successAvatarsText">Success stories 150+ got placed</p>
          </div>
        </div>

        <div className="successCards">
          {stories.map((i) => (
            <div key={i} className="storyCard">
              <p className="storyText">
                "Meet Ellen Daly, a dedicated student who transformed her academic journey through hard work and perseverance. After struggling in her first year, she sought help from her professors and joined study groups. By her final year, she graduated with honors and landed her dream job at a leading tech company. Her story inspires others to believe in their potential and seek support when needed."
              </p>
              <div className="storyFooter">
                <div className="storyAuthor">
                  <h4 className="storyName">Ellen Daly</h4>
                  <p className="storyRole">UI UX Designer, Sundown Lines</p>
                </div>
                <img src={avatar2} alt="Ellen Daly" className="storyAuthorImg" />
              </div>
            </div>
          ))}
        </div>

        <div className="successAction">
          <button className="successBtn">Request a Callback &rarr;</button>
        </div>

      </div>
    </section>
  );
};

export default Success;
