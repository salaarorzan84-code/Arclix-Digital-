import { Link } from "react-router-dom";

function LandingPages() {
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
              SERVICE 04 / LANDING PAGES
            </div>

            <h1>
              Landing pages built
              <br />
              <span>to turn visitors into leads.</span>
            </h1>

            <p>
              I create focused landing pages with clear messaging,
              strong calls to action and responsive layouts designed
              to help businesses turn website visitors into potential
              customers.
            </p>

          </div>


          {/* SKILLS */}
          <div className="service-skills">

            <div className="section-label">
              MY SKILLS
            </div>

            <div className="skills-grid">

              {/* 01 */}
              <div className="skill-item">
                <span>01</span>

                <h3>Conversion-Focused Design</h3>

                <p>
                  Landing page layouts designed around clear messaging,
                  user attention and strong conversion opportunities.
                </p>
              </div>


              {/* 02 */}
              <div className="skill-item">
                <span>02</span>

                <h3>Clear Call To Action</h3>

                <p>
                  Strong and visible calls to action that guide visitors
                  toward contacting your business or taking the next step.
                </p>
              </div>


              {/* 03 */}
              <div className="skill-item">
                <span>03</span>

                <h3>Lead Generation</h3>

                <p>
                  Landing pages structured to support inquiries, forms,
                  bookings and potential customer leads.
                </p>
              </div>


              {/* 04 */}
              <div className="skill-item">
                <span>04</span>

                <h3>Responsive Development</h3>

                <p>
                  Fast and responsive landing pages designed to work
                  smoothly across desktop, tablet and mobile devices.
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
              <span>CTA Optimization</span>
              <span>Lead Generation</span>
            </div>

          </div>


          {/* CTA */}
          <div className="service-detail-cta">

            <div>
              <span className="section-label">
                HAVE A CAMPAIGN IN MIND?
              </span>

              <h2>
                Let's build a page
                <br />
                <span>that converts.</span>
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

export default LandingPages;