import "./about.css";
import mosq2 from "../../assets/mosq2.jpg"

function About() {
  return (
    <>
      <div className="container">
        <div className="about">
          
          
          <div className="about-text">
            <h2 className="main-title">What is DengueGuard?</h2>
            <br></br>

            <p>
              Dengue fever is considered as a significantly growing health
              challenge in Sri Lanka. The current reactive approach taken to
              mitigate dengue disease leads to delayed detection and response
              which allows the disease to spread rapidly.
            </p>
            <br></br>
            <p>
              DengueGuard is an AI powered and community driven web platform
              designed to transform dengue mitigation from a reactive to a
              proactive approach.
            </p>

          </div>

          <div className="about-img">
            <img src={mosq2}/>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default About;
