import "./team.css";
import tempIcon from "../../assets/symptomreport.svg";
import chameen from "../../assets/chameen-img.jpg";
import senuthmi from "../../assets/senthmi-img.jpg";
import thinura from "../../assets/thinura-img.jpg";
import dineli from "../../assets/dineli-img.jpg";
import emika from "../../assets/emika-img.jpg";

function Team() {
  const teamMembers = [
    {
      name: "Emika Sandina",
      role: "Team Leader/ Full Stack Developer",
      imgLink: emika,
    },
    { name: "Dineli Ekanayake", role: "Full Stack Developer", imgLink: dineli },
    {
      name: "Senuthmi Thimansa",
      role: "Full Stack Developer",
      imgLink: senuthmi,
    },
    {
      name: "Chameen Amanjana",
      role: "ML Engineer",
      imgLink: chameen,
    },
    { name: "Thinura Uthsara", role: "ML Engineer", imgLink: thinura },
    { name: "Udith Gamage", role: "ML Engineer", imgLink: "" },
  ];
  return (
    <>
      <div className="container">
        <h1 className="team-heading">Team</h1>
        <div className="team" id="team">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-img">
                <img src={member.imgLink} />
              </div>

              <div className="member-text">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
