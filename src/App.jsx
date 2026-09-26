import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME */}
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

        {/* MAIN PAGES */}
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

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

      </Routes>
    </>
  );
}

export default App;