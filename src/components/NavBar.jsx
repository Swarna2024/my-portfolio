import { useState } from "react";
import "../assets/css/NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Swarna <span className="logo-initial">N</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
      </div>

      {/* Links */}
      <ul className={`navbar-links ${open ? "active" : ""}`}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
