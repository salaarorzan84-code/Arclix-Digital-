import { Link } from "react-router-dom";

function Work() {
  return (
    <main>
      <section className="work-section">
        <div className="container">

          {/* SECTION HEADING */}
          <div className="work-heading">
            <div className="section-label">
              SELECTED PROJECTS
            </div>

            <div className="work-heading-row">
              <h2 className="premium-work-title">
                Websites that
                <br />
                <span>make businesses stand out.</span>
              </h2>

              <p>
                A selection of modern websites I have designed and developed
                for businesses, with a focus on strong visuals, responsive
                design and a professional online presence.
              </p>
            </div>
          </div>


          <div className="work-grid">

            {/* PROJECT 1 — PRIME MOVE UAE */}
            <article className="project-card project-large">

              <div className="project-visual visual-one">
                <img
                  src="/images/project-1.jpg"
                  alt="Prime Move UAE website"
                  className="project-image"
                />

                <div className="visual-content">
                  <div className="visual-logo">
                    
                  </div>

                  <div className="visual-line"></div>
                  <div className="visual-circle"></div>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span className="project-category">
                    BUSINESS WEBSITE / WEB DEVELOPMENT
                  </span>

                  <h3>Prime Move UAE</h3>
                </div>

                <a
                  href="https://prime-move-uae-5va2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Website ↗
                </a>
              </div>
            </article>


            {/* PROJECT 2 — ARCLIX DIGITAL */}
            <article className="project-card">

              <div className="project-visual visual-two">
                <img
                  src="/images/project-2.jpg"
                  alt="Arclix Digital website"
                  className="project-image"
                />

                <div className="dashboard-card">
                  <div className="dashboard-top">
                    <span>WEB DEVELOPMENT</span>
                    <span>100%</span>
                  </div>

                  <div className="chart">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span className="project-category">
                    PORTFOLIO / WEB DESIGN
                  </span>

                  <h3>Arclix Digital</h3>
                </div>

                <Link to="/">
                  View Website ↗
                </Link>
              </div>
            </article>


            {/* PROJECT 3 — D2D WASTE REMOVAL */}
            <article className="project-card">

              <div className="project-visual visual-three">
                <img
                  src="/images/project-3.jpg"
                  alt="D2D Waste Removal website"
                  className="project-image"
                />

                <div className="ecommerce-window">
                  <span>D2D WASTE REMOVAL</span>

                  <strong>
                    Clean Space.
                    <br />
                    Hassle-Free Service.
                  </strong>

                  <a
                    href="https://dubai-junk-removal-lhlg.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW LIVE WEBSITE ↗
                  </a>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span className="project-category">
                    BUSINESS WEBSITE / WEB DESIGN
                  </span>

                  <h3>D2D Waste Removal</h3>
                </div>

                <a
                  href="https://dubai-junk-removal-lhlg.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Website ↗
                </a>
              </div>
            </article>

          </div>


          {/* CTA */}
          <div className="work-footer">
            <span>HAVE A PROJECT IN MIND?</span>

            <Link to="/contact">
              Let's Talk <span>↗</span>
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Work;