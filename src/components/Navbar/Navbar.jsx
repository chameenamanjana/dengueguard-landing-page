import "./navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Check if theme preference is saved
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

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
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
