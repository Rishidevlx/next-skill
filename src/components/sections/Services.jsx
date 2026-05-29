import "./Services.css";
import serviceimg from "../../assets/serviceimg.png";
import { useState } from "react";

function Services() {

  const servicedata = {
    Design: {
      title: "UI/UX Design",
      description:
        "Our skilled graphic designers craft compelling visuals that elevate your brand identity and leave a lasting impression.",
      skills: [
        "User Interface",
        "Web Designing",
        "User Experience",
        "User Research",
        "Interaction Design",
        "Wireframing & Prototyping"
      ]
    },

    Development: {
      title: "Web Development",
      description:
        "Build scalable and modern web applications with cutting edge frontend and backend technologies.",
      skills: [
        "React JS",
        "JavaScript",
        "Node JS",
        "MongoDB",
        "REST API",
        "Responsive Design"
      ]
    },

    Marketing: {
      title: "Digital Marketing",
      description:
        "Grow your online presence and attract more customers through effective marketing strategies.",
      skills: [
        "SEO",
        "Google Ads",
        "Meta Ads",
        "Content Marketing",
        "Email Marketing",
        "Analytics"
      ]
    }
  };

  const [activeTab, setActiveTab] = useState("Design");

  const current = servicedata[activeTab];

  return (
    <section className="servicessection">

      <div className="servicebadge">
        Our services
      </div>

      <h2 className="servicetitle">
        Uncover the Strategies That Drive Success
      </h2>

      <div className="servicetabs">

        <button
          className={activeTab === "Design" ? "activebtn" : ""}
          onClick={() => setActiveTab("Design")}
        >
          Design
        </button>

        <button
          className={activeTab === "Development" ? "activebtn" : ""}
          onClick={() => setActiveTab("Development")}
        >
          Development
        </button>

        <button
          className={activeTab === "Marketing" ? "activebtn" : ""}
          onClick={() => setActiveTab("Marketing")}
        >
        Marketing
        </button>

      </div>

      <div className="servicecard">

        <div className="serviceleft">

          <h3>{current.title}</h3>

          <p>{current.description}</p>

          <div className="serviceskills">

            {current.skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}

          </div>

          <a href="/">
            Learn more →
          </a>

        </div>

        <div className="serviceright">
          <img src={serviceimg} alt="service" />
        </div>

      </div>

      <button className="servicebtn">
        Request a Callback →
      </button>

    </section>
  );
}

export default Services;