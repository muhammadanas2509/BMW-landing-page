import React, { useState } from "react";
import "./Navbar.css";
import Video from "../../assets/id-00-teaser-hd.mp4";
import "../../index.css"
import { VscSearch } from "react-icons/vsc";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="main">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <nav className="navbar">
          <div className="navbar-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
              alt="Logo"
              className="logo"
            />
            <span className="line"></span>
            <span className="navbarr-title">
              Sheer <span> Driving </span> <strong> Pleasure </strong>
            </span>
          </div>
          <button
            className="hamburger-button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
          <ul className={`navbar-links ${isMenuOpen ? "show-menu" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#circular-world">Circular World</a>
            </li>
            <li>
              <a href="#digital-journey">Digital Journey</a>
            </li>
            <li>
              <a href="#electric-future">Electric Future</a>
            </li>
            <li>
              <a href="#freude">Freude</a>
            </li>
            <li>
              <a href="#models">Models</a>
            </li>
            <li>
              <div className="navbar-search">
                <button><VscSearch /></button>
              </div>
            </li>
          </ul>
        </nav>

        <div className="nav-text">
          <h2>BMW iDrive</h2>
          <h1>
            An Evolution of Control and
            <br /> Intelligent Connectivity
          </h1>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
