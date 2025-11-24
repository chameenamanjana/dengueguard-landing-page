import "./team.css";
import tempIcon from "../../assets/symptomreport.svg";

function Team() {
  return (
    <>
      <div className="container">
        <h1 className="team-heading">Team</h1>
        <div className="team" id="team">
          <div className="team-member">
            <div className="member-img">
              <img src={tempIcon} />
            </div>

            <div className="member-text">
              <h2>Emika Sandina</h2>
              <p>Team Leader / Full Stack Developer</p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-img">
              <img src={tempIcon} />
            </div>

            <div className="member-text">
              <h2>Dineli Ekanayake</h2>
              <p>Member</p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-img">
              <img src={tempIcon} />
            </div>

            <div className="member-text">
              <h2>Thinura Uthsara</h2>
              <p>Member</p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-img">
              <img src={tempIcon} />
            </div>

            <div className="member-text">
              <h2>Chameen Amanjana</h2>
              <p>Member</p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-img">
              <img src={tempIcon} />
            </div>

            <div className="member-text">
              <h2>Senuthmi Thimansa</h2>
              <p>Member</p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-img">
              <img src={tempIcon} />
            </div>

            <div className="member-text">
              <h2>Udith Induwara</h2>
              <p>Member</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
