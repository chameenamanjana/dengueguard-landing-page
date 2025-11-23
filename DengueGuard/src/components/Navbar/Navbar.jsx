import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-icon">
          <h1>DengueGuard</h1>
        </div>

        <div className="navlinks">
          <a href="#home">Home</a>
          <a href="#About">About</a>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="contact-us">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
