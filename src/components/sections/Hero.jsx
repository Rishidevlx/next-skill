import './Hero.css';

import triangle from "../../assets/triangle.svg";
// import triangle2 from "../../assets/object2.svg";

function Hero() {
  return (

    <section className="hero-section">

      

      <img src={triangle} alt="" className="triangle triangle-left" />
      <img src={triangle} alt="" className="triangle triangle-right" />

      <div className="container">

        <div className="hero-content">

          <div className="hero-badge">
            📣 Digital marketing
          </div>

          <h1>
            Boost Up Your Career through
            Enlightening Education Program
          </h1>

          <p>
            Join Up at NextskillTechnologies for Well-organized
            Offline Training Program with Assured Placement
            Guarantee.
          </p>

          <div className="hero-btns">

            <button className="primary-btn">
              Request a Callback →
            </button>

            <button className="secondary-btn">
              Enquiry now
            </button>

          </div>

          <div className="trusted-box">

            <div className="users">

              <img
                src="https://i.pravatar.cc/40?img=1"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=2"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=3"
                alt=""
              />

              <img
                src="https://i.pravatar.cc/40?img=4"
                alt=""
              />

            </div>

            <span>Trusted by 500+ clients</span>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;