import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div >
          <br></br>
          <h1 className="nav-icon"><span>Dengue</span>Guard</h1>
        </div>

        <div className="navlinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
