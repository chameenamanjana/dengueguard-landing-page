import siteReportIcon from "../../assets/sitereport.svg";
import symptomIcon from "../../assets/symptomreport.svg";
import heatmapIcon from "../../assets/heatmap.svg";
import educationIcon from "../../assets/education.svg";
import chatbotIcon from "../../assets/chatbot.svg";
import announcementPlaceholder from "../../assets/announcements.svg";
import './features.css'

function Feature() {

  const features = [
    {name:"Report Breeding Sites", description:"Identify and report breeding sites to help prevent mosquito breeding in your area.",icon:siteReportIcon},
    {name:"Report Dengue Cases",description:"Notify health authorities about potential dengue symptoms for immediate action.",icon:symptomIcon},
    {name:"Risk HeatMap",description:"View real-time high-risk zones and track active dengue outbreaks in your neighborhood.",icon:heatmapIcon},
    {name:"Education and Tips",description:"Learn how to protect your family with verified safety guides and prevention tips.",icon:educationIcon},
    {name:"Announcements",description:"Stay updated with the latest news, cleanup drives, and alerts from local health officials.",icon:announcementPlaceholder},
    {name:"ChatBot Assistant",description:"Get instant answers to your questions about symptoms and safety measures.",icon:chatbotIcon}
  ]
  return (
    <div className="container">
        <h1 className="features-heading">Features</h1>
      <div className="features" id='features'>
        {features.map((feature, index)=>(
          <div className="feature" key={index}>
            <div className="icon-wrapper">
              <img src={feature.icon}/>
            </div>

            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;

