import { Link } from "react-router-dom";

function WebDevelopment() {
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
              SERVICE 02 / WEB DEVELOPMENT
            </div>

            <h1>
              Websites built
              <br />
              <span>for performance.</span>
            </h1>

            <p>
              I build fast, responsive and reliable websites using modern
              web technologies, with a focus on performance, usability and
              a smooth experience across desktop and mobile devices.
            </p>

          </div>


          {/* SKILLS */}
          <div className="service-skills">

            <div className="section-label">
              MY SKILLS
            </div>

            <div className="skills-grid">

              {/* SKILL 01 */}
              <div className="skill-item">
                <span>01</span>

                <h3>Frontend Development</h3>

                <p>
                  Modern and interactive website interfaces built with
                  clean, structured and maintainable code.
                </p>
              </div>


              {/* SKILL 02 */}
              <div className="skill-item">
                <span>02</span>

                <h3>React Development</h3>

                <p>
                  Component-based React websites built for flexibility,
                  performance and scalable digital experiences.
                </p>
              </div>


              {/* SKILL 03 */}
              <div className="skill-item">
                <span>03</span>

                <h3>Responsive Websites</h3>

                <p>
                  Websites optimized for desktop, tablet and mobile
                  screens with a consistent user experience.
                </p>
              </div>


              {/* SKILL 04 */}
              <div className="skill-item">
                <span>04</span>

                <h3>Performance Optimization</h3>

                <p>
                  Clean and efficient development focused on fast loading
                  times and a smooth browsing experience.
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
              <span>Git</span>
              <span>GitHub</span>
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
                <span>powerful together.</span>
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

export default WebDevelopment;