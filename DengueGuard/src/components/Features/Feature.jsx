import siteReportIcon from "../../assets/sitereport.svg";
import symptomIcon from "../../assets/symptomreport.svg";
import heatmapIcon from "../../assets/heatmap.svg";
import educationIcon from "../../assets/education.svg";
import chatbotIcon from "../../assets/chatbot.svg";
import announcementPlaceholder from "../../assets/announcements.svg";
import './features.css'

function Feature() {
  return (
    <div className="container">
        <h1 className="main-heading">Features</h1>
      <div className="features" id='features'>
        
        {/* Card 1: Breeding Sites */}
        <div className="feature">
          <div className="icon-wrapper">
            <img src={siteReportIcon} alt="Report Breeding Sites" className="feature-icon" />
          </div>
          <h3>Report Breeding Sites</h3>
          <p>Identify and report breeding sites to help prevent mosquito breeding in your area.</p>
        </div>

        {/* Card 2: Suspected Cases */}
        <div className="feature">
          <div className="icon-wrapper">
            <img src={symptomIcon} alt="Report Suspected Cases" className="feature-icon" />
          </div>
          <h3>Report Dengue Cases</h3>
          <p>Notify health authorities about potential dengue symptoms for immediate medical attention.</p>
        </div>

        {/* Card 3: HeatMap */}
        <div className="feature">
          <div className="icon-wrapper">
            <img src={heatmapIcon} alt="Risk HeatMap" className="feature-icon" />
          </div>
          <h3>Risk HeatMap</h3>
          <p>View real-time high-risk zones and track active dengue outbreaks in your neighborhood.</p>
        </div>

        {/* Card 4: Education */}
        <div className="feature">
          <div className="icon-wrapper">
            <img src={educationIcon} alt="Education and Tips" className="feature-icon" />
          </div>
          <h3>Education and Tips</h3>
          <p>Learn how to protect your family with verified safety guides and prevention tips.</p>
        </div>

        {/* Card 5: Announcements */}
        <div className="feature">
          <div className="icon-wrapper">
            <img src={announcementPlaceholder} alt="Announcements" className="feature-icon" />
          </div>
          <h3>Announcements</h3>
          <p>Stay updated with the latest news, cleanup drives, and alerts from local health officials.</p>
        </div>

        {/* Card 6: ChatBot */}
        <div className="feature">
          <div className="icon-wrapper">
            <img src={chatbotIcon} alt="ChatBot Assistant" className="feature-icon" />
          </div>
          <h3>ChatBot Assistant</h3>
          <p>Get instant answers to your questions about symptoms and safety measures.</p>
        </div>

      </div>
    </div>
  );
}

export default Feature;