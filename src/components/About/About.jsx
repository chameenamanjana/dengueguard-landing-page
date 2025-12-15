import "./about.css";
import mosq2 from "../../assets/mosq2.jpg";

function About() {
  return (
    <>
      <div className="container" id="about">
        <div className="about-main">
          <h2 className="main-title">What is DengueGuard?</h2>
          <p>
            DengueGuard is an AI powered and community driven web platform
            designed to transform dengue mitigation from a reactive to a
            proactive approach.
          </p>
        </div>

        {/* Grid of Boxes */}
        <div className="about-grid">
          <div className="about-box">
            <h2>Introduction to DengueGuard</h2>
            <p>
              DengueGuard leverages cutting-edge technology to provide real-time
              insights and foster community collaboration in the fight against
              dengue.
            </p>
          </div>

          <div className="about-box">
            <h2>How DengueGuard Works?</h2>
            <p>
              By analyzing environmental data and user reports, DengueGuard
              predicts potential dengue hotspots and offers actionable
              recommendations to mitigate risks.
            </p>
          </div>

          <div className="about-box">
            <h2>Community Impact</h2>
            <p>
              Our platform connects individuals, healthcare providers, and local
              authorities to create a unified front against dengue outbreaks.
            </p>
          </div>

          <div className="about-box">
            <h2>Why Choose DengueGuard?</h2>
            <p>
              With its user-friendly interface and AI-driven features,
              DengueGuard empowers everyone to take proactive measures to
              safeguard their communities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
