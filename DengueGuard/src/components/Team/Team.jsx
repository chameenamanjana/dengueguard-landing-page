import "./team.css";
import tempIcon from "../../assets/symptomreport.svg";

function Team() {

  const teamMembers = [
    {name:"Emika Sandina", role:"Team Leader/ Full Stack Developer",imgLink:""},
    {name:"Dineli Ekanayake", role:"Member",imgLink:""},
    {name:"Senuthmi Thimansa", role:"Member",imgLink:""},
    {name:"Chameen Amanjana", role:"Member",imgLink:""},
    {name:"Thinura Uthsara", role:"Member",imgLink:""},
    {name:"Udith Gamage", role:"Member",imgLink:""}
  ]
  return (
    <>
      <div className="container">
        <h1 className="team-heading">Team</h1>
        <div className="team" id="team">
          {teamMembers.map((member, index)=>(
            <div className="team-member" key={index}>
              <div className="member-img">
                <img src={tempIcon}/>
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
