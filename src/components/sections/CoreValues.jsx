import "./CoreValues.css";

import innovation from "../../assets/innovation.png";
import quality from "../../assets/quality.png";
import commitment from "../../assets/commitment.png";
import collaboration from "../../assets/collaboration.png";
import customerfocus from "../../assets/customerfocus.png";
import security from "../../assets/security.png";

function CoreValues() {
  return (
    <section className="coresection">
      <div className="corewrapper">

        <div className="corebadge">
          Our Core Values
        </div>

        <h2 className="coretitle">
          Product Creation Journey.
        </h2>

        <p className="coresubtitle">
          Our product development process
        </p>

        {/* Stats */}

        <div className="statsrow">

          <div className="statcard">
            <h3>50+</h3>
            <span>Projects</span>
          </div>

          <div className="statcard">
            <h3>41+</h3>
            <span>Happy Clients</span>
          </div>

          <div className="statcard">
            <h3>06+</h3>
            <span>Years Experience</span>
          </div>

        </div>

        {/* Grid */}

        <div className="coregrid">

          {/* Commitment */}

          <div className="corecard commitmentcard">

            <div className="commitmentcontent">

              <h3>Our Commitment</h3>

              <p>
                Constantly evolving and creating
                new solutions.
              </p>

              <div className="smallbadges">
                <span>Projects</span>
                <span>Projects</span>
              </div>

            </div>

            <img src={commitment} alt="commitment" />

          </div>

          {/* Innovation */}

          <div className="corecard innovationcard">

            <h3>Innovation</h3>

            <p>
              Constantly evolving and creating
              new solutions.
            </p>

            <img src={innovation} alt="innovation" />

          </div>

          {/* Quality */}

          <div className="corecard qualitycard">

            <h3>Quality</h3>

            <p>
              Constantly evolving and creating
              new solutions.
            </p>

            <img src={quality} alt="quality" />

          </div>

          {/* Customer */}

          <div className="corecard customercard">

            <div className="customercontent">

              <h3>Customer Focus</h3>

              <p>
                Constantly evolving and creating
                new solutions.
              </p>

              <div className="smallbadges">
                <span>Projects</span>
                <span>Projects</span>
              </div>

            </div>

            <img src={customerfocus} alt="customer" />

          </div>

          {/* Collaboration */}

          <div className="corecard collaborationcard">

            <h3>Collaboration</h3>

            <p>
              Constantly evolving and creating
              new solutions.
            </p>

            <img src={collaboration} alt="collaboration" />

          </div>

          {/* Security */}

          <div className="corecard securitycard">

            <h3>Security</h3>

            <p>
              Constantly evolving and creating
              new solutions.
            </p>

            <img src={security} alt="security" />

          </div>

        </div>

        <div className="corebtnwrap">

          <button className="corebtn">
            Request a Callback →
          </button>

        </div>

      </div>
    </section>
  );
}

export default CoreValues;