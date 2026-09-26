import { Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

import WebDesign from "./pages/WebDesign";
import WebDevelopment from "./pages/WebDevelopment";
import PaidAdvertising from "./pages/PaidAdvertising";
import LandingPages from "./pages/LandingPages";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return (
    <>
      <Navbar />

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/923107127757?text=Hello%20ARVION%20WEB%20STUDIO,%20I%20would%20like%20to%20discuss%20a%20website%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Work />
              <About />
              <Contact />
            </>
          }
        />


        {/* ================= MAIN PAGES ================= */}

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/work"
          element={<Work />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* ================= SERVICES ================= */}

        {/* SERVICE 01 */}
        <Route
          path="/services/web-design"
          element={<WebDesign />}
        />

        {/* SERVICE 02 */}
        <Route
          path="/services/web-development"
          element={<WebDevelopment />}
        />

        {/* SERVICE 03 */}
        <Route
          path="/services/paid-advertising"
          element={<PaidAdvertising />}
        />

        {/* SERVICE 04 */}
        <Route
          path="/services/landing-pages"
          element={<LandingPages />}
        />


        {/* ================= LEGAL PAGES ================= */}

        {/* PRIVACY POLICY */}
        <Route
          path="/privacy"
          element={<PrivacyPolicy />}
        />

        {/* TERMS & CONDITIONS */}
        <Route
          path="/terms"
          element={<Terms />}
        />

      </Routes>


      {/* ================= FOOTER ================= */}

      <footer className="site-footer">

        <div className="footer-inner">

          {/* BRAND */}
          <div className="footer-brand">

            <h3>ARVION</h3>

            <span>WEB STUDIO</span>

            <p>
              Modern websites, digital experiences and
              performance-focused solutions for growing businesses.
            </p>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h4>QUICK LINKS</h4>

            <a href="/">Home</a>

            <a href="/services">
              Services
            </a>

            <a href="/work">
              Work
            </a>

            <a href="/about">
              About
            </a>

            <a href="/contact">
              Contact
            </a>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <h4>SERVICES</h4>

            <a href="/services/web-design">
              Web Design
            </a>

            <a href="/services/web-development">
              Web Development
            </a>

            <a href="/services/paid-advertising">
              Paid Advertising
            </a>

            <a href="/services/landing-pages">
              Landing Pages
            </a>

          </div>


          {/* CONTACT */}
          <div className="footer-column">

            <h4>GET IN TOUCH</h4>

            <a href="mailto:arvionwebstudio@gmail.com">
              arvionwebstudio@gmail.com
            </a>

            <a href="tel:+923107127757">
              0310 7127757
            </a>

            <a
              href="https://wa.me/923107127757"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>

            <p>
              Pakistan — Working Worldwide
            </p>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} ARVION WEB STUDIO.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="/privacy">
              Privacy Policy
            </a>

            <a href="/terms">
              Terms & Conditions
            </a>

          </div>

        </div>

      </footer>

    </>
  );
}

export default App;