import { Link } from "react-router-dom";

function WebDesign() {
  return (
    <main>
      <section className="service-detail-section">
        <div className="container">

          {/* BACK LINK */}
          <Link to="/services" className="service-back">
            ← Back to Services
          </Link>

          {/* HEADER */}
          <div className="service-detail-header">

            <div className="section-label">
              SERVICE 01 / WEB DESIGN
            </div>

            <h1>
              Websites designed
              <br />
              <span>to make an impact.</span>
            </h1>

            <p>
              I create clean, modern and responsive website designs that
              help businesses build credibility, communicate clearly and
              create a strong first impression online.
            </p>

          </div>


          {/* SKILLS */}
          <div className="service-skills">

            <div className="section-label">
              MY SKILLS
            </div>

            <div className="skills-grid">

              <div className="skill-item">
                <span>01</span>
                <h3>Modern UI Design</h3>
                <p>
                  Clean and professional interfaces designed around your
                  brand and audience.
                </p>
              </div>

              <div className="skill-item">
                <span>02</span>
                <h3>Responsive Design</h3>
                <p>
                  Layouts designed to work smoothly across desktop,
                  tablet and mobile devices.
                </p>
              </div>

              <div className="skill-item">
                <span>03</span>
                <h3>Visual Hierarchy</h3>
                <p>
                  Clear structure that helps visitors understand your
                  business and take action.
                </p>
              </div>

              <div className="skill-item">
                <span>04</span>
                <h3>Business Websites</h3>
                <p>
                  Professional websites created for businesses,
                  services and personal brands.
                </p>
              </div>

            </div>

          </div>


          {/* TOOLS */}
          <div className="service-tools">

            <div className="section-label">
              TOOLS & TECHNOLOGIES
            </div>

            <div className="tools-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Vite</span>
              <span>Responsive Design</span>
            </div>

          </div>


          {/* CTA */}
          <div className="service-detail-cta">

            <div>
              <span className="section-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's build something
                <br />
                <span>great together.</span>
              </h2>
            </div>

            <Link to="/contact">
              Start a Project ↗
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}

export default WebDesign;