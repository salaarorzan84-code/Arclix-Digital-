import { useState } from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import arvionLogo from "../assets/arvion-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* =========================
            LOGO
        ========================== */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <div className="logo-mark">
            <img
              src={arvionLogo}
              alt="ARVION Web Studio"
            />
          </div>

          <div className="logo-text">
            ARVION <span>WEB STUDIO</span>
          </div>
        </Link>


        {/* =========================
            NAVIGATION
        ========================== */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/work" onClick={closeMenu}>
            Work
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Let's Talk
          </Link>

        </nav>


        {/* =========================
            SOCIAL MEDIA
        ========================== */}
        <div className="nav-socials">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61592742513131"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>


          {/* Instagram */}
          <a
            href="https://www.instagram.com/arvionwebstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>


          {/* TikTok */}
          <a
            href="https://tiktok.com/@arvion.web.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

        </div>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;